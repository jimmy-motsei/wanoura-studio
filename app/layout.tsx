import { IBM_Plex_Mono } from "next/font/google";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex-mono",
});

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Inter, Inter_Tight } from "next/font/google";

// Load fonts using next/font/google (faster, optimized, avoids flashes)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
});

export const metadata: Metadata = {
  title: "wanoura — The Legacy of Sound",
  description: "Sonic identity, design, direction & delivery.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${ibmPlexMono.variable} bg-white`}>

      <body className="min-h-screen bg-white antialiased font-sans">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
