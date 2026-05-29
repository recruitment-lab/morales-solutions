import Link from "next/link";

const services = [
  "Compliance & Regulatory Operations — KYC, AML, document review, audit support",
  "Customer Support — Tier 1–3 across voice, chat, and email",
  "Sales Operations — qualification, outbound prospecting, pipeline management",
  "Dedicated QA & supervisory oversight on every engagement",
  "Encrypted data handling and NDA-first policies",
];

const roles = [
  "Compliance review, fraud operations & regulatory reporting",
  "Customer experience with structured advancement pathways",
  "Sales & business development with transparent incentives",
  "Continuous regulatory training and certifications",
];

function Check({ light = false }: { light?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`mt-0.5 h-5 w-5 shrink-0 ${light ? "text-brand-orange" : "text-brand-red"}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default function DualPath() {
  return (
    <section id="services" className="scroll-mt-20 bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-brand-red">
            Two Ways to Work With Us
          </span>
          <h2 className="mt-4 font-sans text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
            Hire a team — or{" "}
            <span className="text-gradient-brand">join one.</span>
          </h2>
        </div>

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-5">
          {/* PRIMARY — For Organizations (highlighted, spans more) */}
          <article className="relative overflow-hidden rounded-3xl bg-brand-navy p-8 text-white shadow-[0_30px_80px_-40px_rgba(179,6,52,0.6)] sm:p-10 lg:col-span-3">
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_70%_at_80%_0%,rgba(179,6,52,0.55),transparent_60%),radial-gradient(60%_60%_at_0%_100%,rgba(255,102,0,0.35),transparent_60%)]"
              aria-hidden="true"
            />
            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-brand-cream backdrop-blur-sm">
                  For Organizations
                </span>
                <span className="rounded-full bg-gradient-to-r from-brand-red to-brand-orange px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white shadow-lg shadow-brand-red/30">
                  Most popular
                </span>
              </div>

              <h3 className="mt-6 font-sans text-2xl font-extrabold leading-tight sm:text-3xl">
                Hire a team that operates like your own.
              </h3>
              <p className="mt-4 max-w-lg text-base leading-7 text-white/75">
                Outsource with confidence. Fully managed teams across three core
                verticals, governed by performance SLAs and built for regulated
                markets.
              </p>

              <ul className="mt-7 space-y-3.5">
                {services.map((s) => (
                  <li key={s} className="flex gap-3 text-sm leading-6 text-white/85">
                    <Check light />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-red to-brand-orange px-7 py-3.5 text-base font-semibold text-white shadow-xl shadow-brand-red/30 transition-transform hover:-translate-y-0.5"
                >
                  Request Services
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
                <span className="text-sm text-white/55">
                  Schedule a discovery call within 72 hours.
                </span>
              </div>
            </div>
          </article>

          {/* SECONDARY — For Professionals (Careers) */}
          <article
            id="careers"
            className="relative flex scroll-mt-20 flex-col overflow-hidden rounded-3xl border border-black/5 bg-surface-soft p-8 shadow-[0_2px_24px_-12px_rgba(10,15,35,0.18)] sm:p-10 lg:col-span-2"
          >
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-brand-cream/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-brand-red">
              For Professionals
            </span>

            <h3 className="mt-6 font-sans text-2xl font-extrabold leading-tight text-brand-navy">
              Build a career in high-stakes operations.
            </h3>
            <p className="mt-4 text-base leading-7 text-brand-navy/65">
              Join a network of professionals placed with leading organizations
              in finance, healthcare, and technology.
            </p>

            <ul className="mt-7 space-y-3.5">
              {roles.map((r) => (
                <li key={r} className="flex gap-3 text-sm leading-6 text-brand-navy/75">
                  <Check />
                  <span>{r}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-9">
              <Link
                href="/careers"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-brand-red px-7 py-3.5 text-base font-semibold text-brand-red transition-colors hover:bg-brand-red hover:text-white"
              >
                View Open Positions
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
