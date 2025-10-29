"use client";

import HeroLight from "@/components/HeroLight";
import ClientsStripLight from "@/components/ClientsStripLight";
import SelectedWorkLight from "@/components/SelectedWorkLight";
import TestimonialLight from "@/components/TestimonialLight";
import ServicesLayoutLight from "@/components/ServicesLayoutLight";
import ContactCTALight from "@/components/ContactCTALight";
import FooterLight from "@/components/FooterLight";

export default function Home() {
    return (
        <main className="bg-white text-neutral-900 antialiased">
            <HeroLight />

            <section id="clients">
                <ClientsStripLight />
            </section>

            <section id="work">
                <SelectedWorkLight />
            </section>

            <TestimonialLight />

            <section id="services">
                <ServicesLayoutLight />
            </section>

            <section id="contact">
                <ContactCTALight />
            </section>

            <FooterLight />
        </main>
    );
}
