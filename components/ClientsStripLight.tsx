// components/ClientsStripLight.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { clients } from "@/lib/site-config";

export default function ClientsStripLight() {
    // clients data moved to lib/site-config.ts

    return (
        <section className="relative py-6 md:py-8">
            <p className="text-center text-xs tracking-[0.32em] uppercase text-slate-900/70 mb-4">
                WE’VE WORKED WITH HUNDREDS OF AMAZING PEOPLE
            </p>

            <div className="mx-auto max-w-6xl rounded-[1.6rem] bg-black shadow-[0_28px_70px_rgba(0,0,0,0.35)] px-6 md:px-10 min-h-[9.5rem] flex items-center">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="grid grid-cols-5 items-center gap-6 md:gap-10 w-full"
                >
                    {clients.map((client) => (
                        <div
                            key={client.name}
                            className="flex items-center justify-center min-h-[5rem]"
                        >
                            <Image
                                src={client.src}
                                alt={client.name}
                                width={client.width}
                                height={client.height}
                                className="h-10 w-auto md:h-12 object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
                                sizes="(min-width: 1024px) 200px, (min-width: 768px) 160px, 140px"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
