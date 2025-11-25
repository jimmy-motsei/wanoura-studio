// components/SpecialistServicesLight.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

type Service = {
    slug: "atmos-mixing" | "ai-studio-production";
    title: string;
    summary: string;
    bullets: string[];
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
    },
    {
        slug: "ai-studio-production",
        title: "AI Studio & Production",
        summary:
            "Tasteful AI for speed and exploration—finals crafted by ear, agency-ready polish. Clear approvals on what's AI-assisted vs hand-performed.",
        bullets: [
            "Music ideation, stem cleanup, noise & artifact removal",
            "Voice direction, timing fixes, and sound-design sketching",
            "Human-led decisions; transparent provenance in delivery",
        ],
    },
];

export default function SpecialistServicesLight() {
    return (
        <section aria-labelledby="specialist-heading" className="px-6 py-16">
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

                <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {services.map((s, i) => (
                        <motion.article
                            key={s.slug}
                            {...fadeUp(0.08 + i * 0.04)}
                            className="group relative rounded-2xl border border-neutral-200/70 bg-white p-6 shadow-sm transition hover:shadow-md focus-within:shadow-md"
                        >
                            <h3 className="text-lg font-semibold text-neutral-900">{s.title}</h3>

                            <p className="mt-3 text-sm leading-relaxed text-neutral-700">{s.summary}</p>

                            <ul className="mt-4 space-y-1.5 text-sm text-neutral-700/90">
                                {s.bullets.map((b) => (
                                    <li key={b} className="flex gap-2">
                                        <span className="mt-[0.4rem] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300" />
                                        <span>{b}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* keyboard-focus ring aid */}
                            <span className="pointer-events-none absolute inset-0 rounded-2xl ring-0 focus-within:ring-2 focus-within:ring-neutral-300" />
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
