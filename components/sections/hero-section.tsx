"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import { ArrowLeft, Github, Linkedin, Mail, ChevronDown, Sparkles, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"

function TypeWriter({ words, className }: { words: string[]; className?: string }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const word = words[currentWordIndex]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentText.length < word.length) {
            setCurrentText(word.slice(0, currentText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (currentText.length > 0) {
            setCurrentText(currentText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentWordIndex((prev) => (prev + 1) % words.length)
          }
        }
      },
      isDeleting ? 50 : 100,
    )
    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentWordIndex, words])

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

function AnimatedCounter({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const countRef = useRef<HTMLSpanElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (countRef.current) {
      observer.observe(countRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [isVisible, end, duration])

  return (
    <span ref={countRef} className="tabular-nums">
      {count}
      {suffix}
    </span>
  )
}

function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-primary/20 animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  )
}

export function HeroSection() {
  const roles = ["مهندس برمجيات", "محلّل بيانات", "مطور Full-Stack", "مهندس Cloud"]

  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute inset-0 dot-pattern opacity-50" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <FloatingParticles />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid items-center gap-16 lg:grid-cols-2 w-full">
          {/* Content */}
          <div className="opacity-0 animate-fade-in-right">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full glass px-5 py-2 text-sm shadow-lg">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
              </span>
              <span className="text-foreground font-medium">متاح للعمل الحر والتوظيف</span>
              <Sparkles className="h-4 w-4 text-accent" />
            </div>

            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              <span className="text-foreground">أهلاً، أنا</span>
              <br />
              <span className="gradient-text text-6xl sm:text-7xl lg:text-8xl">أشرف</span>
            </h1>

            <div className="mt-4 flex items-center gap-3 text-xl sm:text-2xl">
              <Code2 className="h-6 w-6 text-primary" />
              <TypeWriter words={roles} className="text-primary font-semibold" />
            </div>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              أبني أنظمة ويب وواجهات مستخدم عالية الجودة، مهتم بتطوير الـ Backend، الحوسبة السحابية، وتعلم الآلة. أسعى
              دائماً لتقديم حلول برمجية مبتكرة وفعّالة تحقق أهداف العملاء.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="magnetic-btn gap-2 h-14 px-8 text-base rounded-xl shadow-lg glow-primary"
              >
                <Link href="/projects">
                  عرض المشاريع
                  <ArrowLeft className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="magnetic-btn h-14 px-8 text-base rounded-xl glass bg-transparent"
              >
                <Link href="/resume">السيرة الذاتية</Link>
              </Button>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <span className="text-sm text-muted-foreground font-medium">تابعني:</span>
              <div className="flex gap-3">
                {[
                  { href: "https://github.com/ashraf", icon: Github, label: "GitHub" },
                  { href: "https://linkedin.com/in/ashraf", icon: Linkedin, label: "LinkedIn" },
                  { href: "mailto:ashraf@example.com", icon: Mail, label: "Email" },
                ].map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative rounded-xl glass p-3 text-muted-foreground transition-all duration-300 hover:text-primary hover:glow-primary"
                    aria-label={label}
                  >
                    <Icon className="h-5 w-5 transition-transform group-hover:scale-110" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="relative opacity-0 animate-fade-in-left animation-delay-200">
            <div className="relative mx-auto max-w-lg">
              {/* Decorative elements */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 via-transparent to-accent/20 blur-2xl" />
              <div className="absolute -top-8 -right-8 w-32 h-32 border-2 border-primary/20 rounded-2xl rotate-12" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 border-2 border-accent/20 rounded-2xl -rotate-12" />

              {/* Main image container */}
              <div className="relative border-gradient rounded-3xl p-1.5 shadow-2xl">
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-accent/10">
                  <img
                    src="/professional-male-software-engineer-portrait-with-.jpg"
                    alt="أشرف - مهندس برمجيات"
                    className="h-full w-full object-cover"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                </div>
              </div>

              <div className="absolute -right-6 top-12 animate-float">
                <div className="glass rounded-2xl px-5 py-3 shadow-xl border-gradient">
                  <div className="text-2xl font-bold text-primary">
                    <AnimatedCounter end={5} suffix="+" />
                  </div>
                  <div className="text-xs text-muted-foreground">سنوات خبرة</div>
                </div>
              </div>

              <div className="absolute -left-6 top-1/3 animate-float animation-delay-300">
                <div className="glass rounded-2xl px-5 py-3 shadow-xl border-gradient">
                  <div className="text-2xl font-bold text-accent">
                    <AnimatedCounter end={50} suffix="+" />
                  </div>
                  <div className="text-xs text-muted-foreground">مشروع مكتمل</div>
                </div>
              </div>

              <div className="absolute -right-4 bottom-20 animate-float animation-delay-500">
                <div className="glass rounded-2xl px-5 py-3 shadow-xl border-gradient">
                  <div className="text-2xl font-bold text-primary">
                    <AnimatedCounter end={30} suffix="+" />
                  </div>
                  <div className="text-xs text-muted-foreground">عميل سعيد</div>
                </div>
              </div>

              {/* Tech stack badges */}
              <div className="absolute -left-4 bottom-8 animate-float animation-delay-700">
                <div className="flex gap-2">
                  {["React", "Node", "AWS"].map((tech) => (
                    <div
                      key={tech}
                      className="glass rounded-full px-3 py-1.5 text-xs font-medium text-primary shadow-lg"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in-up animation-delay-800">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-sm">اكتشف المزيد</span>
          <ChevronDown className="h-5 w-5 animate-bounce-subtle" />
        </a>
      </div>
    </section>
  )
}
