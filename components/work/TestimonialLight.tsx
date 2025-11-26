"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

export default function TestimonialLight() {
    return (
        <section className="section bg-white text-neutral-900 border-t border-neutral-200">
            <div className="container mx-auto max-w-4xl text-center testimonial">

                {/* Eyebrow */}
                <motion.div
                    className="eyebrow text-neutral-500"
                    {...fadeUp(0)}
                >
                    What clients say
                </motion.div>

                {/* Quote */}
                <motion.blockquote
                    className="text-[1.1rem] leading-[1.6] font-medium tracking-[-0.01em] text-neutral-900 sm:text-[1.25rem] mt-4"
                    {...fadeUp(0.05)}
                >
                    <p>
                        “The wanoura team captured the essence of our brand through sound — building something that
                        feels alive, human, and unmistakably ours.
                    </p>
                    <p className="mt-3">
                        It didn’t just ‘fit the brief’. It became part of our voice.”
                    </p>
                </motion.blockquote>

                {/* Attribution */}
                <motion.div
                    className="mt-6 text-[0.85rem] leading-relaxed text-neutral-600"
                    {...fadeUp(0.1)}
                >
                    <div className="author text-neutral-800">Placeholder Name</div>
                    <div className="author text-neutral-700">Creative Director · Zee Entertainment</div>
                </motion.div>

                {/* Logo row */}
                <motion.div
                    className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-neutral-500"
                    {...fadeUp(0.15)}
                >
                    <div className="text-[0.75rem] font-semibold">Jagemeister</div>
                    <div className="text-[0.75rem] font-semibold">Nike</div>
                    <div className="text-[0.75rem] font-semibold">Uncle&nbsp;Waffles</div>
                    <div className="text-[0.75rem] font-semibold text-center">Zee&nbsp;Entertainment</div>
                </motion.div>

            </div>
        </section>
    );
}
