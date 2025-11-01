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
        <head>
            {/* Google Fonts: Geist (variable) */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
            <link
                href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap"
                rel="stylesheet"
            />
        </head>
        <body className="bg-white text-neutral-900 antialiased">
        <Navbar />
        {children}
        </body>
        </html>
    );
}
