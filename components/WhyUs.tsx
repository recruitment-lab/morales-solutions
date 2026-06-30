'use client'

import { Shield } from 'lucide-react'

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
        <div id="comparisonContainer" className="relative mb-20 min-h-[520px] overflow-hidden rounded-2xl border border-brand-red/40 bg-linear-to-br from-brand-navy-700 to-brand-navy-light">
          {/* Balanced scale background image */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-center bg-no-repeat bg-contain opacity-[0.1]"
            style={{ backgroundImage: "url('/icons/balanza.svg')" }}
          />

          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-red/20 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-brand-orange/15 blur-3xl"
          />

          <div className="relative z-10 grid min-h-[520px] grid-cols-1 gap-px  md:grid-cols-2">
            {/* Traditional Outsourcing */}
            <div className="flex h-full flex-col justify-center bg-brand-navy-light/5 p-8 sm:p-10">
              <span className="font-jakarta text-xs font-bold uppercase tracking-[0.2em] text-brand-cream/40">
                Traditional Outsourcing
              </span>
              <p className="mt-5 font-roboto text-lg leading-relaxed text-brand-cream/45">
                High turnover, zero cultural alignment, cost-cutting at the
                expense of quality, purely transactional.
              </p>
            </div>

            {/* Morales Solutions */}
            <div className="relative flex h-full flex-col justify-center bg-brand-navy-700/5 p-8 sm:p-10">
              <div className="absolute left-0 top-0 h-full w-1 bg-linear-to-b from-brand-red to-brand-orange" />
              <span className="font-jakarta text-xs font-bolder uppercase tracking-[0.2em] text-brand-orange">
                Morales Solutions
              </span>
              <p className="mt-5 font-roboto text-lg leading-relaxed text-brand-cream">
                Bilateral respect, strict vetting, long-term retention, and
                radical transparency. We don&apos;t just move personnel; we
                build operational infrastructure.
              </p>

              <div className="mt-7">
                <ul className="relative grid gap-4 md:grid-cols-2 md:gap-8">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-y-1 left-1/2 hidden w-px -translate-x-1/2 bg-linear-to-b from-transparent via-brand-cream/15 to-transparent md:block"
                  />
                  <li className="flex gap-2.5">
                    <span
                      aria-hidden
                      className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-orange shadow-[0_0_14px_rgba(255,102,0,0.4)]"
                    />
                    <div>
                      <p className="font-jakarta text-[10px] font-bold uppercase tracking-[0.18em] text-brand-orange">
                        Data Privacy &amp; NDA Standards
                      </p>
                      <p className="mt-1.5 max-w-sm font-roboto text-xs leading-relaxed text-brand-cream/72">
                        Strict compliance with data protection protocols, confidentiality controls, and NDA-first operating standards.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-2.5">
                    <span
                      aria-hidden
                      className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-orange shadow-[0_0_14px_rgba(255,102,0,0.4)]"
                    />
                    <div>
                      <p className="font-jakarta text-[10px] font-bold uppercase tracking-[0.18em] text-brand-orange">
                        CRM &amp; System Compliance
                      </p>
                      <p className="mt-1.5 max-w-sm font-roboto text-xs leading-relaxed text-brand-cream/72">
                        Zero friction with your existing tech stack, with clean handoffs, structured access, and backend discipline.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
