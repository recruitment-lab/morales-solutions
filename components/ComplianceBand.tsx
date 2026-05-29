const badges = ["GDPR Ready", "HIPAA Aligned", "ISO 27001", "SOC 2 Type II"];

export default function ComplianceBand() {
  return (
    <section className="bg-white px-5 pb-24 sm:px-8 sm:pb-32">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-r from-brand-red via-brand-red-600 to-brand-orange p-8 shadow-[0_30px_80px_-40px_rgba(179,6,52,0.7)] sm:p-12">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <h3 className="font-sans text-2xl font-extrabold leading-tight text-white sm:text-3xl">
              Compliance is not a feature.
              <br />
              It is the foundation.
            </h3>
            <p className="mt-4 max-w-lg text-base leading-7 text-white/85">
              All engagements are governed by documented SOPs, role-based access
              controls, and real-time performance monitoring. Your regulatory
              exposure is our accountability.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            {badges.map((b) => (
              <span
                key={b}
                className="inline-flex items-center gap-2 rounded-full bg-brand-navy/85 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 text-brand-orange" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2 4 6v6c0 4.4 3.2 8.2 8 10 4.8-1.8 8-5.6 8-10V6l-8-4Z" />
                </svg>
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
