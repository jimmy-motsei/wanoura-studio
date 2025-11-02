// app/page.tsx (SERVER component – no "use client")
import HeroLight from "@/components/HeroLight";
import AboutUs from "@/components/AboutUs";
import ClientsStripLight from "@/components/ClientsStripLight";
import SpecialistServicesLight from "@/components/SpecialistServicesLight";
import ServicesLayoutLight from "@/components/ServicesLayoutLight";
import TestimonialLight from "@/components/TestimonialLight";
import OriginalCompositionsLight from "@/components/OriginalCompositionsLight";
import ContactCTALight from "@/components/ContactCTALight";
import FooterLight from "@/components/FooterLight";

export default function Home() {
    return (
        <main className="min-h-screen bg-white text-neutral-900">
            {/* Hero */}
            <section id="hero">
                <HeroLight />
            </section>

            {/* About */}
            <section id="about">
                <AboutUs />
            </section>

            {/* Clients */}
            <section id="client-logos">
                <ClientsStripLight />
            </section>

            {/* Specialist services (cards) */}
            <section id="specialist">
                <SpecialistServicesLight />
            </section>

            {/* Services */}
            <section id="services">
                <ServicesLayoutLight />
            </section>

            {/* Testimonial */}
            <section id="testimonial">
                <TestimonialLight />
            </section>

            {/* Moving Pictures — the component contains its own <section id="moving-pictures"> */}
            <OriginalCompositionsLight />

            {/* Contact */}
            <section id="contact">
                <ContactCTALight />
            </section>

            <FooterLight />
        </main>
    );
}
