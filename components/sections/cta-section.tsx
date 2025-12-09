import Link from "next/link"
import { Mail, ArrowLeft, Sparkles, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="relative border-t border-border py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-3xl p-10 md:p-16 text-center border-gradient">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm text-primary mb-8">
            <MessageCircle className="h-4 w-4" />
            <span>متاح للتعاون</span>
            <Sparkles className="h-4 w-4" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            هل لديك مشروع
            <br />
            <span className="gradient-text">في ذهنك؟</span>
          </h2>

          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            أنا متاح للعمل على مشاريع جديدة ومثيرة. دعنا نتحدث عن كيف يمكنني مساعدتك في تحقيق أهدافك وتحويل أفكارك إلى
            واقع رقمي.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="magnetic-btn gap-3 h-14 px-8 text-base rounded-xl shadow-lg glow-primary"
            >
              <Link href="/contact">
                <Mail className="h-5 w-5" />
                تواصل معي الآن
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="magnetic-btn gap-3 h-14 px-8 text-base rounded-xl glass bg-transparent"
            >
              <Link href="/resume">
                السيرة الذاتية
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <span>رد سريع خلال 24 ساعة</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span>استشارة مجانية</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-accent" />
              <span>أسعار تنافسية</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
