import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Zap } from 'lucide-react'
import { navItems, siteConfig } from '../../data/content'
import { useScrolled } from '../../hooks/useScrollAnimation'
import Button from '../ui/Button'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const scrolled = useScrolled()

  const handleLinkClick = () => setMobileOpen(false)

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-ink-100' : 'bg-transparent'
      }`}
    >
      <nav className="container-page flex items-center justify-between h-16 sm:h-20">
        <a href="#top" className="flex items-center gap-2 font-display font-bold text-lg text-ink-900">
          <span className="w-8 h-8 rounded-lg bg-ink-900 text-spark flex items-center justify-center">
            <Zap className="w-4 h-4" fill="currentColor" />
          </span>
          {siteConfig.name}
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="btn-ghost text-sm">
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="btn-ghost text-sm">
            Log in
          </a>
          <Button variant="primary" size="sm" href="#pricing">
            Start free trial
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-ink-700"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-white border-b border-ink-100"
          >
            <div className="container-page py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleLinkClick}
                  className="px-3 py-2.5 rounded-lg text-sm font-medium text-ink-700 hover:bg-ink-50 hover:text-brand-600"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 mt-2 pt-3 border-t border-ink-100">
                <a href="#" className="px-3 py-2.5 rounded-lg text-sm font-medium text-ink-700 hover:bg-ink-50">
                  Log in
                </a>
                <Button variant="primary" size="sm" href="#pricing" className="w-full" onClick={handleLinkClick}>
                  Start free trial
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
