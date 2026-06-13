import type { ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'

export interface NavItem {
  label: string
  href: string
  external?: boolean
}

export interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

export interface Step {
  number: number
  title: string
  description: string
  icon: LucideIcon
}

export interface PricingPlan {
  name: string
  price: { monthly: number; yearly: number }
  period: string
  description: string
  features: string[]
  highlighted: boolean
  cta: string
}

export interface Testimonial {
  name: string
  role: string
  company: string
  avatar: string
  quote: string
  rating: number
}

export interface FAQItem {
  question: string
  answer: string
}

export type ButtonVariant = 'primary' | 'outline' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  children: ReactNode
  href?: string
  disabled?: boolean
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

export type AnimationDirection = 'up' | 'left' | 'right'

export interface AnimatedSectionProps {
  children: ReactNode
  direction?: AnimationDirection
  className?: string
}

export interface BadgeProps {
  children: ReactNode
  className?: string
}
