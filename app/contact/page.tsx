import type { Metadata } from "next"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"

export const metadata: Metadata = {
  title: "تواصل معي | أشرف - مهندس برمجيات",
  description: "تواصل معي لمناقشة مشروعك أو فرصة عمل",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground">تواصل معي</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            هل لديك مشروع أو فكرة تريد مناقشتها؟ أرسل لي رسالة وسأرد عليك في أقرب وقت.
          </p>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <ContactInfo />

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
