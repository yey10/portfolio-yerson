"use client";
import { motion } from "motion/react";
import type { ReactNode } from "react";
export const Reveal = ({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) => (
  <motion.div className={className} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, delay, ease: "easeOut" }}>{children}</motion.div>
);
export const Tag = ({ children }: { children: ReactNode }) => (
  <span className="font-mono text-xs px-2.5 py-1 rounded-full border border-green2/40 bg-bg/60">{children}</span>
);
export const Label = ({ children }: { children: ReactNode }) => (
  <p className="font-mono text-xs uppercase tracking-widest text-green2 mb-4"><span className="text-accent">●</span> {children}</p>
);
export const H2 = ({ children }: { children: ReactNode }) => (
  <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight text-green max-w-4xl">{children}</h2>
);
export const Pending = ({ children }: { children: ReactNode }) => (
  <span className="inline-block font-mono text-xs px-3 py-2 rounded-full border border-dashed border-green2 text-green2" aria-disabled="true">{children}</span>
);
