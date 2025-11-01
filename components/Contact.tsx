"use client";

import React from "react";
import { CONTACT_EMAIL } from "../lib/contact";
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section
            id="contact"
            className="w-full bg-white text-neutral-900 py-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-6xl mx-auto">
                {/* Outer card */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="bg-neutral-900 text-neutral-100 rounded-2xl border border-neutral-800 shadow-2xl p-8 md:p-10 lg:p-12 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12"
                >
                    {/* Left block: headline + CTA */}
                    <div className="lg:max-w-sm flex-1">
                        <h2 className="text-xl md:text-2xl font-medium tracking-tight text-white mb-4">
                            Tell us about your project
                        </h2>

                        <p className="text-sm text-neutral-400 leading-relaxed mb-8">
                            Whether you’re building a campaign, launching a product, or
                            shaping a world — we help you design the sound of it. Reach out
                            and we’ll put ears on it.
                        </p>

                        <button
                            className="inline-flex items-center rounded-full border border-neutral-500 bg-transparent text-white text-sm font-medium px-4 py-2 hover:bg-white hover:text-neutral-900 transition-colors"
                            onClick={() => {
                                window.location.href = `mailto:${CONTACT_EMAIL}?subject=Project%20Enquiry`;
                            }}
                        >
                            Say Hello
                        </button>
                    </div>

                    {/* Right block: contact details / offices */}
                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-10 text-sm">
                        {/* Studio / Primary */}
                        <div>
                            <p className="uppercase text-[11px] tracking-wide text-neutral-400 mb-3">
                                Studio
                            </p>
                            <p className="text-neutral-100 font-medium">Wanoura Sound Studio</p>
                            <p className="text-neutral-400 leading-relaxed">
                                Johannesburg, South Africa
                                <br />
                                Available worldwide / remote sessions
                            </p>

                            <div className="mt-4">
                                <p className="text-neutral-100 font-medium">Email</p>
                                <a
                                    href={`mailto:${CONTACT_EMAIL}`}
                                    className="text-neutral-400 hover:text-white transition-colors"
                                >
                                    {CONTACT_EMAIL}
                                </a>
                            </div>
                        </div>

                        {/* Capabilities / availability / socials */}
                        <div>
                            <p className="uppercase text-[11px] tracking-wide text-neutral-400 mb-3">
                                Working With Wanoura
                            </p>
                            <ul className="text-neutral-400 leading-relaxed space-y-2">
                                <li>Original music & scoring</li>
                                <li>Sound design & VO direction</li>
                                <li>Mixing / mastering for broadcast & streaming</li>
                                <li>Brand sonic identity systems</li>
                            </ul>

                            <div className="mt-4">
                                <p className="text-neutral-100 font-medium">Social / Reels / Cuts</p>
                                <p className="text-neutral-400">
                                    IG / Vimeo / Private reels on request
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
