const industries = [
  "Financial Services",
  "Healthcare",
  "Fintech",
  "Insurance",
  "Legal Process",
  "E-commerce",
  "SaaS & Technology",
  "Real Estate",
];

export default function IndustryStrip() {
  return (
    <section className="border-y border-black/5 bg-surface-muted">
      <div className="mx-auto max-w-7xl px-5 py-6 sm:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 sm:gap-x-8">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-navy/50">
            Trusted across
          </span>
          {industries.map((industry, i) => (
            <span key={industry} className="flex items-center gap-6 sm:gap-8">
              {i > 0 && (
                <span className="h-1.5 w-1.5 rounded-full bg-brand-red/50" aria-hidden="true" />
              )}
              <span className="text-sm font-medium tracking-wide text-brand-navy/65">
                {industry}
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
