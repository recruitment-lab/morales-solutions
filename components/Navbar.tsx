"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

const navLinks = [
  { label: "Why Us", href: "/#why-us" },
  { label: "Services", href: "/#services" },
  { label: "Careers", href: "/#careers" },
  { label: "Contact Us", href: "/contact" },
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
          ? "bg-brand-navy/90 backdrop-blur-xl shadow-[0_8px_30px_-16px_rgba(10,15,35,0.55)] border-b border-brand-red/20"
          : "bg-transparent"
      }`}
    >
      {/* Brand accent line, fades in on scroll */}
      <div
        className={`h-0.5 w-full bg-linear-to-r from-brand-red via-brand-orange to-brand-red transition-opacity duration-300 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
      />

      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-300 sm:px-8 ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        <Logo variant="light" />
        <div className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`group relative px-3 py-2 text-sm font-medium transition-colors ${
                scrolled
                  ? "text-brand-cream/85 hover:text-brand-orange"
                  : "text-brand-cream/85 hover:text-white"
              }`}
            >
              {link.label}
              <span
                className={`absolute inset-x-3 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-linear-to-r from-brand-red to-brand-orange transition-transform duration-300 group-hover:scale-x-100`}
              />
            </Link>
          ))}

          <Link
            href="/contact"
            className="brand-cta group ml-1 px-5 py-2.5 text-sm"
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
            scrolled ? "text-brand-cream" : "text-brand-cream"
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
        <div className="border-t border-brand-red/20 bg-brand-navy/95 backdrop-blur-md md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4 sm:px-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-brand-cream/80 hover:bg-brand-navy-700 hover:text-brand-orange"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="brand-cta mt-2 w-full px-5 py-3 text-center text-sm"
            >
              Hire a Team
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
