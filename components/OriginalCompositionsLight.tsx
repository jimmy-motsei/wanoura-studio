"use client";

import { useState } from "react";

type ScoreItem = {
    id: string;
    title: string;
    client: string;
    year: string;
    description: string;
    videoSrc: string;
    posterSrc: string;
};

const SCORES: ScoreItem[] = [
    {
        id: "jagermeister",
        title: "“My Waffles” — teaser cue",
        client: "Jägermeister",
        year: "2024",
        description: "Energetic, rhythmic, built for short-form and social rollouts.",
        videoSrc: "/original-compositions-custom-scores/jagermeister-my-waffles-tease.mp4",
        posterSrc:
            "/original-compositions-custom-scores/posters/jagermeister-my-waffles-tease.svg",
    },
    {
        id: "love-letters",
        title: "Love Letters to my Mom",
        client: "Studio Bananaaa",
        year: "2024",
        description: "Soft, human-centred score with warm mids and gentle movement.",
        videoSrc: "/original-compositions-custom-scores/studio-bananaaa-love-letters-to-my-mom.mp4",
        posterSrc:
            "/original-compositions-custom-scores/posters/studio-bananaaa-love-letters-to-my-mom.svg",
    },
    {
        id: "mamas-boy",
        title: "Mama’s Boy",
        client: "Studio Bananaaa",
        year: "2024",
        description: "Groove, personality, bass-forward. Built to sit under edits.",
        videoSrc: "/original-compositions-custom-scores/studio-bananaaa-mamas-boy.mp4",
        posterSrc:
            "/original-compositions-custom-scores/posters/studio-bananaaa-mamas-boy.svg",
    },
    {
        id: "umfana-ka-ma",
        title: "Umfana ka Ma",
        client: "Studio Bananaaa",
        year: "2024",
        description: "Rhythmic, modern African texture for culture-first stories.",
        videoSrc: "/original-compositions-custom-scores/studio-bananaaa-umfana-ka-ma.mp4",
        posterSrc:
            "/original-compositions-custom-scores/posters/studio-bananaaa-umfana-ka-ma.svg",
    },
];

export default function OriginalCompositionsLight() {
    const [activeId, setActiveId] = useState<string>(SCORES[0]?.id ?? "");

    const activeItem = SCORES.find((item) => item.id === activeId) ?? SCORES[0];

    return (
        <section
            id="custom-scores"
            className="bg-white text-neutral-900 py-20 lg:py-28"
        >
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <header className="mb-10 lg:mb-14 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <p className="text-xs font-medium uppercase tracking-[0.24em] text-neutral-500">
                            Original Compositions &amp; Custom Scores
                        </p>
                        <h2 className="mt-3 text-3xl tracking-tight sm:text-4xl lg:text-[2.7rem] font-semibold text-neutral-900">
                            Music built around story, culture, and intention.
                        </h2>
                        <p className="mt-4 max-w-3xl text-base text-neutral-600 leading-relaxed">
                            Selected cues for brands and storytellers. Each piece is crafted
                            to translate emotion into sonic language — ready for picture,
                            social, and campaign rollouts.
                        </p>
                    </div>
                    <div className="text-sm text-neutral-500 flex gap-3 items-center">
                        <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                        4 featured scores
                    </div>
                </header>

                {/* Main layout: player + list */}
                <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] items-start">
                    {/* Player */}
                    <div className="rounded-3xl bg-neutral-50 border border-neutral-200 overflow-hidden shadow-sm">
                        <div className="aspect-video bg-white">
                            {/* We’re using native <video> here because your assets are local */}
                            <video
                                key={activeItem.id}
                                src={activeItem.videoSrc}
                                poster={activeItem.posterSrc}
                                controls
                                preload="metadata"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="px-6 py-6 lg:px-8 lg:py-7 space-y-2">
                            <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                                {activeItem.client} • {activeItem.year}
                            </p>
                            <h3 className="text-xl font-semibold text-neutral-900">
                                {activeItem.title}
                            </h3>
                            <p className="text-sm text-neutral-600 leading-relaxed">
                                {activeItem.description}
                            </p>
                        </div>
                    </div>

                    {/* List of scores */}
                    <div className="space-y-4">
                        {SCORES.map((item) => {
                            const isActive = item.id === activeId;
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveId(item.id)}
                                    className={`w-full text-left rounded-2xl border transition-all flex gap-4 items-center p-4 lg:p-5 ${
                                        isActive
                                            ? "border-neutral-900 bg-neutral-900/5 shadow-sm"
                                            : "border-neutral-200 hover:border-neutral-400 bg-white"
                                    }`}
                                >
                                    {/* tiny poster preview */}
                                    <div className="hidden sm:block w-20 h-14 rounded-xl overflow-hidden bg-neutral-100 border border-neutral-200 flex-shrink-0">
                                        {/* using img is okay for local svg here */}
                                        <img
                                            src={item.posterSrc}
                                            alt={item.title}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-[0.65rem] uppercase tracking-[0.25em] text-neutral-500">
                                            {item.client}
                                        </p>
                                        <p className="mt-1 text-sm font-medium text-neutral-900">
                                            {item.title}
                                        </p>
                                        <p className="mt-1 text-xs text-neutral-500 line-clamp-2">
                                            {item.description}
                                        </p>
                                    </div>
                                    <div className="text-xs text-neutral-400">{item.year}</div>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* footer note */}
                <p className="mt-10 text-xs text-neutral-400">
                    All music © {new Date().getFullYear()} Wanoura Sound Studio. Created
                    for client campaigns, social storytelling, and cultural experiences.
                </p>
            </div>
        </section>
    );
}
