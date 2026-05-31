import Link from "next/link";
import { ArrowUpRight, Briefcase, Users2 } from "lucide-react";

const SERVICES = [
  "Compliance & Regulatory Operations — KYC, AML, document review, audit support",
  "Customer Support — Tier 1–3 across voice, chat, and email",
  "Sales Operations — Inbound qualification, outbound prospecting, pipeline management",
  "Dedicated QA & Supervisory Oversight included in every engagement",
  "Encrypted data handling and NDA-first policies",
];

const CAREERS = [
  "Compliance review, fraud operations, regulatory reporting",
  "Customer experience with structured advancement pathways",
  "Sales and business development with transparent incentives",
  "Continuous regulatory training and industry certifications",
  "Market-benchmarked compensation — no grey areas",
];

export default function TwoBlocks() {
  return (
    <section
      id="services"
      className="relative scroll-mt-24 bg-brand-navy py-24 sm:py-32"
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

        <div className="grid gap-6 lg:grid-cols-5">
          {/* Services — highlighted (3/5 width on desktop) */}
          <article className="relative overflow-hidden rounded-2xl border border-brand-red/40 bg-gradient-to-br from-brand-navy-700 to-brand-navy p-8 shadow-[0_24px_80px_-32px_rgba(179,6,52,0.5)] sm:p-10 lg:col-span-3">
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
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md brand-gradient-bg text-brand-cream">
                  <Briefcase size={18} />
                </span>
                <span className="rounded-full border border-brand-cream/20 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-cream/85">
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
          </article>

          {/* Careers (2/5 width) */}
          <article className="relative overflow-hidden rounded-2xl border border-white/10 bg-brand-cream p-8 sm:p-10 lg:col-span-2">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-brand-navy text-brand-cream">
                <Users2 size={18} />
              </span>
              <span className="rounded-full border border-brand-navy/15 bg-brand-navy/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-navy/80">
                For Professionals
              </span>
            </div>

            <h3 className="mt-6 font-sans text-2xl font-bold leading-tight text-brand-navy sm:text-3xl">
              Build a career in <br className="hidden sm:block" />
              high-stakes operations.
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-brand-navy/75">
              Join a network of professionals placed with leading organizations
              in finance, healthcare, and technology. We invest in your
              development — because your performance is our reputation.
            </p>

            <ul className="mt-6 space-y-2.5">
              {CAREERS.map((c) => (
                <li
                  key={c}
                  className="flex gap-3 text-sm leading-relaxed text-brand-navy/85"
                >
                  <span
                    aria-hidden
                    className="mt-2 inline-block h-px w-4 flex-none bg-brand-red"
                  />
                  <span>{c}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/careers"
              className="brand-cta group mt-8 px-5 py-3 font-sans text-sm"
            >
              View Open Positions
              <ArrowUpRight
                size={16}
                className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
