# CLAUDE.md — Musinique

> **Musinique** — Tools for indie musicians, poets, and songwriters. AI-assisted music creation, indie analytics, and playlist intelligence.

## Who this site is for
Musinique is a platform for independent musicians, poets, and songwriters. It provides tools, blog content, books, notes, dev documentation, and a Substack newsletter integration — all aimed at helping indie artists make better music with (and without) AI.

Primary audiences:
- Indie musicians and songwriters looking for AI-assisted tools
- Poets and lyricists exploring creative workflows
- Music industry professionals interested in playlist analytics
- General public interested in music, AI, and creative technology

Brand voice: Creative, direct, artist-first. Informed by music industry experience, accessible to independent creators. "Great music is humans plus AI. Not AI alone."

## Tech stack
- Next.js 15 (App Router)
- Deployed on Vercel
- Tailwind CSS + @tailwindcss/typography (for prose article rendering)
- TypeScript 5
- next-themes for dark/light mode
- Vercel Blob (@vercel/blob) for image uploads
- Neon (serverless PostgreSQL via @neondatabase/serverless)
- Tiptap (ProseMirror-based rich text editor for blog)
- D3.js (data visualizations embedded in blog posts)
- adm-zip (server-side Substack ZIP parsing)
- Recharts (React charting library)
- Vercel Analytics

## Author
**Nik Bear Brown**, Musinique LLC / Bear Brown & Company.

## Site structure
1. `/` — Home (hero video, platform intro, feature sections)
2. `/about` — About Musinique
3. `/blog` — Blog feed (published posts newest first, search)
4. `/blog/[slug]` — Individual blog post with prose content
5. `/books` — Books browser (searchable card grid, filesystem-driven)
6. `/books/[slug]` — Book detail page with metadata and TOC
7. `/books/[slug]/[...chapter]` — Chapter iframe viewer
8. `/tools` — Tools directory (card grid, hybrid: filesystem artifacts + DB link tools)
9. `/tools/[slug]` — Artifact tool embed page (full-viewport iframe)
10. `/dev` — Dev docs browser (searchable card grid, filesystem-driven)
11. `/dev/[...slug]` — Full-viewport iframe of a dev doc
12. `/notes` — Notes browser (searchable card grid, grouped by folder)
13. `/notes/[...slug]` — Full-viewport iframe of a note
14. `/videos` — Public video browser with search, tag filtering, pagination
15. `/substack` — Newsletter hub (card grid of all sections)
16. `/substack/[section]` — Section page with articles list
17. `/substack/[section]/[slug]` — Full article page
18. `/playlists` — Spotify playlists page
19. `/privacy` — Privacy Policy
20. `/privacy/cookies` — Cookie Policy (dedicated page)
21. `/terms-of-service` — Terms of Service
22. `/contact` — Contact page (Coming Soon)
23. `/admin/login` — Admin login page
24. `/admin/dashboard` — Admin dashboard (protected)
25. `/admin/dashboard/blog` — Blog post management
26. `/admin/dashboard/blog/new` — New post editor
27. `/admin/dashboard/blog/[id]/edit` — Edit existing post
28. `/admin/dashboard/tools` — Tools management
29. `/admin/dashboard/substack` — Substack section management
30. `/admin/dashboard/notes` — Notes management
31. `/admin/dashboard/dev` — Dev docs management
32. `/admin/dashboard/videos` — Videos management

### Custom feature pages (unique to Musinique)
- `/aengus` — Custom GPT for dance video prompts
- `/brain-music` — Brain music feature
- `/llm-dance` — LLM dance generation
- `/lullabize` — Lullaby creation tool
- `/lyrical-literacy` — Lyrical analysis tool
- `/musinique` — Musinique platform page
- `/oz-songs` — Wizard of Oz songs
- `/over-the-river-and-through-the-wood` — Seasonal content
- `/p-codes` — Custom codes/coupons

## Persistent layout (every page)

### Header (`/components/Header/Header.tsx`)
- Logo: Musinique logo (theme-aware: black/white variants)
- Nav: About, Blog, Books, Dev, Notes, Tools
- Social buttons: Apple Music, Spotify, Substack, YouTube
- Dark/light mode toggle (ThemeToggle)
- Mobile hamburger menu (lg breakpoint)
- Sticky, z-50, backdrop-blur

### Footer (`/components/Footer/Footer.tsx`)
- Company info with logo
- Platform links
- Social/connect links
- Legal links (Privacy, Cookies, Terms)
- Spotify embed section above footer in root layout

### Root layout (`/app/layout.tsx`)
- ThemeProvider: defaultTheme="light", enableSystem
- Inter font
- Header + main + Spotify section + Footer
- Vercel Analytics + Google Analytics (optional)

## Tools system

### Tool types
- **artifact** — HTML file in `public/artifacts/` (filesystem-driven, auto-discovered)
- **link** — External URL tool (database-driven, managed via admin)

### Adding a new artifact tool
1. Build HTML file with `<title>`, `<meta name="description">`, `<meta name="keywords">`
2. Drop into `public/artifacts/`
3. Push to main — appears on `/tools` automatically

### Adding a new link tool
Use admin UI at `/admin/dashboard/tools`

### Database (`tools` table)
```sql
CREATE TABLE IF NOT EXISTS tools (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  tool_type TEXT DEFAULT 'link',
  claude_url TEXT,
  chatgpt_url TEXT,
  artifact_id TEXT,
  artifact_embed_code TEXT,
  tags TEXT[],
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

## Blog system

### Database (`blog_posts` table)
```sql
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  subtitle TEXT,
  slug TEXT NOT NULL UNIQUE,
  byline TEXT,
  cover_image TEXT,
  content TEXT NOT NULL,
  excerpt TEXT,
  published BOOLEAN DEFAULT false,
  published_at TIMESTAMPTZ,
  tags TEXT[] DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

### Blog Editor (`/components/BlogEditor/BlogEditor.tsx`)
Tiptap rich text editor with: title, subtitle, cover image upload (Vercel Blob), byline, tags, auto-slug, WYSIWYG toolbar (bold, italic, underline, headings, lists, blockquote, code, links, images, YouTube, D3 viz), preview toggle, publish/unpublish/save draft.

### Blog viz system
- `lib/viz/registry.ts` — maps `data-viz` names to lazy-loaded render functions
- `components/BlogVizHydrator/BlogVizHydrator.tsx` — hydrates `[data-viz]` elements in blog HTML
- To add a viz: create `lib/viz/<name>.ts`, add entry to `registry.ts`

### Blog import/export
- Import from Substack ZIP or blog export ZIP (as drafts)
- Export as ZIP with posts.json + .html files
- Tag assignment during import

## Books system
Filesystem-driven. Each book folder under `public/books/` contains `book.json` + chapter HTML files. Scanned by `lib/book-meta.ts`.

## Notes system
Filesystem-driven. Grouped by subfolder under `public/notes/`. Scanned by `lib/html-meta.ts` → `scanHtmlSubdirs()`.

## Dev Docs system
Filesystem-driven. HTML files under `public/dev/`. Scanned by `lib/html-meta.ts` → `scanHtmlDir()` / `scanHtmlSubdirs()`.

## Videos system
Database-driven (`videos` table). Admin CRUD at `/admin/dashboard/videos`. Public browser at `/videos` with search, tag filtering, pagination, pinned videos.

## Substack system
Database-driven (sections + articles tables). ZIP import via admin. Public pages at `/substack/*`.

## SEO
- `app/sitemap.ts` — Dynamic sitemap: static pages + blog, tools, substack routes from DB
- `app/robots.ts` — Allows all, disallows `/admin/` and `/api/`, points to `/sitemap.xml`

## Admin dashboard
- Protected by `middleware.ts` (HMAC-SHA256 session validation)
- Login at `/admin/login` validates against `ADMIN_PASSWORD` env var
- Session stored as `admin_session` httpOnly cookie (7-day expiry)
- Tabs: Overview, Blog, Tools, Substack, Notes, Dev, Videos

## Components

### Reusable content components
- `components/BlogCard/BlogCard.tsx` — Blog post card (cover image, date, title, subtitle, excerpt)
- `components/BlogEditor/BlogEditor.tsx` — Tiptap rich text editor
- `components/BlogVizHydrator/BlogVizHydrator.tsx` — D3 viz hydrator
- `components/Spotify/Spotify.tsx` — Spotify embed player
- `components/VideoThumbnail/VideoThumbnail.tsx` — Video thumbnail

### UI components (`/components/ui/`)
shadcn/ui components: button, primary-button, secondary-button, card, dialog, input, label, textarea, badge, plus others as needed.

## Key utilities (`/lib`)
- `utils.ts` — `cn()` (clsx + tailwind-merge), `getReadingTime()`
- `db.ts` — Lazy-initialized Neon PostgreSQL client (Proxy pattern)
- `admin-auth.ts` — `isAdmin()`, `generateSessionToken()`, `isValidSession()`
- `html-meta.ts` — `scanHtmlDir()`, `scanHtmlSubdirs()` (extract metadata from HTML files)
- `book-meta.ts` — `scanBooks()` (scan book directories for book.json)
- `substack-parser.ts` — `parseSubstackZip()` (server-side Substack ZIP parsing)
- `theme.ts` — Color palette constants (bb-1 through bb-8)
- `viz/registry.ts` — Viz name → lazy import map

## Environment variables
```
DATABASE_URL=                    # Neon PostgreSQL connection string
ADMIN_PASSWORD=                  # Password for /admin/login
NEXT_PUBLIC_SITE_URL=https://www.musinique.com  # Used in sitemap generation
BLOB_READ_WRITE_TOKEN=           # Vercel Blob token for image uploads
NEXT_PUBLIC_GA_ID=               # Google Analytics measurement ID (optional)
```

## Deployment
- Push to main → auto-deploys to Vercel
- Domain: musinique.com

## What NOT to do
- Do not use localStorage — use React state or sessionStorage
- Do not add analytics or tracking beyond what's already present
- Do not commit .env.local or credentials to git

## Database setup (one-time)
Run in Neon SQL Editor:
```sql
-- Blog posts
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  subtitle TEXT,
  slug TEXT NOT NULL UNIQUE,
  byline TEXT,
  cover_image TEXT,
  content TEXT NOT NULL,
  excerpt TEXT,
  published BOOLEAN DEFAULT false,
  published_at TIMESTAMPTZ,
  tags TEXT[] DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tools
CREATE TABLE IF NOT EXISTS tools (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  tool_type TEXT DEFAULT 'link',
  claude_url TEXT,
  chatgpt_url TEXT,
  artifact_id TEXT,
  artifact_embed_code TEXT,
  tags TEXT[],
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Videos
CREATE TABLE IF NOT EXISTS videos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  youtube_id TEXT NOT NULL,
  tags TEXT[] DEFAULT '{}',
  pinned BOOLEAN DEFAULT false,
  published BOOLEAN DEFAULT false,
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Substack sections
CREATE TABLE IF NOT EXISTS substack_sections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  description TEXT,
  substack_url TEXT NOT NULL,
  article_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Substack articles
CREATE TABLE IF NOT EXISTS substack_articles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  section_id UUID NOT NULL REFERENCES substack_sections(id) ON DELETE CASCADE,
  slug TEXT NOT NULL,
  title TEXT NOT NULL,
  subtitle TEXT,
  excerpt TEXT,
  content TEXT,
  original_url TEXT,
  published_at TIMESTAMPTZ,
  display_date TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(section_id, slug)
);

-- RLS policies
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE tools ENABLE ROW LEVEL SECURITY;
ALTER TABLE substack_sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE substack_articles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "public_read_blog" ON blog_posts FOR SELECT USING (published = true);
CREATE POLICY "service_role_blog" ON blog_posts FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "public_read_tools" ON tools FOR SELECT USING (true);
CREATE POLICY "service_role_tools" ON tools FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "public_read_sections" ON substack_sections FOR SELECT USING (true);
CREATE POLICY "service_role_sections" ON substack_sections FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "public_read_articles" ON substack_articles FOR SELECT USING (true);
CREATE POLICY "service_role_articles" ON substack_articles FOR ALL USING (true) WITH CHECK (true);
```
