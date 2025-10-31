// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar"; // ✅ default import

export const metadata: Metadata = {
    title: "Wanoura — The Legacy of Sound",
    description: "Sonic identity, design, direction & delivery.",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className="bg-white text-neutral-900 antialiased">
        <Navbar />     {/* ✅ now it's a real component */}
        {children}
        </body>
        </html>
    );
}
