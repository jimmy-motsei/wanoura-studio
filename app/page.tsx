"use client";

import HeroLight from "@/components/HeroLight";
import ClientsStripLight from "@/components/ClientsStripLight";
import OriginalCompositionsLight from "@/components/OriginalCompositionsLight";
import ServicesLayoutLight from "@/components/ServicesLayoutLight";
import TestimonialLight from "@/components/TestimonialLight";
import ContactCTALight from "@/components/ContactCTALight";
import FooterLight from "@/components/FooterLight";

export default function Home() {
    return (
        <main className="bg-white text-neutral-900">
            {/* HERO */}
            <section id="top">
                <HeroLight />
            </section>

            {/* CLIENTS STRIP */}
            <section id="clients" className="mt-0">
                <ClientsStripLight />
            </section>

            {/* ORIGINAL COMPOSITIONS / CUSTOM SCORES */}
            <section id="work" className="mt-12 sm:mt-16 lg:mt-20">
                <OriginalCompositionsLight />
            </section>

            {/* SERVICES (the Denmark-studio style block) */}
            <section id="services" className="mt-12 sm:mt-16 lg:mt-20">
                <ServicesLayoutLight />
            </section>

            {/* TESTIMONIAL */}
            <section id="testimonial" className="mt-12 sm:mt-16 lg:mt-20">
                <TestimonialLight />
            </section>

            {/* CONTACT CTA */}
            <section id="contact" className="mt-12 sm:mt-16 lg:mt-20">
                <ContactCTALight />
            </section>

            {/* FOOTER */}
            <footer className="mt-12 sm:mt-16 lg:mt-20">
                <FooterLight />
            </footer>
        </main>
    );
}
