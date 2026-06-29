"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ShieldCheck, TrendingUp, Award } from "lucide-react";

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
        backgroundColor: isLight ? 0xF5E1CD : 0x0d1536,
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
        className={`absolute inset-0 -z-10 ${isLight ? 'bg-[#F5E1CD]' : 'bg-brand-navy-light'}`}
      />
      {/* Overlays for legibility */}
      <div
        aria-hidden
        className={`absolute inset-0 -z-10 ${isLight ? 'bg-linear-to-b from-[#F5E1CD]/40 via-[#F5E1CD]/60 to-[#F5E1CD]' : 'hidden'}`}
      />
      <div
        aria-hidden
        className={`absolute inset-0 -z-10 ${isLight ? 'hidden' : 'bg-grid opacity-[0.35]'}`}
      />

      <div className="relative mx-auto flex min-h-svh max-w-7xl flex-col items-start justify-center px-5 pt-32 pb-20 lg:px-8">
        <div className="max-w-3xl">
          <div className={`inline-flex items-center gap-2 rounded-full border border-brand-red/40 bg-brand-red/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] font-sans backdrop-blur-sm ${isLight ? 'text-brand-navy/90' : 'text-brand-cream/90'}`}>
            <ShieldCheck size={14} className="text-brand-orange" />
            Compliant · Scalable · Secure
          </div>

          <h1
            className={`mt-6 font-sans text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl ${isLight ? 'text-brand-navy' : 'text-brand-cream'}`}
            style={isLight ? undefined : { textShadow: "0 2px 4px rgba(10, 15, 35, 0.42), 0 10px 24px rgba(10, 15, 35, 0.34)" }}
          >
            Strategic Outsourcing Built on <span className="brand-gradient-text">Operational Excellence.</span>
          </h1>

          <p
            className={`mt-6 max-w-2xl text-base leading-relaxed sm:text-lg ${isLight ? 'text-brand-navy/75' : 'text-brand-cream'}`}
            style={isLight ? undefined : { textShadow: "3px 2px 20px rgb(10 15 35), 0px 2px 20px rgb(10 15 35)" }}
          >
            We bridge the gap between top-tier talent and high-growth
            companies. No fluff, no compliance headaches—just efficient,
            scalable operations.
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
              className={`inline-flex items-center gap-2 rounded-md border px-6 py-3.5 text-sm font-semibold backdrop-blur-sm transition font-sans ${isLight ? 'border-brand-navy/25 bg-brand-navy/5 text-brand-navy hover:border-brand-navy/50 hover:bg-brand-navy/10' : 'border-brand-cream/25 bg-brand-cream/2 text-brand-cream hover:border-brand-cream/50 hover:bg-brand-cream/6'}`}
            >
              Our Methodology
            </Link>
          </div>

          {/* Trust indicators */}
          <dl id="trustIndicators" className="mt-14 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4">
            {[
              { v: "98.6%", k: "Compliance rate" },
              { v: "72h", k: "Median deployment" },
              { v: "$150K", k: "Revenue rescue rate" },
              { v: "15 sec", k: "Avg. answer time" },
            ].map((s) => (
              <div key={s.k} className="border-l border-brand-red/60 pl-3">
                <dt className={`font-sans text-2xl font-bold sm:text-3xl ${isLight ? 'text-brand-navy' : 'text-brand-cream'}`}>
                  {s.v}
                </dt>
                <dd className={`mt-1 text-xs uppercase tracking-wider ${isLight ? 'text-brand-navy/60' : 'text-brand-cream/60'}`}>
                  {s.k}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-12 grid w-full max-w-3xl gap-4 sm:grid-cols-2">
            {[
              {
                icon: TrendingUp,
                label: "Inside Sales Impact",
                stat: "$2M+",
                statSuffix: "annual revenue recovered",
              },
              {
                icon: Award,
                label: "Outbound Sales Performance",
                stat: "+58%",
                statSuffix: "more sales vs. other teams",
              },
            ].map((card) => (
              <div
                key={card.label}
                className="group relative overflow-hidden rounded-xl p-[1.5px] brand-gradient-bg transition hover:scale-[1.01]"
              >
                <div
                  className={`relative flex items-center gap-4 rounded-[10px] px-4 py-4 backdrop-blur-sm ${
                    isLight ? "bg-[#F5E1CD]" : "bg-brand-navy-700"
                  }`}
                >
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg brand-gradient-bg text-surface transition-transform duration-500 group-hover:scale-110">
                    <card.icon size={20} />
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-baseline gap-1.5">
                      <span className="brand-gradient-text font-sans text-2xl font-extrabold sm:text-3xl">
                        {card.stat}
                      </span>
                      <span
                        className={`truncate text-xs font-medium ${
                          isLight ? "text-brand-navy/60" : "text-brand-cream/60"
                        }`}
                      >
                        {card.statSuffix}
                      </span>
                    </div>
                    <p
                      className={`mt-0.5 text-[11px] font-semibold uppercase tracking-[0.16em] ${
                        isLight ? "text-brand-navy/70" : "text-brand-cream/70"
                      }`}
                    >
                      {card.label}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* fade to next section */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-b from-transparent ${isLight ? 'to-[#F5E1CD]' : 'to-brand-navy-light'}`}
      />
    </section>
  );
}
