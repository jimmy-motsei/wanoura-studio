"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Navbar() {
    return (
        <header className="w-full bg-neutral-900 text-neutral-100 border-b border-neutral-800">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-12 lg:px-24">
                {/* Left: Brand */}
                <motion.a
                    href="#top"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex items-center space-x-2"
                >
                    {/* Circle mark / placeholder for the Wanoura mark */}
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-600 text-[11px] font-medium">
                        W
                    </div>

                    <div className="flex flex-col leading-none">
            <span className="text-sm font-semibold tracking-tight text-white">
              Wanoura
            </span>
                        <span className="text-[11px] text-neutral-400">
              The Legacy of Sound
            </span>
                    </div>
                </motion.a>

                {/* Right: Nav links */}
                <nav className="hidden md:flex items-center space-x-6 text-[13px] text-neutral-300">
                    <a
                        href="#about"
                        className="hover:text-white transition-colors"
                    >
                        About
                    </a>
                    <a
                        href="#services"
                        className="hover:text-white transition-colors"
                    >
                        Services
                    </a>
                    <a
                        href="#work"
                        className="hover:text-white transition-colors"
                    >
                        Work
                    </a>
                    <a
                        href="#contact"
                        className="hover:text-white transition-colors"
                    >
                        Contact
                    </a>
                </nav>

                {/* Mobile CTA or Contact button */}
                <a
                    href="mailto:hello@wanoura.studio"
                    className="ml-4 inline-flex items-center rounded-full border border-neutral-600 bg-transparent px-3 py-1.5 text-[12px] font-medium text-white hover:bg-white hover:text-neutral-900 transition-colors md:hidden"
                >
                    Reach Out
                </a>
            </div>
        </header>
    );
}
