import { useState, type FormEvent } from 'react'
import { Twitter, Linkedin, Github, Zap, ArrowRight } from 'lucide-react'
import { footerLinks, siteConfig } from '../../data/content'
import AnimatedSection from '../ui/AnimatedSection'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
    }
  }

  return (
    <footer className="bg-ink-900 text-ink-300">
      <AnimatedSection className="container-page py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand + newsletter */}
          <div className="lg:col-span-2">
            <a href="#top" className="flex items-center gap-2 font-display font-bold text-lg text-white mb-4">
              <span className="w-8 h-8 rounded-lg bg-spark text-ink-900 flex items-center justify-center">
                <Zap className="w-4 h-4" fill="currentColor" />
              </span>
              {siteConfig.name}
            </a>
            <p className="text-sm text-ink-300 max-w-sm mb-6">{siteConfig.description}</p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-sm">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="flex-1 bg-ink-800 border border-ink-600 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-ink-400 focus:border-brand-500 focus:outline-none"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-1.5 bg-brand-500 hover:bg-brand-600 text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors duration-200"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
            {submitted && (
              <p className="text-xs text-emerald-400 mt-2" role="status">
                Thanks — you&rsquo;re on the list.
              </p>
            )}
          </div>

          {/* Link columns */}
          <FooterColumn title="Product" links={footerLinks.product} />
          <FooterColumn title="Company" links={footerLinks.company} />
          <FooterColumn title="Resources" links={footerLinks.resources} />
        </div>

        <div className="mt-12 pt-8 border-t border-ink-700 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ink-400 text-center sm:text-left">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {footerLinks.legal.map((link) => (
              <a key={link.label} href={link.href} className="text-xs text-ink-400 hover:text-white transition-colors">
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a href="#" aria-label="Twitter" className="text-ink-400 hover:text-white transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-ink-400 hover:text-white transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" aria-label="GitHub" className="text-ink-400 hover:text-white transition-colors">
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
      </AnimatedSection>
    </footer>
  )
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-white mb-4">{title}</h3>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="text-sm text-ink-300 hover:text-white transition-colors">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
