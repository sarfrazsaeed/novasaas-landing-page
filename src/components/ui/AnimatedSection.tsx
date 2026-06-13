import { motion } from 'framer-motion'
import type { AnimatedSectionProps } from '../../types'

const directionOffsets: Record<string, { x?: number; y?: number }> = {
  up: { y: 32 },
  left: { x: -48 },
  right: { x: 48 },
}

/**
 * Reusable Framer Motion wrapper that fades and slides an element into
 * view as it enters the viewport. Used to keep scroll-reveal animations
 * consistent across sections.
 */
export default function AnimatedSection({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}: AnimatedSectionProps) {
  const offset = directionOffsets[direction]

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
