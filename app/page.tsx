import PrimaryButton from "@/components/ui/primary-button"
import SecondaryButton from "@/components/ui/secondary-button"
import { Book, Code, Music, MessageSquare, Radio, Mic2, Flame, Users } from "lucide-react"
import Link from "next/link"
import { sql } from "@/lib/db"

async function getRandomHeroVideo(): Promise<{ youtube_id: string; title: string } | null> {
  try {
    const rows = await sql`
      SELECT youtube_id, title FROM videos
      WHERE published = true
      ORDER BY RANDOM() LIMIT 1
    `
    return rows[0] ? { youtube_id: rows[0].youtube_id as string, title: rows[0].title as string } : null
  } catch {
    return null
  }
}

export const revalidate = 60

export default async function Home() {
  const heroVideo = await getRandomHeroVideo()
  return (
    <div className="flex flex-col w-full">

      {/* Hero Section */}
      <section className="w-full py-8 md:py-16 lg:py-20 xl:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12 xl:grid-cols-3">
            <div className="flex flex-col justify-center space-y-4 lg:col-span-1">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Great music is humans plus AI.<br />Not AI alone.
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Musinique builds tools for indie musicians, poets, and songwriters — not to replace the human
                  voice, but to remove every obstacle standing between the artist and the work. We are also
                  the Indie Analytics Engine that exposes pay-to-play playlists and helps independent artists
                  make decisions from data, not hope.
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
                  src={`https://www.youtube.com/embed/${heroVideo?.youtube_id ?? 'edxXeLcW8p0'}?si=dXLCFHHS_8DKmU72`}
                  title={heroVideo?.title ?? 'Musinique Introduction'}
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
                  Spotify knows your listening history. It doesn't know your father's voice. That difference
                  is everything Musinique is.
                </p>
                <p>
                  We are a record label, a publishing company, a technology studio, and a home for independent
                  thought. We point the same tools the platforms use against you — back at you, in your favor.
                  Playlists built on pay-to-play schemes. A&R culture that mistakes connections for talent.
                  Streaming algorithms that reward conformity. We build tools to expose all of it, one honest
                  song at a time.
                </p>
                <p>
                  Our resident poet and songwriter, Nik Bear Brown, writes protest songs rooted in a single
                  conviction: compassion travels farther than contempt. A song that makes you feel someone
                  else's humanity changes minds. Outrage alone doesn't.
                </p>
                <p>
                  Musinique also produces language learning, music learning, and reading enhancement songs for
                  the 501(c)(3) nonprofit{" "}
                  <Link href="https://www.humanitarians.ai/" className="text-blue-600 hover:underline">
                    Humanitarians AI
                  </Link>
                  , because creativity and education are not separate things.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Tools Section */}
      <section className="w-full py-12 md:py-24 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-[800px] mx-auto space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-center">THE TECHNOLOGY</h2>
            <p className="text-muted-foreground text-center">
              The tools are not the point. The intent is everything.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="border p-6 rounded-lg bg-gray-50 dark:bg-gray-900 dark:border-gray-700">
                <Radio className="h-8 w-8 mb-3" />
                <h3 className="font-bold text-lg mb-2">Playlist Intelligence</h3>
                <p className="text-muted-foreground text-sm">
                  Our INDIE search engine applies a PageRank-style algorithm to 25,000+ playlists — measuring
                  follower authenticity, curatorial integrity, and genre focus. Songs that drop off a playlist
                  in exactly 7 days reveal a pay-for-placement model. We publish the data so independent
                  artists stop paying for exposure that doesn't exist.
                </p>
              </div>
              <div className="border p-6 rounded-lg bg-gray-50 dark:bg-gray-900 dark:border-gray-700">
                <Mic2 className="h-8 w-8 mb-3" />
                <h3 className="font-bold text-lg mb-2">AI-Assisted Songwriting</h3>
                <p className="text-muted-foreground text-sm">
                  Our songwriting tools help artists past the blank page — generating lyrical ideas, exploring
                  rhyme schemes, developing themes. The AI suggests. The artist decides. The human voice stays
                  at the center. That's not a philosophy statement. It's the design constraint.
                </p>
              </div>
              <div className="border p-6 rounded-lg bg-gray-50 dark:bg-gray-900 dark:border-gray-700">
                <Code className="h-8 w-8 mb-3" />
                <h3 className="font-bold text-lg mb-2">Production Automation</h3>
                <p className="text-muted-foreground text-sm">
                  Stem separation, vocal enhancement, mix feedback, mastering prep. We handle the technical
                  scaffolding so artists spend more hours creating and fewer hours fighting software. The
                  production cost that once required $75,000 and a studio now requires $5 in API credits.
                  That collapse belongs to the artist.
                </p>
              </div>
              <div className="border p-6 rounded-lg bg-gray-50 dark:bg-gray-900 dark:border-gray-700">
                <Book className="h-8 w-8 mb-3" />
                <h3 className="font-bold text-lg mb-2">Analytics & Data Strategy</h3>
                <p className="text-muted-foreground text-sm">
                  Streaming data, social engagement, playlist performance — analyzed so independent artists
                  can make informed decisions about releases, touring, and marketing. One mid-tier venue show
                  generates what a million streams pays. The data confirms what artists already sense. We
                  give them the evidence to act on it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Protest & Activism Section */}
      <section className="w-full py-12 md:py-24 bg-gray-900 text-white dark:bg-black">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-[800px] mx-auto space-y-6 text-center">
            <Flame className="h-12 w-12 mx-auto opacity-80" />
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">MUSIC AS RESISTANCE</h2>
            <p className="text-gray-300 md:text-lg">
              From Woody Guthrie to Nina Simone, protest music has always told the truths that polite
              conversation refuses to speak. Musinique continues that tradition — without apology and
              without performance.
            </p>
            <p className="text-gray-300">
              Our protest songs don't traffic in rage for its own sake. Rage is easy. Compassion is harder
              and more durable. We write about inequality, accountability, displacement, and resilience —
              for the people the algorithm forgot, in language that makes you feel their humanity before
              it asks you to change your mind.
            </p>
            <p className="text-gray-300">
              Resident poet Nik Bear Brown also creates spoken word compositions and performs public domain
              poems — typically pre-1929 — keeping the radical literary tradition alive in a world that
              mistakes novelty for meaning. Six million views. The work speaks. We let it.
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
              Distinct voices. One purpose. The tools should belong to everyone who can use them well.
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
                Most playlist promotion services are black boxes. You pay money and you hope for streams.
                INDIE is the x-ray. A search engine that ranks playlists by curatorial integrity — using
                genre entropy analysis and churn detection to separate legitimate curators from bot farms.
                PageRank for playlist authenticity. The data indicts. We publish it.
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
                Research-grade educational music for children, engineered from fifty years of neuroscience —
                not intuition. The right tempo, the right rhythm, the right cultural specificity produce
                measurable changes in how children acquire language. Sesame Street proved this at $75,000
                per track. AI collapsed that cost to $5. Musinique makes that collapse available to every
                family, not just institutions with budgets.
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
                An indie label and publishing house for artists who have something to say. Professional
                production, music publishing, and AI-assisted ideation tools — we handle the technical
                infrastructure so artists stay in the creative flow. No predatory contracts. No gatekeeping.
                The industry held the keys long enough.
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
                Our resident poet writes for every Musinique artist — each with their own voice, genre, and
                world. Protest folk to spoken word to global fusion. The common thread across the roster:
                independence, integrity, and something worth saying.
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

      {/* Artist Roster Section */}
      <section className="w-full py-12 md:py-24 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-[800px] mx-auto text-center space-y-6">
            <Users className="h-12 w-12 mx-auto opacity-60" />
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">THE ROSTER</h2>
            <p className="text-muted-foreground md:text-lg">
              Every Musinique artist is a distinct voice with a distinct world. The common thread:
              independence, integrity, and something worth saying.
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
            <h2 className="text-3xl font-bold tracking-tighter md:text-5xl mb-6">
              AI MUSIC BUILT FOR PEOPLE KEEPS YOU ALIVE.<br />
              AI MUSIC BUILT FOR PLATFORMS KEEPS YOU ON THE PLATFORM.
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl">
              Your support helps us build ethical AI tools that serve creativity, expose the systems working
              against independent artists, and keep music in the hands of the people who make it. The
              methodology is not a secret. The tools should belong to everyone.
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
