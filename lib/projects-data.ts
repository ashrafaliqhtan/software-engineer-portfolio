export interface Project {
  slug: string
  title: string
  shortDescription: string
  longDescription: string
  coverImage: string
  galleryImages: string[]
  techStack: string[]
  repoLink: string
  liveLink: string
  year: string
  tags: string[]
  role: string
  metrics: string
  features: string[]
  challenges: string[]
}

export const projects: Project[] = [
  {
    slug: "task-management-system",
    title: "نظام إدارة المهام التعاوني",
    shortDescription: "منصة ويب لإدارة فرق التطوير بميزات تتبع المهام، لوحات Kanban، وإخطارات في الوقت الحقيقي.",
    longDescription: `
نظام متكامل لإدارة المهام والمشاريع مصمم لفرق التطوير البرمجي. يوفر النظام واجهة سهلة الاستخدام لتتبع المهام، تعيين المسؤوليات، ومراقبة تقدم المشاريع.

يتضمن النظام لوحات Kanban تفاعلية تسمح بسحب وإفلات المهام بين المراحل المختلفة، مع إشعارات فورية لجميع أعضاء الفريق عند حدوث أي تغييرات.

تم بناء النظام باستخدام تقنيات حديثة لضمان الأداء العالي والقابلية للتوسع، مع التركيز على تجربة المستخدم السلسة.
    `,
    coverImage: "/task-management-dashboard-kanban-board.jpg",
    galleryImages: ["/task-management-dashboard-kanban-board.jpg", "/data-analytics-dashboard-charts-graphs.jpg"],
    techStack: ["React", "Next.js", "Node.js", "PostgreSQL", "WebSocket", "TailwindCSS", "Prisma"],
    repoLink: "https://github.com/ashraf/task-system",
    liveLink: "https://tasks.example.com",
    year: "2024",
    tags: ["إدارة المشاريع", "SaaS", "Full Stack"],
    role: "مطور رئيسي",
    metrics: "زيادة كفاءة الفريق بنسبة 30%",
    features: [
      "لوحات Kanban تفاعلية مع السحب والإفلات",
      "إشعارات فورية باستخدام WebSocket",
      "نظام صلاحيات متقدم للمستخدمين",
      "تقارير وإحصائيات تفصيلية",
      "تكامل مع GitHub وSlack",
      "واجهة متعددة اللغات",
    ],
    challenges: [
      "تحسين أداء WebSocket لآلاف المستخدمين المتزامنين",
      "تصميم قاعدة بيانات قابلة للتوسع",
      "ضمان تجربة مستخدم سلسة على جميع الأجهزة",
    ],
  },
  {
    slug: "ecommerce-platform",
    title: "منصة التجارة الإلكترونية",
    shortDescription: "متجر إلكتروني متكامل مع نظام دفع آمن، إدارة المخزون، ولوحة تحكم للبائعين.",
    longDescription: `
منصة تجارة إلكترونية شاملة تدعم multiple vendors مع نظام دفع متكامل عبر Stripe. تتضمن المنصة لوحة تحكم متقدمة للبائعين لإدارة منتجاتهم وطلباتهم.

النظام يدعم إدارة المخزون بشكل آلي، مع تنبيهات عند انخفاض الكميات، ونظام تقييمات ومراجعات للمنتجات.

تم تصميم الواجهة لتكون سريعة الاستجابة ومتوافقة مع جميع الأجهزة، مع التركيز على تحسين معدل التحويل.
    `,
    coverImage: "/modern-ecommerce-dashboard.png",
    galleryImages: ["/modern-ecommerce-dashboard.png"],
    techStack: ["Next.js", "Stripe", "Prisma", "TailwindCSS", "PostgreSQL", "Vercel"],
    repoLink: "https://github.com/ashraf/ecommerce",
    liveLink: "https://shop.example.com",
    year: "2023",
    tags: ["التجارة الإلكترونية", "SaaS", "Full Stack"],
    role: "مطور Full Stack",
    metrics: "+10K مستخدم نشط",
    features: [
      "نظام Multi-vendor للبائعين المتعددين",
      "تكامل Stripe للدفع الآمن",
      "إدارة مخزون آلية",
      "نظام تقييمات ومراجعات",
      "لوحة تحكم متقدمة للبائعين",
      "بحث وفلترة متقدمة للمنتجات",
    ],
    challenges: ["ضمان أمان معاملات الدفع", "تحسين سرعة تحميل الصفحات مع آلاف المنتجات", "بناء نظام إشعارات موثوق"],
  },
  {
    slug: "analytics-dashboard",
    title: "لوحة تحليلات البيانات",
    shortDescription: "لوحة تحكم تفاعلية لتحليل البيانات وعرض الإحصائيات مع رسوم بيانية متقدمة.",
    longDescription: `
لوحة تحليلات بيانات متقدمة مصممة لمساعدة الشركات في فهم بياناتهم واتخاذ قرارات مبنية على المعلومات.

تدعم اللوحة استيراد البيانات من مصادر متعددة (CSV، قواعد البيانات، APIs) وتقديم رسوم بيانية تفاعلية باستخدام D3.js.

تم بناء الواجهة الخلفية باستخدام FastAPI لضمان سرعة معالجة البيانات الكبيرة.
    `,
    coverImage: "/data-analytics-dashboard-charts-graphs.jpg",
    galleryImages: ["/data-analytics-dashboard-charts-graphs.jpg"],
    techStack: ["React", "D3.js", "Python", "FastAPI", "MongoDB", "Redis"],
    repoLink: "https://github.com/ashraf/analytics",
    liveLink: "https://analytics.example.com",
    year: "2023",
    tags: ["تحليل البيانات", "Dashboard", "Full Stack"],
    role: "مطور رئيسي",
    metrics: "معالجة +1M سجل يومياً",
    features: [
      "رسوم بيانية تفاعلية مع D3.js",
      "استيراد بيانات من مصادر متعددة",
      "تقارير قابلة للتصدير (PDF، Excel)",
      "Caching ذكي لتحسين الأداء",
      "جداول بيانات تفاعلية",
      "API للتكامل مع أنظمة أخرى",
    ],
    challenges: ["معالجة ملايين السجلات بكفاءة", "تصميم رسوم بيانية تفاعلية وسريعة", "تحسين استخدام الذاكرة"],
  },
  {
    slug: "mobile-fitness-app",
    title: "تطبيق اللياقة البدنية",
    shortDescription: "تطبيق موبايل لتتبع التمارين الرياضية والنظام الغذائي مع تحديات اجتماعية.",
    longDescription: `
تطبيق لياقة بدنية متكامل يساعد المستخدمين على تحقيق أهدافهم الصحية من خلال تتبع التمارين، التغذية، والنوم.

يتضمن التطبيق نظام تحديات اجتماعية يسمح للمستخدمين بالتنافس مع أصدقائهم ومشاركة إنجازاتهم.

تم تطوير التطبيق باستخدام React Native لضمان أداء عالي على iOS وAndroid.
    `,
    coverImage: "/fitness-mobile-app-interface.png",
    galleryImages: [],
    techStack: ["React Native", "Node.js", "MongoDB", "Firebase", "Redux"],
    repoLink: "https://github.com/ashraf/fitness-app",
    liveLink: "https://play.google.com/store/apps/details?id=fitness.app",
    year: "2022",
    tags: ["تطبيقات الموبايل", "صحة ولياقة", "React Native"],
    role: "مطور موبايل",
    metrics: "+5K تحميل",
    features: [
      "تتبع التمارين والسعرات الحرارية",
      "تحديات اجتماعية مع الأصدقاء",
      "تكامل مع الأجهزة القابلة للارتداء",
      "خطط تدريب مخصصة",
      "إشعارات تذكيرية",
      "مزامنة عبر الأجهزة",
    ],
    challenges: ["تكامل مع مختلف أجهزة تتبع اللياقة", "تحسين استهلاك البطارية", "ضمان دقة حساب السعرات"],
  },
  {
    slug: "ai-chatbot",
    title: "روبوت المحادثة الذكي",
    shortDescription: "روبوت محادثة مدعوم بالذكاء الاصطناعي لخدمة العملاء مع تعلم مستمر.",
    longDescription: `
نظام chatbot متقدم مبني على تقنيات معالجة اللغة الطبيعية (NLP) لتقديم دعم فني وخدمة عملاء آلية.

يتعلم الروبوت من المحادثات السابقة لتحسين استجاباته باستمرار، مع إمكانية التحويل للدعم البشري عند الحاجة.

تم تدريب النموذج على بيانات عربية وإنجليزية لدعم العملاء في المنطقة العربية.
    `,
    coverImage: "/ai-chatbot-interface.png",
    galleryImages: [],
    techStack: ["Python", "TensorFlow", "FastAPI", "React", "PostgreSQL", "Redis"],
    repoLink: "https://github.com/ashraf/ai-chatbot",
    liveLink: "https://chatbot.example.com",
    year: "2024",
    tags: ["ذكاء اصطناعي", "NLP", "خدمة العملاء"],
    role: "مطور ML",
    metrics: "90% نسبة رضا العملاء",
    features: [
      "فهم اللغة الطبيعية (عربي/إنجليزي)",
      "تعلم مستمر من المحادثات",
      "تكامل مع أنظمة CRM",
      "لوحة تحكم للإدارة",
      "تحليلات المحادثات",
      "تصعيد للدعم البشري",
    ],
    challenges: ["بناء نموذج يفهم اللهجات العربية", "تحسين دقة الاستجابات", "معالجة المحادثات بشكل لحظي"],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug)
}

export function getProjectsByTag(tag: string): Project[] {
  return projects.filter((p) => p.tags.includes(tag))
}

export function getAllTags(): string[] {
  const tags = new Set<string>()
  projects.forEach((p) => p.tags.forEach((t) => tags.add(t)))
  return Array.from(tags)
}
