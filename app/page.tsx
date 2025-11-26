// app/page.tsx
"use client";

import Hero from "@/components/work/HeroLight";
import AboutUs from "@/Components/work/AboutUsLight"
import SelectedWork from "@/components/work/SelectedWorkLight";
import SpecialistServices from "@/components/work/SpecialistServicesLight";
import Services from "@/components/work/ServicesLayoutLight";
import Clients from "@/components/work/ClientsStripLight";
import MovingPictures from "@/components/work/OriginalCompositionsLight";
import Contact from "@/components/work/ContactCTALight";
import FooterLight from "@/components/work/FooterLight";
import WorksVimeoBinder from "@/components/work/WorksVimeoBinder";

export default function Page() {
    return (
        <>
            <WorksVimeoBinder containerId="moving-pictures" />
            <main className="min-h-screen">
                <Hero />
                <AboutUs />
                <SelectedWork />
                <SpecialistServices />
                <Services />
                <Clients />
                <MovingPictures />
                <Contact />
                <FooterLight />
            </main>
        </>
    );
}
