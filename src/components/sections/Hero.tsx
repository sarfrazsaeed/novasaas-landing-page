import { motion } from 'framer-motion'
import { ArrowRight, PlayCircle, CheckCircle2, Mail, Slack, FileSpreadsheet } from 'lucide-react'
import { hero } from '../../data/content'
import Button from '../ui/Button'
import Badge from '../ui/Badge'

const headlineContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

const headlineLine = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden bg-ink-900"
    >
      {/* Mesh gradient + grid background */}
      <div className="absolute inset-0 bg-mesh-glow" aria-hidden="true" />
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-50" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" aria-hidden="true" />

      <div className="container-page relative grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: copy */}
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex justify-center lg:justify-start"
          >
            <Badge variant="purple" className="bg-white/10 text-violet-200 border-white/10">
              {hero.eyebrow}
            </Badge>
          </motion.div>

          <motion.h1
            variants={headlineContainer}
            initial="hidden"
            animate="visible"
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white"
          >
            {hero.headlineLines.map((line) => (
              <motion.span key={line} variants={headlineLine} className="block">
                {line.split(' ').map((word, i) =>
                  word.toLowerCase() === 'busywork.' || word.toLowerCase() === 'matters.' ? (
                    <span key={i} className="text-spark">
                      {word}{' '}
                    </span>
                  ) : (
                    <span key={i}>{word} </span>
                  ),
                )}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 text-base sm:text-lg text-ink-200 max-w-xl mx-auto lg:mx-0"
          >
            {hero.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <Button variant="primary" size="lg" href="#pricing" className="bg-spark text-ink-900 hover:bg-spark-light shadow-none">
              {hero.primaryCta}
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" href="#how-it-works" className="border-white/20 text-white hover:bg-white/10">
              <PlayCircle className="w-5 h-5" />
              {hero.secondaryCta}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0"
          >
            {hero.stats.map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <p className="text-2xl sm:text-3xl font-bold text-white font-display">{stat.value}</p>
                <p className="text-xs text-ink-300 mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: signature workflow graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="relative hidden lg:block"
        >
          <WorkflowGraphic />
        </motion.div>
      </div>
    </section>
  )
}

/**
 * Signature visual: an abstract automation "flow" — three connected
 * tool nodes feeding into a central NovaSaaS hub, with an animated
 * pulse running along the connecting lines to suggest live automation.
 */
function WorkflowGraphic() {
  return (
    <div className="relative h-[420px] w-full">
      {/* Connecting lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 480 420" fill="none" aria-hidden="true">
        <path d="M90 80 C 220 80, 220 210, 300 210" stroke="#7C3AED" strokeOpacity="0.35" strokeWidth="2" fill="none" />
        <path d="M90 210 C 200 210, 200 210, 300 210" stroke="#4F46E5" strokeOpacity="0.35" strokeWidth="2" fill="none" />
        <path d="M90 340 C 220 340, 220 210, 300 210" stroke="#F5B400" strokeOpacity="0.35" strokeWidth="2" fill="none" />

        {/* animated pulses — travel along each connecting curve via cx/cy keyframes */}
        <motion.circle
          r="4"
          fill="#7C3AED"
          animate={{ cx: [90, 220, 300], cy: [80, 80, 210] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay: 0 }}
        />
        <motion.circle
          r="4"
          fill="#4F46E5"
          animate={{ cx: [90, 200, 300], cy: [210, 210, 210] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
        />
        <motion.circle
          r="4"
          fill="#F5B400"
          animate={{ cx: [90, 220, 300], cy: [340, 340, 210] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
        />
      </svg>


      {/* Source nodes */}
      <FloatingNode className="top-10 left-0" icon={Mail} label="Inbox" delay={0} />
      <FloatingNode className="top-[180px] left-0" icon={Slack} label="Slack" delay={0.4} />
      <FloatingNode className="top-[320px] left-0" icon={FileSpreadsheet} label="Sheets" delay={0.8} />

      {/* Central hub */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[170px] left-[260px] w-32 h-32 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col items-center justify-center gap-2 shadow-glow"
      >
        <span className="w-10 h-10 rounded-xl bg-spark text-ink-900 flex items-center justify-center font-display font-bold">
          N
        </span>
        <span className="text-[11px] font-mono text-ink-200 tracking-widest">RUNNING</span>
        <span className="flex items-center gap-1 text-xs text-emerald-300">
          <CheckCircle2 className="w-3.5 h-3.5" /> Live
        </span>
      </motion.div>
    </div>
  )
}

function FloatingNode({
  className,
  icon: Icon,
  label,
  delay,
}: {
  className: string
  icon: typeof Mail
  label: string
  delay: number
}) {
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay }}
      className={`absolute ${className} flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-md rounded-xl px-3 py-2.5 text-sm text-white`}
    >
      <Icon className="w-4 h-4 text-violet-300" />
      {label}
    </motion.div>
  )
}
