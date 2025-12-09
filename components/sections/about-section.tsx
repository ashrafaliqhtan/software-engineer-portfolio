"use client"
import { Code2, Database, Cloud, Brain, User, Sparkles } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "تطوير الويب",
    description: "بناء تطبيقات ويب متكاملة باستخدام React، Next.js، وNode.js",
    color: "primary",
  },
  {
    icon: Database,
    title: "قواعد البيانات",
    description: "تصميم وإدارة قواعد بيانات SQL وNoSQL بكفاءة عالية",
    color: "accent",
  },
  {
    icon: Cloud,
    title: "الحوسبة السحابية",
    description: "نشر وإدارة التطبيقات على AWS، GCP، وAzure",
    color: "primary",
  },
  {
    icon: Brain,
    title: "تعلم الآلة",
    description: "تطوير نماذج ML وتحليل البيانات باستخدام Python",
    color: "accent",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="relative border-t border-border py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          {/* Content */}
          <div className="opacity-0 animate-fade-in-right">
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm text-primary mb-6">
              <User className="h-4 w-4" />
              <span>نبذة عني</span>
            </div>

            <h2 className="text-4xl font-bold text-foreground">
              مهندس برمجيات شغوف
              <br />
              <span className="gradient-text">بالابتكار والإبداع</span>
            </h2>

            <div className="mt-8 space-y-5 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                مهندس برمجيات شغوف بأكثر من <span className="text-primary font-semibold">5 سنوات</span> من الخبرة في
                تطوير تطبيقات الويب والحلول البرمجية المتكاملة. أعمل حالياً كمطور رئيسي في شركة تقنية رائدة.
              </p>
              <p className="leading-relaxed">
                تخرجت من كلية الحاسبات والمعلومات، وحصلت على شهادات احترافية متعددة في مجال التطوير والحوسبة السحابية.
                أؤمن بأهمية التعلم المستمر ومشاركة المعرفة مع المجتمع التقني.
              </p>
              <p className="leading-relaxed">
                في وقت فراغي، أساهم في مشاريع مفتوحة المصدر وأكتب مقالات تقنية لمساعدة المطورين الآخرين في رحلتهم
                المهنية.
              </p>
            </div>

            {/* Quick stats */}
            <div className="mt-10 flex flex-wrap gap-8">
              {[
                { value: "5+", label: "سنوات خبرة" },
                { value: "50+", label: "مشروع" },
                { value: "30+", label: "عميل" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid gap-5 sm:grid-cols-2">
            {highlights.map((item, index) => (
              <div
                key={index}
                className={`group card-hover rounded-2xl glass p-6 opacity-0 animate-fade-in-up`}
                style={{ animationDelay: `${index * 100 + 200}ms` }}
              >
                <div
                  className={`mb-5 inline-flex rounded-xl p-3.5 transition-all duration-300 ${
                    item.color === "primary"
                      ? "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:glow-primary"
                      : "bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground group-hover:glow-accent"
                  }`}
                >
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies marquee */}
        <div className="mt-20 overflow-hidden">
          <p className="text-center text-sm text-muted-foreground mb-6">التقنيات التي أتقنها</p>
          <div className="flex gap-8 animate-marquee">
            {[
              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
              "Node.js",
              "Python",
              "PostgreSQL",
              "MongoDB",
              "AWS",
              "Docker",
              "GraphQL",
              "TailwindCSS",
            ].map((tech, index) => (
              <div
                key={index}
                className="flex items-center gap-2 whitespace-nowrap glass rounded-full px-5 py-2.5 text-sm font-medium text-muted-foreground"
              >
                <Sparkles className="h-4 w-4 text-primary" />
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
