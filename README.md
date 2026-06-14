# NovaSaaS — Modern SaaS Landing Page

A complete, production-ready SaaS product landing page built with **React 18, TypeScript, Tailwind CSS, and Framer Motion**.

🔗 **Live demo:** [sarfrazsaeed.github.io/novasaas-landing-page](https://sarfrazsaeed.github.io/novasaas-landing-page/)

---

## Overview

NovaSaaS is a fictional workflow-automation product used here as a showcase landing page. It demonstrates a complete, real-world front-end build: a polished hero, feature grid, process walkthrough, pricing table, testimonials, and FAQ — all fully responsive, animated, and accessible.

The project is structured so the entire page can be re-skinned for a different product or client by editing a single content file and the Tailwind design tokens, making it a practical starting point for freelance landing-page work.

## Features

- Fully responsive design (mobile, tablet, desktop)
- Sticky navbar with mobile hamburger menu
- Animated hero with staggered text reveal and a custom workflow graphic
- Feature grid with scroll-triggered animations
- Three-step "How It Works" process
- Pricing table with monthly/yearly toggle and a highlighted plan
- Customer testimonials with star ratings
- Accordion-style FAQ with smooth height animation
- Footer with newsletter signup and social links
- SEO meta tags plus Open Graph and Twitter card support
- Built with accessibility in mind: visible focus states, semantic HTML, and reduced-motion support

## Tech Stack

| Technology | Purpose |
| --- | --- |
| [React 18](https://react.dev/) | UI components |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) | Styling |
| [Framer Motion](https://www.framer.com/motion/) | Animations |
| [Vite](https://vitejs.dev/) | Build tool and dev server |
| [Lucide React](https://lucide.dev/) | Icons |

## Project Structure

```
src/
├── components/
│   ├── layout/      # Navbar, Footer
│   ├── sections/    # Hero, Features, HowItWorks, Pricing, Testimonials, FAQ, CTA
│   └── ui/          # Button, Badge, FeatureCard, PricingCard, TestimonialCard, AnimatedSection
├── data/
│   └── content.ts   # All page copy — edit this file to reuse the template for a new project
├── hooks/
│   └── useScrollAnimation.ts
├── types/
│   └── index.ts     # Shared TypeScript interfaces
├── App.tsx
└── main.tsx
```

## Getting Started

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open the URL shown in the terminal (typically `http://localhost:5173`) to view the site.

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Deploying to GitHub Pages

1. Push the project to a GitHub repository.
2. In `vite.config.ts`, set `base` to match the repository name:
   ```ts
   base: '/your-repo-name/',
   ```
3. Run the deploy script, which builds the project and publishes the `dist` folder to the `gh-pages` branch:
   ```bash
   npm run deploy
   ```
4. In the repository settings, go to **Settings → Pages** and set the source to the `gh-pages` branch.
5. The site will be live at `https://<your-username>.github.io/<your-repo-name>/`.

## Customising for a New Project

Most of the page is data-driven from a small number of files:

- **Page copy** — `src/data/content.ts`
- **Colours, fonts, and design tokens** — `tailwind.config.ts`
- **Section order** — `src/App.tsx`

Updating these three files is usually enough to retarget the entire page toward a different product or brand.

## License

This project is free to use for personal portfolios and freelance work.

---

Built by **Sarfraz Saeed** — Front-End Developer.
