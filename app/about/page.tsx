import type { Metadata } from "next"
import Link from "next/link"
import PrimaryButton from "@/components/ui/primary-button"
import SecondaryButton from "@/components/ui/secondary-button"

export const metadata: Metadata = {
  title: "About Us - Musinique ",
  description: "Learn about Musinique, a 501(c)(3) nonprofit organization dedicated to harnessing the power of artificial intelligence for social good",
}

export default function AboutPage() {
  return (
    <div className="container px-4 md:px-6 mx-auto py-12">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Musinique</h1>
        </div>

        {/* Main Content */}
        <div className="grid gap-12">
          {/* Our Mission */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <div className="prose prose-lg dark:prose-invert">
              <p>
                Musinique makes AI tools to promote Indie artists and Indie voices. Musinique also has a record label and publishing company to create and support independent thought and art. In particular, charging artists to get on playlists rather than adding them based on an honest reaction to their music is a major pain point for struggling artists. Our playlists search tool (coming soon) will easily allow indie artists to find playlists with integrity and avoid the exploitative "A&R" people.
              </p>
              <p>
                Musinique writes lots of protest songs in our belief that the power of music and compassion is a better path for change than hate. Our resident poet, Nik Bear Brown, also creates spoken word compositions and reads public domain poems (typically pre-1929). Musinique also produces language learning, music learning and reading enhancement songs for the 501 (c3) non-profit <Link href="https://www.humanitarians.ai/" className="font-bold underline">Humanitarians AI</Link>.</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}
