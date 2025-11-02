import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import WorksVimeoBinder from "@/components/WorksVimeoBinder";

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
            {/* Google Fonts: preconnects */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
            {/* Variable fonts: Montserrat + Open Sans */}
            <link
                href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
                rel="stylesheet"
            />
        </head>
        <body className="min-h-screen bg-white antialiased">
        <Navbar />
        {children}
        <WorksVimeoBinder />
        </body>
        </html>
    );
}
