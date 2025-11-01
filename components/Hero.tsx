"use client";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="hero hero--dark relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-neutral-900 to-neutral-950">
            {/* soft radial glow */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.08)_0%,rgba(0,0,0,0)_70%)] opacity-[.08]" />

            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative container mx-auto text-center"
            >
                <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight text-white mb-6">
                    The Legacy of Sound
                </h1>

                <p className="text-lg md:text-xl leading-relaxed text-neutral-300 mb-10">
                    Crafting sonic identities for brands, creators, and storytellers. We
                    work where sound meets emotion — designing experiences that resonate,
                    inspire, and endure.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button className="btn-primary">
                        Explore Our Work
                        <span className="icon">→</span>
                    </button>
                    <button className="btn-ghost text-white border border-white/30">
                        Get in Touch
                    </button>
                </div>
            </motion.div>
        </section>
    );
}
