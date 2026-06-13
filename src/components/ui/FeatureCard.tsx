import { motion } from 'framer-motion'
import type { Feature } from '../../types'

export default function FeatureCard({ icon: Icon, title, description }: Feature) {
  return (
    <motion.div
      className="feature-card group"
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-4 group-hover:bg-brand-500 group-hover:text-white transition-colors duration-300">
        <Icon className="w-5 h-5" strokeWidth={2} />
      </div>
      <h3 className="text-lg font-semibold text-ink-900 mb-2">{title}</h3>
      <p className="text-sm text-ink-400 leading-relaxed">{description}</p>
    </motion.div>
  )
}
