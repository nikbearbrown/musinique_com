import type { Metadata } from "next"
import Link from "next/link"
import PrimaryButton from "@/components/ui/primary-button"
import SecondaryButton from "@/components/ui/secondary-button"

export const metadata: Metadata = {
  title: "About Us - Musinique ",
  description: "Learn about Musinique, a company dedicated to building tools for Indie musicians, poets and songwriters to be more creative and productive",
}

export default function AboutPage() {
  return (
    <div className="container px-4 md:px-6 mx-auto py-12">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Musinique</h1>
        </div>

        {/* Video Section - Identical to "Humans + AI + Music" section */}
        <section className="w-full py-8 md:py-16 mb-16">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12 xl:grid-cols-3">
            <div className="flex flex-col justify-center space-y-6 lg:col-span-1">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Humans + AI + Music
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Musinique, LLC builds tools for Indie musicians, poets and songwriters to be more creative and productive.
                  Great music is Humans + AI not just AI. We are also the Indie Analytics Engine for artists to make data
                  based decisions including finding and ranking the quality of playlists.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center lg:col-span-2">
              <div className="relative w-full aspect-video">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-md"
                  src="https://www.youtube.com/embed/gLz17e3-UHg?si=lafh2kuxPoKW1RVk"
                  title="Musinique Introduction"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="grid gap-12">
          {/* Our Mission */}
          <section>
            <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
            <div className="prose prose-lg dark:prose-invert space-y-8">
              <p>
                Musinique makes AI tools to promote Indie artists and Indie voices. Musinique also has a record label and publishing company to create and support independent thought and art.
              </p>
              
              <p>
                In particular, charging artists to get on playlists rather than adding them based on an honest reaction to their music is a major pain point for struggling artists. Our playlists search tool (coming soon) will easily allow indie artists to find playlists with integrity and avoid the exploitative "A&R" people.
              </p>
              
              <p>
                Musinique writes lots of protest songs in our belief that the power of music and compassion is a better path for change than hate. Our resident poet, Nik Bear Brown, also creates spoken word compositions and reads public domain poems (typically pre-1929).
              </p>
              
              <p>
                Musinique also produces language learning, music learning and reading enhancement songs for the 501(c3) non-profit <Link href="https://www.humanitarians.ai/" className="font-bold underline">Humanitarians AI</Link>.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
