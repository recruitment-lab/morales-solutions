import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import PageShell from "@/components/PageShell";
import CalendlyWidget from "@/components/CalendlyWidget";

export const metadata: Metadata = {
  title: "Request Services — Morales Solutions",
  description:
    "Build a dedicated outsourcing team for compliance, customer support, or sales. Tell us about your operation and we'll respond within 24 business hours.",
};

const HIGHLIGHTS = [
  "Tailored deployment plan within 24 business hours",
  "Encrypted, NDA-first onboarding",
  "Performance SLAs and real-time dashboards included",
  "From 5-agent pilots to 500-seat deployments",
];

export default function ContactPage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden">
        <div className="radial-accent absolute inset-0" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-orange">
                Request Services
              </p>
              <h1 className="mt-4 font-sans text-4xl font-bold leading-[1.05] tracking-tight text-brand-cream sm:text-5xl">
                Build a team that{" "}
                <span className="brand-gradient-text">operates like yours.</span>
              </h1>
              <p className="mt-5 max-w-md text-base leading-relaxed text-brand-cream/75">
                Share a few details about your scope, volume, and compliance
                requirements. A senior partner — not a sales rep — will reach
                out with next steps.
              </p>

              <ul className="mt-8 space-y-3">
                {HIGHLIGHTS.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-3 text-sm text-brand-cream/80"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 flex-none text-brand-orange"
                    />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 rounded-xl border border-white/10 bg-brand-navy-700/40 p-5">
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-brand-cream/85">
                  Prefer to reach out directly?
                </p>
                <a
                  href="mailto:hello@moralessolutions.com"
                  className="mt-2 inline-block text-base font-medium text-brand-cream hover:text-brand-orange"
                >
                  hello@moralessolutions.com
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <CalendlyWidget />
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
