import Image from "next/image";

export default function PhilosophySection() {
  return (
    <section className="relative bg-surface py-12 sm:py-16">
      {/* Subtle gradient accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-linear-to-br from-surface via-surface to-surface-soft"
      />

      <div className="relative mx-auto max-w-4xl px-5 lg:px-8">
        <div className="text-center">
          <div className="mb-6 inline-flex items-center justify-center rounded-full bg-brand-red/10 px-5 py-4 shadow-sm shadow-brand-red/10">
            <span className="select-none text-3xl leading-none text-brand-red/90 sm:text-4xl">
              “ ”
            </span>
          </div>

          <h2 className="font-sans text-3xl font-bold leading-tight tracking-tight text-brand-navy sm:text-4xl md:text-5xl">
            Compliance is not a cost—
            <span className="brand-gradient-text"> it&apos;s a competitive advantage.</span>
          </h2>

          <p className="mt-8 max-w-2xl mx-auto text-lg leading-relaxed text-brand-navy/75 font-roboto">
            In regulated industries, operational excellence and regulatory certainty define winners. We build teams that embed compliance into every process, turning risk management into operational resilience.
          </p>

          <div className="mt-10 flex items-center justify-center">
            <Image
              src="/icons/center-wave.png"
              alt=""
              aria-hidden="true"
              width={240}
              height={40}
              className="h-8 w-auto opacity-80 sm:h-10"
            />
          </div>

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
