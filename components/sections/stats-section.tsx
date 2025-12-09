"use client"

import { useEffect, useState, useRef } from "react"
import { TrendingUp, Briefcase, Users, Code } from "lucide-react"

const stats = [
  { value: 5, suffix: "+", label: "سنوات الخبرة", icon: TrendingUp, color: "primary" },
  { value: 50, suffix: "+", label: "مشروع مكتمل", icon: Briefcase, color: "accent" },
  { value: 30, suffix: "+", label: "عميل سعيد", icon: Users, color: "primary" },
  { value: 100, suffix: "K+", label: "سطر كود", icon: Code, color: "accent" },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [value, isVisible])

  return (
    <div ref={ref} className="text-5xl font-bold tabular-nums sm:text-6xl">
      {count}
      {suffix}
    </div>
  )
}

export function StatsSection() {
  return (
    <section className="relative border-t border-border py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className={`group relative text-center p-8 rounded-2xl glass card-hover opacity-0 animate-fade-in-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div
                  className={`mx-auto mb-4 inline-flex rounded-xl p-3 transition-all duration-300 ${
                    stat.color === "primary"
                      ? "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
                      : "bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground"
                  }`}
                >
                  <Icon className="h-6 w-6" />
                </div>

                {/* Counter */}
                <div className={stat.color === "primary" ? "text-primary" : "text-accent"}>
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>

                {/* Label */}
                <p className="mt-3 text-sm font-medium text-muted-foreground">{stat.label}</p>

                {/* Decorative line */}
                <div
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-0 rounded-full transition-all duration-500 group-hover:w-1/2 ${
                    stat.color === "primary" ? "bg-primary" : "bg-accent"
                  }`}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
