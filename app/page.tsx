import { ArtistHeader } from "@/components/artist-header"
import { TopTracks } from "@/components/top-tracks"
import { TrackDetails } from "@/components/track-details"
import { AlbumsGrid } from "@/components/albums-grid"

export default function SpotifyArtistPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#4a2c1a] via-[#3a2215] to-[#1a1410]">
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-8">
        <ArtistHeader />

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_400px]">
          <div className="space-y-6">
            <TopTracks />
            <AlbumsGrid />
          </div>

          <div className="lg:sticky lg:top-8 lg:self-start">
            <TrackDetails />
          </div>
        </div>
      </div>
    </div>
  )
}
