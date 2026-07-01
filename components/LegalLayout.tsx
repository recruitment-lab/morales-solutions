import Link from "next/link";
import type { ReactNode } from "react";

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}

export default function LegalLayout({
  title,
  lastUpdated,
  children,
}: LegalLayoutProps) {
  return (
    <section className="relative overflow-hidden bg-surface py-16 sm:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-linear-to-br from-surface via-surface to-surface-soft"
      />

      <div className="relative mx-auto max-w-3xl px-5 lg:px-8">
        <div className="mb-8 flex items-center justify-between gap-4 border-b border-brand-navy/10 pb-5">
          <div>
            <p className="font-jakarta text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-orange">
              Legal
            </p>
            <h1 className="mt-3 font-jakarta text-3xl font-bold leading-tight tracking-tight text-brand-navy sm:text-4xl">
              {title}
            </h1>
          </div>

          <Link
            href="/"
            className="hidden text-sm font-medium text-brand-navy/65 transition-colors hover:text-brand-red sm:inline-flex"
          >
            Back home
          </Link>
        </div>

        <p className="mb-8 text-sm text-brand-navy/55">
          Last updated: <time>{lastUpdated}</time>
        </p>

        <div className="space-y-8 text-base leading-7 text-brand-navy/78">
          {children}
        </div>
      </div>
    </section>
  );
}
