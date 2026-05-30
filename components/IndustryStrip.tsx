const INDUSTRIES = [
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
  const items = [...INDUSTRIES, ...INDUSTRIES];
  return (
    <section
      aria-label="Industries we serve"
      className="relative border-y border-white/5 bg-brand-navy-700/40"
    >
      <div className="overflow-hidden">
        <div className="flex w-max animate-marquee gap-10 py-4 text-[11px] uppercase tracking-[0.22em] text-brand-cream/55">
          {items.map((item, i) => (
            <span key={`${item}-${i}`} className="flex items-center gap-10">
              <span className="font-sans font-medium">
                {item}
              </span>
              <span
                aria-hidden
                className="h-1.5 w-1.5 rounded-full bg-brand-red"
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
