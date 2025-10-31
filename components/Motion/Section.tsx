"use client";

import { motion } from "framer-motion";
import React from "react";

const baseVariants = {
    hidden: { opacity: 0, y: 28 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.45,
            ease: "easeOut",
        },
    },
};

export default function Section({
                                    children,
                                    className = "",
                                    delay = 0,
                                }: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}) {
    return (
        <motion.section
            className={className}
            variants={baseVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay }}
        >
            {children}
        </motion.section>
    );
}