"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { nodes, profile } from "@/data/content";
import { useApp } from "./Providers";
import { Tag } from "./ui";
const pos = [[90, 90], [310, 90], [90, 310], [310, 310]];
function Network() {
  const { t } = useApp();
  const [a, setA] = useState(0);
  return (
    <div className="w-full max-w-md mx-auto">
      <svg viewBox="0 0 400 400" role="group" aria-label="Technology ecosystem" className="w-full touch-manipulation">
        {pos.map((p, i) => <line key={i} x1={200} y1={200} x2={p[0]} y2={p[1]} className="flow" stroke={a === i ? "#E8BC59" : "var(--green2)"} strokeWidth={a === i ? 2 : 1.2} />)}
        <circle cx="200" cy="200" r="34" fill="var(--green)" /><text x="200" y="206" textAnchor="middle" fill="var(--bg)" className="font-mono" fontSize="16">YO</text>
        {nodes.map((n, i) => (
          <g key={n.id} tabIndex={0} role="button" aria-label={n.id} aria-pressed={a === i} style={{ cursor: "pointer" }}
            onPointerEnter={() => setA(i)} onFocus={() => setA(i)} onClick={() => setA(i)} onKeyDown={e => e.key === "Enter" && setA(i)}>
            <circle cx={pos[i][0]} cy={pos[i][1]} r={a === i ? 40 : 34} fill="var(--card)" stroke={a === i ? "#E8BC59" : "var(--green2)"} strokeWidth="2" style={{ transition: "r .25s" }} />
            <text x={pos[i][0]} y={pos[i][1] + 4} textAnchor="middle" fill="var(--fg)" fontSize="11" className="font-mono">{n.id.slice(0, 9)}</text>
          </g>
        ))}
      </svg>
      <div aria-live="polite" className="min-h-24 rounded-2xl bg-surface p-5">
        <p className="font-mono text-xs text-accent mb-1">{nodes[a].id}</p>
        <p className="text-sm">{t(nodes[a].d)}</p>
      </div>
    </div>
  );
}
export function Hero() {
  const { lang, t } = useApp();
  return (
    <section id="home" className="min-h-screen pt-28 pb-16 px-5 mx-auto max-w-7xl grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center">
      <div>
        <p className="font-mono text-xs tracking-widest text-green2 mb-6">YERSON OREJUELA / TECHNOLOGY PROFESSIONAL</p>
        <h1 className="font-serif text-6xl sm:text-7xl xl:text-8xl leading-[0.95] tracking-tight text-green">
          <motion.span className="block" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>Beyond Code.</motion.span>
          <motion.span className="block italic font-light" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}>Across <span className="underline decoration-accent decoration-4 underline-offset-8">Technology.</span></motion.span>
        </h1>
        <p className="mt-8 max-w-xl text-lg">{t(profile.tagline)}</p>
        <div className="mt-6 flex flex-wrap gap-2">{["Software Development", "IT Infrastructure", "Automation", "Information Security"].map(s => <Tag key={s}>{s}</Tag>)}</div>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href="#projects" className="h-12 px-6 rounded-full bg-green text-bg grid place-items-center font-medium hover:-translate-y-0.5 transition-transform">{lang === "es" ? "Explorar proyectos" : "Explore projects"}</a>
          <a href="#contact" className="h-12 px-6 rounded-full border border-green text-green grid place-items-center font-medium hover:bg-surface transition-colors">{lang === "es" ? "Hablemos" : "Let's talk"}</a>
        </div>
      </div>
      <Network />
    </section>
  );
}
