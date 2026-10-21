"use client";
import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useApp } from "./Providers";
const links = [["home", "Home"], ["about", "About"], ["expertise", "Expertise"], ["projects", "Projects"], ["experience", "Experience"], ["lab", "Lab"], ["contact", "Contact"]];
export const Logo = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true"><path d="M14 16l11 17v15M36 16l-11 17" stroke="currentColor" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" /><circle cx="46" cy="38" r="10" stroke="#E8BC59" strokeWidth="5" fill="none" /></svg>
);
export function Navbar() {
  const { lang, setLang, dark, toggle } = useApp();
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-45% 0px -50% 0px" });
    links.forEach(([id]) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);
  const btn = "h-11 min-w-11 px-3 rounded-full border border-green2/40 grid place-items-center font-mono text-xs hover:bg-surface transition-colors";
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-bg/80 border-b border-green2/20">
      <nav aria-label="Principal" className="mx-auto max-w-7xl px-5 h-16 flex items-center justify-between text-green">
        <a href="/#home" aria-label="Yerson Orejuela — inicio"><Logo /></a>
        <ul className="hidden lg:flex gap-1">
          {links.map(([id, l]) => (
            <li key={id}><a href={`/#${id}`} aria-current={active === id ? "true" : undefined} className={`relative px-3 py-2 text-sm rounded-full transition-colors ${active === id ? "text-fg" : "text-green2 hover:text-fg"}`}>
              {l}{active === id && <span className="absolute left-1/2 -translate-x-1/2 -bottom-0.5 size-1.5 rounded-full bg-accent" />}
            </a></li>
          ))}
        </ul>
        <div className="flex gap-2">
          <button className={btn} onClick={() => setLang(lang === "es" ? "en" : "es")} aria-label="Cambiar idioma / Change language">{lang === "es" ? "EN" : "ES"}</button>
          <button className={btn} onClick={toggle} aria-label={dark ? "Modo claro" : "Modo oscuro"}>{dark ? <Sun size={16} /> : <Moon size={16} />}</button>
          <button className={`${btn} lg:hidden`} onClick={() => setOpen(o => !o)} aria-expanded={open} aria-controls="mnav" aria-label="Menú">{open ? <X size={16} /> : <Menu size={16} />}</button>
        </div>
      </nav>
      {open && (
        <ul id="mnav" className="lg:hidden px-5 pb-4 bg-bg border-b border-green2/20">
          {links.map(([id, l]) => <li key={id}><a onClick={() => setOpen(false)} href={`/#${id}`} className="block py-3 font-serif text-2xl text-green">{l}</a></li>)}
        </ul>
      )}
    </header>
  );
}
