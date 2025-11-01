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
            <section id="hero">
                <HeroLight />
            </section>

            <section id="about">
                <AboutUs />
            </section>

            {/* updated heights are inside this component */}
            <section id="client-logos">
                <ClientsStripLight />
            </section>

            <section id="specialist">
                <SpecialistServicesLight />
            </section>

            <section id="services">
                <ServicesLayoutLight />
            </section>

            <section id="testimonial">
                <TestimonialLight />
            </section>

            <section id="moving-pictures">
                <OriginalCompositionsLight />
            </section>

            <section id="contact">
                <ContactCTALight />
            </section>

            <FooterLight />
        </main>
    );
}
