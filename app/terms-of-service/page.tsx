import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms of Service - Humanitarians AI",
  description: "Terms of Service for Humanitarians AI website and services",
}

export default function TermsOfServicePage() {
  return (
    <div className="container px-4 md:px-6 mx-auto py-12">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
          <p className="text-sm text-muted-foreground">Last Updated: June 16, 2025</p>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p>
              Welcome to Humanitarians AI's website. By accessing or using our website, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Website Purpose</h2>
            <p>
              The Humanitarians AI website is provided for informational purposes only. The content on our website is intended to provide general information about our organization, mission, programs, and activities. Our website functions primarily as a digital business card and information resource.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, images, and software, is the property of Humanitarians AI and is protected by United States and international copyright laws. The compilation of all content on this website is the exclusive property of Humanitarians AI and is protected by United States and international copyright laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Use License</h2>
            <p>
              You are granted a limited, non-exclusive, non-transferable license to access and use our website for informational purposes. This license does not include:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Modifying or copying the materials</li>
              <li>Using the materials for any commercial purpose</li>
              <li>Attempting to decompile or reverse engineer any software contained on the website</li>
              <li>Removing any copyright or other proprietary notations from the materials</li>
              <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
            </ul>
            <p className="mt-4">
              This license shall automatically terminate if you violate any of these restrictions and may be terminated by Humanitarians AI at any time.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Disclaimer</h2>
            <p>
              The materials on Humanitarians AI's website are provided "as is." Humanitarians AI makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Limitations</h2>
            <p>
              In no event shall Humanitarians AI be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Humanitarians AI's website, even if Humanitarians AI or a Humanitarians AI authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. External Links</h2>
            <p>
              Humanitarians AI's website may contain links to external websites that are not provided or maintained by or in any way affiliated with Humanitarians AI. Please note that Humanitarians AI does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">8. Revisions and Errata</h2>
            <p>
              The materials appearing on Humanitarians AI's website could include technical, typographical, or photographic errors. Humanitarians AI does not warrant that any of the materials on its website are accurate, complete, or current. Humanitarians AI may make changes to the materials contained on its website at any time without notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">9. Modifications to Terms of Service</h2>
            <p>
              Humanitarians AI may revise these Terms of Service for its website at any time without notice. By using this website, you are agreeing to be bound by the then-current version of these Terms of Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">10. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions. Any disputes relating to these Terms shall be subject to the exclusive jurisdiction of the courts of the United States.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">11. Contact</h2>
            <p>
              If you have any questions about these Terms, please{" "}
              <Link href="/contact" className="text-primary underline hover:no-underline">
                contact us
              </Link>
              .
            </p>
          </section>
        </div>

        {/* Navigation */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <Link href="/privacy" className="text-primary hover:underline">
              ← Privacy Policy
            </Link>
            <Link href="/contact" className="text-primary hover:underline">
              Contact Us →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 