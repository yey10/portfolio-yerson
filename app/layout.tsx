import type { Metadata } from "next";
import { Geist, Fraunces, IBM_Plex_Mono } from "next/font/google";
import { Providers } from "@/components/Providers";
import { profile } from "@/data/content";
import "./globals.css";
const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" });
const plex = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-plex" });
export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: "Yerson Orejuela — Technology & Software Solutions",
  description: "Software, automatización, infraestructura TI y seguridad de la información. Beyond Code. Across Technology.",
  icons: { icon: "/icon.svg" },
  openGraph: { title: "Yerson Orejuela — Beyond Code. Across Technology.", description: "Software Developer · IT Specialist · Automation & Information Security", type: "website" },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning className={`${geist.variable} ${fraunces.variable} ${plex.variable}`}>
      <body><Providers>{children}</Providers></body>
    </html>
  );
}
