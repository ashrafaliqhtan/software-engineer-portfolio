"use client"

export interface BlogPost {
  slug: string
  title: string
  date: string
  summary: string
  content: string
  tags: string[]
  coverImage: string
  readingTime: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: "getting-started-with-nextjs",
    title: "دليل المبتدئين لـ Next.js 14",
    date: "2024-01-15",
    summary: "تعرف على أساسيات Next.js 14 وكيفية بناء تطبيقات ويب حديثة وسريعة باستخدام App Router والميزات الجديدة.",
    coverImage: "/nextjs-framework-code-editor.jpg",
    readingTime: "8 دقائق",
    tags: ["Next.js", "React", "تطوير الويب"],
    content: `
# دليل المبتدئين لـ Next.js 14

Next.js هو إطار عمل React قوي يوفر تجربة تطوير ممتازة مع ميزات مثل Server Components و App Router.

## لماذا Next.js؟

- **أداء عالي**: تحسين تلقائي للصور والخطوط
- **SEO ممتاز**: دعم Server-Side Rendering
- **تجربة مطور رائعة**: Hot Reload سريع

## البداية السريعة

لإنشاء مشروع جديد:

\`\`\`bash
npx create-next-app@latest my-app
cd my-app
npm run dev
\`\`\`

## App Router

App Router هو نظام التوجيه الجديد في Next.js 14:

\`\`\`tsx
// app/page.tsx
export default function Home() {
  return <h1>مرحباً بك في Next.js!</h1>
}
\`\`\`

## Server Components

المكونات الخادمية هي الافتراضي في App Router:

\`\`\`tsx
// هذا مكون خادمي
async function getData() {
  const res = await fetch('https://api.example.com/data')
  return res.json()
}

export default async function Page() {
  const data = await getData()
  return <div>{data.title}</div>
}
\`\`\`

## الخلاصة

Next.js 14 يوفر أدوات قوية لبناء تطبيقات ويب حديثة. ابدأ اليوم واستكشف الإمكانيات!
    `,
  },
  {
    slug: "building-rest-apis-nodejs",
    title: "بناء RESTful APIs احترافية مع Node.js",
    date: "2024-01-08",
    summary: "دليل شامل لبناء واجهات برمجية RESTful باستخدام Node.js و Express مع أفضل الممارسات.",
    coverImage: "/nodejs-api-code-architecture.jpg",
    readingTime: "12 دقيقة",
    tags: ["Node.js", "API", "Backend"],
    content: `
# بناء RESTful APIs احترافية مع Node.js

تعلم كيفية بناء واجهات برمجية قوية وآمنة باستخدام Node.js.

## إعداد المشروع

\`\`\`bash
mkdir my-api
cd my-api
npm init -y
npm install express cors helmet
\`\`\`

## الهيكل الأساسي

\`\`\`javascript
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const app = express()

app.use(helmet())
app.use(cors())
app.use(express.json())

app.get('/api/users', (req, res) => {
  res.json({ users: [] })
})

app.listen(3000, () => {
  console.log('Server running on port 3000')
})
\`\`\`

## أفضل الممارسات

- استخدم HTTP Status Codes الصحيحة
- قم بالتحقق من المدخلات
- أضف معالجة الأخطاء
- وثق API الخاص بك

## الخلاصة

بناء APIs جيدة يتطلب تخطيطاً وفهماً لأفضل الممارسات.
    `,
  },
  {
    slug: "react-performance-optimization",
    title: "تحسين أداء تطبيقات React",
    date: "2023-12-20",
    summary: "استراتيجيات وتقنيات فعّالة لتحسين أداء تطبيقات React وتجربة المستخدم.",
    coverImage: "/react-performance-dashboard.jpg",
    readingTime: "10 دقائق",
    tags: ["React", "الأداء", "تحسين"],
    content: `
# تحسين أداء تطبيقات React

الأداء الجيد ضروري لتجربة مستخدم ممتازة. إليك أهم التقنيات.

## React.memo

استخدم React.memo لمنع إعادة الرسم غير الضرورية:

\`\`\`tsx
const ExpensiveComponent = React.memo(({ data }) => {
  return <div>{/* محتوى معقد */}</div>
})
\`\`\`

## useMemo و useCallback

\`\`\`tsx
const memoizedValue = useMemo(() => {
  return computeExpensiveValue(a, b)
}, [a, b])

const memoizedCallback = useCallback(() => {
  doSomething(a, b)
}, [a, b])
\`\`\`

## Code Splitting

قسّم الكود لتحميل أسرع:

\`\`\`tsx
const LazyComponent = React.lazy(() => import('./HeavyComponent'))

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <LazyComponent />
    </Suspense>
  )
}
\`\`\`

## الخلاصة

تحسين الأداء عملية مستمرة. قس دائماً قبل وبعد التحسينات.
    `,
  },
  {
    slug: "typescript-best-practices",
    title: "أفضل ممارسات TypeScript في 2024",
    date: "2023-12-10",
    summary: "نصائح وأنماط برمجية لكتابة كود TypeScript نظيف وقابل للصيانة.",
    coverImage: "/typescript-code-editor.jpg",
    readingTime: "7 دقائق",
    tags: ["TypeScript", "أفضل الممارسات", "تطوير"],
    content: `
# أفضل ممارسات TypeScript في 2024

TypeScript يجعل الكود أكثر أماناً وقابلية للصيانة.

## استخدم Strict Mode

\`\`\`json
{
  "compilerOptions": {
    "strict": true
  }
}
\`\`\`

## تعريف الأنواع بشكل صحيح

\`\`\`typescript
// بدلاً من any
interface User {
  id: number
  name: string
  email: string
}

function getUser(id: number): Promise<User> {
  return fetch(\`/api/users/\${id}\`).then(res => res.json())
}
\`\`\`

## استخدم Union Types

\`\`\`typescript
type Status = 'pending' | 'approved' | 'rejected'

interface Task {
  title: string
  status: Status
}
\`\`\`

## Generic Types

\`\`\`typescript
function getFirst<T>(arr: T[]): T | undefined {
  return arr[0]
}
\`\`\`

## الخلاصة

TypeScript استثمار في جودة الكود على المدى الطويل.
    `,
  },
]

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((p) => p.slug)
}

export function getAllBlogTags(): string[] {
  const tags = new Set<string>()
  blogPosts.forEach((p) => p.tags.forEach((t) => tags.add(t)))
  return Array.from(tags)
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString("ar-EG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}
