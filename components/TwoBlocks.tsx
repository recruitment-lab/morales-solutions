import Link from "next/link";
import { ArrowUpRight, Briefcase } from "lucide-react";

const SERVICES = [
  "Compliance & Regulatory Operations — KYC, AML, document review, audit support",
  "Customer Support — Tier 1–3 across voice, chat, and email",
  "Sales Operations — Inbound qualification, outbound prospecting, pipeline management",
  "Dedicated QA & Supervisory Oversight included in every engagement",
  "Encrypted data handling and NDA-first policies",
];

const OPERATIONS_POINTS = [
  "Staff Augmentation / Dedicated Teams: Vetted professionals who integrate seamlessly into their current workflow.",
  "CRM & Operational Hygiene: Setting up structures, data compliance, and backend management (crucial for showing you handle the technical grit).",
  "Process Optimization: Managing pipelines and reporting so leadership can focus on scaling.",
];

export default function TwoBlocks() {
  return (
    <section
      id="services"
      className="relative scroll-mt-24 bg-brand-navy-light py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-14 max-w-3xl">
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-orange">
            Two Paths · One Standard
          </p>
          <h2 className="mt-4 font-sans text-3xl font-bold leading-tight tracking-tight text-brand-cream sm:text-4xl md:text-5xl">
            Hire a team — or{" "}
            <span className="brand-gradient-text">become part of one.</span>
          </h2>
        </div>

        <div className="grid gap-6">
          {/* Services — highlighted */}
          <article className="relative overflow-hidden rounded-2xl border border-brand-red/40 bg-linear-to-br from-brand-navy-700 to-brand-navy-light p-8 shadow-[0_24px_80px_-32px_rgba(179,6,52,0.5)] sm:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-red/20 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-brand-orange/15 blur-3xl"
            />

            <div className="relative">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md brand-gradient-bg text-surface">
                  <Briefcase size={18} />
                </span>
                <span className="rounded-full border border-brand-cream/20 bg-brand-cream/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-cream/85">
                  For Organizations · Most Requested
                </span>
              </div>

              <h3 className="mt-6 font-sans text-2xl font-bold leading-tight text-brand-cream sm:text-3xl md:text-4xl">
                Hire a team that operates{" "}
                <span className="brand-gradient-text">like your own.</span>
              </h3>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-brand-cream/75">
                Outsource with confidence. Fully managed teams across three core
                verticals, governed by performance SLAs and continuous quality
                review.
              </p>

              <ul className="mt-6 space-y-2.5">
                {SERVICES.map((s) => (
                  <li
                    key={s}
                    className="flex gap-3 text-sm leading-relaxed text-brand-cream/80"
                  >
                    <span
                      aria-hidden
                      className="mt-2 inline-block h-px w-4 flex-none bg-brand-red"
                    />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-8">
                <div className="flex items-center gap-3">
                  <div className="h-px flex-1 bg-linear-to-r from-brand-orange via-brand-red/60 to-transparent" />
                  <span className="rounded-full border border-brand-cream/10 bg-brand-cream/5 px-3 py-1 font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-cream/65">
                    Operational depth
                  </span>
                  <div className="h-px flex-1 bg-linear-to-l from-brand-orange via-brand-red/60 to-transparent" />
                </div>

                <ul className="mt-6 grid gap-4 lg:grid-cols-3">
                  {OPERATIONS_POINTS.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-sm leading-relaxed text-brand-cream/82"
                    >
                      <span
                        aria-hidden
                        className="mt-2 h-2 w-2 flex-none rounded-full bg-brand-orange shadow-[0_0_18px_rgba(255,102,0,0.45)]"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>

        </div>

        <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
          <Link
            href="/contact"
            className="brand-cta group px-6 py-3.5 font-sans text-sm"
          >
            Schedule a Discovery Call
            <ArrowUpRight
              size={16}
              className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
          <span className="text-xs text-brand-cream/55">
            Average response within 24 business hours
          </span>
        </div>
      </div>
    </section>
  );
}
