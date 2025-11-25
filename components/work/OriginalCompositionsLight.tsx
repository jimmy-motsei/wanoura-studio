// components/OriginalCompositionsLight.tsx
"use client";

import * as React from "react";

export default function OriginalCompositionsLight() {
    return (
        <section id="moving-pictures" className="bg-white py-20 md:py-24">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-center text-3xl font-semibold tracking-tight text-neutral-900">
                    Sound made for moving pictures.
                </h2>
                <p className="mx-auto mt-3 max-w-2xl text-center text-neutral-600">
                    From teasers to branded films, these pieces were written, produced, and delivered in
                    studio — tailored to story, brand, and pace.
                </p>
                <p className="mt-5 text-center text-sm text-neutral-500">4 selected works · 2024</p>

                <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {/* 1) My Waffles (Tease) */}
                    <li>
                        <button
                            type="button"
                            data-work="my-waffles-tease"
                            data-card-index={0}
                            aria-label="Play My Waffles (Tease)"
                            className="group relative block h-full w-full overflow-hidden rounded-2xl bg-neutral-900 p-5 text-left text-white shadow-sm transition hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                        >
                            {/* decorative overlay example (won’t intercept clicks) */}
                            <div className="pointer-events-none absolute inset-0" aria-hidden="true" />
                            {/* content always above */}
                            <div className="relative z-10">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <p className="text-[10px] font-medium tracking-[0.2em] text-white/80">JÄGERMEISTER</p>
                                        <p className="mt-1 text-lg font-semibold text-white">My Waffles (Tease)</p>
                                        <p className="mt-1 text-sm text-white/90">Original score, sound design, mix</p>
                                    </div>
                                    <span className="text-sm text-white/80">2024</span>
                                </div>
                                <div className="mt-4 flex items-center gap-3 text-[11px] uppercase tracking-widest text-white/80">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/60 group-hover:border-white">
                    <span className="block h-1.5 w-1.5 rounded-full bg-white" />
                  </span>
                                    <span>Custom Score</span>
                                    <span className="text-white/70">00:42</span>
                                </div>
                            </div>
                        </button>
                    </li>

                    {/* 2) Love Letters to my Mom */}
                    <li>
                        <button
                            type="button"
                            data-work="love-letters-to-my-mom"
                            data-card-index={1}
                            aria-label="Play Love Letters to my Mom"
                            className="group relative block h-full w-full overflow-hidden rounded-2xl bg-neutral-900 p-5 text-left text-white shadow-sm transition hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                        >
                            <div className="pointer-events-none absolute inset-0" aria-hidden="true" />
                            <div className="relative z-10">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <p className="text-[10px] font-medium tracking-[0.2em] text-white/80">STUDIO BANANAAA</p>
                                        <p className="mt-1 text-lg font-semibold text-white">Love Letters to my Mom</p>
                                        <p className="mt-1 text-sm text-white/90">Score, VO direction, delivery</p>
                                    </div>
                                    <span className="text-sm text-white/80">2024</span>
                                </div>
                                <div className="mt-4 flex items-center gap-3 text-[11px] uppercase tracking-widest text-white/80">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/60 group-hover:border-white">
                    <span className="block h-1.5 w-1.5 rounded-full bg-white" />
                  </span>
                                    <span>Custom Score</span>
                                    <span className="text-white/70">01:13</span>
                                </div>
                            </div>
                        </button>
                    </li>

                    {/* 3) Mama’s Boy */}
                    <li>
                        <button
                            type="button"
                            data-work="mamas-boy"
                            data-card-index={2}
                            aria-label="Play Mama’s Boy"
                            className="group relative block h-full w-full overflow-hidden rounded-2xl bg-neutral-900 p-5 text-left text-white shadow-sm transition hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                        >
                            <div className="pointer-events-none absolute inset-0" aria-hidden="true" />
                            <div className="relative z-10">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <p className="text-[10px] font-medium tracking-[0.2em] text-white/80">STUDIO BANANAAA</p>
                                        <p className="mt-1 text-lg font-semibold text-white">Mama’s Boy</p>
                                        <p className="mt-1 text-sm text-white/90">Original music, SFX, broadcast mix</p>
                                    </div>
                                    <span className="text-sm text-white/80">2024</span>
                                </div>
                                <div className="mt-4 flex items-center gap-3 text-[11px] uppercase tracking-widest text-white/80">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/60 group-hover:border-white">
                    <span className="block h-1.5 w-1.5 rounded-full bg-white" />
                  </span>
                                    <span>Custom Score</span>
                                    <span className="text-white/70">00:58</span>
                                </div>
                            </div>
                        </button>
                    </li>

                    {/* 4) Umfana ka Ma */}
                    <li>
                        <button
                            type="button"
                            data-work="umfana-ka-ma"
                            data-card-index={3}
                            aria-label="Play Umfana ka Ma"
                            className="group relative block h-full w-full overflow-hidden rounded-2xl bg-neutral-900 p-5 text-left text-white shadow-sm transition hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                        >
                            <div className="pointer-events-none absolute inset-0" aria-hidden="true" />
                            <div className="relative z-10">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <p className="text-[10px] font-medium tracking-[0.2em] text-white/80">STUDIO BANANAAA</p>
                                        <p className="mt-1 text-lg font-semibold text-white">Umfana ka Ma</p>
                                        <p className="mt-1 text-sm text-white/90">Score, cultural tone, mastering</p>
                                    </div>
                                    <span className="text-sm text-white/80">2024</span>
                                </div>
                                <div className="mt-4 flex items-center gap-3 text-[11px] uppercase tracking-widest text-white/80">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/60 group-hover:border-white">
                    <span className="block h-1.5 w-1.5 rounded-full bg-white" />
                  </span>
                                    <span>Custom Score</span>
                                    <span className="text-white/70">01:04</span>
                                </div>
                            </div>
                        </button>
                    </li>
                </ul>
            </div>
        </section>
    );
}
