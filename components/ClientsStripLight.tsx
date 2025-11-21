// components/ClientsStripLight.tsx
"use client";

import Image from "next/image";

export default function ClientsStripLight() {
    const clients = [
        // nice, wide, already white
        { name: "Nike", src: "/brand/nike.png", width: 160, height: 60 },

        // circular badge, can be a bit smaller
        { name: "Jägermeister", src: "/brand/jagermeister.png", width: 120, height: 120 },

        // dark-on-dark → force invert/brightness + give it more width
        {
            name: "Kreative Kornerr",
            src: "/brand/Kreative-Kornerr.jpg",
            width: 220,
            height: 100,
        },

        // long but small logo → bump width
        { name: "Studio Bananaaa", src: "/brand/studio-banana.png", width: 190, height: 70 },

        // tall “Z” → a bit narrower
        { name: "Zee Entertainment", src: "/brand/zee-entertainment.png", width: 120, height: 120 },
    ];

    return (
        <section className="relative py-6 md:py-8">
            <p className="text-center text-xs tracking-[0.32em] uppercase text-slate-900/70 mb-4">
                WE’VE WORKED WITH HUNDREDS OF AMAZING PEOPLE
            </p>

            <div className="mx-auto max-w-6xl rounded-[1.6rem] bg-black shadow-[0_28px_70px_rgba(0,0,0,0.35)] px-6 md:px-10 min-h-[9.5rem] flex items-center">
                <div className="grid grid-cols-5 items-center gap-6 md:gap-10 w-full">
                    {clients.map((client) => (
                        <div
                            key={client.name}
                            className="flex items-center justify-center min-h-[5rem]"
                        >
                            <Image
                                src={client.src}
                                alt={client.name}
                                width={client.width}
                                height={client.height}
                                className="h-10 w-auto md:h-12"
                                sizes="(min-width: 1024px) 200px, (min-width: 768px) 160px, 140px"
                                priority
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
