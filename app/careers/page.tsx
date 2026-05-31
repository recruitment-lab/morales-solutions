import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import PageShell from "@/components/PageShell";
import CareersForm from "@/components/CareersForm";

export const metadata: Metadata = {
  title: "Careers — Morales Solutions",
  description:
    "Build a career in high-stakes operations. Join a network of professionals placed with leading organizations in finance, healthcare, and technology.",
};

const PERKS = [
  "Market-benchmarked compensation — no grey areas",
  "Continuous regulatory training and industry certifications",
  "Structured advancement pathways across verticals",
  "Work with leading organizations in regulated markets",
];

export default function CareersPage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden">
        <div className="radial-accent absolute inset-0" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-orange">
                Apply for a Role
              </p>
              <h1 className="mt-4 font-sans text-4xl font-bold leading-[1.05] tracking-tight text-brand-cream sm:text-5xl">
                Build a career in{" "}
                <span className="brand-gradient-text">
                  high-stakes operations.
                </span>
              </h1>
              <p className="mt-5 max-w-md text-base leading-relaxed text-brand-cream/75">
                We hire detail-oriented, coachable professionals ready to
                operate alongside serious clients. Submit your profile and our
                talent team will reach out as roles open in your area.
              </p>

              <ul className="mt-8 space-y-3">
                {PERKS.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-3 text-sm text-brand-cream/80"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 flex-none text-brand-orange"
                    />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 rounded-xl border border-white/10 bg-brand-navy-700/40 p-5">
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-brand-cream/85">
                  Talent inquiries
                </p>
                <a
                  href="mailto:talent@moralessolutions.com"
                  className="mt-2 inline-block text-base font-medium text-brand-cream hover:text-brand-orange"
                >
                  talent@moralessolutions.com
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <CareersForm />
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
