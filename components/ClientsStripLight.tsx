import Image from "next/image";

const logos = [
    { name: "Nike", src: "/logos/Nike-neutral.png" },
    { name: "Jägermeister", src: "/logos/jagermeister-neutral.png" },
    { name: "Studio Bananaaa", src: "/logos/Studio-Bananaaa-neutral.png" },
    { name: "Zee Entertainment", src: "/logos/Zee-entertainment-neutral.png" },
    { name: "Kreative Kornerr", src: "/logos/Kreative-Kornerr-neutral.png" },
];

export default function ClientsStripLight() {
    return (
        <section className="relative z-10 -mt-8 pb-16">
            {/* Card */}
            <div className="mx-auto w-full max-w-5xl rounded-xl border border-neutral-800 bg-neutral-900 px-6 py-8 text-white shadow-[0_40px_120px_rgba(0,0,0,0.8)]">
                {/* Eyebrow */}
                <div className="text-[10px] font-medium uppercase tracking-widest text-neutral-400">
                    We’ve collaborated with some truly inspiring people and brands
                </div>

                {/* Logo grid */}
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-8 gap-y-6 justify-items-center items-center">
                    {logos.map((logo) => (
                        <div key={logo.name} className="flex items-center justify-center">
                            <Image
                                src={logo.src}
                                alt={logo.name}
                                width={160}
                                height={40}
                                decoding="async"
                                sizes="(min-width: 768px) 180px, (min-width: 640px) 25vw, 45vw"
                                className="h-4 sm:h-5 md:h-10 w-auto object-contain brightness-0 invert opacity-90"
                            />
                            <span className="sr-only">{logo.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
