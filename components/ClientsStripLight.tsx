"use client";

import Image from "next/image";

const CLIENTS = [
    {
        name: "Jägermeister",
        src: "/logos/jagermeister-neutral.png",
    },
    {
        name: "Kreative Korner",
        src: "/logos/kreative-korner-neutral.png",
    },
    {
        name: "Nike",
        src: "/logos/nike-neutral.png",
    },
    {
        name: "Zee Entertainment",
        src: "/logos/zee-entertainment-neutral.png",
    },
    {
        name: "Studio Bananaaa",
        src: "/logos/studio-bananaaa-neutral.png",
    },
];

export default function ClientsStripLight() {
    return (
        <section
            id="clients"
            className="bg-white border-y border-neutral-200 py-10 md:py-12"
        >
            <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 lg:px-8">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
                    Trusted by brands, creators, and studios
                </p>
                <div className="grid grid-cols-2 gap-6 md:grid-cols-5 md:items-center">
                    {CLIENTS.map((client) => (
                        <div key={client.name} className="flex items-center gap-3">
                            <div className="relative h-7 w-28">
                                <Image
                                    src={client.src}
                                    alt={client.name}
                                    fill
                                    className="object-contain"
                                    sizes="120px"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
