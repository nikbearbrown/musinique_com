import type { Metadata } from "next"
import type { ReactNode } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { Inter } from "next/font/google"
import Header from "@/components/Header/Header"
import Muzak from "@/components/Muzak/Muzak" // Updated import path
import Footer from "@/components/Footer/Footer"
import { Analytics } from '@vercel/analytics/react'
import "./globals.css"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NikBearBrown.com",
  description: "Using AI for social good",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Muzak /> {/* Add the Muzak component here */}
            <Footer />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
