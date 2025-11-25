"use client";

import { motion } from "framer-motion";

export default function HeroLight() {
    return (
        <section
            id="hero"
            className="relative bg-white hero min-h-screen flex items-center"
        >
            <div className="mx-auto w-full max-w-5xl px-6 py-20 md:py-0">
                <motion.div
                    className="max-w-2xl"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                    {/* HEADLINE + STRAPLINE */}
                    <h1 className="display text-[2rem] leading-[1.15] tracking-[-0.035em] font-semibold text-neutral-900 md:text-[2.25rem] md:leading-[1.15]">
                        wanoura.
                    </h1>

                    <h2 className="text-xl md:text-2xl font-medium text-neutral-700 mt-2">
                        The Legacy of Sound.
                    </h2>

                    {/* BODY COPY */}
                    <p className="lead mt-6 max-w-prose text-sm leading-relaxed text-neutral-600">
                        Wanoura is an award-winning creative studio crafting sonic identities for brands, creators,
                        and storytellers. Our craft is applied where sound meets emotion — designing experiences
                        that move people and endure.
                    </p>

                    {/* CTA */}
                    <a
                        href="mailto:hello@dreamwanoura.com?subject=Project%20Brief"
                        className="inline-flex mt-8 rounded-full bg-black px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        aria-label="Upload your project brief – email wanoura"
                    >
                        Upload your project brief
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
