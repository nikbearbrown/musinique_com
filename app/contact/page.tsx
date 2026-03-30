import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact | Musinique",
  description: "Coming soon.",
  robots: { index: false, follow: false },
}

export default function ContactPage() {
  return (
    <div className="container px-4 md:px-6 mx-auto py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tighter mb-4">Contact</h1>
        <p className="text-xl text-muted-foreground mb-8">Coming Soon</p>

        <div className="prose prose-lg dark:prose-invert max-w-none space-y-6">
          <p>
            We&apos;re building a contact page so you can reach the Musinique team directly.
            In the meantime, you can reach us at{' '}
            <a href="mailto:bear@bearbrown.co" className="text-primary hover:underline">
              bear@bearbrown.co
            </a>.
          </p>
        </div>
      </div>
    </div>
  )
}
