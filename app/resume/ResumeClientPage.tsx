"use client"
import {
  Download,
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Github,
  ExternalLink,
  Calendar,
  Award,
  GraduationCap,
  Briefcase,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const personalInfo = {
  name: "أشرف محمد",
  title: "مهندس برمجيات أول",
  location: "القاهرة، مصر",
  email: "ashraf@example.com",
  phone: "+20 100 000 0000",
  linkedin: "linkedin.com/in/ashraf",
  github: "github.com/ashraf",
  website: "ashraf.dev",
  summary: `مهندس برمجيات شغوف بأكثر من 5 سنوات من الخبرة في تطوير تطبيقات الويب والحلول البرمجية المتكاملة. متخصص في تطوير الواجهات الأمامية والخلفية باستخدام تقنيات حديثة مثل React، Next.js، وNode.js. قادر على قيادة فرق التطوير وتسليم مشاريع عالية الجودة في الوقت المحدد.`,
}

const experiences = [
  {
    company: "شركة تك سوليوشنز",
    role: "مهندس برمجيات أول",
    location: "القاهرة، مصر",
    startDate: "يناير 2022",
    endDate: "الحالي",
    responsibilities: [
      "قيادة فريق من 5 مطورين في تطوير منصة SaaS للتجارة الإلكترونية",
      "تصميم وتنفيذ بنية Microservices باستخدام Node.js وDocker",
      "تحسين أداء التطبيق بنسبة 40% من خلال تحسين الاستعلامات وCaching",
      "إجراء مراجعات الكود وتدريب المطورين الجدد",
    ],
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Docker", "AWS"],
  },
  {
    company: "شركة ديجيتال ويب",
    role: "مطور Full Stack",
    location: "القاهرة، مصر",
    startDate: "مارس 2020",
    endDate: "ديسمبر 2021",
    responsibilities: [
      "تطوير تطبيقات ويب متعددة للعملاء في قطاعات مختلفة",
      "بناء RESTful APIs وتكامل مع أنظمة الدفع الإلكتروني",
      "تنفيذ اختبارات وحدة واختبارات تكامل لضمان جودة الكود",
      "التعاون مع فرق التصميم لتحويل التصاميم إلى واجهات تفاعلية",
    ],
    techStack: ["React", "Express.js", "MongoDB", "TailwindCSS", "Jest"],
  },
  {
    company: "شركة ستارت آب إنوفيت",
    role: "مطور واجهات أمامية",
    location: "الإسكندرية، مصر",
    startDate: "يونيو 2019",
    endDate: "فبراير 2020",
    responsibilities: [
      "تطوير واجهات مستخدم تفاعلية باستخدام React وRedux",
      "تحسين تجربة المستخدم وإمكانية الوصول (Accessibility)",
      "تنفيذ تصاميم متجاوبة لجميع أحجام الشاشات",
      "المشاركة في اجتماعات Agile/Scrum اليومية",
    ],
    techStack: ["React", "Redux", "SASS", "Webpack", "Git"],
  },
]

const education = [
  {
    institution: "جامعة القاهرة",
    degree: "بكالوريوس علوم الحاسب",
    startDate: "2015",
    endDate: "2019",
    grade: "جيد جداً مع مرتبة الشرف",
    notes: "مشروع التخرج: نظام ذكاء اصطناعي لتحليل المشاعر في النصوص العربية",
  },
]

const certifications = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    link: "#",
  },
  {
    title: "Meta Front-End Developer",
    issuer: "Meta (Coursera)",
    date: "2022",
    link: "#",
  },
  {
    title: "Google Cloud Professional",
    issuer: "Google Cloud",
    date: "2021",
    link: "#",
  },
]

const languages = [
  { name: "العربية", level: "اللغة الأم" },
  { name: "الإنجليزية", level: "متقدم (IELTS 7.5)" },
  { name: "الفرنسية", level: "مبتدئ" },
]

const skills = {
  "لغات البرمجة": ["JavaScript", "TypeScript", "Python", "Java", "SQL"],
  "تطوير الواجهات": ["React", "Next.js", "Vue.js", "TailwindCSS", "HTML/CSS"],
  "تطوير الخوادم": ["Node.js", "Express", "NestJS", "FastAPI", "GraphQL"],
  "قواعد البيانات": ["PostgreSQL", "MongoDB", "Redis", "MySQL"],
  "DevOps & Cloud": ["Docker", "Kubernetes", "AWS", "GCP", "CI/CD"],
  الأدوات: ["Git", "VS Code", "Figma", "Jira", "Postman"],
}

export default function ResumeClientPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Print Styles - Hidden on screen */}
      <style jsx global>{`
        @media print {
          .no-print { display: none !important; }
          body { font-size: 11pt; }
          .print-section { page-break-inside: avoid; }
        }
      `}</style>

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Download Button */}
        <div id="download" className="no-print mb-8 flex justify-end">
          <Button onClick={() => window.print()} className="gap-2">
            <Download className="h-4 w-4" />
            تحميل كـ PDF
          </Button>
        </div>

        {/* Header / Personal Info */}
        <header className="print-section rounded-xl border border-border bg-card p-8">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <div className="h-24 w-24 overflow-hidden rounded-full border-4 border-primary/20 bg-muted">
              <img
                src="/professional-male-software-engineer-portrait-with-.jpg"
                alt={personalInfo.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-foreground">{personalInfo.name}</h1>
              <p className="mt-1 text-xl text-primary">{personalInfo.title}</p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {personalInfo.location}
                </span>
                <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-1 hover:text-primary">
                  <Mail className="h-4 w-4" />
                  {personalInfo.email}
                </a>
                <span className="flex items-center gap-1">
                  <Phone className="h-4 w-4" />
                  <span dir="ltr">{personalInfo.phone}</span>
                </span>
              </div>
              <div className="mt-2 flex flex-wrap gap-4 text-sm">
                <a
                  href={`https://${personalInfo.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-muted-foreground hover:text-primary"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
                <a
                  href={`https://${personalInfo.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-muted-foreground hover:text-primary"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
                <a
                  href={`https://${personalInfo.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-muted-foreground hover:text-primary"
                >
                  <ExternalLink className="h-4 w-4" />
                  {personalInfo.website}
                </a>
              </div>
            </div>
          </div>
          <p className="mt-6 leading-relaxed text-muted-foreground">{personalInfo.summary}</p>
        </header>

        {/* Experience */}
        <section className="print-section mt-8">
          <div className="mb-6 flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">الخبرات العملية</h2>
          </div>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="rounded-xl border border-border bg-card p-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-foreground">{exp.role}</h3>
                    <p className="text-primary">{exp.company}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{exp.location}</p>
                  </div>
                  <div className="flex items-center gap-1 rounded-full bg-secondary px-3 py-1 text-sm text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {exp.startDate} - {exp.endDate}
                  </div>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="print-section mt-8">
          <div className="mb-6 flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">التعليم</h2>
          </div>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index} className="rounded-xl border border-border bg-card p-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-foreground">{edu.degree}</h3>
                    <p className="text-primary">{edu.institution}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{edu.grade}</p>
                  </div>
                  <div className="flex items-center gap-1 rounded-full bg-secondary px-3 py-1 text-sm text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {edu.startDate} - {edu.endDate}
                  </div>
                </div>
                {edu.notes && <p className="mt-4 text-sm text-muted-foreground">{edu.notes}</p>}
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="print-section mt-8">
          <h2 className="mb-6 text-2xl font-bold text-foreground">المهارات التقنية</h2>
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <h3 className="mb-3 font-semibold text-foreground">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="print-section mt-8">
          <div className="mb-6 flex items-center gap-2">
            <Award className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">الشهادات</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, index) => (
              <div key={index} className="rounded-xl border border-border bg-card p-4">
                <h3 className="font-semibold text-foreground">{cert.title}</h3>
                <p className="text-sm text-primary">{cert.issuer}</p>
                <p className="mt-1 text-sm text-muted-foreground">{cert.date}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Languages */}
        <section className="print-section mt-8">
          <h2 className="mb-6 text-2xl font-bold text-foreground">اللغات</h2>
          <div className="flex flex-wrap gap-4">
            {languages.map((lang, index) => (
              <div key={index} className="rounded-xl border border-border bg-card px-6 py-4">
                <h3 className="font-semibold text-foreground">{lang.name}</h3>
                <p className="text-sm text-muted-foreground">{lang.level}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
