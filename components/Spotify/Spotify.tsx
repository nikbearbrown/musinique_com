"use client"

import { useState, useEffect } from "react"

interface SpotifyProps {
  embedUrl?: string;
  width?: string;
  height?: string;
  type?: "playlist" | "album" | "track" | "artist";
  id?: string;
  className?: string;
}

export default function Spotify({
  embedUrl,
  width = "100%",
  height = "352",
  type = "playlist",
  id = "52BiQjG11yLElAtRedVaQq",
  className = "",
}: SpotifyProps) {
  const [mounted, setMounted] = useState(false);
  
  // Avoid hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  // Construct the embed URL if not directly provided
  const finalEmbedUrl = embedUrl || `https://open.spotify.com/embed/${type}/${id}?utm_source=generator`;

  if (!mounted) {
    // Return a placeholder until component mounts
    return <div className={`w-full h-[${height}px] bg-muted animate-pulse rounded-xl ${className}`} />;
  }

  return (
    <div className={`w-full spotify-embed ${className}`}>
      <iframe
        data-testid="embed-iframe"
        style={{ borderRadius: "12px" }}
        src={finalEmbedUrl}
        width={width}
        height={height}
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  )
}