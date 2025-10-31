"use client";

import HeroLight from "@/components/HeroLight";
import ClientsStripLight from "@/components/ClientsStripLight";
import SelectedWorkLight from "@/components/SelectedWorkLight";
import ServicesLayoutLight from "@/components/ServicesLayoutLight";
import TestimonialLight from "@/components/TestimonialLight";
import OriginalCompositionsLight from "@/components/OriginalCompositionsLight";
import ContactCTALight from "@/components/ContactCTALight";
import FooterLight from "@/components/FooterLight";

export default function Home() {
    return (
        <main className="bg-white text-neutral-900">
            {/* HERO */}
            <section id="hero">
                <HeroLight />
            </section>

            {/* CLIENT STRIP (the black floating bar) */}
            <section aria-label="Clients we’ve worked with">
                <ClientsStripLight />
            </section>

            {/* SELECTED WORK (the “From global campaigns…” block) */}
            <section id="work">
                <SelectedWorkLight />
            </section>

            {/* SERVICES (the “We design sound that moves.” cards) */}
            <section id="services">
                <ServicesLayoutLight />
            </section>

            {/* TESTIMONIAL */}
            <section aria-label="Client testimonial">
                <TestimonialLight />
            </section>

            {/* ORIGINAL COMPOSITIONS / CUSTOM SCORES (your 4 posters) */}
            <section aria-label="Original compositions & custom scores">
                <OriginalCompositionsLight />
            </section>

            {/* CONTACT CTA (form) */}
            <section id="contact">
                <ContactCTALight />
            </section>

            {/* FOOTER */}
            <FooterLight />
        </main>
    );
}
