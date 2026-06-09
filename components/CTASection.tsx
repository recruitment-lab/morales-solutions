import Link from "next/link";
import { ArrowUpRight, Briefcase, Users2 } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative bg-brand-navy-light py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-orange">
            Get Started
          </p>
          <h2 className="mt-4 font-sans text-3xl font-bold leading-tight tracking-tight text-brand-cream sm:text-4xl md:text-5xl">
            Pick your <span className="brand-gradient-text">next move.</span>
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Services — Highlighted, primary CTA */}
          <Link
            href="/contact"
            className="group relative isolate overflow-hidden rounded-2xl p-[1.5px] brand-gradient-bg transition hover:scale-[1.005]"
          >
            <div className="relative h-full rounded-[15px] bg-brand-navy-700 p-8 sm:p-10">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-brand-red/25 blur-3xl"
              />
              <div className="relative flex h-full flex-col">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-md brand-gradient-bg text-surface">
                    <Briefcase size={20} />
                  </span>
                  <span className="rounded-full border border-brand-red/40 bg-brand-red/10 px-3 py-1 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-cream">
                    Request Services · Priority
                  </span>
                </div>
                <h3 className="mt-6 font-sans text-2xl font-bold leading-tight text-brand-cream sm:text-3xl">
                  Build a dedicated team for your operations.
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-brand-cream/75">
                  Tell us about your scope, volume, and compliance needs. We
                  return with a tailored deployment plan within 24 business
                  hours.
                </p>
                <div className="mt-auto pt-8">
                  <span className="brand-cta inline-flex items-center gap-2 px-5 py-3 font-sans text-sm">
                    Request Services
                    <ArrowUpRight
                      size={16}
                      className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* Careers — Secondary CTA */}
          <Link
            href="/careers"
            className="group relative overflow-hidden rounded-2xl border border-brand-cream/10 bg-brand-navy-700/40 p-8 transition hover:border-brand-cream/30 hover:bg-brand-navy-700/70 sm:p-10"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-brand-cream/10 bg-brand-navy/60 text-brand-orange">
                <Users2 size={20} />
              </span>
              <span className="rounded-full border border-brand-cream/10 bg-brand-cream/5 px-3 py-1 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-cream/80">
                Apply for a Role
              </span>
            </div>
            <h3 className="mt-6 font-sans text-2xl font-bold leading-tight text-brand-cream sm:text-3xl">
              Join the network. Grow your career.
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-brand-cream/70">
              Submit your details and our talent team will reach out as
              positions open in your area of expertise.
            </p>
            <div className="mt-8">
              <span className="brand-cta inline-flex items-center gap-2 px-5 py-3 font-sans text-sm">
                Apply Now
                <ArrowUpRight
                  size={16}
                  className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
