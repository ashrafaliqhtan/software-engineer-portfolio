import Link from "next/link"
import { Home, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-9xl font-bold text-primary">404</h1>
      <h2 className="mt-4 text-2xl font-semibold text-foreground">الصفحة غير موجودة</h2>
      <p className="mt-2 max-w-md text-muted-foreground">
        عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها إلى مكان آخر.
      </p>
      <div className="mt-8 flex gap-4">
        <Button asChild>
          <Link href="/" className="gap-2">
            <Home className="h-4 w-4" />
            الرئيسية
          </Link>
        </Button>
        <Button asChild variant="outline" className="bg-transparent">
          <Link href="/contact" className="gap-2">
            تواصل معنا
            <ArrowRight className="h-4 w-4 rotate-180" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
