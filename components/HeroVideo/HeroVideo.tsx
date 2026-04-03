"use client"

import { useEffect, useState } from "react"

const FALLBACK_ID = "edxXeLcW8p0"
const FALLBACK_TITLE = "Musinique Introduction"

export default function HeroVideo() {
  const [video, setVideo] = useState<{ youtube_id: string; title: string } | null>(null)

  useEffect(() => {
    fetch("/api/videos/random")
      .then((r) => r.json())
      .then((data) => setVideo(data))
      .catch(() => setVideo({ youtube_id: FALLBACK_ID, title: FALLBACK_TITLE }))
  }, [])

  const youtubeId = video?.youtube_id ?? FALLBACK_ID
  const title = video?.title ?? FALLBACK_TITLE

  return (
    <div className="relative w-full aspect-video">
      {video ? (
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-md"
          src={`https://www.youtube.com/embed/${youtubeId}?si=dXLCFHHS_8DKmU72`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div className="absolute top-0 left-0 w-full h-full rounded-md bg-gray-200 dark:bg-gray-800 animate-pulse" />
      )}
    </div>
  )
}
