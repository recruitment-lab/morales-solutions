'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight, Building2, Briefcase } from 'lucide-react'

const serviceList = [
  'Compliance & Regulatory Operations (KYC, AML)',
  'Customer Support — Tier 1–3 (Voice, Chat, Email)',
  'Sales Operations — Inbound & Outbound',
  'Dedicated QA & Supervisory Oversight',
  'Encrypted data handling and NDA-first policies',
]

const roleList = [
  'Compliance review & fraud operations',
  'Customer experience specialists',
  'Sales & business development associates',
  'Continuous regulatory training',
  'Market-benchmarked compensation',
]

export default function TwoBlocks() {
  return (
    <section id="services" className="bg-brand-navy">
      <div className="flex flex-col lg:flex-row min-h-[600px]">
        {/* Left Block - Services (Highlighted) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 p-12 md:p-24 bg-brand-cream/[0.03] border-r border-brand-cream/5 relative overflow-hidden group"
        >
          {/* Highlight Accent */}
          <div className="absolute top-0 left-0 w-1 h-full bg-brand-red group-hover:w-2 transition-all" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 text-brand-red mb-8">
              <Building2 size={24} />
              <span className="font-jakarta font-bold text-sm tracking-widest uppercase">For Organizations</span>
            </div>
            
            <h2 className="font-jakarta text-4xl font-bold text-brand-cream mb-6 leading-tight">
              Hire a team that operates like <span className="gradient-text">your own.</span>
            </h2>
            
            <p className="font-roboto text-brand-cream/60 text-lg mb-10 leading-relaxed">
              Outsource with confidence. Fully managed teams across three core verticals, governed by strict performance SLAs.
            </p>

            <ul className="space-y-4 mb-12">
              {serviceList.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-brand-cream/70 font-roboto">
                  <CheckCircle2 size={20} className="text-brand-red shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button className="px-10 py-5 bg-brand-red hover:bg-brand-red/90 text-brand-cream rounded font-jakarta font-bold flex items-center gap-3 transition-all hover:translate-x-2 shadow-lg shadow-brand-red/10">
              Schedule a Discovery Call
              <ArrowRight size={20} />
            </button>
          </div>
        </motion.div>

        {/* Right Block - Careers */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 p-12 md:p-24 bg-brand-navy relative overflow-hidden group"
        >
          <div className="relative z-10">
            <div className="flex items-center gap-3 text-brand-orange mb-8">
              <Briefcase size={24} />
              <span className="font-jakarta font-bold text-sm tracking-widest uppercase">For Professionals</span>
            </div>
            
            <h2 id="careers" className="font-jakarta text-4xl font-bold text-brand-cream mb-6 leading-tight">
              Build a career in high-stakes <span className="text-brand-orange">operations.</span>
            </h2>
            
            <p className="font-roboto text-brand-cream/60 text-lg mb-10 leading-relaxed">
              Join a network of professionals placed with leading organizations in finance, healthcare, and technology.
            </p>

            <ul className="space-y-4 mb-12">
              {roleList.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-brand-cream/70 font-roboto">
                  <CheckCircle2 size={20} className="text-brand-orange shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button className="px-10 py-5 bg-transparent border border-brand-orange/40 hover:border-brand-orange text-brand-orange rounded font-jakarta font-bold flex items-center gap-3 transition-all hover:bg-brand-orange/5">
              View Open Positions
              <ArrowRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
