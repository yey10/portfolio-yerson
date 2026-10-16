'use client'

import { useState } from 'react'
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  Check,
  ChevronRight,
  Code2,
  Database,
  Globe2,
  Mail,
  Menu,
  Network,
  ServerCog,
  Settings2,
  Terminal,
  Wrench,
  X,
} from 'lucide-react'

const projects = [
  {
    number: '01',
    title: 'Storysphere',
    type: 'Plataforma editorial',
    description: 'Espacio para leer y escribir historias con autenticación, comentarios, reacciones y suscripciones.',
    stack: ['React', 'Laravel', 'Sanctum', 'MySQL'],
    tone: 'lime',
  },
  {
    number: '02',
    title: 'Chamber Foto',
    type: 'Gestión de proyectos',
    description: 'Sistema para organizar proyectos fotográficos, clientes y entregables a través de una API REST.',
    stack: ['Flask', 'React', 'REST API'],
    tone: 'violet',
  },
  {
    number: '03',
    title: 'E-commerce API',
    type: 'Backend & servicios',
    description: 'API RESTful para tienda online con autenticación JWT, gestión de productos y pedidos.',
    stack: ['Laravel', 'JWT', 'MySQL'],
    tone: 'orange',
  },
]

const skills = [
  { label: 'Laravel / PHP', value: 92, icon: Code2 },
  { label: 'React / JavaScript', value: 88, icon: Globe2 },
  { label: 'Node.js / Express', value: 82, icon: Terminal },
  { label: 'SQL / MongoDB', value: 86, icon: Database },
  { label: 'Python / Power Automate', value: 78, icon: Settings2 },
  { label: 'Soporte TI & Hardware', value: 95, icon: Wrench },
]

const services = [
  { icon: Code2, title: 'Desarrollo web', text: 'Productos digitales rápidos, mantenibles y pensados para crecer.' },
  { icon: Network, title: 'Automatización', text: 'Procesos más simples con Python, Power Automate e integraciones.' },
  { icon: ServerCog, title: 'Soporte TI', text: 'Diagnóstico, mantenimiento y operación estable de infraestructura.' },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    await navigator.clipboard?.writeText('yeyorejuela@gmail.com')
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <div className="grain" aria-hidden="true" />
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8" aria-label="Navegación principal">
          <a href="#inicio" className="flex items-center gap-3 font-mono text-sm font-bold tracking-tight">
            <span className="grid size-8 place-items-center rounded-full bg-primary text-primary-foreground">YO</span>
            <span>Yerson Orejuela<span className="text-primary">.</span></span>
          </a>
          <div className="hidden items-center gap-8 font-mono text-xs uppercase tracking-wider text-muted-foreground md:flex">
            <a className="transition-colors hover:text-foreground" href="#sobre-mi">/ sobre mí</a>
            <a className="transition-colors hover:text-foreground" href="#habilidades">/ habilidades</a>
            <a className="transition-colors hover:text-foreground" href="#proyectos">/ proyectos</a>
            <a className="transition-colors hover:text-foreground" href="#contacto">/ contacto</a>
          </div>
          <button className="rounded-full border border-border p-2 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </nav>
        {menuOpen && <div className="flex flex-col gap-5 border-t border-border px-5 py-5 font-mono text-xs uppercase tracking-wider md:hidden"><a href="#sobre-mi" onClick={() => setMenuOpen(false)}>/ sobre mí</a><a href="#habilidades" onClick={() => setMenuOpen(false)}>/ habilidades</a><a href="#proyectos" onClick={() => setMenuOpen(false)}>/ proyectos</a><a href="#contacto" onClick={() => setMenuOpen(false)}>/ contacto</a></div>}
      </header>

      <section id="inicio" className="relative mx-auto grid min-h-[780px] max-w-7xl items-center gap-12 px-5 pb-20 pt-36 lg:grid-cols-[1.3fr_.7fr] lg:px-8">
        <div className="absolute left-1/2 top-32 -z-0 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="relative z-10">
          <div className="mb-7 flex items-center gap-3 font-mono text-xs uppercase tracking-[.25em] text-primary"><span className="pulse-dot" /> Disponible para nuevos proyectos</div>
          <p className="mb-5 font-mono text-sm text-muted-foreground">Hola, soy Yerson — desarrollador & solucionador</p>
          <h1 className="max-w-4xl text-[clamp(4rem,10vw,9.5rem)] font-black leading-[.82] tracking-[-.08em]">CÓDIGO<span className="text-primary">.</span><br /><span className="text-outline">SISTEMAS</span><br />IMPACTO<span className="text-primary">.</span></h1>
          <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center"><p className="max-w-md text-base leading-relaxed text-muted-foreground">Construyo experiencias web modernas y mantengo la tecnología funcionando detrás de escena.</p><a href="#proyectos" className="group flex w-fit items-center gap-3 rounded-full bg-primary px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider text-primary-foreground transition-transform hover:-translate-y-1">Ver proyectos <ArrowDown className="transition-transform group-hover:translate-y-1" /></a></div>
        </div>
        <div className="relative mx-auto w-full max-w-sm lg:justify-self-end">
          <div className="absolute -inset-5 rounded-[2rem] border border-primary/20 rotate-6" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-border bg-card p-7 shadow-2xl shadow-primary/10">
            <div className="flex justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground"><span>Portfolio / 2024—25</span><span>01—04</span></div>
            <div className="mt-20 flex flex-col items-center text-center"><div className="grid size-36 place-items-center rounded-full bg-primary/10 ring-1 ring-primary/40"><span className="text-5xl font-black tracking-tighter text-primary">YO</span></div><h2 className="mt-8 text-3xl font-bold tracking-tight">Tecnología<br /><span className="text-primary">con propósito.</span></h2><div className="mt-10 h-px w-full bg-border" /><p className="mt-5 font-mono text-xs leading-relaxed text-muted-foreground">Full Stack Developer<br />+ Soporte TI Specialist</p></div>
            <div className="absolute bottom-7 left-7 right-7 flex justify-between font-mono text-[10px] text-muted-foreground"><span>CO / 05.0</span><span>© Yerson</span></div>
          </div>
        </div>
      </section>

      <div className="border-y border-border bg-card/40"><div className="mx-auto flex max-w-7xl flex-wrap gap-x-8 gap-y-3 px-5 py-5 font-mono text-[10px] uppercase tracking-[.18em] text-muted-foreground lg:px-8"><span>Laravel</span><span className="text-primary">✦</span><span>React</span><span className="text-primary">✦</span><span>Node.js</span><span className="text-primary">✦</span><span>SQL</span><span className="text-primary">✦</span><span>MongoDB</span><span className="text-primary">✦</span><span>Python</span><span className="text-primary">✦</span><span>Power Automate</span></div></div>

      <section id="sobre-mi" className="mx-auto max-w-7xl px-5 py-28 lg:px-8"><div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]"><div><p className="eyebrow">01 / Sobre mí</p><h2 className="section-title">Hago que las<br /><span className="text-primary">cosas funcionen.</span></h2></div><div className="max-w-2xl text-lg leading-relaxed text-muted-foreground"><p>Soy un desarrollador Full Stack apasionado por construir aplicaciones web útiles, eficientes y fáciles de mantener. Mi experiencia combina el desarrollo de software con una mirada práctica sobre la infraestructura y las personas que la usan.</p><p className="mt-6">Actualmente trabajo en soporte técnico TI, resolviendo retos de hardware, sistemas y operación. Esa mezcla me permite entender un proyecto de punta a punta: desde la idea y la interfaz hasta el equipo donde todo sucede.</p><div className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-6 font-mono text-xs"><div><span className="block text-3xl font-bold text-foreground">04+</span><span className="text-muted-foreground">proyectos destacados</span></div><div><span className="block text-3xl font-bold text-foreground">∞</span><span className="text-muted-foreground">curiosidad técnica</span></div></div></div></div></section>

      <section id="habilidades" className="border-y border-border bg-card/30"><div className="mx-auto max-w-7xl px-5 py-28 lg:px-8"><div className="mb-16 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="eyebrow">02 / Stack & habilidades</p><h2 className="section-title">Mi caja de<br /><span className="text-primary">herramientas.</span></h2></div><p className="max-w-xs font-mono text-xs leading-relaxed text-muted-foreground">Tecnologías que uso para transformar problemas complejos en soluciones claras.</p></div><div className="grid gap-x-14 gap-y-9 md:grid-cols-2">{skills.map(({ label, value, icon: Icon }) => <div key={label}><div className="mb-3 flex items-center justify-between"><span className="flex items-center gap-3 font-mono text-sm"><Icon className="text-primary" />{label}</span><span className="font-mono text-xs text-muted-foreground">{value}%</span></div><div className="h-1.5 overflow-hidden rounded-full bg-muted"><div className="skill-bar h-full rounded-full bg-primary" style={{ '--skill-width': `${value}%` } as React.CSSProperties} /></div></div>)}</div><div className="mt-20 grid gap-4 md:grid-cols-3">{services.map(({ icon: Icon, title, text }) => <article key={title} className="group rounded-2xl border border-border bg-background p-6 transition-all hover:-translate-y-1 hover:border-primary/60"><Icon className="mb-10 text-primary" /><h3 className="mb-2 text-xl font-bold">{title}</h3><p className="text-sm leading-relaxed text-muted-foreground">{text}</p><ChevronRight className="mt-8 transition-transform group-hover:translate-x-1" /></article>)}</div></div></section>

      <section id="proyectos" className="mx-auto max-w-7xl px-5 py-28 lg:px-8"><div className="mb-14"><p className="eyebrow">03 / Trabajo seleccionado</p><h2 className="section-title">Proyectos que<br /><span className="text-primary">hablan por mí.</span></h2></div><div className="grid gap-5">{projects.map((project) => <article key={project.number} className={`project-card ${project.tone} group grid gap-8 rounded-3xl border border-border p-7 md:grid-cols-[.18fr_1fr_.8fr_auto] md:items-center md:p-10`}><span className="font-mono text-sm text-muted-foreground">{project.number}</span><div><p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-primary">{project.type}</p><h3 className="text-3xl font-bold tracking-tight">{project.title}</h3></div><div><p className="mb-5 text-sm leading-relaxed text-muted-foreground">{project.description}</p><div className="flex flex-wrap gap-2">{project.stack.map((tag) => <span key={tag} className="rounded-full border border-border px-3 py-1 font-mono text-[10px] text-muted-foreground">{tag}</span>)}</div></div><a href="#contacto" aria-label={`Ver más sobre ${project.title}`} className="grid size-12 place-items-center rounded-full border border-border transition-all group-hover:bg-primary group-hover:text-primary-foreground"><ArrowUpRight /></a></article>)}</div></section>

      <section id="contacto" className="relative overflow-hidden border-t border-border"><div className="mx-auto max-w-7xl px-5 py-28 lg:px-8"><div className="grid gap-12 lg:grid-cols-[1fr_.7fr] lg:items-end"><div><p className="eyebrow">04 / Contacto</p><h2 className="max-w-3xl text-[clamp(3.5rem,8vw,8rem)] font-black leading-[.85] tracking-[-.07em]">¿HACEMOS<br /><span className="text-primary">ALGO?</span></h2></div><div><p className="mb-7 max-w-sm text-muted-foreground">Si tienes una idea, un reto técnico o necesitas poner orden en tus sistemas, conversemos.</p><div className="flex flex-wrap gap-3"><button onClick={copyEmail} className="flex items-center gap-3 rounded-full bg-primary px-5 py-3 font-mono text-xs font-bold text-primary-foreground">{copied ? <Check /> : <Mail />}{copied ? 'Correo copiado' : 'yeyorejuela@gmail.com'}</button><a href="https://github.com" target="_blank" rel="noreferrer" className="grid size-11 place-items-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary" aria-label="GitHub"><span className="font-mono text-xs font-bold">GH</span></a><a href="https://linkedin.com/in/yerson-orejuela-056197276" target="_blank" rel="noreferrer" className="grid size-11 place-items-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary" aria-label="LinkedIn"><span className="font-mono text-xs font-bold">in</span></a></div></div></div></div></section>
      <footer className="border-t border-border"><div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-8"><span>Yerson Orejuela / Full Stack + IT</span><span>Construido con Next.js <span className="text-primary">✦</span> 2025</span><a href="#inicio" className="flex items-center gap-2 hover:text-foreground">Volver arriba <ArrowUp /></a></div></footer>
    </main>
  )
}
