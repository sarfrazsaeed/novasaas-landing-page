import { ArrowRight } from 'lucide-react'
import AnimatedSection from '../ui/AnimatedSection'
import Button from '../ui/Button'

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-ink-900 section-padding">
      <div className="absolute inset-0 bg-mesh-glow" aria-hidden="true" />
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-40" aria-hidden="true" />

      <AnimatedSection className="container-page relative text-center">
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
          Ready to give your team hours back?
        </h2>
        <p className="mt-4 text-base sm:text-lg text-ink-200 max-w-xl mx-auto">
          Join 12,000+ teams already automating their busywork with NovaSaaS. Set up your first workflow in
          minutes — no credit card required.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="primary" size="lg" href="#pricing" className="bg-spark text-ink-900 hover:bg-spark-light shadow-none">
            Start your free trial
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button variant="outline" size="lg" href="#faq" className="border-white/20 text-white hover:bg-white/10">
            Read the FAQ
          </Button>
        </div>
      </AnimatedSection>
    </section>
  )
}
