"use client";
import { useEffect, useState } from "react";
import { projects, extras, stack, expertise, experience, education } from "@/data/content";
import { useApp } from "./Providers";
export function SystemDashboard() {
  const { lang, dark } = useApp();
  const [rt, setRt] = useState({ w: 0, h: 0, rm: false });
  useEffect(() => {
    const mq = matchMedia("(prefers-reduced-motion: reduce)");
    const f = () => setRt({ w: innerWidth, h: innerHeight, rm: mq.matches });
    f(); addEventListener("resize", f); mq.addEventListener("change", f);
    return () => { removeEventListener("resize", f); mq.removeEventListener("change", f); };
  }, []);
  const es = lang === "es";
  const stats: [string, number][] = [
    [es ? "Proyectos" : "Projects", projects.length + extras.length],
    [es ? "Áreas" : "Areas", expertise.length],
    [es ? "Tecnologías" : "Technologies", new Set(stack.flatMap(s => s.i)).size],
    [es ? "Experiencias" : "Experience", experience.length],
    [es ? "Formación" : "Education", education.length],
    [es ? "Idiomas" : "Languages", 2],
  ];
  const built = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Motion", "Lucide"];
  const live: [string, string][] = [
    [es ? "Idioma activo" : "Active language", lang.toUpperCase()],
    [es ? "Tema" : "Theme", dark ? "dark" : "light"],
    ["prefers-reduced-motion", rt.rm ? "reduce" : "no-preference"],
    ["viewport", rt.w ? `${rt.w}×${rt.h}` : "…"],
  ];
  const box = "rounded-2xl bg-card border border-green2/20 p-5";
  const h = "font-mono text-[11px] uppercase tracking-wider text-green2 mb-3";
  return (
    <div className="grid md:grid-cols-3 gap-3 font-mono text-sm">
      <div className={`${box} md:col-span-2`}><p className={h}>{es ? "Contenido del portafolio" : "Portfolio content"}</p>
        <dl className="grid grid-cols-3 gap-4">{stats.map(([k, v]) => <div key={k}><dd className="font-serif text-4xl text-green">{v}</dd><dt className="text-xs text-green2">{k}</dt></div>)}</dl></div>
      <div className={box}><p className={h}>{es ? "Entorno (en vivo)" : "Runtime (live)"}</p>
        <dl className="space-y-2">{live.map(([k, v]) => <div key={k} className="flex justify-between gap-2"><dt className="text-green2 text-xs">{k}</dt><dd>{v}</dd></div>)}</dl></div>
      <div className={`${box} md:col-span-3`}><p className={h}>{es ? "Construido con" : "Built with"}</p>
        <ul className="flex flex-wrap gap-2">{built.map(b => <li key={b} className="px-3 py-1 rounded-full border border-green2/40 text-xs"><span className="text-accent">●</span> {b}</li>)}</ul></div>
    </div>
  );
}
