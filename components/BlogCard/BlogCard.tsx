import Link from 'next/link'

interface BlogCardPost {
  id: string
  title: string
  subtitle: string | null
  slug: string
  excerpt: string | null
  cover_image: string | null
  tags: string[] | null
  published_at: string | null
}

function formatDate(dateStr: string | null): string {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function BlogCard({ post }: { post: BlogCardPost }) {
  return (
    <article className="py-8 first:pt-0">
      <Link href={`/blog/${post.slug}`} className="group block">
        {post.cover_image && (
          <img
            src={post.cover_image}
            alt=""
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
        )}
        {post.published_at && (
          <time className="text-sm text-muted-foreground">
            {formatDate(post.published_at)}
          </time>
        )}
        <h2 className="text-2xl font-semibold mt-1 group-hover:underline">
          {post.title}
        </h2>
        {post.subtitle && (
          <p className="text-lg text-muted-foreground mt-1">
            {post.subtitle}
          </p>
        )}
        {post.excerpt && (
          <p className="text-muted-foreground mt-3 leading-relaxed">
            {post.excerpt}
          </p>
        )}
        <span className="text-sm font-medium mt-3 inline-block group-hover:underline">
          Read &rarr;
        </span>
      </Link>
    </article>
  )
}
