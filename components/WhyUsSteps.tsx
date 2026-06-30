'use client'

import { motion } from 'framer-motion'
import { BarChart3, Search, Users2 } from 'lucide-react'

const steps = [
  {
    id: '01',
    title: 'Discovery & Audit',
    description:
      'We analyze your operational bottlenecks and talent needs.',
    icon: Search,
  },
  {
    id: '02',
    title: 'Custom Matching & Integration',
    description:
      'We source, vet, and integrate professionals aligned with your specific KPIs and culture.',
    icon: Users2,
  },
  {
    id: '03',
    title: 'Continuous Optimization',
    description:
      'We monitor performance, manage reporting, and scale the team as you grow.',
    icon: BarChart3,
  },
]

export default function WhyUsSteps() {
  return (
    <section id="how-we-work" className="relative scroll-mt-24 overflow-hidden bg-brand-navy-light py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-red/5 blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-14 max-w-3xl">
          <p className="font-jakarta text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-orange">
            How We Work
          </p>
          <h2 className="mt-4 font-jakarta text-3xl font-bold leading-tight tracking-tight text-brand-cream sm:text-4xl md:text-5xl">
            Three steps built around your operations.
          </h2>
          <p className="mt-4 max-w-2xl font-roboto text-base leading-relaxed text-brand-cream/65 sm:text-lg">
            A structured process designed to reduce friction, improve fit, and keep performance compounding as you scale.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.article
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl border border-brand-cream/10 bg-brand-cream/2 p-8 transition-all duration-500 hover:border-brand-red/30"
            >
              <div className="absolute top-0 right-0 h-32 w-32 bg-brand-red/5 blur-3xl opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative z-10">
                <div className="mb-8 flex items-start justify-between">
                  <div className="rounded-lg bg-brand-red/10 p-3 text-brand-red transition-transform duration-500 group-hover:scale-110">
                    <step.icon size={28} />
                  </div>
                  <span className="font-jakarta text-4xl font-black text-brand-cream/70 transition-colors group-hover:text-brand-red/30">
                    {step.id}
                  </span>
                </div>

                <h3 className="mb-4 font-jakarta text-xl font-bold text-brand-cream transition-colors group-hover:text-brand-red">
                  {step.title}
                </h3>
                <p className="font-roboto leading-relaxed text-brand-cream/55 transition-colors group-hover:text-brand-cream/75">
                  {step.description}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 h-1 w-0 bg-linear-to-r from-brand-red to-brand-orange transition-all duration-500 group-hover:w-full" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
