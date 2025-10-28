"use client";
import { motion } from "framer-motion";

export default function ContactCTA() {
    return (
        <section className="relative w-full min-h-screen bg-neutral-950 px-6 md:px-12 lg:px-24 py-24 flex items-center justify-center border-t border-neutral-900/50">
            {/* glow / vignette */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.07)_0%,rgba(0,0,0,0)_70%)] opacity-30" />

            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative w-full max-w-4xl text-center"
            >
                <h2 className="text-white text-2xl md:text-3xl font-semibold leading-snug mb-6">
                    Wanoura — The Legacy of Sound.
                </h2>

                <p className="text-neutral-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
                    We build sonic worlds where emotion and precision coexist. From score
                    to mix, from texture to voice, we shape sound that moves people and
                    endures.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                    <button className="bg-white text-neutral-900 text-sm font-medium rounded-xl px-5 py-3 hover:bg-neutral-100">
                        Listen / Watch Work
                    </button>
                    <button className="bg-transparent text-white border border-white/30 text-sm font-medium rounded-xl px-5 py-3 hover:bg-white hover:text-neutral-900 hover:border-white">
                        Start a Project
                    </button>
                </div>

                <div className="text-neutral-500 text-xs leading-relaxed">
                    <div>Johannesburg · Remote / Global</div>
                    <div>Voice, Score, Sonic Identity, Mix & Delivery</div>
                    <div>Built for brands, campaigns, and culture.</div>
                </div>
            </motion.div>
        </section>
    );
}
