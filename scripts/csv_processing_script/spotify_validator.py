import pandas as pd
from playwright.sync_api import sync_playwright
import time
import re
import random

def human_like_mouse_movement(page):
    """Simulate human-like mouse movements"""
    try:
        # Random mouse movements
        for _ in range(random.randint(1, 3)):
            x = random.randint(100, 800)
            y = random.randint(100, 600)
            page.mouse.move(x, y)
            time.sleep(random.uniform(0.1, 0.3))
    except:
        pass

def random_scroll(page):
    """Simulate human-like scrolling behavior"""
    try:
        scroll_amount = random.randint(100, 500)
        page.evaluate(f"window.scrollBy(0, {scroll_amount})")
        time.sleep(random.uniform(0.3, 0.8))
        # Sometimes scroll back up a bit
        if random.random() > 0.6:
            page.evaluate(f"window.scrollBy(0, -{random.randint(50, 150)})")
            time.sleep(random.uniform(0.2, 0.5))
    except:
        pass

def check_spotify_url(page, url):
    """
    Check if a Spotify URL is a valid playlist or profile link.
    Returns tuple: (is_playlist_status, is_profile_status)
    """
    is_playlist = ""
    is_profile = ""
    
    if not url or pd.isna(url) or url.strip() == "":
        return ("", "")
    
    url = url.strip()
    
    # Check URL format
    playlist_match = re.search(r'spotify\.com/playlist/([a-zA-Z0-9]+)', url)
    user_match = re.search(r'spotify\.com/user/([a-zA-Z0-9]+)', url)
    
    try:
        # Random delay before navigation
        time.sleep(random.uniform(1.5, 4.0))
        
        page.goto(url, timeout=15000, wait_until="domcontentloaded")
        
        # Simulate human behavior - random wait time
        time.sleep(random.uniform(2.0, 4.5))
        
        # Random mouse movements
        human_like_mouse_movement(page)
        
        # Random scrolling
        if random.random() > 0.5:
            random_scroll(page)
        
        # Get the current URL after any redirects
        current_url = page.url
        
        # Check if we got redirected to an error page or home page
        if "not-found" in current_url.lower() or current_url == "https://open.spotify.com/":
            if playlist_match:
                is_playlist = "invalid playlist"
            elif user_match:
                is_profile = "invalid profile link"
            else:
                # Try to determine from original URL structure
                if "/playlist/" in url:
                    is_playlist = "invalid playlist"
                elif "/user/" in url:
                    is_profile = "invalid profile link"
            return (is_playlist, is_profile)
        
        # Check page title and content
        title = page.title().lower()
        
        # Check for playlist
        if "/playlist/" in current_url:
            # Check if the page loaded successfully
            try:
                # Look for playlist indicators
                page.wait_for_selector('[data-testid="playlist-page"]', timeout=3000)
                is_playlist = "valid playlist"
            except:
                # Try alternative check
                if "playlist" in title or page.locator('h1').count() > 0:
                    is_playlist = "valid playlist"
                else:
                    is_playlist = "invalid playlist"
        
        # Check for user/profile
        elif "/user/" in current_url:
            # Check if the page loaded successfully
            try:
                # Look for profile indicators
                page.wait_for_selector('[data-testid="user-profile"]', timeout=3000)
                is_profile = "valid profile link"
            except:
                # Try alternative check
                if page.locator('h1').count() > 0:
                    is_profile = "valid profile link"
                else:
                    is_profile = "invalid profile link"
        
        # Fallback: check based on original URL if nothing matched
        else:
            if playlist_match:
                is_playlist = "invalid playlist"
            elif user_match:
                is_profile = "invalid profile link"
    
    except Exception as e:
        print(f"Error checking {url}: {str(e)}")
        # Determine type based on URL structure
        if "/playlist/" in url:
            is_playlist = "invalid playlist"
        elif "/user/" in url:
            is_profile = "invalid profile link"
    
    return (is_playlist, is_profile)

def process_excel_file(input_file, output_file):
    """
    Process Excel file with Spotify URLs and add validation columns.
    """
    # Read the Excel file
    print(f"Reading file: {input_file}")
    df = pd.read_csv(input_file)
    
    # Initialize new columns
    df['is_playlist'] = ""
    df['is_profile'] = ""
    
    print(f"Found {len(df)} rows to process")
    
    with sync_playwright() as p:
        # Launch browser with realistic settings
        browser = p.chromium.launch(
            headless=False,  # Set to False to appear more human
            args=[
                '--disable-blink-features=AutomationControlled',
                '--disable-dev-shm-usage',
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-web-security',
                '--disable-features=IsolateOrigins,site-per-process'
            ]
        )
        
        # Create context with realistic browser fingerprint
        context = browser.new_context(
            viewport={'width': 1920, 'height': 1080},
            user_agent='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            locale='en-US',
            timezone_id='America/New_York',
            permissions=['geolocation'],
            geolocation={'longitude': -74.0060, 'latitude': 40.7128},
            color_scheme='dark',
        )
        
        # Add extra headers to look more human
        context.set_extra_http_headers({
            'Accept-Language': 'en-US,en;q=0.9',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            'DNT': '1',
            'Connection': 'keep-alive',
            'Upgrade-Insecure-Requests': '1'
        })
        
        page = context.new_page()
        
        # Mask automation detection
        page.add_init_script("""
            Object.defineProperty(navigator, 'webdriver', {
                get: () => undefined
            });
            
            window.navigator.chrome = {
                runtime: {}
            };
            
            Object.defineProperty(navigator, 'plugins', {
                get: () => [1, 2, 3, 4, 5]
            });
            
            Object.defineProperty(navigator, 'languages', {
                get: () => ['en-US', 'en']
            });
        """)
        
        # Process each row
        for idx, row in df.iterrows():
            spotify_url = row.get('spotify_url', '')
            
            if spotify_url and not pd.isna(spotify_url) and spotify_url.strip():
                print(f"Processing row {idx + 1}/{len(df)}: {spotify_url}")
                
                is_playlist, is_profile = check_spotify_url(page, spotify_url)
                
                df.at[idx, 'is_playlist'] = is_playlist
                df.at[idx, 'is_profile'] = is_profile
                
                print(f"  Result: is_playlist={is_playlist}, is_profile={is_profile}")
                
                # Random delay between requests to simulate human behavior
                delay = random.uniform(3.0, 8.0)
                print(f"  Waiting {delay:.1f} seconds before next request...")
                time.sleep(delay)
                
                # Occasionally take longer breaks (every 5-10 requests)
                if (idx + 1) % random.randint(5, 10) == 0:
                    break_time = random.uniform(15.0, 30.0)
                    print(f"  Taking a longer break: {break_time:.1f} seconds...")
                    time.sleep(break_time)
            else:
                print(f"Skipping row {idx + 1}/{len(df)}: No valid URL")
        
        browser.close()
    
    # Save the results
    print(f"\nSaving results to: {output_file}")
    df.to_csv(output_file, index=False)
    print("Done!")

if __name__ == "__main__":
    # Configure your file paths here
    INPUT_FILE = "spotify_data.csv"  # Your input file
    OUTPUT_FILE = "spotify_data_validated.csv"  # Output file with validation
    
    process_excel_file(INPUT_FILE, OUTPUT_FILE)
