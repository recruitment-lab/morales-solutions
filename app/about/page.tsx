import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Compass,
  HeartHandshake,
  ScanSearch,
  Target,
} from "lucide-react";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "About Us — Morales Solutions",
  description:
    "Our mission, vision, and the core values that define how Morales Solutions builds strategic outsourcing partnerships rooted in transparency, efficiency, and bilateral respect.",
};

const VALUES = [
  {
    id: "01",
    title: "Precision & Trust",
    icon: ScanSearch,
    points: [
      {
        label: "Attention to Detail",
        text: "We don't settle for just meeting requirements; we strive for operational excellence.",
      },
      {
        label: "Trust",
        text: "The foundation of every partnership. We build secure environments through radical transparency, honesty, and strict adherence to our promises with both clients and collaborators.",
      },
    ],
  },
  {
    id: "02",
    title: "Human Alignment",
    icon: HeartHandshake,
    points: [
      {
        label: "Operational Empathy",
        text: "We deeply understand our clients' challenges and, with equal priority, we listen to, protect, and foster the well-being and development of our team.",
      },
      {
        label: "Bilateral Respect",
        text: "We demand and offer dignified, fair, and professional treatment in all directions: from us to the client, from the client to our staff, and vice versa. Our people's dignity is non-negotiable.",
      },
    ],
  },
];

export default function AboutPage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-navy-light">
        <div className="radial-accent absolute inset-0" aria-hidden />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-red/20 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-brand-orange/15 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16">
          <div className="max-w-3xl">
            <p className="font-jakarta text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-orange">
              About Morales Solutions
            </p>
            <h1 className="mt-4 font-jakarta text-4xl font-bold leading-[1.05] tracking-tight text-brand-cream sm:text-5xl md:text-6xl">
              A strategic bridge of{" "}
              <span className="brand-gradient-text">value.</span>
            </h1>
            <p className="mt-6 max-w-2xl font-roboto text-lg leading-relaxed text-brand-cream/70">
              We connect businesses with exceptional professionals under a
              non-negotiable standard of transparency, efficiency, and bilateral
              respect.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative bg-surface py-12 sm:py-16">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-linear-to-br from-surface via-surface to-surface-soft"
        />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="py-10 sm:py-12">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:items-center">
              {/* Image */}
              <div className="relative h-[320px] overflow-hidden rounded-xl lg:h-[420px]">
                <Image
                  src="/images/mission-vision.webp"
                  alt="Mission and Vision"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-surface/35 to-transparent" />
              </div>

              {/* Text Content */}
              <div className="space-y-0 lg:pl-2">
                <div className="pb-8">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-md brand-gradient-bg text-surface">
                      <Target size={18} />
                    </span>
                    <span className="font-jakarta text-xs font-bold uppercase tracking-[0.2em] text-brand-orange">
                      Mission
                    </span>
                  </div>
                  <p className="max-w-2xl font-roboto text-lg leading-relaxed text-brand-navy/75">
                    To optimize our clients&apos; operational capacity and growth
                    through top-tier outsourcing solutions. We are committed to
                    building a strategic bridge of value, connecting businesses
                    with exceptional professionals under a non-negotiable
                    standard of transparency, efficiency, and bilateral respect.
                  </p>
                </div>

                <div className="flex items-center py-1" aria-hidden>
                  <div className="h-px flex-1 bg-linear-to-r from-transparent via-brand-red/35 to-brand-orange/80" />
                  <div className="h-px flex-1 bg-linear-to-l from-transparent via-brand-red/35 to-brand-orange/80" />
                </div>

                <div className="pt-8">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-brand-navy/10 bg-brand-cream/60 text-brand-red">
                      <Compass size={18} />
                    </span>
                    <span className="font-jakarta text-xs font-bold uppercase tracking-[0.2em] text-brand-orange/80">
                      Vision
                    </span>
                  </div>
                  <p className="max-w-2xl font-roboto text-lg leading-relaxed text-brand-navy/70">
                    To be the global benchmark in strategic outsourcing,
                    recognized for transforming the industry by proving that
                    maximum operational efficiency and a human-centric approach
                    coexist to drive success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="relative overflow-hidden bg-brand-navy-light py-12 sm:py-16">
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-red/5 blur-[120px]"
        />
        <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="font-jakarta text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-orange">
              What We Stand For
            </p>
            <h2 className="mt-4 font-jakarta text-3xl font-bold leading-tight tracking-tight text-brand-cream sm:text-4xl md:text-5xl">
              Our 2 core values.
            </h2>
          </div>

          <div className="space-y-10 lg:space-y-12">
            {VALUES.map((value, index) => (
              <article
                key={value.id}
                className="grid gap-8 lg:grid-cols-2 lg:gap-12 lg:items-center"
                style={{ direction: index % 2 === 1 ? "rtl" : "ltr" }}
              >
                {/* Content */}
                <div style={{ direction: "ltr" }} className="">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-lg bg-brand-red/10 p-3 text-brand-red">
                      <value.icon size={24} />
                    </div>
                    <span className="font-jakarta text-4xl font-black text-brand-cream/70">
                      {value.id}
                    </span>
                  </div>

                  <h3 className="mb-4 font-jakarta text-2xl font-bold text-brand-cream">
                    {value.title}
                  </h3>

                  <ul className="space-y-4">
                    {value.points.map((point) => (
                      <li key={point.label} className="space-y-2">
                        <p className="font-jakarta text-xs font-semibold uppercase tracking-[0.18em] text-brand-orange">
                          {point.label}
                        </p>
                        <p className="font-roboto text-sm leading-relaxed text-brand-cream/70">
                          {point.text}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image */}
                <div className="relative h-[300px] lg:h-[360px] overflow-hidden rounded-xl border border-brand-cream/10">
                  <Image
                    src={
                      index === 0
                        ? "/images/group-of-people-working-upper-view.webp"
                        : "/images/group-of-people-working-side-view.webp"
                    }
                    alt={value.title}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-brand-navy-light/50 to-transparent" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Philosophy Style */}
      <section className="relative bg-surface py-10 sm:py-12">
        {/* Subtle gradient accent */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-linear-to-br from-surface via-surface to-surface-soft"
        />

        <div className="relative mx-auto max-w-4xl px-5 lg:px-8">
          <div className="text-center">
            <h2 className="font-jakarta text-3xl font-bold leading-tight tracking-tight text-brand-navy sm:text-4xl md:text-5xl">
              Let&apos;s build your{" "}
              <span className="brand-gradient-text">operational advantage.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-brand-navy/75 font-roboto">
              Partner with a team that treats your standards as their own.
            </p>

            <div className="mt-8 flex items-center justify-center">
              <Image
                src="/icons/center-wave.png"
                alt=""
                aria-hidden="true"
                width={240}
                height={40}
                className="h-7 w-auto opacity-80 sm:h-8"
              />
            </div>

            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-linear-to-r from-brand-red to-transparent" />
              <Link
                href="/contact"
                className="brand-cta group inline-flex px-6 py-3.5 font-sans text-sm"
              >
                Schedule a Discovery Call
                <ArrowUpRight
                  size={16}
                  className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
              <div className="h-px w-12 bg-linear-to-l from-brand-red to-transparent" />
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
