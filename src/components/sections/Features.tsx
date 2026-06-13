import { motion } from 'framer-motion'
import { features } from '../../data/content'
import FeatureCard from '../ui/FeatureCard'
import { staggerContainer } from '../../hooks/useScrollAnimation'
import AnimatedSection from '../ui/AnimatedSection'

export default function Features() {
  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-page">
        <AnimatedSection className="text-center">
          <span className="eyebrow justify-center mb-4">Everything you need</span>
          <h2 className="section-heading">Built for how modern teams actually work</h2>
          <p className="section-subtitle">
            From quick wins to complex multi-step automations, NovaSaaS gives your team the tools to
            eliminate busywork without writing code.
          </p>
        </AnimatedSection>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
