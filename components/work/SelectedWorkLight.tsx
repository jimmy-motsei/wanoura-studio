// components/SelectedWorkLight.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

export default function SelectedWorkLight() {
    const items = [
        {
            year: "2024",
            category: "Launch Film / Custom Music Score",
            title: "Reimagine a Smash hit",
            text: `Created the soundtrack for a rollout campaign to promote an upcoming Uncle Waffles at the Brooklyn Mirage which is traditionally a Jazz venue. We reinterpreted her hit song Wadibusa into a beautiful Jazz rendition.`,
            extra: "Deliverables: custom music score, launch film soundtrack, Jazz arrangement.",
            icon: "/client-logos/jagermeister.png",
            iconClass: "h-12 w-12",
        },
        {
            year: "2023",
            category: "Film / Custom Music Score",
            title: "Setting a cultural scene.",
            text: `Scoring what huge cultural impact sounds like. Done on multiple instances to create waves that resonate as deeply as the message behind the client's flagship product.`,
            extra: "Deliverables: custom film score, cultural soundscapes, brand sonic identity.",
            icon: "/client-logos/studio-banana.png",
            iconClass: "h-12 w-12",
        },
    ];

    return (
        <section className="bg-white py-20 md:py-24" id="selected-work">
            <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                {/* header */}
                <motion.p className="eyebrow text-slate-500" {...fadeUp(0)}>
                    Selected work
                </motion.p>

                <motion.div {...fadeUp(0.05)}>
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
                <div className="mt-10 grid gap-6 md:grid-cols-2">
                    {items.map((item, i) => (
                        <motion.article
                            key={item.title}
                            {...fadeUp(0.15 + i * 0.05, 40)}
                            className="relative flex min-h-[340px] flex-col gap-6 overflow-hidden rounded-2xl bg-[#121212] border border-white/5 p-8 shadow-[0_24px_60px_rgba(0,0,0,.15)] md:p-10 text-white"
                        >
                            {/* Icon (if present) */}
                            {item.icon && (
                                <div className={`absolute right-8 top-8 opacity-60 grayscale transition-all hover:grayscale-0 ${item.iconClass || "h-12 w-12"}`}>
                                    <Image
                                        src={item.icon}
                                        alt="Client Icon"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            )}

                            {/* top meta */}
                            <p className="text-xs uppercase tracking-[0.28em] text-white/45">
                                {item.year} • {item.category}
                            </p>

                            {/* title */}
                            <h3 className="max-w-[90%] text-2xl font-semibold leading-tight text-white md:text-3xl">
                                {item.title}
                            </h3>

                            {/* main copy */}
                            <p className="max-w-[90%] text-base leading-relaxed text-white/80">
                                {item.text}
                            </p>

                            {/* footer/meta */}
                            <p className="mt-auto pt-4 text-xs uppercase tracking-wide text-white/50">
                                {item.extra}
                            </p>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
