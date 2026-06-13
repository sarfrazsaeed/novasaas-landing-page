import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { faqItems } from '../../data/content'
import AnimatedSection from '../ui/AnimatedSection'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-page max-w-3xl">
        <AnimatedSection className="text-center">
          <span className="eyebrow justify-center mb-4">Frequently asked questions</span>
          <h2 className="section-heading">Still have questions?</h2>
          <p className="section-subtitle">
            Can&rsquo;t find the answer you&rsquo;re looking for? Reach out to our support team and we&rsquo;ll
            get back to you within a day.
          </p>
        </AnimatedSection>

        <div className="space-y-3">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div key={item.question} className="border border-ink-100 rounded-2xl overflow-hidden bg-white">
                <button
                  className="w-full flex items-center justify-between gap-4 text-left px-5 sm:px-6 py-4 sm:py-5"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-ink-900 text-sm sm:text-base">{item.question}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex-shrink-0 text-ink-400"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 sm:px-6 pb-4 sm:pb-5 text-sm text-ink-400 leading-relaxed">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
