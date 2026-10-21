import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/data/content";
import { ProjectView } from "@/components/ProjectView";
export const generateStaticParams = () => projects.map(p => ({ slug: p.slug }));
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find(x => x.slug === slug);
  return p ? { title: `${p.name} — Yerson Orejuela`, description: p.d.es } : {};
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!projects.some(p => p.slug === slug)) notFound();
  return <ProjectView slug={slug} />;
}
