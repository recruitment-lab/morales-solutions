"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

const navLinks = [
  { label: "Why Us", href: "/#why-us" },
  { label: "Services", href: "/#services" },
  { label: "Careers", href: "/#careers" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_-16px_rgba(10,15,35,0.35)]"
          : "bg-transparent"
      }`}
    >
      {/* Brand accent line, fades in on scroll */}
      <div
        className={`h-0.5 w-full bg-gradient-to-r from-brand-red via-brand-orange to-brand-red transition-opacity duration-300 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
      />

      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-300 sm:px-8 ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        <Logo variant={scrolled ? "dark" : "light"} />
        <div className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`group relative px-3 py-2 text-sm font-medium transition-colors ${
                scrolled
                  ? "text-brand-navy/70 hover:text-brand-red"
                  : "text-white/85 hover:text-white"
              }`}
            >
              {link.label}
              <span
                className={`absolute inset-x-3 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-gradient-to-r from-brand-red to-brand-orange transition-transform duration-300 group-hover:scale-x-100`}
              />
            </Link>
          ))}

          <Link
            href="/careers"
            className={`ml-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              scrolled
                ? "text-brand-navy/70 hover:text-brand-red"
                : "text-white/85 hover:text-white"
            }`}
          >
            Careers
          </Link>

          <Link
            href="/services"
            className="group ml-1 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-brand-red to-brand-orange px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-red/25 ring-1 ring-white/10 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-red/40"
          >
            Hire a Team
            <svg
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`flex h-10 w-10 items-center justify-center rounded-lg transition-colors md:hidden ${
            scrolled ? "text-brand-navy" : "text-white"
          }`}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {open ? (
              <path d="M6 6l12 12M18 6 6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-black/5 bg-white/95 backdrop-blur-md md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4 sm:px-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-brand-navy/80 hover:bg-surface-muted hover:text-brand-red"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/services"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-gradient-to-r from-brand-red to-brand-orange px-5 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-brand-red/25"
            >
              Hire a Team
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
