// components/work/AboutUsLight.tsx
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

export default function AboutUsLight() {
    const copyRef = useRef<HTMLDivElement | null>(null);
    const mediaRef = useRef<HTMLElement | null>(null);

    // Keep image height in sync with copy height
    useEffect(() => {
        const copyEl = copyRef.current;
        const mediaEl = mediaRef.current;
        if (!copyEl || !mediaEl) return;

        const updateHeight = () => {
            mediaEl.style.height = `${copyEl.offsetHeight}px`;
        };

        updateHeight(); // initial sync

        const ro = new ResizeObserver(updateHeight);
        ro.observe(copyEl);

        window.addEventListener("resize", updateHeight);

        return () => {
            ro.disconnect();
            window.removeEventListener("resize", updateHeight);
        };
    }, []);

    return (
        <section
            id="about"
            aria-labelledby="about-heading"
            className="relative border-t border-neutral-200 bg-white"
        >
            <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
                <motion.header className="mb-8" {...fadeUp(0)}>
                    <h2
                        id="about-heading"
                        className="text-[1.5rem] font-medium leading-[1.2] tracking-[-0.03em] text-neutral-900 md:text-[1.75rem]"
                    >
                        About Us
                    </h2>
                    <p className="mt-2 text-[13px] text-neutral-600 md:text-[14px]">
                        Meet the Founder
                    </p>
                </motion.header>

                <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
                    {/* Left: Copy */}
                    <motion.div
                        ref={copyRef}
                        className="text-[13px] leading-relaxed text-neutral-900 md:text-[14px]"
                        {...fadeUp(0.05)}
                    >
                        <p>
                            Onkgopotse Motsei is an award-winning sound engineer, composer,
                            and musician based in Johannesburg, South Africa. With a
                            foundation in live performance and session work, he has developed
                            a unique ability to craft music and soundscapes that connect
                            audiences and amplify stories. His work spans multiple genres and
                            styles, blending influences from Neo-Soul, Jazz, RnB, Hip-Hop, and
                            contemporary cinematic scoring to create immersive auditory
                            experiences.
                        </p>
                        <p className="mt-4">
                            Over the past 4–5 years, Onkgopotse has collaborated with globally
                            recognized brands including Nike and Jägermeister, as well as
                            innovative world-class artists such as Uncle Waffles. His
                            expertise lies in translating creative visions into sound, whether
                            that’s composing bespoke music for advertising, designing sound
                            for branded media, or producing high-end audio experiences like
                            Dolby Atmos mixes.
                        </p>
                        <p className="mt-4">
                            Driven by a commitment to innovation and excellence, Onkgopotse
                            now leads wanoura, a creative agency where music, sound design,
                            and storytelling converge. He combines technical mastery with a
                            deep understanding of brand and narrative, ensuring every project
                            not only resonates but leaves a lasting impression.
                        </p>
                    </motion.div>

                    {/* Right: Image */}
                    <motion.figure
                        ref={mediaRef}
                        className="relative w-full overflow-hidden rounded-2xl shadow-[0_28px_70px_rgba(0,0,0,0.35)]"
                        {...fadeUp(0.1)}
                    >
                        <Image
                            src="/img/founder.png"
                            alt="Onkgopotse Motsei speaking on a microphone"
                            fill
                            className="object-cover rounded-2xl"
                            sizes="(min-width: 1024px) 480px, 90vw"
                        />
                    </motion.figure>
                </div>
            </div>
        </section>
    );
}
