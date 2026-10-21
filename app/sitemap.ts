import type { MetadataRoute } from "next";
import { profile, projects } from "@/data/content";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", ...projects.map(p => `/projects/${p.slug}`)].map(p => ({ url: profile.siteUrl + p }));
}
