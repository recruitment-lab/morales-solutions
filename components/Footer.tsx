import Link from "next/link";
import Logo from "./Logo";

const columns = [
  {
    title: "Company",
    links: [
      { label: "Why Us", href: "/#why-us" },
      { label: "Services", href: "/#services" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Customer Support", href: "/services" },
      { label: "Sales Operations", href: "/services" },
      { label: "Compliance Ops", href: "/services" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Security", href: "/security" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-brand-navy-light text-brand-cream">
      <div className="h-1 w-full bg-linear-to-r from-brand-red to-brand-orange" />

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_2fr]">
          <div className="max-w-sm">
            <Logo variant="light" />
            <p className="mt-5 text-sm leading-6 text-brand-cream/60">
              Compliant, scalable outsourcing teams for customer support, sales,
              and regulatory operations — built to protect your brand while you
              grow.
            </p>
            <Link
              href="/services"
              className="brand-cta mt-6 px-6 py-3 text-sm"
            >
              Request Services
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="font-sans text-sm font-bold uppercase tracking-wider text-brand-cream/80">
                  {col.title}
                </h4>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-brand-cream/55 transition-colors hover:text-brand-orange"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-brand-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 sm:flex-row sm:px-8">
          <p className="text-sm text-brand-cream/55">
            &copy; {year} <Link href="/" className="font-medium text-brand-cream/75 hover:text-brand-orange">Morales Solutions</Link>. All rights reserved.
          </p>
          <p className="text-xs uppercase tracking-[0.16em] text-brand-cream/40">
            Compliant · Scalable · Secure
          </p>
        </div>
      </div>
    </footer>
  );
}
