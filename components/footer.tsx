import Link from "next/link"
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from "lucide-react"

const socialLinks = [
  { href: "https://github.com/ashraf", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com/in/ashraf", icon: Linkedin, label: "LinkedIn" },
  { href: "https://twitter.com/ashraf", icon: Twitter, label: "Twitter" },
  { href: "mailto:ashraf@example.com", icon: Mail, label: "Email" },
]

const footerLinks = {
  main: [
    { href: "/", label: "الرئيسية" },
    { href: "/resume", label: "السيرة الذاتية" },
    { href: "/projects", label: "المشاريع" },
  ],
  more: [
    { href: "/blog", label: "المدونة" },
    { href: "/contact", label: "تواصل" },
    { href: "/privacy", label: "سياسة الخصوصية" },
  ],
}

export function Footer() {
  return (
    <footer className="no-print relative border-t border-border overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
      <div className="absolute inset-0 dot-pattern opacity-20" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="group inline-flex items-center gap-3">
              <div className="relative">
                <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold text-xl">
                  أ
                </div>
              </div>
              <div>
                <span className="text-2xl font-bold gradient-text">أشرف</span>
                <span className="block text-sm text-muted-foreground">مهندس برمجيات</span>
              </div>
            </Link>
            <p className="mt-6 max-w-md text-muted-foreground leading-relaxed">
              مهندس برمجيات ومحلل بيانات. أبني أنظمة ويب وواجهات مستخدم عالية الجودة تساعد الشركات على النمو والتطور.
            </p>

            {/* Social */}
            <div className="mt-8 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-xl glass p-3 text-muted-foreground transition-all duration-300 hover:text-primary hover:glow-primary"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 transition-transform group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-foreground mb-6">روابط سريعة</h3>
            <ul className="space-y-4">
              {footerLinks.main.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-primary line-decoration inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="font-bold text-foreground mb-6">المزيد</h3>
            <ul className="space-y-4">
              {footerLinks.more.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-primary line-decoration inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            صُنع بـ <Heart className="h-4 w-4 text-red-500 fill-red-500" /> بواسطة أشرف
          </p>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} جميع الحقوق محفوظة</p>
          <a
            href="#"
            className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <span>العودة للأعلى</span>
            <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
          </a>
        </div>
      </div>
    </footer>
  )
}
