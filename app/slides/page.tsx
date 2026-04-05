import { join } from 'path'
import type { Metadata } from 'next'
import { scanHtmlDir } from '@/lib/html-meta'
import SlidesBrowser from './SlidesBrowser'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Slides | Musinique',
  description: 'Presentation decks and slide collections.',
}

export default function SlidesPage() {
  const slides = scanHtmlDir(join(process.cwd(), 'public', 'slides'))

  return (
    <div className="container px-4 md:px-6 mx-auto py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tighter mb-4">Slides</h1>
        <p className="text-muted-foreground mb-10">
          Presentation decks and slide collections.
        </p>
        <SlidesBrowser slides={slides} />
      </div>
    </div>
  )
}
