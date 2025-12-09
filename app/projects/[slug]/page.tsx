import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight, Github, ExternalLink, Calendar, User, CheckCircle, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/projects-data"

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return { title: "مشروع غير موجود" }
  }

  return {
    title: `${project.title} | أشرف - مهندس برمجيات`,
    description: project.shortDescription,
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      images: [project.coverImage],
    },
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowRight className="h-4 w-4" />
          العودة للمشاريع
        </Link>

        {/* Header */}
        <header className="mt-8">
          <div className="flex flex-wrap items-center gap-4">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">{project.title}</h1>
          <p className="mt-4 text-lg text-muted-foreground">{project.shortDescription}</p>

          <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {project.year}
            </span>
            <span className="flex items-center gap-2">
              <User className="h-4 w-4" />
              {project.role}
            </span>
            <span className="text-primary">{project.metrics}</span>
          </div>

          <div className="mt-6 flex gap-4">
            <Button asChild className="gap-2">
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                عرض المشروع
              </a>
            </Button>
            <Button asChild variant="outline" className="gap-2 bg-transparent">
              <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                الكود المصدري
              </a>
            </Button>
          </div>
        </header>

        {/* Cover Image */}
        <div className="mt-8 overflow-hidden rounded-xl border border-border">
          <img
            src={project.coverImage || "/placeholder.svg"}
            alt={project.title}
            className="aspect-video w-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="mt-12 grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {/* Description */}
            <section>
              <h2 className="text-2xl font-bold text-foreground">نظرة عامة</h2>
              <div className="prose prose-neutral dark:prose-invert mt-4">
                {project.longDescription.split("\n").map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            {/* Features */}
            <section className="mt-12">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground">
                <CheckCircle className="h-5 w-5 text-primary" />
                المميزات الرئيسية
              </h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </section>

            {/* Challenges */}
            <section className="mt-12">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground">
                <AlertTriangle className="h-5 w-5 text-amber-500" />
                التحديات والحلول
              </h2>
              <ul className="mt-4 space-y-3">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-2 text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                    {challenge}
                  </li>
                ))}
              </ul>
            </section>

            {/* Gallery */}
            {project.galleryImages.length > 0 && (
              <section className="mt-12">
                <h2 className="text-2xl font-bold text-foreground">صور إضافية</h2>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {project.galleryImages.map((image, index) => (
                    <div key={index} className="overflow-hidden rounded-lg border border-border">
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`${project.title} - صورة ${index + 1}`}
                        className="w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Tech Stack */}
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-semibold text-foreground">التقنيات المستخدمة</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-semibold text-foreground">روابط</h3>
                <div className="mt-4 space-y-3">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    <ExternalLink className="h-4 w-4" />
                    العرض المباشر
                  </a>
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Github className="h-4 w-4" />
                    GitHub Repository
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
