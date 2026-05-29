import Link from "next/link";
import Logo from "./Logo";

type FormShellProps = {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  accent?: "primary" | "secondary";
  children: React.ReactNode;
  aside: React.ReactNode;
};

export default function FormShell({
  eyebrow,
  title,
  description,
  children,
  aside,
}: FormShellProps) {
  return (
    <div className="min-h-screen bg-surface-soft">
      {/* Lightweight top bar */}
      <header className="border-b border-black/5 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          <Logo variant="dark" />
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand-navy/70 transition-colors hover:text-brand-red"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M11 18l-6-6 6-6" />
            </svg>
            Back to home
          </Link>
        </div>
      </header>

      <main className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:py-20">
        {/* Aside / context */}
        <section className="lg:sticky lg:top-24 lg:self-start">
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-brand-red">
            {eyebrow}
          </span>
          <h1 className="mt-4 font-sans text-3xl font-extrabold leading-tight tracking-tight text-brand-navy sm:text-4xl">
            {title}
          </h1>
          <p className="mt-5 max-w-md text-lg leading-8 text-brand-navy/65">
            {description}
          </p>
          <div className="mt-8">{aside}</div>
        </section>

        {/* Form card */}
        <section className="rounded-3xl border border-black/5 bg-white p-7 shadow-[0_20px_60px_-30px_rgba(10,15,35,0.3)] sm:p-9">
          {children}
        </section>
      </main>
    </div>
  );
}
