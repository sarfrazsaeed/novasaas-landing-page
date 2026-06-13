import { testimonials } from '../../data/content'
import TestimonialCard from '../ui/TestimonialCard'
import AnimatedSection from '../ui/AnimatedSection'

const directions: ('left' | 'right')[] = ['left', 'right', 'left']

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-surface-light">
      <div className="container-page">
        <AnimatedSection className="text-center">
          <span className="eyebrow justify-center mb-4">Loved by teams everywhere</span>
          <h2 className="section-heading">Don&rsquo;t just take our word for it</h2>
          <p className="section-subtitle">
            Thousands of teams use NovaSaaS to automate their busiest workflows. Here&rsquo;s what a few of
            them have to say.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              {...testimonial}
              direction={directions[index]}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
