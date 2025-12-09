import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Clock } from "lucide-react"

const contactDetails = [
  {
    icon: Mail,
    label: "البريد الإلكتروني",
    value: "ashraf@example.com",
    href: "mailto:ashraf@example.com",
  },
  {
    icon: Phone,
    label: "الهاتف",
    value: "+20 100 000 0000",
    href: "tel:+201000000000",
    dir: "ltr" as const,
  },
  {
    icon: MapPin,
    label: "الموقع",
    value: "القاهرة، مصر",
    href: null,
  },
  {
    icon: Clock,
    label: "أوقات العمل",
    value: "الأحد - الخميس، 9ص - 6م",
    href: null,
  },
]

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/ashraf",
    username: "@ashraf",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/ashraf",
    username: "in/ashraf",
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://twitter.com/ashraf",
    username: "@ashraf",
  },
]

export function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Contact Details */}
      <div className="rounded-xl border border-border bg-card p-6">
        <h2 className="text-xl font-semibold text-foreground">معلومات التواصل</h2>
        <div className="mt-6 space-y-4">
          {contactDetails.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="rounded-lg bg-primary/10 p-2 text-primary">
                <item.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{item.label}</p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="font-medium text-foreground transition-colors hover:text-primary"
                    dir={item.dir}
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="font-medium text-foreground">{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Social Links */}
      <div className="rounded-xl border border-border bg-card p-6">
        <h2 className="text-xl font-semibold text-foreground">تابعني على</h2>
        <div className="mt-6 space-y-4">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-lg border border-border bg-background p-4 transition-all hover:border-primary hover:bg-primary/5"
            >
              <div className="rounded-lg bg-primary/10 p-2 text-primary">
                <item.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium text-foreground">{item.label}</p>
                <p className="text-sm text-muted-foreground">{item.username}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Quick Response Promise */}
      <div className="rounded-xl border border-primary/20 bg-primary/5 p-6">
        <h3 className="font-semibold text-primary">وقت الاستجابة</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          أحرص على الرد على جميع الرسائل خلال 24-48 ساعة في أيام العمل. إذا كان الأمر عاجلاً، يمكنك التواصل عبر الهاتف
          مباشرة.
        </p>
      </div>
    </div>
  )
}
