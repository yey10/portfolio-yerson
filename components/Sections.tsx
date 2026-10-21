"use client";
import Link from "next/link";
import { useState } from "react";
import { Copy, Check, ArrowUpRight } from "lucide-react";
import { profile, expertise, stack, projects, extras, experience, education } from "@/data/content";
import { useApp } from "./Providers";
import { Reveal, Tag, Label, H2, Pending } from "./ui";
import { Terminal } from "./Terminal";
import { TechNetwork } from "./TechNetwork";
import { SystemDashboard } from "./SystemDashboard";
import { Logo } from "./Navbar";
const S = "px-5 mx-auto max-w-7xl py-24 md:py-32";
const es = (lang: string, a: string, b: string) => (lang === "es" ? a : b);

export function About() {
  const { lang, t } = useApp();
  return (
    <section id="about" className={S}>
      <Label>{es(lang, "Sobre mí", "About")}</Label>
      <Reveal><H2>{es(lang, "La tecnología es más que código.", "Technology is more than code.")}</H2></Reveal>
      <div className="mt-12 grid lg:grid-cols-[1.2fr_1fr] gap-12">
        <div className="space-y-5 text-lg max-w-2xl">{profile.about.map((p, i) => <Reveal key={i} delay={i * 0.08}><p>{t(p)}</p></Reveal>)}
          <div className="pt-4">{profile.cv ? <a href={profile.cv} download className="inline-flex h-12 px-6 rounded-full bg-green text-bg items-center">{es(lang, "Descargar CV", "Download CV")}</a> : <Pending>{es(lang, "CV: pendiente de configurar", "CV: not configured yet")}</Pending>}</div>
        </div>
        <div className="grid gap-4">
          {profile.ideas.map((x, i) => <Reveal key={i} delay={i * 0.1}><div className={`rounded-3xl p-6 ${i === 1 ? "bg-green text-bg lg:ml-10" : "bg-surface"}`}><p className="font-serif text-2xl">{t(x.t)}</p><p className="mt-2 text-sm opacity-80">{t(x.d)}</p></div></Reveal>)}
        </div>
      </div>
    </section>
  );
}

export function Expertise() {
  const { lang, t } = useApp();
  const span = ["lg:col-span-4", "lg:col-span-2", "lg:col-span-2", "lg:col-span-4"];
  const flow = ["Trigger", "Validation", "Process", "Notification"];
  return (
    <section id="expertise" className="bg-surface/60"><div className={S}>
      <Label>{es(lang, "Ecosistema tecnológico", "Technology ecosystem")}</Label>
      <Reveal><H2>Different disciplines. One technological vision.</H2></Reveal>
      <p className="mt-6 max-w-2xl text-lg">{es(lang, "Mi experiencia conecta distintas áreas de la tecnología para construir, mantener y mejorar soluciones digitales.", "My experience connects different areas of technology to build, maintain and improve digital solutions.")}</p>
      <div className="mt-12 grid lg:grid-cols-6 gap-4">
        {expertise.map((e, i) => (
          <Reveal key={e.n} delay={i * 0.07} className={span[i]}>
            <article className={`h-full rounded-3xl p-7 border border-green2/20 ${i === 0 ? "bg-green text-bg" : "bg-card"}`}>
              <p className="font-mono text-xs text-accent">{e.n}</p>
              <h3 className="font-serif text-3xl mt-2">{e.t}</h3>
              <p className="mt-3 text-sm opacity-85 max-w-md">{t(e.d)}</p>
              {i === 0 && <pre className="mt-5 rounded-xl bg-[#101B17] text-[#E9EAE2] text-xs p-4 overflow-x-auto font-mono"><code>{`const app = await build({\n  frontend: "React",\n  backend: "Laravel",\n});`}</code></pre>}
              {i === 1 && <ol className="mt-5 flex flex-wrap items-center gap-1 font-mono text-[11px]" aria-label={es(lang, "Flujo conceptual", "Conceptual flow")}>{flow.map((f, k) => <li key={f} className="flex items-center gap-1"><span className="px-2 py-1 rounded bg-surface">{f}</span>{k < 3 && <span aria-hidden>→</span>}</li>)}</ol>}
              {i === 2 && <div className="mt-5 font-mono text-[11px] space-y-1" aria-label="Diagnostic panel (concept)">{["Hardware", "Windows", "Backup/Clone"].map(x => <p key={x} className="flex justify-between border-b border-green2/20 pb-1"><span>{x}</span><span className="text-accent">● ready</span></p>)}</div>}
              {i === 3 && <ul className="mt-5 grid sm:grid-cols-3 gap-2 font-mono text-[11px]" aria-label="Compliance panel (concept)">{["Matrices", "Procedimientos", "Registros"].map(x => <li key={x} className="rounded-lg border border-green2/30 p-3">{x}<span className="block text-accent mt-1">▢ draft</span></li>)}</ul>}
              <div className="mt-5 flex flex-wrap gap-1.5">{e.tags.map(x => <Tag key={x}>{x}</Tag>)}</div>
            </article>
          </Reveal>))}
      </div>
      <p className="mt-4 font-mono text-xs text-green2">{es(lang, "* Paneles y flujos: representaciones conceptuales, sin datos reales.", "* Panels and flows: conceptual representations, no real data.")}</p>
    </div></section>
  );
}

export function Stack() {
  const { lang, t } = useApp();
  const span = ["lg:col-span-3", "lg:col-span-3", "lg:col-span-2", "lg:col-span-4", "lg:col-span-3", "lg:col-span-3", "lg:col-span-4", "lg:col-span-1 lg:col-span-1", "lg:col-span-1"];
  return (
    <section id="stack" className={S}>
      <Label>{es(lang, "Habilidades y herramientas", "Skills & tools")}</Label>
      <Reveal><H2>The tools behind my work.</H2></Reveal>
      <div className="mt-12 grid lg:grid-cols-6 gap-3">
        {stack.map((s, i) => <Reveal key={i} className={span[i]}><div className="h-full rounded-2xl bg-card border border-green2/20 p-5 hover:-translate-y-1 hover:border-accent transition-all"><p className="font-mono text-[11px] uppercase tracking-wider text-green2 mb-3">{t(s.c)}</p><div className="flex flex-wrap gap-1.5">{s.i.map(x => <Tag key={x}>{x}</Tag>)}</div></div></Reveal>)}
      </div>
    </section>
  );
}

export function Projects() {
  const { lang, t } = useApp();
  return (
    <section id="projects" className="bg-green text-bg"><div className={S}>
      <p className="font-mono text-xs uppercase tracking-widest text-accent mb-4">● {es(lang, "Proyectos destacados", "Featured projects")}</p>
      <Reveal><h2 className="font-serif text-5xl md:text-7xl tracking-tight">Selected Work.</h2></Reveal>
      <p className="mt-5 max-w-2xl opacity-80">{es(lang, "Proyectos donde el desarrollo, la creatividad y la tecnología se convierten en soluciones.", "Projects where development, creativity and technology become solutions.")}</p>
      <ul className="mt-14 border-t border-bg/20">
        {projects.map((p, i) => (
          <li key={p.slug} className="border-b border-bg/20"><Reveal>
            <Link href={`/projects/${p.slug}`} className={`group grid md:grid-cols-[4rem_1.2fr_1fr_2rem] gap-4 items-center py-8 hover:bg-bg/5 px-2 transition-colors ${i % 2 ? "md:[&>*:nth-child(2)]:text-right" : ""}`}>
              <span className="font-mono text-sm text-accent">0{i + 1}</span>
              <span className={`font-serif tracking-tight ${i === 0 ? "text-5xl md:text-6xl" : "text-3xl md:text-4xl"}`}>{p.name}</span>
              <span className="text-sm opacity-80"><span className="font-mono text-xs block mb-1 text-accent/90">{p.cat}</span>{t(p.d)}</span>
              <ArrowUpRight className="hidden md:block group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </Reveal></li>))}
      </ul>
      <h3 className="mt-16 font-serif text-3xl">More Experiments &amp; Projects.</h3>
      <div className="mt-6 grid sm:grid-cols-2 gap-4">{extras.map(x => <div key={x.name} className="rounded-2xl border border-bg/25 p-6"><p className="font-serif text-2xl">{x.name}</p><p className="text-sm opacity-80 mt-1">{t(x.d)}</p><p className="mt-3 font-mono text-xs text-accent">{es(lang, "Detalles: por documentar", "Details: to be documented")}</p></div>)}</div>
    </div></section>
  );
}

export function Experience() {
  const { lang, t } = useApp();
  return (
    <section id="experience" className={S}>
      <Label>{es(lang, "Experiencia profesional", "Experience")}</Label>
      <Reveal><H2>Experience across technology.</H2></Reveal>
      <ol className="mt-12 relative border-l-2 border-green2/40 ml-2 space-y-6">
        {experience.map((e, i) => (
          <li key={i} className="pl-8 relative"><span className="absolute -left-[9px] top-6 size-4 rounded-full bg-accent ring-4 ring-bg" />
            <details open={i === 0} className="rounded-3xl bg-card border border-green2/20 p-6 group">
              <summary className="cursor-pointer list-none flex flex-wrap items-baseline justify-between gap-2"><span className="font-serif text-3xl text-green">{t(e.t)}</span><span className="font-mono text-xs text-green2">{t(e.s)}</span></summary>
              <ul className="mt-4 grid sm:grid-cols-2 gap-2 text-sm">{e.items.map(x => <li key={x} className="flex gap-2"><span className="text-accent">▸</span>{x}</li>)}</ul>
            </details></li>))}
      </ol>
      <div id="education" className="mt-24">
        <Label>{es(lang, "Formación académica", "Education")}</Label>
        <Reveal><H2>Always learning. Always building.</H2></Reveal>
        <div className="mt-10 grid md:grid-cols-2 gap-4">{education.map((e, i) => <Reveal key={i} delay={i * 0.1}><div className={`rounded-3xl p-7 h-full ${i ? "bg-surface" : "bg-green text-bg"}`}><p className="font-mono text-xs text-accent">{t(e.s)}</p><p className="font-serif text-3xl mt-2">{e.t}</p><p className="mt-2 text-sm opacity-80">{e.o}</p></div></Reveal>)}</div>
      </div>
    </section>
  );
}

export function Lab() {
  const { lang } = useApp();
  const ex = (n: string, t: string) => <h3 className="font-mono text-xs uppercase tracking-widest text-green2 mt-16 mb-5"><span className="text-accent">{n}</span> — {t}</h3>;
  return (
    <section id="lab" className="bg-surface/60"><div className={S}>
      <Label>The Tech Lab</Label>
      <Reveal><H2>{es(lang, "Pequeños experimentos, código real.", "Small experiments, real code.")}</H2></Reveal>
      {ex("01", es(lang, "Terminal interactiva", "Interactive terminal"))}
      <p className="mb-5 max-w-xl text-sm">{es(lang, "Comandos predefinidos y seguros. Escribe ", "Safe, predefined commands. Type ")}<code className="font-mono bg-card px-1.5 rounded">help</code>.</p>
      <Reveal><Terminal /></Reveal>
      {ex("02", "Technology Network")}
      <Reveal><TechNetwork /></Reveal>
      {ex("03", "System Dashboard")}
      <Reveal><SystemDashboard /></Reveal>
    </div></section>
  );
}

export function Contact() {
  const { lang } = useApp();
  const [copied, setCopied] = useState(false);
  const [f, setF] = useState({ n: "", m: "" });
  const copy = async () => { try { await navigator.clipboard.writeText(profile.email); setCopied(true); setTimeout(() => setCopied(false), 1800); } catch {} };
  const btn = "h-12 px-5 rounded-full border border-bg/40 inline-flex items-center gap-2 hover:bg-bg/10";
  const link = (u: string, l: string) => u ? <a className={btn} href={u} target="_blank" rel="noopener noreferrer">{l}</a> : <Pending>{l}: {es(lang, "pendiente", "pending")}</Pending>;
  return (
    <section id="contact" className="bg-green text-bg"><div className={S}>
      <Reveal><h2 className="font-serif text-5xl md:text-8xl tracking-tight leading-[0.95]">Let&apos;s build<br /><em className="font-light text-accent">what comes next.</em></h2></Reveal>
      <p className="mt-6 max-w-xl text-lg opacity-85">{es(lang, "¿Tienes una idea, un proyecto o una oportunidad profesional? Hablemos.", "Have an idea, a project or a professional opportunity? Let's talk.")}</p>
      <div className="mt-10 flex flex-wrap gap-3 items-center">
        {profile.email ? <><a className={btn} href={`mailto:${profile.email}`}>{profile.email}</a><button className={btn} onClick={copy}>{copied ? <Check size={16} /> : <Copy size={16} />}{copied ? es(lang, "Copiado", "Copied") : es(lang, "Copiar correo", "Copy email")}</button></> : <Pending>{es(lang, "Correo: pendiente", "Email: pending")}</Pending>}
        {link(profile.github, "GitHub")}{link(profile.linkedin, "LinkedIn")}
        {profile.cv ? <a className={btn} href={profile.cv} download>CV</a> : <Pending>CV: {es(lang, "pendiente", "pending")}</Pending>}
      </div>
      {profile.email ? (
        <form className="mt-12 max-w-xl grid gap-3 text-fg" onSubmit={e => { e.preventDefault(); location.href = `mailto:${profile.email}?subject=${encodeURIComponent("Contacto desde portafolio — " + f.n)}&body=${encodeURIComponent(f.m)}`; }}>
          <input required value={f.n} onChange={e => setF({ ...f, n: e.target.value })} aria-label={es(lang, "Nombre", "Name")} placeholder={es(lang, "Nombre", "Name")} className="h-12 rounded-xl px-4 bg-bg" />
          <textarea required value={f.m} onChange={e => setF({ ...f, m: e.target.value })} aria-label={es(lang, "Mensaje", "Message")} placeholder={es(lang, "Mensaje", "Message")} rows={4} className="rounded-xl p-4 bg-bg" />
          <button className="h-12 rounded-full bg-accent text-[#172B25] font-medium">{es(lang, "Abrir en mi correo", "Open in my email app")}</button>
        </form>) : <p className="mt-10 font-mono text-xs opacity-70">{es(lang, "El formulario se activa al configurar el correo en src/data/content.ts.", "The form activates once the email is set in src/data/content.ts.")}</p>}
    </div></section>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#101B17] text-[#F5F3ED]/80 px-5 py-12"><div className="mx-auto max-w-7xl grid md:grid-cols-3 gap-8 font-mono text-xs">
      <div className="flex items-center gap-3 text-[#F5F3ED]"><Logo size={36} /><span>YO / TECHNOLOGY</span></div>
      <p>BEYOND CODE.<br />ACROSS TECHNOLOGY.</p>
      <p>DESIGNED &amp; DEVELOPED<br />BY YERSON OREJUELA<br /><span className="text-[#E8BC59]">DEVELOPMENT / AUTOMATION<br />INFRASTRUCTURE / SECURITY</span></p>
    </div></footer>
  );
}

const steps = [
  { n: "01", t: "Understand", d: { es: "Comprender las necesidades, los problemas y los objetivos.", en: "Understand the needs, problems and goals." } },
  { n: "02", t: "Design", d: { es: "Definir la estructura, arquitectura y experiencia de la solución.", en: "Define the structure, architecture and experience of the solution." } },
  { n: "03", t: "Build", d: { es: "Implementar las funcionalidades y conectar las tecnologías necesarias.", en: "Implement the features and connect the necessary technologies." } },
  { n: "04", t: "Improve", d: { es: "Revisar, optimizar y mejorar continuamente.", en: "Review, optimize and keep improving." } },
];
export function Process() {
  const { lang, t } = useApp();
  return (
    <section id="process" className={S}>
      <Label>{es(lang, "Mi forma de trabajar", "How I work")}</Label>
      <Reveal><H2>Understand. Build. Improve.</H2></Reveal>
      <ol className="mt-12 grid md:grid-cols-4 gap-px bg-green2/30 rounded-3xl overflow-hidden border border-green2/30">
        {steps.map((s, i) => (
          <li key={s.n} className="bg-bg p-7 md:min-h-64 flex flex-col justify-between group hover:bg-surface transition-colors" style={{ paddingTop: `${1.75 + i * 1.25}rem` }}>
            <span className="font-mono text-xs text-accent">{s.n}</span>
            <div><h3 className="font-serif text-3xl text-green">{s.t}</h3><p className="mt-3 text-sm">{t(s.d)}</p></div>
          </li>))}
      </ol>
      <p className="mt-4 font-mono text-xs text-green2">{es(lang, "* Filosofía de trabajo propia; no es una metodología formal certificada.", "* Personal working philosophy; not a formal certified methodology.")}</p>
    </section>
  );
}
