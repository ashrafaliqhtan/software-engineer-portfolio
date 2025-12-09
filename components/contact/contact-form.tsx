"use client"

import type React from "react"

import { useState, type FormEvent } from "react"
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

type FormStatus = "idle" | "loading" | "success" | "error"

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "", // Spam protection
  })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    // Honeypot check
    if (formData.honeypot) {
      return
    }

    setStatus("loading")

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Here you would typically send to your backend or service like Formspree
      console.log("Form submitted:", formData)

      setStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "", honeypot: "" })
    } catch {
      setStatus("error")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  if (status === "success") {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-xl border border-border bg-card p-8 text-center">
        <div className="rounded-full bg-green-100 p-4 dark:bg-green-900/20">
          <CheckCircle className="h-12 w-12 text-green-600 dark:text-green-400" />
        </div>
        <h3 className="mt-6 text-xl font-semibold text-foreground">تم إرسال رسالتك بنجاح!</h3>
        <p className="mt-2 text-muted-foreground">شكراً لتواصلك. سأرد عليك في أقرب وقت ممكن.</p>
        <Button variant="outline" className="mt-6 bg-transparent" onClick={() => setStatus("idle")}>
          إرسال رسالة أخرى
        </Button>
      </div>
    )
  }

  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <h2 className="text-xl font-semibold text-foreground">أرسل رسالة</h2>
      <p className="mt-2 text-sm text-muted-foreground">املأ النموذج أدناه وسأتواصل معك قريباً</p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        {/* Honeypot field - hidden from users */}
        <input
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">الاسم *</Label>
            <Input
              id="name"
              name="name"
              placeholder="أدخل اسمك"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={status === "loading"}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">البريد الإلكتروني *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="example@email.com"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={status === "loading"}
              dir="ltr"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="subject">الموضوع *</Label>
          <Input
            id="subject"
            name="subject"
            placeholder="موضوع الرسالة"
            value={formData.subject}
            onChange={handleChange}
            required
            disabled={status === "loading"}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">الرسالة *</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="اكتب رسالتك هنا..."
            rows={6}
            value={formData.message}
            onChange={handleChange}
            required
            disabled={status === "loading"}
          />
        </div>

        {status === "error" && (
          <div className="flex items-center gap-2 rounded-lg border border-destructive/50 bg-destructive/10 p-3 text-sm text-destructive">
            <AlertCircle className="h-4 w-4" />
            حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.
          </div>
        )}

        <Button type="submit" className="w-full gap-2" disabled={status === "loading"}>
          {status === "loading" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              جاري الإرسال...
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              إرسال الرسالة
            </>
          )}
        </Button>
      </form>
    </div>
  )
}
