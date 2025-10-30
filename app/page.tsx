"use client";

import HeroLight from "@/components/HeroLight";
import ClientsStripLight from "@/components/ClientsStripLight";
import ServicesLayoutLight from "@/components/ServicesLayoutLight";
import OriginalCompositionsLight from "@/components/OriginalCompositionsLight";
import ContactCTALight from "@/components/ContactCTALight";
import FooterLight from "@/components/FooterLight";

export default function Home() {
    return (
        <main className="bg-white text-neutral-900">
            <HeroLight />
            <ClientsStripLight />
            <ServicesLayoutLight />
            <OriginalCompositionsLight /> {/* ✅ new section */}
            <ContactCTALight />
            <FooterLight />
        </main>
    );
}
