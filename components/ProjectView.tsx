"use client";
import Link from "next/link";
import { projects, TBD } from "@/data/content";
import { useApp } from "./Providers";
import { Navbar } from "./Navbar";
import { Footer } from "./Sections";
import { Tag, Label, Pending } from "./ui";
export function ProjectView({ slug }: { slug: string }) {
  const { lang, t } = useApp();
  const p = projects.find(x => x.slug === slug)!;
  const h = (a: string, b: string) => (lang === "es" ? a : b);
  const Block = ({ title, children }: { title: string; children: React.ReactNode }) => <section className="border-t border-green2/30 py-8 grid md:grid-cols-[12rem_1fr] gap-4"><h2 className="font-mono text-xs uppercase tracking-widest text-green2">{title}</h2><div>{children}</div></section>;
  const tbd = <Pending>{t(TBD)}</Pending>;
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-5xl px-5 pt-32 pb-24">
        <Link href="/#projects" className="font-mono text-xs text-green2 hover:text-fg">← {h("Volver a proyectos", "Back to projects")}</Link>
        <div className="mt-8"><Label>{p.cat}</Label>
          <h1 className="font-serif text-5xl md:text-7xl tracking-tight text-green">{p.name}</h1>
          <p className="mt-6 text-xl max-w-2xl">{t(p.d)}</p></div>
        <div className="mt-12">
          <Block title={h("Funcionalidades confirmadas", "Confirmed features")}>{p.f.length ? <ul className="grid sm:grid-cols-2 gap-2">{p.f.map(x => <li key={x} className="flex gap-2"><span className="text-accent">▸</span>{x}</li>)}</ul> : tbd}</Block>
          <Block title={h("Tecnologías confirmadas", "Confirmed technologies")}>{p.tech.length ? <div className="flex gap-2">{p.tech.map(x => <Tag key={x}>{x}</Tag>)}</div> : tbd}</Block>
          {[h("Objetivo", "Goal"), h("Arquitectura técnica", "Technical architecture"), h("Retos", "Challenges"), h("Soluciones", "Solutions")].map(x => <Block key={x} title={x}>{tbd}</Block>)}
          <Block title={h("Galería", "Gallery")}><div className="rounded-2xl border border-dashed border-green2 p-10 text-center text-sm text-green2">{h("Espacio reservado para capturas auténticas (autorizadas, sin información confidencial).", "Reserved for authentic screenshots (authorized, no confidential info).")}</div></Block>
          <Block title={h("Enlaces", "Links")}><div className="flex gap-3 flex-wrap">{p.repo ? <a className="underline" href={p.repo}>Repo</a> : <Pending>Repo: {h("pendiente", "pending")}</Pending>}{p.demo ? <a className="underline" href={p.demo}>Demo</a> : <Pending>Demo: {h("pendiente", "pending")}</Pending>}</div></Block>
        </div>
      </main>
      <Footer />
    </>
  );
}
