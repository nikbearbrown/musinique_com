'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Search, X, ExternalLink } from 'lucide-react'

interface Slide {
  slug: string
  filename: string
  title: string
  description: string
  tags: string[]
  author?: string
  category?: string
  slideCount?: string
}

export default function SlidesBrowser({ slides }: { slides: Slide[] }) {
  const [query, setQuery] = useState('')
  const [activeTag, setActiveTag] = useState<string | null>(null)

  const allTags = useMemo(() => {
    const set = new Set<string>()
    slides.forEach(s => s.tags.forEach(t => set.add(t)))
    return Array.from(set).sort()
  }, [slides])

  const filtered = useMemo(() => {
    let result = slides
    if (activeTag) {
      result = result.filter(s => s.tags.includes(activeTag))
    }
    if (query.trim()) {
      const q = query.toLowerCase()
      result = result.filter(
        s =>
          s.title.toLowerCase().includes(q) ||
          s.description.toLowerCase().includes(q) ||
          s.tags.some(t => t.toLowerCase().includes(q))
      )
    }
    return result
  }, [slides, query, activeTag])

  return (
    <>
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search slides…"
          className="w-full pl-10 pr-10 py-2 text-sm border rounded-md bg-background focus:outline-none focus:ring-1 focus:ring-ring"
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {allTags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 items-center mb-8">
          <span className="text-xs text-muted-foreground mr-1">Filter:</span>
          {activeTag && (
            <button
              onClick={() => setActiveTag(null)}
              className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-0.5"
            >
              <X className="h-3 w-3" /> Clear
            </button>
          )}
          {allTags.map(tag => (
            <Badge
              key={tag}
              variant={activeTag === tag ? 'default' : 'outline'}
              className="cursor-pointer text-xs"
              onClick={() => setActiveTag(activeTag === tag ? null : tag)}
            >
              {tag}
            </Badge>
          ))}
        </div>
      )}

      {filtered.length === 0 ? (
        <p className="text-muted-foreground">
          {query || activeTag ? 'No slides match your search.' : 'No slides yet.'}
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map(slide => (
            <Link key={slide.slug} href={`/slides/${slide.slug}`}>
              <Card className="h-full hover:border-foreground/20 transition-colors cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    {slide.title}
                    <ExternalLink className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                  </CardTitle>
                  {slide.description && (
                    <CardDescription className="line-clamp-2">
                      {slide.description}
                    </CardDescription>
                  )}
                  <div className="flex flex-wrap items-center gap-2 pt-2 text-xs text-muted-foreground">
                    {slide.author && <span>{slide.author}</span>}
                    {slide.category && (
                      <Badge variant="secondary" className="text-[10px]">
                        {slide.category}
                      </Badge>
                    )}
                    {slide.slideCount && <span>{slide.slideCount} slides</span>}
                  </div>
                  {slide.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 pt-1">
                      {slide.tags.slice(0, 4).map(tag => (
                        <Badge key={tag} variant="secondary" className="text-[10px]">
                          {tag}
                        </Badge>
                      ))}
                      {slide.tags.length > 4 && (
                        <span className="text-[10px] text-muted-foreground">
                          +{slide.tags.length - 4} more
                        </span>
                      )}
                    </div>
                  )}
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
