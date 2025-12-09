import type { Metadata } from "next"
import { ProjectsGrid } from "@/components/projects/projects-grid"
import { projects, getAllTags } from "@/lib/projects-data"

export const metadata: Metadata = {
  title: "المشاريع | أشرف - مهندس برمجيات",
  description: "استعرض مشاريعي البرمجية في تطوير الويب، التطبيقات، والذكاء الاصطناعي",
}

export default function ProjectsPage() {
  const allTags = getAllTags()

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground">المشاريع</h1>
          <p className="mt-4 text-lg text-muted-foreground">مجموعة من المشاريع التي عملت عليها في مجالات مختلفة</p>
        </div>

        {/* Projects Grid with Filters */}
        <ProjectsGrid projects={projects} tags={allTags} />
      </div>
    </div>
  )
}
