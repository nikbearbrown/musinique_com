import PrimaryButton from "@/components/ui/primary-button"
import SecondaryButton from "@/components/ui/secondary-button"
import { Book, Code, Music, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="w-full py-8 md:py-16 lg:py-20 xl:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12 xl:grid-cols-3">
            <div className="flex flex-col justify-center space-y-4 lg:col-span-1">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Humans + AI + Music
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Musinique, LLC builds tools for Indie musicians, poets and songwriters to be more creative and productive.
                  Great music is Humans + AI not just AI. We are also the Indie Analytics Engine for artists to make data
                  based decisions including finding and ranking the quality of playlists.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <PrimaryButton href="https://www.musinique.com/about">
                  About Us
                </PrimaryButton>
              </div>
            </div>
            <div className="flex items-center justify-center lg:col-span-2">
              <div className="relative w-full aspect-video">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-md"
                  src="https://www.youtube.com/embed/7aSfwv-ovcc?si=8AH5ZnJJ79gA3Lsu"
                  title="Musinique Introduction"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Programs Section - Updated to Musinique, LLC */}
      <section className="w-full py-12 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">MUSINIQUE, LLC</h2>
              <div className="text-muted-foreground max-w-[800px] space-y-4">
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
                  Musinique also produces language learning, music learning and reading enhancement songs for the 501 (c3) non-profit Humanitarians AI.
                  <Link href="https://www.humanitarians.ai/" className="ml-1 text-blue-600 hover:underline">
                    https://www.humanitarians.ai/
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {/* INDIE (formerly Fellows Program) */}
            <div className="border p-8 rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <Book className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">INDIE</h3>
              <p className="text-muted-foreground mb-4">
                Indie is a search engine for independent artists that helps rank music playlists using advanced analytics and AI to find legitimate playlists. Think of it as a PageRank algorithm that validates the legitimacy and quality of any online playlist.
              </p>
              <Link href="/indie" className="text-sm font-medium underline underline-offset-4 hover:text-foreground">
                Learn more
              </Link>
            </div>

            {/* Lyrical Literacy - Updated with enhanced description */}
            <div className="border p-8 rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <Music className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">LYRICAL LITERACY</h3>
              <p className="text-muted-foreground mb-4">
                Musinique serves as the creative engine behind this pioneering educational initiative, providing professional music production and engineering expertise. Led by resident poet Nik Bear Brown, Musinique transforms educational concepts into engaging musical experiences that enhance cognitive development, language acquisition, and emotional growth through the neurological benefits of music.
              </p>
              <Link href="https://www.humanitarians.ai/lyrical-literacy" className="text-sm font-medium underline underline-offset-4 hover:text-foreground">
                Learn more
              </Link>
            </div>

            {/* Musinique Records (formerly AI for Good) */}
            <div className="border p-8 rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <Code className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">MUSINIQUE RECORDS</h3>
              <p className="text-muted-foreground mb-4">
                Supports indie artists by producing their work and creating tools to make the ideation process quicker and better. Our tools help handle technical issues while allowing artists to be more creative.
              </p>
              <Link href="/musinique-records" className="text-sm font-medium underline underline-offset-4 hover:text-foreground">
                Learn more
              </Link>
            </div>

            {/* Songwriting (formerly Botspeak) */}
            <div className="border p-8 rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <MessageSquare className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">SONGWRITING</h3>
              <p className="text-muted-foreground mb-4">
                Our resident poet writes songs for artists including all of the Musinique artists.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
                <Link href="https://nikbear.musinique.com" className="text-xs underline hover:text-foreground">nikbear</Link>
                <Link href="https://parvati.musinique.com" className="text-xs underline hover:text-foreground">parvati</Link>
                <Link href="https://mayfield.musinique.com" className="text-xs underline hover:text-foreground">mayfield</Link>
                <Link href="https://liam.musinique.com" className="text-xs underline hover:text-foreground">liam</Link>
                <Link href="https://newton.musinique.com" className="text-xs underline hover:text-foreground">newton</Link>
                <Link href="https://tuzi.musinique.com" className="text-xs underline hover:text-foreground">tuzi</Link>
                <Link href="https://marley.musinique.com" className="text-xs underline hover:text-foreground">marley</Link>
                <Link href="https://prarthana.musinique.com" className="text-xs underline hover:text-foreground">prarthana</Link>
                <Link href="https://dijit.musinique.com" className="text-xs underline hover:text-foreground">dijit</Link>
                <Link href="https://humanitarians.musinique.com" className="text-xs underline hover:text-foreground">humanitarians</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section className="w-full py-12 md:py-24 bg-gray-100 dark:bg-gray-900">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <div className="mb-4 text-sm font-medium">JOIN OUR MISSION</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-5xl mb-6">HELP US USE AI FOR THE GREATER GOOD</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl">
              Your support helps us develop ethical AI solutions that address real-world challenges in education,
              healthcare, nonprofits, and the arts. Join us in our mission to ensure AI benefits everyone, especially
              underserved communities.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              {/* <PrimaryButton href="/donate">
                DONATE NOW
              </PrimaryButton>
              <SecondaryButton href="/contact">
                VOLUNTEER
              </SecondaryButton> */}
              <PrimaryButton href="https://www.youtube.com/@Musinique">
                YOUTUBE
              </PrimaryButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
