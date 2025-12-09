"use client"

import { useState } from "react"
import Link from "next/link"
import { Github, ExternalLink, Filter, X, Sparkles, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import type { Project } from "@/lib/projects-data"

interface ProjectsGridProps {
  projects: Project[]
  tags: string[]
}

export function ProjectsGrid({ projects, tags }: ProjectsGridProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [selectedYear, setSelectedYear] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const years = Array.from(new Set(projects.map((p) => p.year))).sort((a, b) => b.localeCompare(a))

  const filteredProjects = projects.filter((project) => {
    if (selectedTag && !project.tags.includes(selectedTag)) return false
    if (selectedYear && project.year !== selectedYear) return false
    if (searchQuery && !project.title.toLowerCase().includes(searchQuery.toLowerCase())) return false
    return true
  })

  const clearFilters = () => {
    setSelectedTag(null)
    setSelectedYear(null)
    setSearchQuery("")
  }

  const hasFilters = selectedTag || selectedYear || searchQuery

  return (
    <>
      {/* Search and Filters */}
      <div className="mt-10 space-y-6">
        {/* Search bar */}
        <div className="relative max-w-md">
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="ابحث عن مشروع..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pr-12 h-12 rounded-xl glass border-0 text-base"
          />
        </div>

        {/* Filters */}
        <div className="rounded-2xl glass p-6">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 text-sm font-medium text-foreground">
              <Filter className="h-4 w-4 text-primary" />
              <span>تصفية حسب:</span>
            </div>

            {/* Tag Filter */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Button
                  key={tag}
                  variant={selectedTag === tag ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                  className={`rounded-full text-xs transition-all ${
                    selectedTag === tag ? "glow-primary" : "glass bg-transparent hover:bg-primary/10"
                  }`}
                >
                  {tag}
                </Button>
              ))}
            </div>

            <div className="h-6 w-px bg-border hidden sm:block" />

            {/* Year Filter */}
            <div className="flex flex-wrap gap-2">
              {years.map((year) => (
                <Button
                  key={year}
                  variant={selectedYear === year ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedYear(selectedYear === year ? null : year)}
                  className={`rounded-full text-xs transition-all ${
                    selectedYear === year
                      ? "bg-accent text-accent-foreground glow-accent"
                      : "glass bg-transparent hover:bg-accent/10"
                  }`}
                >
                  {year}
                </Button>
              ))}
            </div>

            {hasFilters && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="rounded-full text-xs text-muted-foreground hover:text-destructive gap-1"
              >
                <X className="h-3 w-3" />
                مسح الفلاتر
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="mt-6 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          عرض <span className="font-bold text-primary">{filteredProjects.length}</span> من{" "}
          <span className="font-bold">{projects.length}</span> مشروع
        </p>
      </div>

      {/* Projects Grid */}
      <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <article
            key={project.slug}
            className={`group relative card-hover rounded-2xl glass overflow-hidden opacity-0 animate-fade-in-up`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Image */}
            <Link href={`/projects/${project.slug}`}>
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.coverImage || "/placeholder.svg"}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Metrics badge */}
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-2 rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground shadow-lg">
                    <Sparkles className="h-3 w-3" />
                    {project.metrics}
                  </div>
                </div>
              </div>
            </Link>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium text-muted-foreground">{project.year}</span>
                <Badge variant="secondary" className="rounded-full text-xs">
                  {project.role}
                </Badge>
              </div>

              <Link href={`/projects/${project.slug}`}>
                <h3 className="text-lg font-bold text-foreground transition-colors group-hover:text-primary line-decoration inline-block">
                  {project.title}
                </h3>
              </Link>

              <p className="mt-3 text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                {project.shortDescription}
              </p>

              {/* Tech stack */}
              <div className="mt-5 flex flex-wrap gap-2">
                {project.techStack.slice(0, 3).map((tech) => (
                  <Badge key={tech} variant="outline" className="rounded-full text-xs glass border-0">
                    {tech}
                  </Badge>
                ))}
                {project.techStack.length > 3 && (
                  <Badge variant="outline" className="rounded-full text-xs glass border-0">
                    +{project.techStack.length - 3}
                  </Badge>
                )}
              </div>

              {/* Actions */}
              <div className="mt-6 flex items-center justify-between pt-4 border-t border-border">
                <Link href={`/projects/${project.slug}`} className="text-sm font-medium text-primary hover:underline">
                  عرض التفاصيل
                </Link>
                <div className="flex gap-2">
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg p-2 text-muted-foreground transition-all hover:bg-secondary hover:text-primary"
                    aria-label="GitHub Repository"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg p-2 text-muted-foreground transition-all hover:bg-secondary hover:text-primary"
                    aria-label="Live Demo"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Empty state */}
      {filteredProjects.length === 0 && (
        <div className="mt-16 text-center py-16 glass rounded-2xl">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-bold text-foreground">لا توجد مشاريع</h3>
          <p className="mt-2 text-muted-foreground">لا توجد مشاريع تطابق الفلاتر المحددة</p>
          <Button variant="outline" onClick={clearFilters} className="mt-6 rounded-xl glass bg-transparent">
            مسح جميع الفلاتر
          </Button>
        </div>
      )}
    </>
  )
}
