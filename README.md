# Software Engineer Portfolio

A modern, responsive portfolio website built with Next.js 16, React 19, and Tailwind CSS 4. Features a clean design with dark/light mode support, blog functionality, project showcases, and more.

![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)
![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- **Modern Stack** - Built with Next.js 16, React 19, and Tailwind CSS 4
- **Dark/Light Mode** - Theme toggle with system preference detection
- **Responsive Design** - Mobile-first approach, works on all devices
- **Blog System** - Markdown-powered blog with syntax highlighting
- **Project Showcase** - Dynamic project pages with detailed case studies
- **Contact Form** - Ready-to-use contact form component
- **Resume Page** - Downloadable resume with print-friendly layout
- **SEO Optimized** - Proper meta tags and Open Graph support
- **Accessible** - WCAG compliant with proper ARIA attributes
- **Performance** - Optimized images, fonts, and lazy loading

## 📄 Pages

| Page | Description |
|------|-------------|
| `/` | Homepage with hero, about, skills, projects, testimonials, and CTA sections |
| `/projects` | Grid view of all projects |
| `/projects/[slug]` | Individual project detail pages |
| `/blog` | Blog listing page |
| `/blog/[slug]` | Individual blog post pages |
| `/contact` | Contact form and information |
| `/resume` | Interactive resume/CV page |
| `/privacy` | Privacy policy page |

## 🛠 Tech Stack

### Core
- [Next.js 16](https://nextjs.org/) - React framework with App Router
- [React 19](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS

### UI Components
- [shadcn/ui](https://ui.shadcn.com/) - Accessible component library
- [Radix UI](https://www.radix-ui.com/) - Headless UI primitives
- [Lucide React](https://lucide.dev/) - Icon library

### Additional Libraries
- [next-themes](https://github.com/pacocoursey/next-themes) - Theme management
- [React Hook Form](https://react-hook-form.com/) - Form handling
- [Zod](https://zod.dev/) - Schema validation
- [Recharts](https://recharts.org/) - Chart components
- [date-fns](https://date-fns.org/) - Date utilities

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- pnpm, npm, or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ashrafaliqhtan/software-engineer-portfolio.git
cd software-engineer-portfolio
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
# or
yarn install
```

3. Run the development server:
```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── blog/              # Blog pages
│   ├── contact/           # Contact page
│   ├── projects/          # Project pages
│   ├── resume/            # Resume page
│   ├── privacy/           # Privacy policy
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/
│   ├── sections/          # Page sections (hero, about, skills, etc.)
│   ├── blog/              # Blog-specific components
│   ├── contact/           # Contact form components
│   ├── projects/          # Project grid components
│   ├── ui/                # shadcn/ui components
│   ├── navbar.tsx         # Navigation bar
│   ├── footer.tsx         # Footer component
│   └── theme-provider.tsx # Theme context provider
├── lib/
│   ├── blog-data.tsx      # Blog post data
│   ├── projects-data.ts   # Project data
│   └── utils.ts           # Utility functions
├── public/                # Static assets and images
└── hooks/                 # Custom React hooks
```

## 🔧 Customization

### Personal Information

Update your personal information in the following files:

- `components/sections/hero-section.tsx` - Name, title, and intro
- `components/sections/about-section.tsx` - Bio and background
- `components/sections/skills-section.tsx` - Technical skills
- `components/footer.tsx` - Social links and copyright
- `app/layout.tsx` - Site metadata

### Projects

Add or modify projects in `lib/projects-data.ts`:

```typescript
export const projects = [
  {
    slug: "project-slug",
    title: "Project Title",
    description: "Short description",
    longDescription: "Detailed description...",
    image: "/project-image.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com/...",
    live: "https://example.com",
    featured: true,
  },
  // ... more projects
]
```

### Blog Posts

Add or modify blog posts in `lib/blog-data.tsx`:

```typescript
export const blogPosts = [
  {
    slug: "post-slug",
    title: "Post Title",
    excerpt: "Brief excerpt...",
    content: "Full markdown content...",
    date: "2024-01-15",
    readTime: "5 min read",
    tags: ["React", "TypeScript"],
  },
  // ... more posts
]
```

### Theme Colors

Customize colors in `app/globals.css` by modifying the CSS variables:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 3.9%;
  --primary: 0 0% 9%;
  /* ... other variables */
}

.dark {
  --background: 0 0% 3.9%;
  --foreground: 0 0% 98%;
  /* ... dark mode variables */
}
```

## 📝 Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |

## 🌐 Deployment

This project is configured for deployment on [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import the repository in Vercel
3. Deploy automatically

Or deploy with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ashraf-qahtan/portfolio)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful component library
- [Vercel](https://vercel.com) for hosting and deployment

---

**Owner**: Ashraf Ali Qahtan  
**Email**: [aq96650@gmail.com](mailto:aq96650@gmail.com)  
**GitHub**: [ashraf-qahtan](https://github.com/ashrafaliqhtan)
