import PrimaryButton from "@/components/ui/primary-button"
import SecondaryButton from "@/components/ui/secondary-button"
import { Book, Code, Music, MessageSquare, Radio, Mic2, Flame, Users } from "lucide-react"
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
                  Musinique, LLC builds tools for indie musicians, poets, and songwriters to be more creative and
                  productive. Great music is Humans + AI — not just AI. We are also the Indie Analytics Engine
                  for artists to make data-driven decisions, including finding and ranking the integrity of playlists.
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

      {/* Who We Are Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">MUSINIQUE, LLC</h2>
              <div className="text-muted-foreground max-w-[800px] space-y-4 text-left">
                <p>
                  Music has always been the language of resistance, community, and wonder. Musinique exists at the
                  intersection of that ancient truth and the tools of tomorrow — building AI-powered technology that
                  amplifies the indie artist's voice without drowning out the human heart behind it.
                </p>
                <p>
                  We are a record label, a publishing company, a technology studio, and a home for independent
                  thought. We believe the industry's gatekeepers have held the keys long enough. Playlists built on
                  pay-to-play schemes, A&R culture that mistakes connections for talent, streaming algorithms that
                  reward conformity — we are building the tools to dismantle all of it, one honest song at a time.
                </p>
                <p>
                  Our resident poet and songwriter, Nik Bear Brown, writes protest songs rooted in the conviction
                  that compassion travels farther than contempt. Music changes minds not by shouting, but by making
                  people feel seen.
                </p>
                <p>
                  Musinique also produces language learning, music learning, and reading enhancement songs for the
                  501(c)(3) nonprofit{" "}
                  <Link href="https://www.humanitarians.ai/" className="text-blue-600 hover:underline">
                    Humanitarians AI
                  </Link>
                  , because we believe creativity and education are inseparable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Tools Section — NEW */}
      <section className="w-full py-12 md:py-24 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-[800px] mx-auto space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-center">THE TECHNOLOGY</h2>
            <p className="text-muted-foreground text-center">
              We don't believe AI replaces the artist. We believe AI removes the obstacles between an artist and their art.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="border p-6 rounded-lg bg-gray-50 dark:bg-gray-900 dark:border-gray-700">
                <Radio className="h-8 w-8 mb-3" />
                <h3 className="font-bold text-lg mb-2">Playlist Intelligence</h3>
                <p className="text-muted-foreground text-sm">
                  Our INDIE search engine applies a PageRank-style algorithm to online playlists — measuring follower
                  authenticity, curatorial integrity, and genre fit. We expose the pay-to-play playlists so indie
                  artists can stop wasting money on placements that don't move the needle.
                </p>
              </div>
              <div className="border p-6 rounded-lg bg-gray-50 dark:bg-gray-900 dark:border-gray-700">
                <Mic2 className="h-8 w-8 mb-3" />
                <h3 className="font-bold text-lg mb-2">AI-Assisted Songwriting</h3>
                <p className="text-muted-foreground text-sm">
                  Our songwriting tools help artists overcome the blank page — generating lyrical ideas, exploring
                  rhyme schemes, and developing themes — while keeping the human voice and creative instinct at
                  the center. The AI suggests; the artist decides.
                </p>
              </div>
              <div className="border p-6 rounded-lg bg-gray-50 dark:bg-gray-900 dark:border-gray-700">
                <Code className="h-8 w-8 mb-3" />
                <h3 className="font-bold text-lg mb-2">Production Automation</h3>
                <p className="text-muted-foreground text-sm">
                  From stem separation and vocal enhancement to mix feedback and mastering prep, we build tools
                  that handle the technical scaffolding — giving artists more hours to spend creating and fewer
                  hours wrestling with software.
                </p>
              </div>
              <div className="border p-6 rounded-lg bg-gray-50 dark:bg-gray-900 dark:border-gray-700">
                <Book className="h-8 w-8 mb-3" />
                <h3 className="font-bold text-lg mb-2">Analytics & Data Strategy</h3>
                <p className="text-muted-foreground text-sm">
                  We analyze streaming data, social engagement, and playlist performance to help independent artists
                  make informed decisions about releases, touring, and marketing — without needing a major label's
                  data team behind them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Protest & Activism Section — NEW */}
      <section className="w-full py-12 md:py-24 bg-gray-900 text-white dark:bg-black">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-[800px] mx-auto space-y-6 text-center">
            <Flame className="h-12 w-12 mx-auto opacity-80" />
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">MUSIC AS RESISTANCE</h2>
            <p className="text-gray-300 md:text-lg">
              From Woody Guthrie to Nina Simone, protest music has always told the truths that polite conversation
              refuses to speak. Musinique continues that tradition.
            </p>
            <p className="text-gray-300">
              Our protest songs don't traffic in rage for its own sake. We believe compassion is a more
              durable force than hatred — that a song which makes you feel someone else's humanity travels
              farther than one that simply confirms your anger. We write about inequality, accountability,
              displacement, and resilience. We write for the people the algorithm forgot.
            </p>
            <p className="text-gray-300">
              Resident poet Nik Bear Brown also creates spoken word compositions and performs public domain poems
              (typically pre-1929), keeping the radical literary tradition alive in a world that often mistakes
              novelty for meaning.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <PrimaryButton href="https://www.youtube.com/@Musinique">
                HEAR THE MUSIC
              </PrimaryButton>
            </div>
          </div>
        </div>
      </section>

      {/* Key Programs Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">OUR PROGRAMS</h2>
            <p className="text-muted-foreground max-w-[600px]">
              Each program is a different instrument in the same orchestra — distinct voices, one purpose.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* INDIE */}
            <div className="border p-8 rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <Book className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">INDIE</h3>
              <p className="text-muted-foreground mb-4">
                A search engine for independent artists that ranks music playlists using advanced analytics and AI
                to surface legitimate, merit-based placements. Think PageRank for playlist integrity — we validate
                authenticity and quality so artists can stop paying for exposure that doesn't exist.
              </p>
              <Link href="/indie" className="text-sm font-medium underline underline-offset-4 hover:text-foreground">
                Learn more
              </Link>
            </div>

            {/* Lyrical Literacy */}
            <div className="border p-8 rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <Music className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">LYRICAL LITERACY</h3>
              <p className="text-muted-foreground mb-4">
                Musinique serves as the creative and production engine behind this pioneering educational initiative.
                Led by resident poet Nik Bear Brown, we transform concepts in language acquisition, cognitive
                development, and emotional literacy into songs that lodge themselves in memory. Music is the
                oldest mnemonic device — we use it on purpose.
              </p>
              <Link href="https://www.humanitarians.ai/lyrical-literacy" className="text-sm font-medium underline underline-offset-4 hover:text-foreground">
                Learn more
              </Link>
            </div>

            {/* Musinique Records */}
            <div className="border p-8 rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <Code className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">MUSINIQUE RECORDS</h3>
              <p className="text-muted-foreground mb-4">
                An indie label and publishing house that signs, produces, and distributes artists who have
                something to say. We provide professional production, music publishing, and AI-assisted ideation
                tools — handling the technical infrastructure so artists can stay in the creative flow. No
                predatory contracts. No gatekeeping. Just music.
              </p>
              <Link href="/musinique-records" className="text-sm font-medium underline underline-offset-4 hover:text-foreground">
                Learn more
              </Link>
            </div>

            {/* Songwriting */}
            <div className="border p-8 rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <MessageSquare className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">SONGWRITING</h3>
              <p className="text-muted-foreground mb-4">
                Our resident poet writes for all Musinique artists — each with their own voice, genre, and world.
                From protest folk to spoken word to global fusion, our roster spans the full spectrum of
                independent expression.
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

      {/* Artist Roster Section — NEW */}
      <section className="w-full py-12 md:py-24 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-[800px] mx-auto text-center space-y-6">
            <Users className="h-12 w-12 mx-auto opacity-60" />
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">THE ROSTER</h2>
            <p className="text-muted-foreground md:text-lg">
              Every Musinique artist is a distinct voice with a distinct world. The common thread: independence,
              integrity, and something worth saying.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-8 text-sm">
              {[
                { name: "Nik Bear", href: "https://nikbear.musinique.com", desc: "Spoken word & protest poetry" },
                { name: "Parvati", href: "https://parvati.musinique.com", desc: "Global fusion & world music" },
                { name: "Mayfield King", href: "https://mayfield.musinique.com", desc: "Protest songs & folk" },
                { name: "Liam", href: "https://liam.musinique.com", desc: "Indie singer-songwriter" },
                { name: "Newton", href: "https://newton.musinique.com", desc: "Electronic & experimental" },
                { name: "Tuzi", href: "https://tuzi.musinique.com", desc: "Afrobeat & rhythmic soul" },
                { name: "Marley", href: "https://marley.musinique.com", desc: "Reggae & social justice" },
                { name: "Prarthana", href: "https://prarthana.musinique.com", desc: "Classical & devotional" },
                { name: "Dijit", href: "https://dijit.musinique.com", desc: "Hip-hop & spoken word" },
                { name: "Humanitarians", href: "https://humanitarians.musinique.com", desc: "Educational & community music" },
              ].map((artist) => (
                <Link
                  key={artist.name}
                  href={artist.href}
                  className="border rounded-lg p-4 flex flex-col items-center text-center hover:shadow-md transition-shadow bg-gray-50 dark:bg-gray-900 dark:border-gray-700"
                >
                  <span className="font-bold text-sm mb-1">{artist.name}</span>
                  <span className="text-muted-foreground text-xs">{artist.desc}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-gray-100 dark:bg-gray-900">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <div className="mb-4 text-sm font-medium">JOIN OUR MISSION</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-5xl mb-6">HELP US USE AI FOR THE GREATER GOOD</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl">
              Your support helps us develop ethical AI solutions that address real-world challenges in education,
              healthcare, nonprofits, and the arts. Join us in building a world where technology serves creativity,
              and music remains a tool of the people.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
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
