"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";

type VantaInstance = { destroy: () => void };

export default function Hero() {
  const vantaRef = useRef<HTMLDivElement | null>(null);
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const el = document.documentElement;
    const update = () => setIsLight(el.classList.contains("light"));
    update();
    const observer = new MutationObserver(update);
    observer.observe(el, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let effect: VantaInstance | null = null;
    let cancelled = false;

    (async () => {
      if (!vantaRef.current) return;
      const THREE = await import("three");
      const GLOBE = (await import("vanta/dist/vanta.globe.min")).default;
      if (cancelled || !vantaRef.current) return;
      effect = GLOBE({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        scale: 1.0,
        scaleMobile: 1.0,
        backgroundColor: isLight ? 0xfff8f2 : 0x0d1536,
        color: 0xff6600, // primary points — brand orange
        color2: 0xb30634, // connecting lines — muted warm gray
        size: 0.55,
        points: 10,
        spacing: 15,
        showDots: true,
      }) as VantaInstance;
    })();

    return () => {
      cancelled = true;
      effect?.destroy();
    };
  }, [isLight]);

  return (
    <section className="relative isolate overflow-hidden">
      {/* Vanta canvas mount */}
      <div
        ref={vantaRef}
        aria-hidden
        className="absolute inset-0 -z-10 bg-brand-navy-light"
      />
      {/* Overlays for legibility */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-linear-to-b from-brand-navy-light/30 via-brand-navy-light/40 to-brand-navy-light"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-grid opacity-[0.35]"
      />

      <div className="relative mx-auto flex min-h-svh max-w-7xl flex-col items-start justify-center px-5 pt-32 pb-20 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-red/40 bg-brand-red/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-cream/90 font-sans backdrop-blur-sm">
            <ShieldCheck size={14} className="text-brand-orange" />
            Compliant · Scalable · Secure
          </div>

          <h1 className="mt-6 font-sans text-4xl font-extrabold leading-[1.05] tracking-tight text-brand-cream sm:text-5xl md:text-6xl lg:text-7xl">
            Operate with <span className="brand-gradient-text">certainty.</span>
            <br />
            Scale without risk.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-brand-cream/75 sm:text-lg">
            We deploy specialized teams in compliance operations, customer
            support, and sales — regulated-market-ready, brand-aligned, and
            operational from day one.
          </p>

          <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Link
              href="/contact"
              className="brand-cta group px-6 py-3.5 text-sm font-sans"
            >
              Build Your Team
              <ArrowRight
                size={16}
                className="transition group-hover:translate-x-0.5"
              />
            </Link>
            <Link
              href="#why-us"
              className="inline-flex items-center gap-2 rounded-md border border-brand-cream/25 bg-brand-cream/2 px-6 py-3.5 text-sm font-semibold text-brand-cream backdrop-blur-sm transition hover:border-brand-cream/50 hover:bg-brand-cream/6 font-sans"
            >
              Our Methodology
            </Link>
          </div>

          {/* Trust indicators */}
          <dl className="mt-14 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4">
            {[
              { v: "98.6%", k: "Compliance rate" },
              { v: "72h", k: "Median deployment" },
              { v: "40+", k: "Regulated industries" },
              { v: "0", k: "Regulatory sanctions" },
            ].map((s) => (
              <div key={s.k} className="border-l border-brand-red/60 pl-3">
                <dt className="font-sans text-2xl font-bold text-brand-cream sm:text-3xl">
                  {s.v}
                </dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-brand-cream/60">
                  {s.k}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* fade to next section */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-b from-transparent to-brand-navy-light"
      />
    </section>
  );
}
