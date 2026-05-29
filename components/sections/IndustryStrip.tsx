const industries = [
  'Financial Services',
  'Healthcare',
  'Fintech',
  'Insurance',
  'Legal Process',
  'E-commerce',
  'SaaS & Technology',
  'Real Estate',
]

export default function IndustryStrip() {
  return (
    <div className="w-full bg-brand-navy border-y border-brand-cream/5 py-4 overflow-hidden relative">
      <div className="flex items-center gap-8 whitespace-nowrap animate-infinite-scroll">
        {[...industries, ...industries].map((industry, index) => (
          <div key={index} className="flex items-center gap-8">
            <span className="font-roboto text-xs font-light uppercase tracking-[0.2em] text-brand-cream/40">
              {industry}
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-brand-red/40" />
          </div>
        ))}
      </div>

      {/* Adding a subtle gradient fade to the edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-navy to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-brand-navy to-transparent z-10" />
    </div>
  )
}
