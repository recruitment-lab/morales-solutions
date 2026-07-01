"use client";

import { useEffect } from "react";

export default function ThemeInitializer() {
  useEffect(() => {
    try {
      const theme = localStorage.getItem("theme");
      document.documentElement.classList.toggle("light", theme !== "dark");
    } catch {
      document.documentElement.classList.add("light");
    }
  }, []);

  return null;
}
