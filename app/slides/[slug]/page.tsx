import Link from 'next/link'
import { notFound } from 'next/navigation'
import { join } from 'path'
import { existsSync } from 'fs'
import { scanHtmlDir } from '@/lib/html-meta'

export const dynamic = 'force-dynamic'

const SLIDES_DIR = join(process.cwd(), 'public', 'slides')

function getSlide(slug: string) {
  const filePath = join(SLIDES_DIR, `${slug}.html`)
  if (!existsSync(filePath)) return null
  const docs = scanHtmlDir(SLIDES_DIR)
  return docs.find(d => d.slug === slug) || null
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const slide = getSlide(slug)
  if (slide) {
    return {
      title: `${slide.title} - Slides`,
      description: slide.description || `${slide.title} — slide deck`,
    }
  }
  return { title: 'Slides | Musinique' }
}

export async function generateStaticParams() {
  const slides = scanHtmlDir(SLIDES_DIR)
  return slides.map(s => ({ slug: s.slug }))
}

export default async function SlidePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const slide = getSlide(slug)

  if (!slide) notFound()

  return (
    <div className="flex flex-col w-full" style={{ minHeight: 'calc(100vh - 4rem)' }}>
      <div className="w-full border-b bg-background">
        <div className="container px-4 md:px-6 mx-auto py-4 flex items-center justify-between">
          <div>
            <Link
              href="/slides"
              className="text-sm text-muted-foreground hover:text-foreground mb-1 inline-block"
            >
              &larr; Back to Slides
            </Link>
            <h1 className="text-2xl font-bold tracking-tighter">{slide.title}</h1>
            {slide.author && (
              <p className="text-sm text-muted-foreground mt-1">{slide.author}</p>
            )}
          </div>
          <a
            href={`/slides/${slide.filename}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center justify-center rounded-md px-6 text-sm font-medium bg-black text-white shadow hover:bg-gray-800 dark:border dark:border-input dark:bg-background dark:text-foreground dark:shadow-sm dark:hover:bg-accent dark:hover:text-accent-foreground"
          >
            Full Screen &#8599;
          </a>
        </div>
      </div>
      <div className="flex-1 w-full">
        <iframe
          src={`/slides/${slide.filename}`}
          title={slide.title}
          className="w-full border-none"
          style={{ minHeight: 'calc(100vh - 12rem)' }}
        />
      </div>
    </div>
  )
}
