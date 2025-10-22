"use client"

import { useState } from "react"
import Image from "next/image"
import { Play } from "lucide-react"

const tracks = [
  { id: 5, title: "Rain, Rain", artist: "Rain, Rain", duration: "3:12", image: "/city-street-rain.png" },
  { id: 6, title: "Fa Mulan", artist: "Fa Mulan", duration: "3:14", image: "/mulan.jpg" },
  {
    id: 7,
    title: "The Tin Man's Heartbeat",
    artist: "The Tin Man's Heartbeat",
    duration: "4:13",
    image: "/tin-man.jpg",
  },
  {
    id: 8,
    title: "Pinocchio's Pocket Words",
    artist: "Pinocchio's Pocket Words",
    duration: "2:44",
    image: "/pinocchio.jpg",
  },
  {
    id: 9,
    title: "Painted with Love",
    artist: "Painted with Love",
    duration: "2:28",
    image: "/painted-love.jpg",
  },
  {
    id: 10,
    title: "Thank You in Hindi Is",
    artist: "Thank You in Hindi Is",
    duration: "3:13",
    image: "/thank-you-card.png",
  },
]

export function TopTracks() {
  const [hoveredTrack, setHoveredTrack] = useState<number | null>(null)

  return (
    <div className="rounded-xl bg-[#3a2215] p-6">
      <h2 className="mb-4 text-2xl font-bold text-white">Top Tracks</h2>

      <div className="space-y-2">
        {tracks.map((track) => (
          <div
            key={track.id}
            className="group flex items-center gap-4 rounded-lg p-3 transition-colors hover:bg-white/5"
            onMouseEnter={() => setHoveredTrack(track.id)}
            onMouseLeave={() => setHoveredTrack(null)}
          >
            <span className="w-6 text-center text-sm text-white/60">
              {hoveredTrack === track.id ? <Play className="h-4 w-4 fill-white text-white" /> : track.id}
            </span>

            <div className="relative h-12 w-12 overflow-hidden rounded">
              <Image src={track.image || "/placeholder.svg"} alt={track.title} fill className="object-cover" />
            </div>

            <div className="flex-1 min-w-0">
              <p className="truncate font-medium text-white">{track.title}</p>
              <p className="truncate text-sm text-white/60">{track.artist}</p>
            </div>

            <span className="text-sm text-white/60">{track.duration}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
