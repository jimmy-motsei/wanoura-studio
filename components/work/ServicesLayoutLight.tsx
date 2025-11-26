"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

export default function ServicesLayoutLight() {
    return (
        <section id="services" className="section bg-white py-20">
            <div className="container max-w-5xl mx-auto px-6">
                <motion.p
                    className="section-label text-slate-400"
                    {...fadeUp(0)}
                >
                    Services
                </motion.p>

                <motion.h2
                    className="text-4xl sm:text-[2.65rem] leading-tight tracking-[-0.02em] text-slate-900 max-w-3xl"
                    {...fadeUp(0.05)}
                >
                    Sound that works for screens, digital, and live experiences.
                </motion.h2>

                <motion.p
                    className="mt-4 text-[1.05rem] leading-relaxed text-slate-600 max-w-3xl"
                    {...fadeUp(0.1)}
                >
                    We craft music, voice, and sonic systems that carry emotion, guide narrative,
                    and land impact in campaign work, film, trailers, podcasts, products, and experiences.
                </motion.p>
            </div>
        </section>
    );
}
