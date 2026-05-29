"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import Link from "next/link";

type VantaEffect = { destroy: () => void };

const stats = [
  { value: "98.6%", label: "Compliance rate" },
  { value: "72h", label: "Median deployment" },
  { value: "40+", label: "Regulated industries" },
  { value: "0", label: "Regulatory sanctions" },
];

export default function Hero() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const effectRef = useRef<VantaEffect | null>(null);

  useEffect(() => {
    // `cancelled` is scoped per-effect-run so React Strict Mode's
    // mount → unmount → remount cycle in dev can't leave us with a
    // destroyed globe that never gets recreated.
    let cancelled = false;

    import("vanta/dist/vanta.globe.min")
      .then((mod) => {
        if (cancelled || effectRef.current || !vantaRef.current) return;
        const VANTA = (mod.default ?? mod) as (opts: Record<string, unknown>) => VantaEffect;
        try {
          effectRef.current = VANTA({
            el: vantaRef.current,
            THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            backgroundColor: 0x0a0f23,
            color: 0xb30634,
            color2: 0xff6600,
            size: 1.0,
            points: 10.0,
            maxDistance: 22.0,
            spacing: 16.0,
            showDots: true,
          });
        } catch (err) {
          // Globe is decorative — keep the gradient fallback if init fails.
          console.error("Vanta globe failed to initialize:", err);
        }
      })
      .catch((err) => {
        console.error("Vanta globe failed to load:", err);
      });

    return () => {
      cancelled = true;
      if (effectRef.current) {
        effectRef.current.destroy();
        effectRef.current = null;
      }
    };
  }, []);

  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden bg-brand-navy">
      {/* Vanta globe canvas */}
      <div ref={vantaRef} className="absolute inset-0 -z-10" aria-hidden="true" />

      {/* Gradient overlays for legibility + brand warmth */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-navy/40 via-brand-navy/30 to-brand-navy"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_15%_30%,rgba(179,6,52,0.35),transparent_60%),radial-gradient(50%_50%_at_85%_70%,rgba(255,102,0,0.25),transparent_60%)]"
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-7xl px-5 pt-28 pb-16 sm:px-8 sm:pt-32">
        <div className="max-w-3xl animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-cream backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
            Compliant · Scalable · Secure
          </span>

          <h1 className="mt-6 font-sans text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl">
            Operate with{" "}
            <span className="text-gradient-brand">certainty.</span>
            <br />
            Scale without risk.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-white/75">
            We deploy specialized teams in compliance operations, customer
            support, and sales — regulated-market-ready, brand-aligned, and
            operational from day one.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-red to-brand-orange px-7 py-3.5 text-base font-semibold text-white shadow-xl shadow-brand-red/30 transition-transform hover:-translate-y-0.5"
            >
              Build Your Team
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
            <Link
              href="/#why-us"
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              Our Methodology
            </Link>
          </div>

          {/* Trust indicators */}
          <dl className="mt-14 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-6 border-t border-white/10 pt-8 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="text-2xl font-extrabold text-white sm:text-3xl">
                  {s.value}
                </dt>
                <dd className="mt-1 text-xs font-medium uppercase tracking-wide text-white/55">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
