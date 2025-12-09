import type React from "react"
import type { Metadata, Viewport } from "next"
import { Cairo } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import "./globals.css"

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
})

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  title: {
    default: "أشرف | مهندس برمجيات ومحلل بيانات",
    template: "%s | أشرف",
  },
  description: "مهندس برمجيات ومحلل بيانات - أبني أنظمة ويب وواجهات مستخدم عالية الجودة",
  keywords: ["مهندس برمجيات", "مطور ويب", "React", "Next.js", "محفظة أعمال", "سيرة ذاتية"],
  authors: [{ name: "أشرف" }],
  creator: "أشرف",
  openGraph: {
    type: "website",
    locale: "ar_EG",
    url: "https://ashraf.dev",
    siteName: "أشرف - مهندس برمجيات",
    title: "أشرف | مهندس برمجيات ومحلل بيانات",
    description: "مهندس برمجيات ومحلل بيانات - أبني أنظمة ويب وواجهات مستخدم عالية الجودة",
  },
  twitter: {
    card: "summary_large_image",
    title: "أشرف | مهندس برمجيات",
    description: "مهندس برمجيات ومحلل بيانات",
    creator: "@ashraf",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={`${cairo.className} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
