const pillars = [
  {
    num: "01",
    title: "Regulatory Alignment",
    body: "Teams onboarded with jurisdiction-specific compliance training. GDPR, HIPAA, FCA, and CFPB-ready — and continuously audit-ready.",
    icon: (
      <path d="M12 2 4 6v6c0 4.4 3.2 8.2 8 10 4.8-1.8 8-5.6 8-10V6l-8-4Zm-3 10 2 2 4-4" />
    ),
  },
  {
    num: "02",
    title: "Brand-Faithful Execution",
    body: "We design communication frameworks around your voice, escalation policies, and customer commitments — never generic scripts.",
    icon: (
      <path d="M3 11l18-5v12L3 14v-3Zm0 0v6m9-9.5v9" />
    ),
  },
  {
    num: "03",
    title: "Elastic Scale, Fixed Quality",
    body: "From 5-agent pilots to 500-seat deployments. Performance floors are contractually guaranteed — not aspirational benchmarks.",
    icon: (
      <path d="M3 3v18h18M7 15l4-4 3 3 5-6" />
    ),
  },
  {
    num: "04",
    title: "Performance Accountability",
    body: "Every engagement is governed by SLAs, real-time reporting, and dedicated QA oversight, so quality is visible and measurable.",
    icon: (
      <path d="M12 2v4m0 12v4m10-10h-4M6 12H2m15.07-7.07-2.83 2.83M9.76 14.24l-2.83 2.83m0-12.14 2.83 2.83m4.48 4.48 2.83 2.83" />
    ),
  },
];

const benefits = [
  "Compliance integrity by design",
  "Encrypted data handling & NDA-first",
  "Dedicated supervisory oversight",
  "Transparent, benchmarked pricing",
];

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="relative scroll-mt-20 bg-surface-soft py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-brand-red">
            Strategic Partnership
          </span>
          <h2 className="mt-4 font-sans text-3xl font-extrabold leading-tight tracking-tight text-brand-navy sm:text-4xl">
            The operational foundation your{" "}
            <span className="text-gradient-brand">growth demands.</span>
          </h2>
          <p className="mt-5 text-lg leading-8 text-brand-navy/65">
            We are not a staffing agency. We embed as a functional extension of
            your organization — accountable to your metrics, fluent in your
            compliance obligations, and aligned to your customer experience
            standards.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <article
              key={p.num}
              className="group relative overflow-hidden rounded-2xl border border-black/5 bg-white p-7 shadow-[0_2px_24px_-12px_rgba(10,15,35,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_-20px_rgba(179,6,52,0.4)]"
            >
              <span className="absolute right-5 top-4 font-sans text-4xl font-extrabold text-surface-muted transition-colors group-hover:text-brand-cream">
                {p.num}
              </span>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-red to-brand-orange text-white shadow-md shadow-brand-red/25">
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {p.icon}
                </svg>
              </div>
              <h3 className="mt-5 font-sans text-lg font-bold text-brand-navy">
                {p.title}
              </h3>
              <p className="mt-2.5 text-sm leading-6 text-brand-navy/60">
                {p.body}
              </p>
              <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand-red to-brand-orange transition-transform duration-300 group-hover:scale-x-100" />
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3">
          {benefits.map((b) => (
            <span
              key={b}
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-navy/70"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 text-brand-red"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
