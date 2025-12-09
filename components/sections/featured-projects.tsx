"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Github, ExternalLink, Sparkles, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const featuredProjects = [
  {
    slug: "task-management-system",
    title: "نظام إدارة المهام التعاوني",
    description: "منصة ويب لإدارة فرق التطوير بميزات تتبع المهام، لوحات Kanban، وإخطارات في الوقت الحقيقي.",
    image: "/task-management-dashboard-kanban-board.jpg",
    tech: ["React", "Next.js", "Node.js", "PostgreSQL", "WebSocket"],
    github: "https://github.com/ashraf/task-system",
    live: "https://tasks.example.com",
    metrics: "زيادة كفاءة الفريق بنسبة 30%",
    color: "primary",
  },
  {
    slug: "ecommerce-platform",
    title: "منصة التجارة الإلكترونية",
    description: "متجر إلكتروني متكامل مع نظام دفع آمن، إدارة المخزون، ولوحة تحكم للبائعين.",
    image: "/modern-ecommerce-dashboard.png",
    tech: ["Next.js", "Stripe", "Prisma", "TailwindCSS"],
    github: "https://github.com/ashraf/ecommerce",
    live: "https://shop.example.com",
    metrics: "+10K مستخدم نشط",
    color: "accent",
  },
  {
    slug: "analytics-dashboard",
    title: "لوحة تحليلات البيانات",
    description: "لوحة تحكم تفاعلية لتحليل البيانات وعرض الإحصائيات مع رسوم بيانية متقدمة.",
    image: "/data-analytics-dashboard-charts-graphs.jpg",
    tech: ["React", "D3.js", "Python", "FastAPI", "MongoDB"],
    github: "https://github.com/ashraf/analytics",
    live: "https://analytics.example.com",
    metrics: "معالجة +1M سجل يومياً",
    color: "primary",
  },
]

export function FeaturedProjects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="relative border-t border-border py-24 overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm text-primary mb-4">
              <Layers className="h-4 w-4" />
              <span>المشاريع</span>
            </div>
            <h2 className="text-4xl font-bold text-foreground">مشاريع مميزة</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl">
              بعض المشاريع التي عملت عليها مؤخراً والتي أفتخر بها
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="hidden sm:flex gap-2 rounded-xl glass magnetic-btn bg-transparent"
          >
            <Link href="/projects">
              عرض جميع المشاريع
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <article
              key={index}
              className={`group relative card-hover rounded-2xl glass overflow-hidden opacity-0 animate-fade-in-up`}
              style={{ animationDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image section */}
              <Link href={`/projects/${project.slug}`} className="block">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  <div className="absolute top-4 right-4">
                    <div
                      className={`flex items-center gap-2 rounded-full ${project.color === "primary" ? "bg-primary" : "bg-accent"} px-3 py-1.5 text-xs font-medium text-primary-foreground shadow-lg`}
                    >
                      <Sparkles className="h-3 w-3" />
                      {project.metrics}
                    </div>
                  </div>
                </div>
              </Link>

              {/* Content section */}
              <div className="p-6">
                <Link href={`/projects/${project.slug}`}>
                  <h3 className="text-xl font-bold text-foreground transition-colors group-hover:text-primary line-decoration inline-block">
                    {project.title}
                  </h3>
                </Link>
                <p className="mt-3 text-sm text-muted-foreground line-clamp-2 leading-relaxed">{project.description}</p>

                {/* Tech stack */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="secondary" className="rounded-lg text-xs font-medium">
                      {tech}
                    </Badge>
                  ))}
                  {project.tech.length > 4 && (
                    <Badge variant="secondary" className="rounded-lg text-xs">
                      +{project.tech.length - 4}
                    </Badge>
                  )}
                </div>

                {/* Actions */}
                <div className="mt-6 flex items-center justify-between pt-4 border-t border-border">
                  <Link href={`/projects/${project.slug}`} className="text-sm font-medium text-primary hover:underline">
                    عرض التفاصيل
                  </Link>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg p-2 text-muted-foreground transition-all hover:bg-secondary hover:text-primary"
                      aria-label="GitHub Repository"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg p-2 text-muted-foreground transition-all hover:bg-secondary hover:text-primary"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-12 text-center sm:hidden">
          <Button asChild variant="outline" className="gap-2 rounded-xl glass bg-transparent">
            <Link href="/projects">
              عرض جميع المشاريع
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
