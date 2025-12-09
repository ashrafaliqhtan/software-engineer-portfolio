"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, X, Moon, Sun, Download } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/resume", label: "السيرة الذاتية" },
  { href: "/projects", label: "المشاريع" },
  { href: "/blog", label: "المدونة" },
  { href: "/contact", label: "تواصل" },
]

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "no-print sticky top-0 z-50 transition-all duration-500",
        isScrolled ? "glass border-b border-border/40 shadow-lg" : "bg-transparent",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative">
              <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold text-lg">
                أ
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold gradient-text">أشرف</span>
              <span className="block text-xs text-muted-foreground">مهندس برمجيات</span>
            </div>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-300 line-decoration",
                  pathname === link.href ? "text-primary" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {pathname === link.href && <span className="absolute inset-0 rounded-xl bg-primary/10" />}
                <span className="relative">{link.label}</span>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-xl h-10 w-10 glass"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">تبديل السمة</span>
            </Button>

            <Button asChild size="sm" className="hidden gap-2 sm:flex rounded-xl magnetic-btn h-10 px-5">
              <Link href="/resume#download">
                <Download className="h-4 w-4" />
                تحميل السيرة
              </Link>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-xl h-10 w-10 glass"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="glass border-t border-border/40 md:hidden animate-slide-in-bottom">
          <div className="space-y-2 px-4 py-6">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block rounded-xl px-4 py-3 text-base font-medium transition-all opacity-0 animate-fade-in-right",
                  pathname === link.href
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              size="lg"
              className="mt-4 w-full gap-2 rounded-xl opacity-0 animate-fade-in-up animation-delay-500"
            >
              <Link href="/resume#download">
                <Download className="h-4 w-4" />
                تحميل السيرة الذاتية
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
