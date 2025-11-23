"use client";
import { motion } from "framer-motion";

export default function Work() {
    const projects = [
        {
            meta: "2024 · Campaign Score",
            title: "Get people to feel something in 3 seconds.",
            body:
                "We scored and sound-designed a social-first campaign that had to work with no dialogue, no copy, and auto-muted playback. Every sound carried intention — rhythm, identity, and hook.",
        },
        {
            meta: "2023 · Cinematic Trailer",
            title: "Voice as mythology, not narration.",
            body:
                "We built a vocal arc that felt like oral history instead of VO. Breath, pacing, and tone were sculpted to feel like memory instead of marketing. The result: goosebumps, not bullet points.",
        },
        {
            meta: "2023 · Product Launch / App",
            title: "Designing a sonic OS for a new product.",
            body:
                "We created an audio language for a health/AI tool — alerts, affirmations, guidance. The sound had to communicate care and safety, not urgency and panic. Calm was the brand.",
        },
    ];

    return (
        <section className="w-full bg-neutral-950 px-6 md:px-12 lg:px-24 py-20 md:py-28 border-t border-neutral-900/50">
            <div className="max-w-5xl">
                <h2 className="text-white text-lg md:text-xl font-semibold leading-snug mb-6">
                    Selected Work
                </h2>

                <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-3xl mb-12">
                    From global campaigns to product launches and cultural moments, our
                    work is built to move people — emotionally, physically, and culturally.
                    The throughline is always the same: sound that feels alive.
                </p>

                <div className="grid gap-6 md:grid-cols-3">
                    {projects.map((p, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.05 }}
                            className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-5 shadow-[0_30px_120px_rgba(0,0,0,0.8)] text-left"
                        >
                            <p className="text-[10px] uppercase tracking-[0.12em] text-neutral-500 mb-3">
                                {p.meta}
                            </p>
                            <h3 className="text-white font-semibold text-base leading-snug mb-3">
                                {p.title}
                            </h3>
                            <p className="text-neutral-400 text-[0.8rem] leading-relaxed whitespace-pre-line">
                                {p.body}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
