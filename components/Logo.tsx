import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Morales Solutions home"
      className={`group inline-flex items-center ${className}`}
    >
      <Image
        src="/logos/LOGO NARANJA.png"
        alt="Morales Solutions"
        width={220}
        height={72}
        priority={variant === "light"}
        className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
      />
    </Link>
  );
}
