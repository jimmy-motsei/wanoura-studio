// components/ClientsStripLight.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { clients } from "@/lib/site-config";

export default function ClientsStripLight() {
    // clients data moved to lib/site-config.ts

    return (
        <section className="relative py-6 md:py-8">
            <motion.p
                className="text-center text-xs tracking-[0.32em] uppercase text-slate-900/70 mb-4"
                {...fadeUp(0)}
            >
                WE’VE WORKED WITH HUNDREDS OF AMAZING PEOPLE
            </motion.p>

            <div className="mx-auto max-w-6xl rounded-[1.6rem] bg-black shadow-[0_28px_70px_rgba(0,0,0,0.35)] px-6 md:px-10 min-h-[9.5rem] flex items-center">
                <motion.div
                    {...fadeUp(0.05)}
                    className="flex w-full flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-10 md:justify-between"
                >
                    {clients.map((client) => (
                        <div
                            key={client.name}
                            className="flex min-h-[5rem] basis-1/2 items-center justify-center sm:basis-1/3 md:basis-auto"
                        >
                            <Image
                                src={client.src}
                                alt={client.name}
                                width={200}
                                height={60}
                                className={`h-14 w-auto object-contain md:h-16 ${client.className ?? ""}`}
                                sizes="(min-width: 1024px) 200px, (min-width: 768px) 160px, 140px"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
