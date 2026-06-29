'use client'

import { motion } from 'framer-motion'
import { Shield, Target, BarChart } from 'lucide-react'

const pillars = [
  {
    id: '01',
    title: 'Regulatory Alignment',
    description: 'Teams onboarded with jurisdiction-specific compliance training. GDPR, HIPAA, FCA, CFPB-ready. Continuously audit-ready.',
    icon: Shield,
  },
  {
    id: '02',
    title: 'Brand-Faithful Execution',
    description: 'We design communication frameworks around your voice, escalation policies, and customer commitments — not generic scripts.',
    icon: Target,
  },
  {
    id: '03',
    title: 'Elastic Scale, Fixed Quality',
    description: 'From 5-agent pilots to 500-seat deployments. Performance floors are contractually guaranteed — not aspirational benchmarks.',
    icon: BarChart,
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-brand-navy-light relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-red/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-brand-red font-jakarta font-bold text-sm tracking-widest uppercase mb-4 block">
            Strategic Partnership
          </span>
          <h2 className="font-jakarta text-4xl md:text-5xl font-bold text-brand-cream leading-tight mb-6">
            The operational foundation your <span className="gradient-text">growth demands.</span>
          </h2>
          <p className="font-roboto text-brand-cream/60 text-lg leading-relaxed">
            We are not a staffing agency. We embed as a functional extension of your organization — accountable to your metrics, fluent in your compliance obligations, and aligned to your customer experience standards.
          </p>
        </div>

        {/* Comparison: Traditional Outsourcing vs Morales Solutions */}
        <div className="relative mb-20 min-h-[420px] overflow-hidden rounded-2xl border border-brand-cream/10">
          {/* Balanced scale background image */}
          <img
            aria-hidden
            alt=""
            src="/icons/balanza.svg"
            className="pointer-events-none absolute inset-0 h-full w-full object-contain opacity-[0.15]"
          />

          <div className="relative z-10 grid grid-cols-1 gap-px bg-brand-cream/10 md:grid-cols-2">
            {/* Traditional Outsourcing */}
            <div className="bg-brand-navy-light/80 p-8 sm:p-10">
              <span className="font-jakarta text-xs font-bold uppercase tracking-[0.2em] text-brand-cream/40">
                Traditional Outsourcing
              </span>
              <p className="mt-5 font-roboto text-lg leading-relaxed text-brand-cream/45">
                High turnover, zero cultural alignment, cost-cutting at the
                expense of quality, purely transactional.
              </p>
            </div>

            {/* Morales Solutions */}
            <div className="relative bg-brand-navy-700/80 p-8 sm:p-10">
              <div className="absolute left-0 top-0 h-full w-1 bg-linear-to-b from-brand-red to-brand-orange" />
              <span className="font-jakarta text-xs font-bold uppercase tracking-[0.2em] text-brand-red">
                Morales Solutions
              </span>
              <p className="mt-5 font-roboto text-lg leading-relaxed text-brand-cream">
                Bilateral respect, strict vetting, long-term retention, and
                radical transparency. We don&apos;t just move personnel; we
                build operational infrastructure.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-xl bg-brand-cream/[0.02] border border-brand-cream/10 hover:border-brand-red/30 transition-all duration-500 relative overflow-hidden"
            >
              {/* Hover Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <div className="p-3 rounded-lg bg-brand-red/10 text-brand-red group-hover:scale-110 transition-transform duration-500">
                    <pillar.icon size={28} />
                  </div>
                  <span className="font-jakarta text-4xl font-black text-brand-cream/70 group-hover:text-brand-red/30 transition-colors">
                    {pillar.id}
                  </span>
                </div>

                <h3 className="font-jakarta text-xl font-bold text-brand-cream mb-4 group-hover:text-brand-red transition-colors">
                  {pillar.title}
                </h3>
                <p className="font-roboto text-brand-cream/50 leading-relaxed group-hover:text-brand-cream/70 transition-colors">
                  {pillar.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-brand-red to-brand-orange group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
