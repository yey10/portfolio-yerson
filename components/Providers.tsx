"use client";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { MotionConfig } from "motion/react";
import type { L } from "@/data/content";
type Lang = "es" | "en";
type Ctx = { lang: Lang; setLang: (l: Lang) => void; dark: boolean; toggle: () => void; t: (x: L) => string };
const C = createContext<Ctx>(null!);
export const useApp = () => useContext(C);
export function Providers({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");
  const [dark, setDark] = useState(false);
  useEffect(() => {
    try {
      const l = localStorage.getItem("lang") as Lang | null; if (l) setLang(l);
      const th = localStorage.getItem("theme");
      setDark(th ? th === "dark" : matchMedia("(prefers-color-scheme: dark)").matches);
    } catch {}
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    document.documentElement.lang = lang;
    try { localStorage.setItem("lang", lang); localStorage.setItem("theme", dark ? "dark" : "light"); } catch {}
  }, [dark, lang]);
  return (
    <C.Provider value={{ lang, setLang, dark, toggle: () => setDark(d => !d), t: x => x[lang] }}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </C.Provider>
  );
}
