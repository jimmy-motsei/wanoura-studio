"use client";
import { motion } from "framer-motion";

export default function Services() {
    const cards = [
        {
            eyebrow: "Music with a heart beat",
            title: "Scoring & Composition",
            body: `We compose original themes, cues, and full scores that carry emotion and narrative. 
From subtle motifs to anthemic hooks, every piece is built around your story and audience.`,
        },
        {
            eyebrow: "Immersive worlds",
            title: "Sound Design & Audio Post",
            body: `Textures, foley, atmos, and transitional soundscapes that put the listener 
inside the moment. Dialogue is cleaned, dynamics balanced, and mixes are mastered to spec.`,
        },
        {
            eyebrow: "Human connection",
            title: "Voice & Direction",
            body: `We direct voice talent, shape performance, and find the right tone for your brand 
or story. From commercial VO to long-form narration, we ensure every word lands with intent.`,
        },
        {
            eyebrow: "Controlled loudness",
            title: "Mixing & Mastering",
            body: `We balance stems and dynamics for impact across cinema, broadcast, and streaming. 
QC includes loudness, phase, mono checks — so your message translates anywhere.`,
        },
    ];

    return (
        <section className="section w-full bg-neutral-950 border-t border-neutral-900/50">
            <div className="container max-w-5xl">
                <p className="eyebrow text-neutral-400">
                    What we do
                </p>

                <h2 className="text-lg md:text-xl font-semibold text-white leading-relaxed max-w-3xl mb-2">
                    We design sound that moves.
                </h2>

                <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-3xl mb-8">
                    We craft original scores, immersive sound design, voice direction,
                    and branded audio systems that make messages memorable and experiences
                    intuitive. From film and campaigns to products and podcasts, our work
                    is built for clarity, emotion, and multi-platform delivery.
                </p>

                <div className="card-grid">
                    {cards.map((card, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.05 }}
                            className="service-item service-item--dark"
                        >
                            <p className="eyebrow text-neutral-400 mb-2">
                                {card.eyebrow}
                            </p>

                            <h3 className="text-white font-semibold text-base leading-snug mb-2">
                                {card.title}
                            </h3>

                            <p className="text-neutral-400 text-[0.9rem] leading-relaxed whitespace-pre-line">
                                {card.body}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
