import type { Metadata } from "next"
import Link from "next/link"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { blogPosts, getAllBlogTags, formatDate } from "@/lib/blog-data"

export const metadata: Metadata = {
  title: "المدونة | أشرف - مهندس برمجيات",
  description: "مقالات تقنية في تطوير الويب، البرمجة، والتقنيات الحديثة",
}

export default function BlogPage() {
  const allTags = getAllBlogTags()

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground">المدونة</h1>
          <p className="mt-4 text-lg text-muted-foreground">أفكار ومقالات تقنية حول تطوير البرمجيات</p>
        </div>

        {/* Tags */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {allTags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Blog Posts */}
        <div className="mt-12 space-y-8">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg"
            >
              <Link href={`/blog/${post.slug}`} className="flex flex-col sm:flex-row">
                <div className="aspect-video w-full overflow-hidden bg-muted sm:aspect-square sm:w-48 sm:flex-shrink-0">
                  <img
                    src={post.coverImage || "/placeholder.svg"}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h2 className="mt-3 text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
                      {post.title}
                    </h2>
                    <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{post.summary}</p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {formatDate(post.date)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readingTime}
                      </span>
                    </div>
                    <span className="flex items-center gap-1 text-sm text-primary">
                      قراءة المزيد
                      <ArrowLeft className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
