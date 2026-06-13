import { useState } from 'react'
import { motion } from 'framer-motion'
import { pricingPlans } from '../../data/content'
import PricingCard from '../ui/PricingCard'
import AnimatedSection from '../ui/AnimatedSection'
import { staggerContainer, fadeInUp } from '../../hooks/useScrollAnimation'

export default function Pricing() {
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly')

  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container-page">
        <AnimatedSection className="text-center">
          <span className="eyebrow justify-center mb-4">Simple, transparent pricing</span>
          <h2 className="section-heading">Plans that grow with your team</h2>
          <p className="section-subtitle">
            Start free, upgrade when you need more. No hidden fees, cancel any time.
          </p>
        </AnimatedSection>

        {/* Billing toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className={`text-sm font-medium ${billing === 'monthly' ? 'text-ink-900' : 'text-ink-400'}`}>
            Monthly
          </span>
          <button
            role="switch"
            aria-checked={billing === 'yearly'}
            aria-label="Toggle yearly billing"
            onClick={() => setBilling((prev) => (prev === 'monthly' ? 'yearly' : 'monthly'))}
            className="relative w-14 h-8 rounded-full bg-ink-100 transition-colors duration-300 flex items-center px-1"
          >
            <motion.span
              layout
              className="w-6 h-6 rounded-full bg-brand-500 shadow-md"
              animate={{ x: billing === 'yearly' ? 24 : 0 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />
          </button>
          <span className={`text-sm font-medium ${billing === 'yearly' ? 'text-ink-900' : 'text-ink-400'}`}>
            Yearly
          </span>
          <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-full px-2.5 py-1">
            Save ~17%
          </span>
        </div>

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-center"
        >
          {pricingPlans.map((plan) => (
            <motion.div key={plan.name} variants={fadeInUp} transition={{ duration: 0.5 }}>
              <PricingCard plan={plan} billing={billing} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
