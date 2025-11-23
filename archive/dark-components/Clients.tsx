"use client";
import { motion } from "framer-motion";

export default function Clients() {
    const brands = [
        "Audiowave",
        "Family Fund",
        "BrightPath",
        "North Adventures",
        "Mailmark",
        "Green Life",
    ];

    return (
        <section className="w-full bg-neutral-950 px-6 md:px-12 lg:px-24 py-20 md:py-28 border-t border-neutral-900/50">
            <div className="max-w-5xl text-center">
                <h2 className="text-white text-lg md:text-xl font-semibold leading-snug mb-10">
                    We’ve collaborated with some truly inspiring people and brands
                </h2>

                <div className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3 text-left justify-items-center">
                    {brands.map((name, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.05 }}
                            className="flex items-start gap-2 text-neutral-300 text-sm"
                        >
                            <div className="w-4 h-4 rounded-sm bg-neutral-700/40 border border-neutral-600/50" />
                            <span className="leading-tight">{name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
