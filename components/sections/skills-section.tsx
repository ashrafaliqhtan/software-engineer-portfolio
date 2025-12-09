"use client"

import { useEffect, useRef, useState } from "react"
import { Code2, Server, Wrench } from "lucide-react"

const skillCategories = [
  {
    title: "لغات البرمجة",
    icon: Code2,
    color: "primary",
    skills: [
      { name: "JavaScript/TypeScript", level: 95 },
      { name: "Python", level: 85 },
      { name: "Java", level: 75 },
      { name: "SQL", level: 90 },
    ],
  },
  {
    title: "تطوير الواجهات",
    icon: Code2,
    color: "accent",
    skills: [
      { name: "React/Next.js", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Vue.js", level: 70 },
      { name: "React Native", level: 75 },
    ],
  },
  {
    title: "الخوادم والبنية التحتية",
    icon: Server,
    color: "primary",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "PostgreSQL/MongoDB", level: 85 },
      { name: "Docker/Kubernetes", level: 80 },
      { name: "AWS/GCP", level: 75 },
    ],
  },
  {
    title: "أدوات ومنهجيات",
    icon: Wrench,
    color: "accent",
    skills: [
      { name: "Git/GitHub", level: 95 },
      { name: "CI/CD", level: 85 },
      { name: "Agile/Scrum", level: 90 },
      { name: "Testing", level: 80 },
    ],
  },
]

function AnimatedSkillBar({ level, delay }: { level: number; delay: number }) {
  const [width, setWidth] = useState(0)
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(level), delay)
        }
      },
      { threshold: 0.1 },
    )

    if (barRef.current) {
      observer.observe(barRef.current)
    }

    return () => observer.disconnect()
  }, [level, delay])

  return (
    <div ref={barRef} className="h-2.5 overflow-hidden rounded-full bg-secondary">
      <div
        className="skill-bar h-full rounded-full bg-gradient-to-r from-primary to-primary/70 transition-all duration-1000 ease-out"
        style={{ width: `${width}%` }}
      />
    </div>
  )
}

export function SkillsSection() {
  return (
    <section className="relative border-t border-border py-24 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm text-primary mb-4">
            <Code2 className="h-4 w-4" />
            <span>المهارات</span>
          </div>
          <h2 className="text-4xl font-bold text-foreground">المهارات التقنية</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            التقنيات والأدوات التي أستخدمها في بناء المشاريع عالية الجودة
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon
            return (
              <div
                key={categoryIndex}
                className={`card-hover rounded-2xl glass p-8 opacity-0 animate-fade-in-up`}
                style={{ animationDelay: `${categoryIndex * 150}ms` }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div
                    className={`p-3 rounded-xl ${category.color === "primary" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"}`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                </div>
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="mb-2 flex justify-between text-sm">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className={`font-bold ${category.color === "primary" ? "text-primary" : "text-accent"}`}>
                          {skill.level}%
                        </span>
                      </div>
                      <AnimatedSkillBar level={skill.level} delay={skillIndex * 100 + categoryIndex * 200} />
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-6">تقنيات أخرى أستخدمها</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["GraphQL", "Redis", "Nginx", "Linux", "Figma", "Jest", "Cypress", "Webpack"].map((tech, index) => (
              <span
                key={tech}
                className="glass rounded-full px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors opacity-0 animate-scale-in"
                style={{ animationDelay: `${index * 50 + 800}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
