"use client";
import { useState } from "react";
import { nodes } from "@/data/content";
import { useApp } from "./Providers";
const hubs = [
  { id: "Development", x: 200, y: 120, out: 225, techs: ["JavaScript", "TypeScript", "Python", "PHP", "React", "Next.js", "Laravel", "Flask"] },
  { id: "Automation", x: 560, y: 120, out: 315, techs: ["Power Platform", "Power Apps", "Power Automate"] },
  { id: "Infrastructure", x: 560, y: 340, out: 45, techs: ["Windows", "Linux", "WinPE", "BioStar"] },
  { id: "Security", x: 200, y: 340, out: 135, techs: ["ISO 27001", "Matrices", "Registros", "Controles"] },
];
const links: [string, string][] = [...hubs.flatMap(h => h.techs.map(t => [h.id, t] as [string, string])), ["Automation", "Odoo"], ["Infrastructure", "Odoo"]];
const pos: Record<string, { x: number; y: number; dy: number }> = { Odoo: { x: 560, y: 230, dy: 16 } };
hubs.forEach(h => {
  pos[h.id] = { x: h.x, y: h.y, dy: 0 };
  const n = h.techs.length, spread = n > 5 ? 270 : 150, r = n > 5 ? 105 : 90;
  h.techs.forEach((t, k) => {
    const a = ((h.out - spread / 2 + (n > 1 ? (k * spread) / (n - 1) : 0)) * Math.PI) / 180;
    pos[t] = { x: h.x + r * Math.cos(a), y: h.y + r * Math.sin(a), dy: Math.sin(a) > 0 ? 17 : -10 };
  });
});
const isHub = (id: string) => hubs.some(h => h.id === id);
export function TechNetwork() {
  const { lang, t } = useApp();
  const [sel, setSel] = useState<string | null>(null);
  const on = new Set<string>();
  if (sel) { on.add(sel); links.forEach(([h, k]) => { if (h === sel) on.add(k); if (k === sel) on.add(h); }); }
  const lit = (id: string) => !sel || on.has(id);
  const pick = (id: string) => setSel(s => (s === id ? null : id));
  const info = !sel ? (lang === "es" ? "Toca un nodo para explorar sus conexiones." : "Tap a node to explore its connections.")
    : isHub(sel) ? t(nodes.find(n => n.id === sel)!.d)
    : `${sel} → ${links.filter(([, k]) => k === sel).map(([h]) => h).join(" + ")}`;
  return (
    <div>
      <svg viewBox="0 0 760 460" className="w-full touch-manipulation" role="group" aria-label="Technology network">
        {links.map(([h, k]) => <line key={h + k} x1={pos[h].x} y1={pos[h].y} x2={pos[k].x} y2={pos[k].y} stroke={sel && on.has(h) && on.has(k) ? "#E8BC59" : "var(--green2)"} strokeWidth={sel && on.has(h) && on.has(k) ? 2 : 1} opacity={lit(h) && lit(k) ? 0.9 : 0.12} />)}
        {Object.keys(pos).map(id => {
          const p = pos[id], hub = isHub(id);
          return (
            <g key={id} tabIndex={0} role="button" aria-pressed={sel === id} aria-label={id} style={{ cursor: "pointer", opacity: lit(id) ? 1 : 0.25, transition: "opacity .2s" }}
              onClick={() => pick(id)} onKeyDown={e => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), pick(id))}>
              <circle cx={p.x} cy={p.y} r={hub ? 30 : 7} fill={hub ? "var(--green)" : "var(--card)"} stroke={sel === id ? "#E8BC59" : "var(--green2)"} strokeWidth="2" />
              {hub && <text x={p.x} y={p.y + 3} textAnchor="middle" fontSize="9" fill="var(--bg)" className="font-mono">{id.slice(0, 5).toUpperCase()}</text>}
              {!hub && <text x={p.x} y={p.y + p.dy} textAnchor="middle" fontSize="11" fill="var(--fg)" className="font-mono">{id}</text>}
              {/* área táctil ampliada */}<circle cx={p.x} cy={p.y} r="22" fill="transparent" />
            </g>);
        })}
      </svg>
      <p aria-live="polite" className="mt-2 min-h-12 rounded-2xl bg-card border border-green2/20 p-4 text-sm"><span className="font-mono text-xs text-accent mr-2">{sel ?? "network"}</span>{info}</p>
    </div>
  );
}
