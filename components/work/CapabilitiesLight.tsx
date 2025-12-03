"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp } from "@/lib/motion";
import { Mic2, Music, Radio, Volume2, Box } from "lucide-react";

export default function CapabilitiesLight() {
    const capabilities = [
        {
            title: "Sonic Identity & Branding",
            body:
                "We define the voice of your brand in sound — mnemonic signatures, tonal palettes, UI sound libraries, and branded audio systems built for campaigns, products, and platforms.",
            icon: <Radio className="w-6 h-6 text-neutral-900" />,
        },
        {
            title: "Sound Design & Original Composition",
            body:
                "Themes, cues, Foley, atmospheres. We build emotional architecture for film, trailers, activations, and interactive work. Dialogue is cleaned, dynamics balanced, and deliverables are spec-ready.",
            icon: <Music className="w-6 h-6 text-neutral-900" />,
        },
        {
            title: "Voice Direction & Vocal Strategy",
            body:
                "We direct voice talent and shape delivery so narration feels lived-in, not read. Tone, pacing, breath, and presence are treated as instruments.",
            icon: <Mic2 className="w-6 h-6 text-neutral-900" />,
        },
        {
            title: "Mixing, Mastering & Delivery",
            body:
                "Final masters for clarity, loudness, mono compatibility, and platform translation — cinema, broadcast, streaming, radio, and social. Nothing leaves without QC.",
            icon: <Volume2 className="w-6 h-6 text-neutral-900" />,
        },
        {
            title: "Experiential & Spatial Audio",
            body:
                "Immersive, multi-channel, site-specific sound for events, installations, and branded experiences. We build presence, tension, memory.",
            icon: <Box className="w-6 h-6 text-neutral-900" />,
        },
    ];

    return (
        <section className="w-full bg-white px-6 md:px-12 lg:px-24 py-20 md:py-28 flex justify-center border-t border-neutral-200">
            <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-16">
                {/* LEFT COLUMN */}
                <div className="flex flex-col">
                    <motion.div
                        {...fadeUp(0)}
                        className="mb-10"
                    >
                        <p className="text-[11px] uppercase tracking-wide text-neutral-500 font-medium mb-4">
                            Services
                        </p>

                        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900 mb-4">
                            We design, develop, and deliver sonic systems that work across
                            campaigns, products, platforms, and physical space.
                        </h2>

                        <p className="text-neutral-600 leading-relaxed text-base md:text-lg max-w-xl">
                            When sound is intentional, it doesn’t just support the story —
                            it becomes the story. Our role is to translate feeling into sonic
                            language that people remember.
                        </p>
                    </motion.div>

                    {/* IMAGE CARD */}
                    <motion.div
                        {...fadeUp(0.15)}
                        className="relative max-w-md rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-50 shadow-[0_30px_60px_rgba(0,0,0,0.12)]"
                    >
                        <Image
                            src="/images/sound-studio-portrait.jpg"
                            alt="Studio microphone and workstation"
                            width={800}
                            height={1200}
                            className="object-cover w-full h-auto max-h-72"
                        />
                    </motion.div>
                </div>

                {/* RIGHT COLUMN */}
                <div className="flex flex-col justify-start text-sm leading-relaxed text-neutral-600">
                    {capabilities.map((cap, i) => (
                        <motion.div
                            key={i}
                            {...fadeUp(0.1 * i)}
                            className={`pb-8 ${i !== capabilities.length - 1
                                ? "mb-8 border-b border-neutral-200"
                                : ""
                                }`}
                        >
                            <div className="flex items-center gap-3 mb-3">
                                {cap.icon}
                                <h3 className="font-semibold text-neutral-900 text-lg">
                                    {cap.title}
                                </h3>
                            </div>
                            <p className="text-neutral-600 text-[0.95rem] leading-relaxed pl-9">
                                {cap.body}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
