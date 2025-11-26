"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroLight() {
    const containerRef = React.useRef<HTMLDivElement>(null);
    
    // Track scroll progress of the entire viewport (simpler, more reliable)
    const { scrollY } = useScroll();
    
    // Transform: as you scroll from 0 to 500px, move content up by 80px
    const y = useTransform(scrollY, [0, 500], [0, -80]);
    
    return (
        <section
            id="hero"
            className="relative bg-white hero min-h-screen flex items-center"
        >
            <div className="mx-auto w-full max-w-5xl px-6 py-20 md:py-0">
                <motion.div
                    ref={containerRef}
                    className="max-w-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                        duration: 1.2, 
                        ease: [0.25, 0.8, 0.3, 1],
                        delay: 0.3 
                    }}
                    style={{ y }}
                >
                    <h1 className="display text-[2rem] leading-[1.15] tracking-[-0.035em] font-semibold text-neutral-900 md:text-[2.25rem] md:leading-[1.15]">
                        wanoura.
                    </h1>

                    <h2 className="text-xl md:text-2xl font-medium text-neutral-700 mt-2">
                        The Legacy of Sound.
                    </h2>

                    <p className="lead mt-6 max-w-prose text-sm leading-relaxed text-neutral-600">
                        Wanoura is an award-winning creative studio crafting sonic identities for brands, creators,
                        and storytellers. Our craft is applied where sound meets emotion — designing experiences
                        that move people and endure.
                    </p>

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
