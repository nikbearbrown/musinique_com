import Image from "next/image"

const albums = [
  {
    title: "The Cat and the Cock",
    type: "Single",
    year: "2025",
    image: "/artistic-cat-and-rooster-illustration.jpg",
  },
  {
    title: "Song of Sixpence",
    type: "Single",
    year: "2025",
    image: "/artistic-blackbird-illustration.jpg",
  },
  {
    title: "I'm Mary, Quite Contrary",
    type: "Single",
    year: "2025",
    image: "/woman-in-garden-with-vegetables.jpg",
  },
  {
    title: "Curiouser and Curiouser",
    type: "Single",
    year: "2025",
    image: "/artistic-portrait-with-flowers.jpg",
  },
  {
    title: "Good Morning Merry Sunshine",
    type: "Single",
    year: "2025",
    image: "/artistic-figure-illustration.jpg",
  },
  {
    title: "Bo's Lullaby",
    type: "Single",
    year: "2025",
    image: "/artistic-sheep-sculpture.jpg",
  },
]

export function AlbumsGrid() {
  return (
    <div className="rounded-xl bg-[#3a2215] p-6">
      <h2 className="mb-6 text-2xl font-bold text-white">Albums & Singles</h2>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {albums.map((album, index) => (
          <div key={index} className="group cursor-pointer space-y-3 rounded-lg p-3 transition-colors hover:bg-white/5">
            <div className="relative aspect-square overflow-hidden rounded-lg bg-[#2a1810]">
              <Image
                src={album.image || "/placeholder.svg"}
                alt={album.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>

            <div>
              <h3 className="font-medium text-white line-clamp-1">{album.title}</h3>
              <p className="text-sm text-white/60">
                {album.type} • {album.year}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
