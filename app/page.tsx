import HeroLight from "@/components/HeroLight";
import AboutUs from "@/components/AboutUs";
import ClientsStripLight from "@/components/ClientsStripLight";
import SelectedWorkLight from "@/components/SelectedWorkLight";
import ServicesLayoutLight from "@/components/ServicesLayoutLight";
import TestimonialLight from "@/components/TestimonialLight";
import OriginalCompositionsLight from "@/components/OriginalCompositionsLight";
import ContactCTALight from "@/components/ContactCTALight";
import FooterLight from "@/components/FooterLight";

export default function Home() {
    return (
        <main className="min-h-screen bg-white text-neutral-900">
            {/* Hero / intro */}
            <section id="hero">
                <HeroLight />
            </section>

            {/* About Us – Meet the Founder */}
            <section id="about">
                <AboutUs />
            </section>

            {/* Clients strip */}
            <section id="client-logos">
                <ClientsStripLight />
            </section>

            {/* Selected work (the old “work” section) */}
            <section id="selected-work">
                <SelectedWorkLight />
            </section>

            {/* Services block */}
            <section id="services">
                <ServicesLayoutLight />
            </section>

            {/* Testimonial */}
            <section id="testimonial">
                <TestimonialLight />
            </section>

            {/* Original compositions / custom scores */}
            <section id="moving-pictures">
                <OriginalCompositionsLight />
            </section>

            {/* Contact */}
            <section id="contact">
                <ContactCTALight />
            </section>

            {/* Footer */}
            <FooterLight />
        </main>
    );
}
