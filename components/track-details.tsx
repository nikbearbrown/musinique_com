import { Button } from "@/components/ui/button"
import { Play, MoreHorizontal } from "lucide-react"
import Image from "next/image"

export function TrackDetails() {
  return (
    <div className="rounded-xl bg-[#3a2215] p-6">
      <h2 className="mb-4 text-xl font-bold text-white">Track Details</h2>

      <div className="space-y-6">
        <div className="relative aspect-square overflow-hidden rounded-lg">
          <Image src="/artistic-album-cover-with-animal.jpg" alt="Album cover" fill className="object-cover" />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-xs text-white/70">Preview</p>
            <h3 className="mt-1 text-lg font-bold text-white">Four Small Feet Through</h3>
          </div>

          <button className="absolute bottom-4 right-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/90 transition-transform hover:scale-105 hover:bg-white">
            <Play className="h-6 w-6 fill-[#4a2c1a] text-[#4a2c1a]" />
          </button>

          <button className="absolute top-4 right-4 text-white/80 hover:text-white">
            <MoreHorizontal className="h-6 w-6" />
          </button>
        </div>

        <div className="space-y-2 text-sm">
          <div>
            <span className="text-white/60">Title: </span>
            <span className="text-white">Four Small Feet Through Oz</span>
          </div>
          <div>
            <span className="text-white/60">Album: </span>
            <span className="text-white">Four Small Feet Through Oz</span>
          </div>
          <div>
            <span className="text-white/60">Release: </span>
            <span className="text-white">2025-05-31</span>
          </div>
        </div>

        <Button className="w-full bg-[#5a3a28] text-white hover:bg-[#6a4a38]" size="lg">
          Open Full Track in Spotify
        </Button>

        <div className="rounded-lg bg-[#2a1810] p-4">
          <iframe
            src="https://open.spotify.com/embed/track/3n3Ppam7vgaVa1iaRUc9Lp?utm_source=generator"
            width="100%"
            height="152"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded"
          />
        </div>
      </div>
    </div>
  )
}
