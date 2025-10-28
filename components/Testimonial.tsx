"use client";
import { motion } from "framer-motion";

export default function Testimonial() {
    return (
        <section className="w-full bg-neutral-950 px-6 md:px-12 lg:px-24 py-20 md:py-28 border-t border-neutral-900/50 text-center">
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto"
            >
                <p className="text-white text-base md:text-lg leading-relaxed font-medium mb-6">
                    “The Wanoura team captured the essence of our brand through sound —
                    creating an identity that feels alive, human, and timeless.”
                </p>

                <div className="text-neutral-500 text-xs uppercase tracking-wide">
                    Audiowave Studios · Global Production Partner
                </div>
            </motion.div>
        </section>
    );
}
