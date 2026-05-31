import { Quote } from "lucide-react";

export default function PhilosophySection() {
  return (
    <section className="relative bg-surface py-24 sm:py-32">
      {/* Subtle gradient accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-linear-to-br from-surface via-surface to-surface-soft"
      />

      <div className="relative mx-auto max-w-4xl px-5 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-brand-red/15 mb-6">
            <Quote size={24} className="text-brand-red" />
          </div>

          <h2 className="font-sans text-3xl font-bold leading-tight tracking-tight text-brand-navy sm:text-4xl md:text-5xl">
            Compliance is not a cost—
            <span className="brand-gradient-text"> it&apos;s a competitive advantage.</span>
          </h2>

          <p className="mt-8 max-w-2xl mx-auto text-lg leading-relaxed text-brand-navy/75 font-roboto">
            In regulated industries, operational excellence and regulatory certainty define winners. We build teams that embed compliance into every process, turning risk management into operational resilience.
          </p>

          <div className="mt-12 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-linear-to-r from-brand-red to-transparent" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
              Our Philosophy
            </span>
            <div className="h-px w-12 bg-linear-to-l from-brand-red to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
