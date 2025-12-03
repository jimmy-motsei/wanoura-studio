"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

type CaseStudy = {
    id: string;
    client: string;
    projectTitle: string;
    category: string;
    year: string;
    challenge: string;
    solution: string;
    outcome: string;
    services: string[];
};

const caseStudies: CaseStudy[] = [
    {
        id: "my-waffles",
        client: "Jägermeister",
        projectTitle: "My Waffles (Tease)",
        category: "Branded Content",
        year: "2024",
        challenge: "Jägermeister needed a sonic identity for their 'My Waffles' campaign teaser that felt edgy, energetic, and culturally relevant without overshadowing the visual narrative.",
        solution: "We composed a high-energy, texture-rich score that blended electronic elements with raw percussion. The sound design was crafted to punctuate visual cuts, creating a rhythmic drive that builds anticipation.",
        outcome: "A high-impact teaser that generated significant social engagement and set the perfect tone for the full campaign rollout.",
        services: ["Original Score", "Sound Design", "Mix"],
    },
    {
        id: "love-letters",
        client: "Studio Bananaaa",
        projectTitle: "Love Letters to my Mom",
        category: "Short Film",
        year: "2024",
        challenge: "The film required a delicate, emotional musical backdrop that could support intimate storytelling without becoming melodramatic or intrusive.",
        solution: "We stripped back the arrangement to focus on organic instrumentation and space. The score uses subtle melodic motifs that evolve with the narrative arc, allowing the voiceover to take center stage.",
        outcome: "An emotionally resonant film where sound and image work in perfect harmony to deliver a powerful message of connection.",
        services: ["Original Score", "VO Direction", "Delivery"],
    },
];

export default function CaseStudies() {
    return (
        <section id="case-studies" className="bg-neutral-50 py-20 md:py-24 border-t border-neutral-200">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12 md:mb-16">
                    <p className="section-label text-neutral-500">Selected Work</p>
                    <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
                        Case Studies
                    </h2>
                    <p className="mt-4 max-w-2xl text-neutral-600 leading-relaxed">
                        A deeper look at how we solve creative problems through sound.
                    </p>
                </div>

                <div className="grid gap-12 lg:gap-16">
                    {caseStudies.map((study, index) => (
                        <motion.div
                            key={study.id}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } }
                            }}
                            className="grid gap-8 lg:grid-cols-12 lg:gap-12 items-start"
                        >
                            {/* Left: Project Info */}
                            <div className="lg:col-span-4">
                                <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-wider text-neutral-500 mb-3">
                                    <span>{study.client}</span>
                                    <span className="h-1 w-1 rounded-full bg-neutral-300" />
                                    <span>{study.year}</span>
                                </div>
                                <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                                    {study.projectTitle}
                                </h3>
                                <span className="inline-block rounded-full bg-neutral-200/60 px-3 py-1 text-xs font-medium text-neutral-600 mb-6">
                                    {study.category}
                                </span>

                                <div className="flex flex-wrap gap-2">
                                    {study.services.map((service) => (
                                        <span
                                            key={service}
                                            className="text-xs text-neutral-500 border border-neutral-200 rounded px-2 py-1"
                                        >
                                            {service}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Right: Narrative */}
                            <div className="lg:col-span-8 bg-white rounded-2xl p-6 md:p-8 border border-neutral-200/60 shadow-sm">
                                <div className="grid gap-6 md:grid-cols-3">
                                    <div className="md:col-span-3">
                                        <h4 className="text-sm font-semibold text-neutral-900 mb-2 uppercase tracking-wide">The Challenge</h4>
                                        <p className="text-sm leading-relaxed text-neutral-600">{study.challenge}</p>
                                    </div>
                                    <div className="md:col-span-3">
                                        <h4 className="text-sm font-semibold text-neutral-900 mb-2 uppercase tracking-wide">The Solution</h4>
                                        <p className="text-sm leading-relaxed text-neutral-600">{study.solution}</p>
                                    </div>
                                    <div className="md:col-span-3 pt-4 border-t border-neutral-100">
                                        <h4 className="text-sm font-semibold text-neutral-900 mb-2 uppercase tracking-wide">The Outcome</h4>
                                        <p className="text-sm leading-relaxed text-neutral-600 italic">"{study.outcome}"</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
