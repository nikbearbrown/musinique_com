"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import ThemeToggle from "@/components/ThemeToggle"
import { useTheme } from "next-themes"

const baseButtonStyles = "inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
const headerButtonStyles = "bg-black text-white shadow hover:bg-gray-800 dark:border dark:border-input dark:bg-background dark:text-foreground dark:shadow-sm dark:hover:bg-accent dark:hover:text-accent-foreground"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const { theme } = useTheme()
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  const navigation = [
    { name: "Art", href: "/art" },
    { name: "Blog", href: "/blog" },
    { name: "Books", href: "/books" },
    { name: "Classes", href: "/classes" },
    { name: "Consulting", href: "/consulting" },
    { name: "Projects", href: "/projects" },
  ]

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/nikbearbrown" },
    { name: "YouTube", href: "https://www.youtube.com/@NikBearBrown" },
    { name: "Spotify", href: "https://open.spotify.com/artist/0hSpFCJodAYMP2cWK72zI6" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container px-4 md:px-6 mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            {mounted ? (
              <Image
                src={theme === 'dark' ? '/svg-logos/NikBearBrown_white_logo.svg' : '/svg-logos/NikBearBrown_black_logo.svg'}
                alt="NikBearBrown.com"
                width={240}
                height={53}
                className="h-12 w-auto"
              />
            ) : (
              <div className="h-12 w-60 bg-muted animate-pulse rounded" />
            )}
          </Link>
          <nav className="hidden lg:flex gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-foreground/80",
                  pathname === item.href ? "text-foreground" : "text-foreground/60",
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-4">
            {socialLinks.map((link) => (
              <Link key={link.name} href={link.href} target="_blank" rel="noopener noreferrer">
                <button className={cn(baseButtonStyles, headerButtonStyles)}>
                  {link.name}
                </button>
              </Link>
            ))}
          </div>
          <ThemeToggle />
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring lg:hidden"
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div 
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
          <div ref={menuRef} className="fixed inset-x-0 top-16 z-50 mt-px bg-background border-b p-6 shadow-lg">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-base font-medium transition-colors hover:text-foreground/80",
                    pathname === item.href ? "text-foreground" : "text-foreground/60",
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col gap-4 mt-4">
                {socialLinks.map((link) => (
                  <Link 
                    key={link.name}
                    href={link.href}
                    className="text-base font-medium"
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
