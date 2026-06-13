import { motion } from 'framer-motion'
import { steps } from '../../data/content'
import AnimatedSection from '../ui/AnimatedSection'

const cardVariants = {
  hidden: (custom: 'left' | 'center' | 'right') => ({
    opacity: 0,
    x: custom === 'left' ? -40 : custom === 'right' ? 40 : 0,
    y: custom === 'center' ? 40 : 0,
  }),
  visible: { opacity: 1, x: 0, y: 0 },
}

const positions: ('left' | 'center' | 'right')[] = ['left', 'center', 'right']

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-surface-light">
      <div className="container-page">
        <AnimatedSection className="text-center">
          <span className="eyebrow justify-center mb-4">Get started in minutes</span>
          <h2 className="section-heading">Three steps to your first automation</h2>
          <p className="section-subtitle">
            No onboarding calls, no setup fees. Most teams have their first workflow live the same day they
            sign up.
          </p>
        </AnimatedSection>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-10 left-0 right-0 h-px">
            <div className="container-page h-px relative">
              <div className="absolute left-[16.6%] right-[16.6%] top-0 h-px bg-ink-200" />
            </div>
          </div>

          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                custom={positions[index]}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
                className="relative text-center md:text-left"
              >
                <div className="relative z-10 w-20 h-20 mx-auto md:mx-0 rounded-2xl bg-ink-900 text-spark flex items-center justify-center mb-6 shadow-glow">
                  <Icon className="w-8 h-8" />
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-spark text-ink-900 text-xs font-bold flex items-center justify-center font-mono">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-ink-900 mb-2">{step.title}</h3>
                <p className="text-sm text-ink-400 leading-relaxed max-w-xs mx-auto md:mx-0">
                  {step.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
