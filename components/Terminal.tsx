"use client";
import { useRef, useState } from "react";
import { profile, expertise, stack, projects, experience, education } from "@/data/content";
const out: Record<string, () => string[]> = {
  help: () => ["help  about  skills  projects  experience  education  contact  clear"],
  whoami: () => [`Name: ${profile.name}`, `Role: ${profile.role}`, "Specialties:", ...expertise.map(e => `- ${e.t}`)],
  about: () => [profile.about[0].en, profile.about[2].en],
  skills: () => stack.map(s => `${s.c.en}: ${s.i.join(", ")}`),
  projects: () => projects.map(p => `- ${p.name} (${p.cat})`),
  experience: () => experience.map(e => `- ${e.t.en} [${e.s.en}]`),
  education: () => education.map(e => `- ${e.t} — ${e.o} [${e.s.en}]`),
  contact: () => [profile.email && `email: ${profile.email}`, profile.github && `github: ${profile.github}`, profile.linkedin && `linkedin: ${profile.linkedin}`].filter(Boolean).concat(profile.email || profile.github || profile.linkedin ? [] : ["Contact links not configured yet (src/data/content.ts)."]) as string[],
};
export function Terminal() {
  const [log, setLog] = useState<{ c: string; o: string[] }[]>([{ c: "whoami", o: out.whoami() }]);
  const [v, setV] = useState("");
  const box = useRef<HTMLDivElement>(null);
  const run = (e: React.FormEvent) => {
    e.preventDefault();
    const c = v.trim().toLowerCase(); setV("");
    if (!c) return;
    if (c === "clear") return setLog([]);
    setLog(l => [...l, { c, o: out[c] ? out[c]() : [`command not found: ${c}. Type "help".`] }]);
    setTimeout(() => box.current?.scrollTo({ top: 99999 }), 0);
  };
  return (
    <div className="rounded-2xl bg-[#101B17] text-[#F5F3ED] font-mono text-sm shadow-xl overflow-hidden" onClick={() => document.getElementById("term-in")?.focus()}>
      <div className="px-4 py-2 border-b border-white/10 text-xs text-[#668576]">yerson@portfolio:~</div>
      <div ref={box} className="p-4 h-80 overflow-y-auto" role="log" aria-live="polite">
        {log.map((l, i) => <div key={i} className="mb-3"><p><span className="text-[#E8BC59]">$</span> {l.c}</p>{l.o.map((x, j) => <p key={j} className="text-[#E9EAE2]/80 whitespace-pre-wrap">{x}</p>)}</div>)}
        <form onSubmit={run} className="flex gap-2"><label htmlFor="term-in" className="text-[#E8BC59]">$</label>
          <input id="term-in" value={v} onChange={e => setV(e.target.value)} autoComplete="off" autoCapitalize="off" spellCheck={false} placeholder="help" className="flex-1 bg-transparent outline-none min-w-0" /></form>
      </div>
    </div>
  );
}
