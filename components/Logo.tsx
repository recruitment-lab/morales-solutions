import Link from "next/link";

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-brand-navy";

  return (
    <Link
      href="/"
      aria-label="Morales Solutions home"
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-red to-brand-orange shadow-sm shadow-brand-red/30 transition-transform duration-300 group-hover:scale-105">
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 2 4 6v6c0 4.4 3.2 8.2 8 10 4.8-1.8 8-5.6 8-10V6l-8-4Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      </span>
      <span className={`flex flex-col leading-none ${textColor}`}>
        <span className="font-sans text-base font-extrabold tracking-tight">
          Morales
        </span>
        <span
          className={`text-[11px] font-medium uppercase tracking-[0.18em] ${
            variant === "light" ? "text-white/70" : "text-brand-red"
          }`}
        >
          Solutions
        </span>
      </span>
    </Link>
  );
}
