// components/SpecialistServicesLight.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp } from "@/lib/motion";

type Service = {
    slug: "atmos-mixing";
    title: string;
    summary: string;
    bullets: string[];
    image: string;
};

const services: Service[] = [
    {
        slug: "atmos-mixing",
        title: "Dolby Atmos Mixing",
        summary:
            "Musical-first spatial mixes that translate—headphones, club, or certified rooms. Depth, direction, and space serving the story, never a gimmick.",
        bullets: [
            "Music, trailers, brand films, and spatial sound design",
            "Headphone-first monitoring with room-checked delivery",
            "ADM BWF / MP4 / binaural deliverables, QC and revisions",
        ],
        image: "/images/dolby-atmos-studio.png", // New generated image for Dolby Atmos
    },
];

export default function SpecialistServicesLight() {
    return (
        <section
            id="specialist-services"
            aria-labelledby="specialist-heading"
            className="px-6 py-16"
        >

            <div className="mx-auto max-w-6xl">
                {/* Motion-enhanced heading */}
                <motion.h2
                    id="specialist-heading"
                    className="text-2xl font-semibold text-neutral-900"
                    {...fadeUp(0)}
                >
                    Specialist Services
                </motion.h2>

                {/* Motion-enhanced intro copy */}
                <motion.p
                    className="mt-2 max-w-2xl text-neutral-600"
                    {...fadeUp(0.05)}
                >
                    Sound that moves like your story. Two focused offers designed for creative teams
                    and ambitious artists.
                </motion.p>

                <div className="mt-10">
                    {services.map((s, i) => (
                        <motion.article
                            key={s.slug}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.6,
                                        ease: [0.25, 0.8, 0.3, 1],
                                        staggerChildren: 0.1,
                                    },
                                },
                            }}
                            className="group relative overflow-hidden rounded-2xl border border-neutral-200/70 bg-white shadow-sm transition hover:shadow-md focus-within:shadow-md flex flex-col md:flex-row p-3"
                        >
                            <motion.div
                                className="relative h-64 md:h-auto md:w-5/12 shrink-0 rounded-xl overflow-hidden"
                                variants={{
                                    hidden: { opacity: 0, scale: 0.98 },
                                    visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } }
                                }}
                            >
                                <Image
                                    src={s.image}
                                    alt={s.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:bg-gradient-to-r md:from-transparent md:to-transparent" />
                            </motion.div>

                            <div className="p-8 md:p-10 flex flex-col justify-center">
                                <motion.h3
                                    className="text-2xl font-semibold text-neutral-900"
                                    variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}
                                >
                                    {s.title}
                                </motion.h3>

                                <motion.p
                                    className="mt-4 text-base leading-relaxed text-neutral-700"
                                    variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}
                                >
                                    {s.summary}
                                </motion.p>

                                <ul className="mt-6 space-y-2 text-sm text-neutral-700/90">
                                    {s.bullets.map((b) => (
                                        <motion.li
                                            key={b}
                                            className="flex gap-3 items-start"
                                            variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}
                                        >
                                            <span className="mt-[0.4rem] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
                                            <span>{b}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>

                            {/* keyboard-focus ring aid */}
                            <span className="pointer-events-none absolute inset-0 rounded-2xl ring-0 focus-within:ring-2 focus-within:ring-neutral-300" />
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
