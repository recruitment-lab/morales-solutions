'use client'

import { motion } from 'framer-motion'

const badges = [
  'GDPR Ready',
  'HIPAA Aligned',
  'ISO 27001',
  'SOC 2 Type II',
]

export default function ComplianceBand() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-bg opacity-90" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl text-center lg:text-left">
            <h2 className="font-jakarta text-3xl md:text-4xl font-bold text-brand-cream mb-4">
              Compliance is not a feature.<br />
              <span className="text-brand-navy">It is the foundation.</span>
            </h2>
            <p className="font-roboto text-brand-navy/80 text-lg font-medium">
              All engagements are governed by documented SOPs, role-based access controls, and real-time performance monitoring. Your regulatory exposure is our accountability.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {badges.map((badge, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="px-6 py-3 rounded-full bg-brand-navy text-brand-cream font-jakarta font-bold text-sm tracking-wider shadow-xl"
              >
                {badge}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-cream/10 blur-3xl rounded-full" />
    </section>
  )
}
