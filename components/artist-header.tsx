import { Button } from "@/components/ui/button"
import Image from "next/image"

export function ArtistHeader() {
  return (
    <div className="rounded-2xl bg-gradient-to-r from-[#5a3a28] to-[#4a2c1a] p-8 md:p-12">
      <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
        <div className="relative h-40 w-40 overflow-hidden rounded-full ring-4 ring-white/10">
          <Image src="/artistic-animal-portrait.jpg" alt="Artist profile" fill className="object-cover" />
        </div>

        <div className="flex-1 space-y-4">
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-white/70">Artist</p>
            <h1 className="mt-2 text-4xl font-bold text-white md:text-5xl lg:text-6xl">Humanitarians AI</h1>
            <p className="mt-2 text-sm text-white/60">6 followers</p>
          </div>

          <Button
            size="lg"
            className="bg-white text-[#4a2c1a] hover:bg-white/90 hover:scale-105 transition-transform font-semibold"
          >
            Open in Spotify
          </Button>
        </div>
      </div>
    </div>
  )
}
