// app/page.tsx

import Hero from "@/components/work/HeroLight";
import SelectedWork from "@/components/work/SelectedWorkLight";
import SpecialistServices from "@/components/work/SpecialistServicesLight";
import Services from "@/components/work/ServicesLayoutLight";
import Clients from "@/components/work/ClientsStripLight";
import MovingPictures from "@/components/work/OriginalCompositionsLight";
import Contact from "@/components/work/ContactCTALight";

export default function Page() {
    return (
        <main>
            <Hero />
            <SelectedWork />
            <SpecialistServices />
            <Services />
            <Clients />
            <MovingPictures />
            <Contact />
        </main>
    );
}