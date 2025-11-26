// components/SelectedWorkLight.tsx
"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

export default function SelectedWorkLight() {
    const items = [
        {
            year: "2024",
            category: "Launch film / Sonic identity",
            title: "“Make them feel it in 3 seconds.”",
            text: `We built an aggressive, high-memory hook for Jägermeister that had to hit fast on social. No warm-up. The brief: sound that tastes like fire, but still clears legal.`,
            extra: "Deliverables: hero sting, cutdowns, edit-safe alts, paid + organic versions.",
        },
        {
            year: "2024",
            category: "Brand world / Voice & identity",
            title: "A voice that sounds like the future — not a script.",
            text: `For Nike, we built a vocal identity that feels human, urgent, and undeniable — not announcer-y. Casting, direction, timing, breathing, pace.`,
            extra: "Deliverables: campaign VO system, multilingual reads, creator handoff kit.",
        },
        {
            year: "2023",
            category: "TV / show / Cultural moment / Mix & delivery",
            title: "Turning a live set into a brand.",
            text: `With Uncle Waffles, we shaped the full audio experience — transitions, drops, crowd texture, on-stage identity.`,
            extra: "Deliverables: live show stems, streaming masters, teaser audio for socials.",
        },
    ];

    return (
        <section className="bg-white py-20 md:py-24" id="selected-work">
            <div className="container mx-auto max-w-6xl">
                {/* header */}
                <motion.p className="eyebrow text-slate-500" {...fadeUp(0)}>
                    Selected work
                </motion.p>

                <motion.div {...fadeUp(0)}>
                    <h2 className="text-[2rem] sm:text-[2.65rem] leading-tight tracking-[-0.02em] text-slate-900 max-w-4xl">
                        From global campaigns to cultural moments.
                    </h2>
                </motion.div>

                <motion.div {...fadeUp(0.08)}>
                    <h3 className="mt-3 text-[1.55rem] sm:text-[1.9rem] font-normal leading-[1.35] tracking-[-0.01em] text-slate-700 max-w-4xl">
                        We design sound that moves people — emotionally, physically, and culturally.
                    </h3>
                </motion.div>

                <motion.p className="mt-4 max-w-3xl text-slate-600" {...fadeUp(0.1)}>
                    This is a snapshot of recent work. Each project blends score, identity,
                    voice, mix, and delivery — built for speed, built for story, built for
                    roll-out.
                </motion.p>

                {/* cards */}
                <div className="mt-10 grid gap-6 md:grid-cols-3">
                    {items.map((item, i) => (
                        <motion.article
                            key={item.title}
                            {...fadeUp(0.15 + i * 0.05, 40)}
                            className="rounded-2xl bg-[#121212] border border-white/5 shadow-[0_24px_60px_rgba(0,0,0,.15)] flex flex-col gap-4 p-6 md:p-7 min-h-[280px] text-white"
                        >
                            {/* top meta */}
                            <p className="text-[11px] uppercase tracking-[0.28em] text-white/45">
                                {item.year} • {item.category}
                            </p>

                            {/* title */}
                            <h3 className="text-lg font-semibold leading-snug text-white">
                                {item.title}
                            </h3>

                            {/* main copy */}
                            <p className="text-sm leading-relaxed text-white/80">
                                {item.text}
                            </p>

                            {/* footer/meta */}
                            <p className="text-[11px] uppercase tracking-wide text-white/50 mt-auto">
                                {item.extra}
                            </p>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
