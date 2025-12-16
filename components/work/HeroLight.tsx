"use client";

import { motion } from "framer-motion";
import { fadeUp, tapSpring } from "@/lib/motion";

export default function HeroLight() {
    return (
        <section
            id="hero"
            className="relative bg-white hero min-h-screen flex items-center overflow-hidden"
        >
            {/* Background Design Element */}
            <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 translate-x-[30%] opacity-[0.05] w-[80vh] h-[80vh] md:w-[100vh] md:h-[100vh] select-none">
                <img
                    src="/img/wanoura/hero-bg-icon.png"
                    alt=""
                    className="w-full h-full object-contain"
                />
            </div>
            <div className="mx-auto w-full max-w-5xl px-6 py-20 md:py-0">
                <motion.div
                    className="max-w-2xl"
                    {...fadeUp(0)}
                >
                    <h1 className="display text-[2rem] leading-[1.15] tracking-[-0.035em] font-semibold text-neutral-900 md:text-[2.25rem] md:leading-[1.15]">
                        wanoura.
                    </h1>

                    <h2 className="text-xl md:text-2xl font-medium text-neutral-700 mt-2">
                        Sound, Highly Envisioned.
                    </h2>

                    <p className="lead mt-6 max-w-prose text-sm leading-relaxed text-neutral-600">
                        Wanoura is an award-winning creative studio crafting sonic identities
                        for brands, creators, and storytellers. Our craft is applied where sound
                        meets emotion — designing experiences that move people and endure.
                    </p>

                    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                        <motion.a
                            href="mailto:hello@dreamwanoura.com?subject=Project%20Brief"
                            className="btn-primary"
                            aria-label="Upload your project brief – email wanoura"
                            {...tapSpring}
                        >
                            Upload your project brief
                        </motion.a>
                        <motion.a
                            href="#selected-work"
                            className="btn-outline"
                            aria-label="See our work"
                            {...tapSpring}
                        >
                            See our work
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
