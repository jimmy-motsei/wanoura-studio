// app/page.tsx

"use client";

import HeroLight from "@/components/HeroLight";
import ClientsStripLight from "@/components/ClientsStripLight";
import SelectedWorkLight from "@/components/SelectedWorkLight";
import ServicesLayoutLight from "@/components/ServicesLayoutLight";
import TestimonialLight from "@/components/TestimonialLight";
import ContactCTALight from "@/components/ContactCTALight";
import FooterLight from "@/components/FooterLight";

export default function Home() {
    return (
        <>
            {/* HERO / INTRO */}
            <section id="home" className="bg-white text-neutral-900">
                <HeroLight />
            </section>

            {/* CLIENT STRIP / TRUST */}
            <section id="clients" className="bg-white text-neutral-900">
                <ClientsStripLight />
            </section>

            {/* SELECTED WORK / CASE STUDIES */}
            <section id="work" className="bg-white text-neutral-900">
                <SelectedWorkLight />
            </section>

            {/* TESTIMONIAL */}
            <section id="testimonial" className="bg-white text-neutral-900">
                <TestimonialLight />
            </section>

            {/* SERVICES OVERVIEW (Our craft) */}
            <section id="services" className="bg-white text-neutral-900">
                <ServicesLayoutLight />
            </section>

            {/* CONTACT BLOCK / CTA */}
            <section id="contact" className="bg-white text-neutral-900">
                <ContactCTALight />
            </section>

            {/* FOOTER */}
            <footer className="bg-white text-neutral-900">
                <FooterLight />
            </footer>
        </>
    );
}
