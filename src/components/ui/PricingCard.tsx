import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import type { PricingPlan } from '../../types'
import Button from './Button'
import Badge from './Badge'

interface PricingCardProps {
  plan: PricingPlan
  billing: 'monthly' | 'yearly'
}

export default function PricingCard({ plan, billing }: PricingCardProps) {
  const price = plan.price[billing]
  const showPrice = plan.period !== 'custom pricing' && plan.period !== 'forever'

  return (
    <motion.div
      className={`relative rounded-2xl p-8 flex flex-col h-full ${
        plan.highlighted
          ? 'bg-ink-900 text-white shadow-glow lg:scale-105 border border-brand-500/40'
          : 'bg-white border border-ink-100 shadow-sm'
      }`}
      whileHover={{ scale: plan.highlighted ? 1.07 : 1.02 }}
      animate={plan.highlighted ? { scale: [1, 1.015, 1] } : undefined}
      transition={
        plan.highlighted
          ? { scale: { duration: 3, repeat: Infinity, ease: 'easeInOut' } }
          : { duration: 0.2 }
      }
    >
      {plan.highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <Badge variant="amber" className="bg-spark text-ink-900 border-none shadow-md uppercase tracking-wide">
            Most popular
          </Badge>
        </div>
      )}

      <h3 className={`text-xl font-semibold mb-1 ${plan.highlighted ? 'text-white' : 'text-ink-900'}`}>
        {plan.name}
      </h3>
      <p className={`text-sm mb-6 ${plan.highlighted ? 'text-ink-200' : 'text-ink-400'}`}>{plan.description}</p>

      <div className="mb-6">
        {showPrice ? (
          <div className="flex items-end gap-1">
            <span className={`text-4xl font-bold ${plan.highlighted ? 'text-white' : 'text-ink-900'}`}>
              ${price}
            </span>
            <span className={`text-sm pb-1 ${plan.highlighted ? 'text-ink-300' : 'text-ink-400'}`}>
              / {plan.period}
            </span>
          </div>
        ) : (
          <div className={`text-2xl font-bold ${plan.highlighted ? 'text-white' : 'text-ink-900'}`}>
            {plan.period === 'forever' ? '$0' : 'Custom'}
            <span className={`block text-sm font-normal mt-1 ${plan.highlighted ? 'text-ink-300' : 'text-ink-400'}`}>
              {plan.period}
            </span>
          </div>
        )}
      </div>

      <ul className="space-y-3 mb-8 flex-1">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm">
            <Check
              className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.highlighted ? 'text-spark' : 'text-brand-500'}`}
              strokeWidth={2.5}
            />
            <span className={plan.highlighted ? 'text-ink-100' : 'text-ink-600'}>{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        variant={plan.highlighted ? 'primary' : 'outline'}
        className={`w-full ${
          plan.highlighted ? 'bg-spark text-ink-900 hover:bg-spark-light shadow-none' : ''
        }`}
      >
        {plan.cta}
      </Button>
    </motion.div>
  )
}
