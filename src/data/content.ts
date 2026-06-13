import {
  Zap,
  Workflow,
  PlugZap,
  ShieldCheck,
  BarChart3,
  Users,
  Settings2,
  Rocket,
} from 'lucide-react'
import type { NavItem, Feature, Step, PricingPlan, Testimonial, FAQItem } from '../types'

export const siteConfig = {
  name: 'NovaSaaS',
  tagline: 'Automate your workflow, effortlessly',
  description:
    'NovaSaaS connects your tools, automates repetitive work, and gives your team hours back every week — no code required.',
}

export const navItems: NavItem[] = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
]

export const hero = {
  eyebrow: 'Now with AI-powered workflow suggestions',
  headlineLines: ['Automate the busywork.', 'Focus on what matters.'],
  subheadline:
    'NovaSaaS connects the tools your team already uses and turns repetitive tasks into automated workflows — so you can spend less time on admin and more time building.',
  primaryCta: 'Start free trial',
  secondaryCta: 'Watch demo',
  stats: [
    { value: '12,000+', label: 'Teams automated' },
    { value: '4.2M', label: 'Tasks run monthly' },
    { value: '98%', label: 'Uptime SLA' },
  ],
}

export const features: Feature[] = [
  {
    icon: Workflow,
    title: 'Visual workflow builder',
    description:
      'Drag, drop, and connect steps on a canvas. No code needed to build automations that fit the way your team already works.',
  },
  {
    icon: PlugZap,
    title: '120+ integrations',
    description:
      'Connect Slack, Notion, Gmail, Stripe, HubSpot, and dozens more in a few clicks. New integrations ship every month.',
  },
  {
    icon: Zap,
    title: 'Instant triggers',
    description:
      'React to events the moment they happen — new sign-ups, form submissions, payments, and more, processed in real time.',
  },
  {
    icon: BarChart3,
    title: 'Built-in analytics',
    description:
      'See exactly how much time and money each workflow saves with clear, exportable run history and reporting.',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise-grade security',
    description:
      'SOC 2 Type II compliant with role-based access, audit logs, and encryption at rest and in transit.',
  },
  {
    icon: Users,
    title: 'Built for teams',
    description:
      'Shared workspaces, commenting, and version history make it easy to collaborate on automations across departments.',
  },
]

export const steps: Step[] = [
  {
    number: 1,
    title: 'Connect your tools',
    description:
      'Link the apps your team already uses — email, CRM, spreadsheets, chat — in just a couple of clicks.',
    icon: PlugZap,
  },
  {
    number: 2,
    title: 'Build your workflow',
    description:
      'Use the visual builder to set triggers, conditions, and actions. Start from a template or build from scratch.',
    icon: Settings2,
  },
  {
    number: 3,
    title: 'Launch and relax',
    description:
      'Turn it on and let NovaSaaS handle the rest. Monitor every run from a single dashboard, anytime.',
    icon: Rocket,
  },
]

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Free',
    price: { monthly: 0, yearly: 0 },
    period: 'forever',
    description: 'For individuals exploring automation for the first time.',
    features: [
      '3 active workflows',
      '500 tasks per month',
      'Core integrations',
      'Community support',
      '7-day run history',
    ],
    highlighted: false,
    cta: 'Get started free',
  },
  {
    name: 'Pro',
    price: { monthly: 29, yearly: 24 },
    period: 'per user / month',
    description: 'For growing teams that want to automate without limits.',
    features: [
      'Unlimited workflows',
      '50,000 tasks per month',
      'All 120+ integrations',
      'Priority email support',
      '90-day run history',
      'Team collaboration tools',
    ],
    highlighted: true,
    cta: 'Start free trial',
  },
  {
    name: 'Enterprise',
    price: { monthly: 0, yearly: 0 },
    period: 'custom pricing',
    description: 'For organisations with advanced security and scale needs.',
    features: [
      'Everything in Pro',
      'Unlimited tasks',
      'SSO & SCIM provisioning',
      'Dedicated success manager',
      'Custom SLAs',
      'Audit logs & advanced permissions',
    ],
    highlighted: false,
    cta: 'Contact sales',
  },
]

export const testimonials: Testimonial[] = [
  {
    name: 'Amelia Hart',
    role: 'Head of Operations',
    company: 'Northwind Retail',
    avatar: 'AH',
    quote:
      'NovaSaaS took over our order-to-fulfilment handoffs in a single afternoon. What used to take three people most of the morning now runs itself before we even open the office.',
    rating: 5,
  },
  {
    name: 'Daniel Cho',
    role: 'Engineering Manager',
    company: 'Brightline Labs',
    avatar: 'DC',
    quote:
      'We tried two other automation tools before this one. The visual builder is the first one our whole team actually understood without a training session.',
    rating: 5,
  },
  {
    name: 'Priya Nair',
    role: 'Founder',
    company: 'Studio Loom',
    avatar: 'PN',
    quote:
      'As a five-person studio, NovaSaaS basically gave us an extra teammate. Client onboarding, invoicing reminders, and reporting all run on autopilot now.',
    rating: 5,
  },
]

export const faqItems: FAQItem[] = [
  {
    question: 'Do I need to know how to code to use NovaSaaS?',
    answer:
      'No. NovaSaaS is built around a visual, drag-and-drop workflow builder. Most teams launch their first automation in under fifteen minutes without writing any code.',
  },
  {
    question: 'Which tools and apps does NovaSaaS integrate with?',
    answer:
      'NovaSaaS connects with 120+ popular tools including Slack, Gmail, Notion, HubSpot, Stripe, Google Sheets, and Airtable. New integrations are added every month based on customer requests.',
  },
  {
    question: 'What happens if I go over my monthly task limit?',
    answer:
      "We'll notify you before you reach your limit so you can upgrade your plan or pause non-critical workflows. Your existing automations keep running — we never delete your data or workflows.",
  },
  {
    question: 'Can I cancel or change my plan at any time?',
    answer:
      'Yes. You can upgrade, downgrade, or cancel your subscription at any time from your account settings. Changes take effect at the start of your next billing cycle.',
  },
  {
    question: 'Is my data secure with NovaSaaS?',
    answer:
      'Yes. NovaSaaS is SOC 2 Type II compliant. All data is encrypted in transit and at rest, and Enterprise plans include single sign-on, audit logs, and granular permission controls.',
  },
  {
    question: 'Do you offer a free trial for the Pro plan?',
    answer:
      'Yes, every new account gets a 14-day free trial of the Pro plan with no credit card required. You can downgrade to the Free plan at any time after your trial ends.',
  },
]

export const footerLinks = {
  product: [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Integrations', href: '#features' },
    { label: 'Changelog', href: '#' },
  ],
  company: [
    { label: 'About', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Contact', href: '#' },
  ],
  resources: [
    { label: 'Documentation', href: '#' },
    { label: 'Help Centre', href: '#' },
    { label: 'API Reference', href: '#' },
    { label: 'Community', href: '#' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Security', href: '#' },
  ],
}

