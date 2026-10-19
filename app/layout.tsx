// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { Inter, Inter_Tight } from "next/font/google";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

const interTight = Inter_Tight({
    subsets: ["latin"],
    variable: "--font-inter-tight",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://dreamwanoura.com"),
    title: "Wanoura — Sound, Highly Envisioned.",
    description: "Sonic identity, design, direction & delivery.",
    alternates: { canonical: "/" },
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={`${inter.variable} ${interTight.variable} bg-white`}
        >
        <body className="min-h-screen bg-white antialiased">
        <Navbar />
        {children}
        <GoogleAnalytics />
        </body>
        </html>
    );
}
