# NovaSaaS — Modern SaaS Landing Page

A complete, production-ready SaaS product landing page built with **React 18, TypeScript, Tailwind CSS, and Framer Motion**.

🔗 **Live demo:** _add your GitHub Pages URL here after deploying_

![NovaSaaS preview](./preview.png)

## ✨ Features

- Fully responsive design (mobile, tablet, desktop)
- Sticky navbar with mobile hamburger menu
- Animated hero with staggered text reveal and signature workflow graphic
- 6-card features grid with scroll-triggered animations
- 3-step "How It Works" process
- Pricing table with monthly/yearly toggle and highlighted plan
- Customer testimonials with star ratings
- Accordion-style FAQ with smooth height animation
- Footer with newsletter signup and social links
- SEO meta tags + Open Graph / Twitter cards
- Built with accessibility in mind (focus states, semantic HTML, reduced-motion support)

## 🛠 Tech Stack

| Technology | Purpose |
| --- | --- |
| [React 18](https://react.dev/) | UI components |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) | Styling |
| [Framer Motion](https://www.framer.com/motion/) | Animations |
| [Vite](https://vitejs.dev/) | Build tool & dev server |
| [Lucide React](https://lucide.dev/) | Icons |

## 📂 Project Structure

```
src/
├── components/
│   ├── layout/        # Navbar, Footer
│   ├── sections/       # Hero, Features, HowItWorks, Pricing, Testimonials, FAQ, CTA
│   └── ui/              # Button, Badge, FeatureCard, PricingCard, TestimonialCard, AnimatedSection
├── data/
│   └── content.ts      # All page copy — edit this file to reuse for any client
├── hooks/
│   └── useScrollAnimation.ts
├── types/
│   └── index.ts         # Shared TypeScript interfaces
├── App.tsx
└── main.tsx
```

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the dev server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### 3. Build for production

```bash
npm run build
```

### 4. Preview the production build

```bash
npm run preview
```

## 🌐 Deploying to GitHub Pages

1. Push this project to a new GitHub repository.
2. Update `base` in `vite.config.ts` to match your repo name:
   ```ts
   base: '/your-repo-name/',
   ```
3. Install the deploy tool (already in devDependencies):
   ```bash
   npm install
   ```
4. Deploy:
   ```bash
   npm run deploy
   ```
5. In your repo settings, go to **Settings → Pages** and set the source branch to `gh-pages`.
6. Your site will be live at `https://<your-username>.github.io/<your-repo-name>/`.

## 🎨 Customising for a New Client

Almost everything is data-driven from a single file:

- **All text content**: `src/data/content.ts`
- **Colours, fonts, design tokens**: `tailwind.config.ts`
- **Page sections order**: `src/App.tsx`

This makes it easy to re-skin the entire page for a new client by editing copy and colours only.

## 📄 License

This project is free to use for personal portfolios and freelance client work.

---

Built by **Sarfraz Saeed** — Front-End Developer, Islamabad, Pakistan.
