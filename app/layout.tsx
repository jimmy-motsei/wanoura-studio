import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

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
        <html lang="en" className="bg-white">
        <body className="bg-white text-neutral-900 antialiased">
        <Navbar />
        {children}
        </body>
        </html>
    );
}
