"use client"

import { useState } from "react"
import { Quote, ChevronRight, ChevronLeft, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "أحمد محمد",
    role: "مدير تقنية المعلومات",
    company: "شركة التقنية المتقدمة",
    image: "/professional-arab-man-portrait.jpg",
    content:
      "عمل أشرف معنا على تطوير منصة إدارة المشاريع الداخلية. كان احترافياً في التعامل وقدم حلولاً إبداعية لجميع التحديات التي واجهناها. أنصح بشدة بالتعامل معه.",
    rating: 5,
  },
  {
    id: 2,
    name: "سارة العلي",
    role: "مؤسسة ومديرة تنفيذية",
    company: "متجر سارة الإلكتروني",
    image: "/professional-arab-woman-portrait.jpg",
    content:
      "أشرف ساعدنا في بناء متجرنا الإلكتروني من الصفر. النتيجة فاقت توقعاتنا، والمبيعات زادت بنسبة 200% خلال الأشهر الثلاثة الأولى. شكراً جزيلاً!",
    rating: 5,
  },
  {
    id: 3,
    name: "خالد الشمري",
    role: "مدير المنتج",
    company: "تطبيقات الخليج",
    image: "/professional-arab-man-in-suit.jpg",
    content:
      "تعاملت مع أشرف في عدة مشاريع وكل مرة يثبت أنه مطور استثنائي. يفهم المتطلبات بسرعة ويقدم حلولاً ذكية. سأستمر في التعامل معه بالتأكيد.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="relative border-t border-border py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute inset-0 dot-pattern opacity-20" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm text-primary mb-4">
            <Quote className="h-4 w-4" />
            <span>آراء العملاء</span>
          </div>
          <h2 className="text-4xl font-bold text-foreground">ماذا يقول عملائي</h2>
          <p className="mt-4 text-lg text-muted-foreground">آراء بعض العملاء الذين تشرفت بالعمل معهم</p>
        </div>

        {/* Testimonial Card */}
        <div className="relative">
          <div className="glass rounded-3xl p-8 md:p-12 border-gradient">
            {/* Quote icon */}
            <div className="absolute -top-6 right-8">
              <div className="rounded-2xl bg-primary p-4 shadow-lg glow-primary">
                <Quote className="h-8 w-8 text-primary-foreground" />
              </div>
            </div>

            {/* Content */}
            <div className="mt-8">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote text */}
              <blockquote className="text-xl md:text-2xl font-medium text-foreground leading-relaxed">
                "{currentTestimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="mt-8 flex items-center gap-4">
                <img
                  src={currentTestimonial.image || "/placeholder.svg"}
                  alt={currentTestimonial.name}
                  className="h-16 w-16 rounded-full object-cover border-2 border-primary"
                />
                <div>
                  <div className="font-bold text-foreground">{currentTestimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {currentTestimonial.role} • {currentTestimonial.company}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full glass bg-transparent h-12 w-12"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-8 bg-primary"
                      : "w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full glass bg-transparent h-12 w-12"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
