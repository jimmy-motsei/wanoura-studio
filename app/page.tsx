"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Clients from "@/components/Clients";
import Work from "@/components/Work";
import Testimonial from "@/components/Testimonial";
import Capabilities from "@/components/Capabilities";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center">
            <Hero />
            <About />
            <Services />
            <Clients />
            <Work />
            <Testimonial />
            <Capabilities />
            <ContactCTA />
            <Footer />
        </main>
    );
}
