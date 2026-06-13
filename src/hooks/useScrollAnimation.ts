import { useEffect, useState } from 'react'

/**
 * Returns true once the page has been scrolled past the given threshold.
 * Used to toggle the navbar's background/shadow on scroll.
 */
export function useScrolled(threshold = 8): boolean {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > threshold)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return scrolled
}

/**
 * Shared Framer Motion variants for scroll-triggered "fade in up" reveals.
 */
export const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
}

export const fadeInSide = (direction: 'left' | 'right') => ({
  hidden: { opacity: 0, x: direction === 'left' ? -48 : 48 },
  visible: { opacity: 1, x: 0 },
})

export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren, delayChildren },
  },
})
