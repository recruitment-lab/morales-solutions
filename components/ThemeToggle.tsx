"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const [isLight, setIsLight] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setIsLight(document.documentElement.classList.contains("light"));
    setMounted(true);
  }, []);

  const toggle = () => {
    const next = !isLight;
    setIsLight(next);
    document.documentElement.classList.toggle("light", next);
    try {
      localStorage.setItem("theme", next ? "light" : "dark");
    } catch {}
  };

  return (
    <button
      type="button"
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      onClick={toggle}
      className={`flex h-10 w-10 items-center justify-center rounded-lg border border-brand-cream/20 text-brand-cream transition-colors hover:border-brand-orange/60 hover:text-brand-orange ${className}`}
    >
      {mounted ? (isLight ? <Moon size={18} /> : <Sun size={18} />) : <Sun size={18} />}
    </button>
  );
}
