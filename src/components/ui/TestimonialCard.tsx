import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import type { Testimonial } from '../../types'
import { fadeInSide } from '../../hooks/useScrollAnimation'

interface TestimonialCardProps extends Testimonial {
  direction?: 'left' | 'right'
  delay?: number
}

export default function TestimonialCard({
  name,
  role,
  company,
  avatar,
  quote,
  rating,
  direction = 'left',
  delay = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      className="bg-white rounded-2xl p-6 border border-ink-100 shadow-sm h-full flex flex-col"
      variants={fadeInSide(direction)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      <div className="flex items-center gap-1 mb-4" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-spark text-spark" />
        ))}
      </div>
      <p className="text-sm text-ink-600 leading-relaxed flex-1 mb-6">&ldquo;{quote}&rdquo;</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center font-semibold text-sm flex-shrink-0">
          {avatar}
        </div>
        <div>
          <p className="text-sm font-semibold text-ink-900">{name}</p>
          <p className="text-xs text-ink-400">
            {role} &middot; {company}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
