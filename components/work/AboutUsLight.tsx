// components/work/AboutUsLight.tsx
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

export default function AboutUsLight() {
    // const copyRef = useRef<HTMLDivElement | null>(null);
    // const mediaRef = useRef<HTMLElement | null>(null);

    // Height sync removed to allow portrait aspect ratio

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
                        Sonic Architecture
                    </h2>
                    <p className="mt-2 text-[13px] text-neutral-600 md:text-[14px]">
                        Signal Through Noise
                    </p>
                </motion.header>

                <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
                    {/* Left: Copy */}
                    <motion.div
                        className="text-[13px] leading-relaxed text-neutral-900 md:text-[14px]"
                        {...fadeUp(0.05)}
                    >
                        <p>
                            Wanoura is a creative sound studio partnering with brands to solve complex
                            challenges through audio. We move beyond background noise, crafting
                            bespoke sonic identities that cut through the clutter and resonate on an
                            emotional level. Precision meets feeling.
                        </p>
                        <p className="mt-4">
                            In a world saturated with noise, clarity is our currency. We treat sound as a
                            core architectural element of your brand. Through meticulous composition and
                            sonic identity design, we craft audio that elevates the signal-to-noise
                            ratio—ensuring your message is felt, not just heard.
                        </p>
                        <p className="mt-4">
                            We believe true craft lies in the unseen details. Our approach merges
                            technical precision with emotional resonance. Whether for broadcast or
                            digital, we design soundscapes that linger in the mind long after the moment
                            has passed.
                        </p>
                    </motion.div>

                    {/* Right: Image */}
                    <motion.figure
                        className="relative w-full overflow-hidden rounded-2xl shadow-[0_28px_70px_rgba(0,0,0,0.35)] aspect-[3/4]"
                        {...fadeUp(0.1)}
                    >
                        <Image
                            src="/images/classic-speaker.webp"
                            alt="Abstract resonance waves"
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
