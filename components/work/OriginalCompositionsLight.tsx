"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

const works = [
    {
        slug: "my-waffles-tease",
        client: "JÄGERMEISTER",
        title: "Uncle Waffles For The Brooklyn Mirage",
        role: "Original Score",
        duration: "00:42",
        year: "2024",
        image: "/client-logos/jagermeister.png",
    },
    {
        slug: "velo-pr-stunt-jhb",
        client: "VELO",
        title: "Velo PR Stunt (Johannesburg)",
        role: "Original Score",
        duration: "00:16",
        year: "2024",
        image: "/client-logos/velo.svg",
    },
    {
        slug: "mamas-boy",
        client: "STUDIO BANANAAA",
        title: "Mama's Boy",
        role: "Original Score, Sound Design",
        duration: "00:58",
        year: "2024",
        image: "/client-logos/studio-banana.png",
    },
    {
        slug: "velo-pr-stunt-cpt",
        client: "VELO",
        title: "Velo PR Stunt (Cape Town)",
        role: "Original Score",
        duration: "00:18",
        year: "2024",
        image: "/client-logos/velo.svg",
    },
] as const;

export default function OriginalCompositionsLight() {
    return (
        <section id="moving-pictures" className="relative bg-white py-20 md:py-24 overflow-hidden">
            {/* Background Design Element */}
            <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[30%] opacity-[0.05] w-[80vh] h-[80vh] md:w-[100vh] md:h-[100vh] select-none">
                <img
                    src="/img/wanoura/hero-bg-icon.png"
                    alt=""
                    className="w-full h-full object-contain"
                />
            </div>
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <motion.h2
                    className="text-center text-3xl font-semibold tracking-tight text-neutral-900"
                    {...fadeUp(0)}
                >
                    Sound made for moving pictures.
                </motion.h2>
                <motion.p
                    className="mx-auto mt-3 max-w-2xl text-center text-neutral-600"
                    {...fadeUp(0.05)}
                >
                    From teasers to branded films, these pieces were written, produced, and delivered in
                    studio — tailored to story, brand, and pace.
                </motion.p>
                <motion.p className="mt-5 text-center text-sm text-neutral-500" {...fadeUp(0.1)}>
                    4 selected works · 2024
                </motion.p>

                <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {works.map((work, index) => (
                        <motion.li
                            key={work.slug}
                            data-work={work.slug}
                            data-card-index={index}
                            {...fadeUp(0.15 + index * 0.05, 40)}
                            className="group relative block h-full w-full overflow-hidden rounded-2xl bg-neutral-900 p-5 text-left text-white shadow-sm transition hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 cursor-pointer"
                        >
                            <div className="pointer-events-none absolute inset-0" aria-hidden="true" />
                            <div className="relative z-10">
                                <div className="flex items-start justify-between">
                                    <div className="flex gap-4">
                                        <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md bg-neutral-100 border border-neutral-200">
                                            <Image
                                                src={work.image}
                                                alt={work.title}
                                                fill
                                                className="object-contain p-[5px]"
                                            />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-medium tracking-[0.2em] text-white/80">{work.client}</p>
                                            <p className="mt-1 text-lg font-semibold text-white">{work.title}</p>
                                            <p className="mt-1 text-sm text-white/90">{work.role}</p>
                                        </div>
                                    </div>
                                    <span className="text-sm text-white/80">{work.year}</span>
                                </div>
                                <div className="mt-4 flex items-center gap-3 text-[11px] uppercase tracking-widest text-white/80">
                                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/60 group-hover:border-white transition-colors">
                                        <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-0.5">
                                            <path d="M7 4.5L0.25 8.39711L0.25 0.602886L7 4.5Z" fill="currentColor" />
                                        </svg>
                                    </span>
                                    <span>Custom Score</span>
                                    <span className="text-white/70">{work.duration}</span>
                                </div>
                            </div>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
