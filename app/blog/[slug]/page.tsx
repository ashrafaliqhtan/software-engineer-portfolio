import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight, Calendar, Clock, Share2, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getBlogPostBySlug, getAllBlogSlugs, formatDate } from "@/lib/blog-data"
import { MarkdownContent } from "@/components/blog/markdown-content"

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    return { title: "مقال غير موجود" }
  }

  return {
    title: `${post.title} | أشرف - مهندس برمجيات`,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
      images: [post.coverImage],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowRight className="h-4 w-4" />
          العودة للمدونة
        </Link>

        {/* Header */}
        <header className="mt-8">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="mt-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl">{post.title}</h1>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readingTime}
            </span>
          </div>
        </header>

        {/* Cover Image */}
        <div className="mt-8 overflow-hidden rounded-xl border border-border">
          <img
            src={post.coverImage || "/placeholder.svg"}
            alt={post.title}
            className="aspect-video w-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="prose prose-neutral dark:prose-invert mt-8 max-w-none">
          <MarkdownContent content={post.content} />
        </div>

        {/* Share */}
        <div className="mt-12 flex items-center justify-between rounded-xl border border-border bg-card p-6">
          <div>
            <p className="font-semibold text-foreground">أعجبك المقال؟</p>
            <p className="text-sm text-muted-foreground">شاركه مع أصدقائك</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" className="bg-transparent">
              <Share2 className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="bg-transparent">
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </article>
    </div>
  )
}
