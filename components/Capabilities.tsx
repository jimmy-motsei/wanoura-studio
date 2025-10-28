"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Capabilities() {
    const capabilities = [
        {
            title: "Sonic Identity & Branding",
            body:
                "We define the voice of your brand in sound — mnemonic signatures, tonal palettes, UI sound libraries, and branded audio systems built for campaigns, products, and platforms.",
        },
        {
            title: "Sound Design & Original Composition",
            body:
                "Themes, cues, Foley, atmospheres. We build emotional architecture for film, trailers, activations, and interactive work. Dialogue is cleaned, dynamics balanced, and deliverables are spec-ready.",
        },
        {
            title: "Voice Direction & Vocal Strategy",
            body:
                "We direct voice talent and shape delivery so narration feels lived-in, not read. Tone, pacing, breath, and presence are treated as instruments.",
        },
        {
            title: "Mixing, Mastering & Delivery",
            body:
                "Final masters for clarity, loudness, mono compatibility, and platform translation — cinema, broadcast, streaming, radio, and social. Nothing leaves without QC.",
        },
        {
            title: "Experiential & Spatial Audio",
            body:
                "Immersive, multi-channel, site-specific sound for events, installations, and branded experiences. We build presence, tension, memory.",
        },
    ];

    return (
        <section className="w-full bg-neutral-950 px-6 md:px-12 lg:px-24 py-20 md:py-28 flex justify-center border-t border-neutral-900/50">
            <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-16">
                {/* LEFT COLUMN */}
                <div className="flex flex-col">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-10"
                    >
                        <p className="text-[11px] uppercase tracking-wide text-neutral-500 font-medium mb-4">
                            Services
                        </p>

                        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">
                            We design, develop, and deliver sonic systems that work across
                            campaigns, products, platforms, and physical space.
                        </h2>

                        <p className="text-neutral-400 leading-relaxed text-base md:text-lg max-w-xl">
                            When sound is intentional, it doesn’t just support the story —
                            it becomes the story. Our role is to translate feeling into sonic
                            language that people remember.
                        </p>
                    </motion.div>

                    {/* IMAGE CARD */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="relative max-w-md rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900/60 shadow-[0_30px_120px_rgba(0,0,0,0.8)]"
                    >
                        {/* use your actual asset path here */}
                        <Image
                            src="/images/studio-shot.jpg"
                            alt="Production desk in session"
                            width={800}
                            height={600}
                            className="object-cover w-full h-auto max-h-72 opacity-90"
                        />
                    </motion.div>
                </div>

                {/* RIGHT COLUMN */}
                <div className="flex flex-col justify-start text-sm leading-relaxed text-neutral-400">
                    {capabilities.map((cap, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 * i }}
                            className={`pb-8 ${
                                i !== capabilities.length - 1
                                    ? "mb-8 border-b border-neutral-800"
                                    : ""
                            }`}
                        >
                            <h3 className="font-semibold text-white text-base mb-2">
                                {cap.title}
                            </h3>
                            <p className="text-neutral-400 text-[0.95rem] leading-relaxed">
                                {cap.body}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
