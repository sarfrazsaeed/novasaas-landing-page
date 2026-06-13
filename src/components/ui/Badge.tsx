import type { BadgeProps } from '../../types'

const variantClasses: Record<string, string> = {
  blue: 'bg-brand-50 text-brand-700 border border-brand-100',
  green: 'bg-emerald-50 text-emerald-700 border border-emerald-100',
  purple: 'bg-violet-50 text-violet-700 border border-violet-100',
  amber: 'bg-amber-50 text-amber-700 border border-amber-100',
}

export default function Badge({ children, variant = 'blue', className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
