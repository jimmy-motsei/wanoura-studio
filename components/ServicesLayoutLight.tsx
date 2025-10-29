"use client";

import Image from "next/image";

export default function ServicesLayoutLight() {
    return (
        <section className="bg-white text-neutral-900 py-24 border-t border-neutral-200">
            <div className="mx-auto max-w-6xl px-6">
                {/* Section header */}
                <header className="mb-12 max-w-3xl">
                    <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-neutral-500">
                        Services
                    </p>

                    <h2 className="mt-3 text-[1.5rem] leading-[1.2] tracking-[-0.03em] font-medium text-neutral-900">
                        We help you identify, explore and<br />
                        respond to new opportunities.
                    </h2>

                    <p className="mt-6 text-[13px] leading-relaxed text-neutral-600">
                        As long as those opportunities involve giving us money to re-purpose old
                        projects — we can come up with an endless number of those.
                    </p>
                </header>

                {/* 2-col layout */}
                <div className="grid gap-12 lg:grid-cols-2">
                    {/* LEFT: masked / angled image */}
                    <div className="relative flex items-start justify-center">
                        <div className="relative w-full max-w-md overflow-hidden rounded-xl bg-neutral-100 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.3)]">
                            <Image
                                src="/images/mixing-desk-2.jpg"
                                alt="Wanoura in session, sculpting sound."
                                width={800}
                                height={1000}
                                className="object-cover object-center w-full h-full"
                                priority
                            />
                        </div>
                    </div>

                    {/* RIGHT: bullet services */}
                    <div className="flex flex-col text-[13px] leading-relaxed text-neutral-900">
                        {/* Service 1 */}
                        <div className="py-5 border-b border-neutral-200">
                            <p className="text-[13px] font-semibold text-neutral-900">
                                Sonic Identity & Branding.
                            </p>
                            <p className="mt-2 text-neutral-600 text-[13px] leading-relaxed">
                                We design the voice your brand lives in — music themes,
                                emotional motifs, textural signatures, vocal direction,
                                positioning. Distinctive sound that’s yours, not stock.
                            </p>
                        </div>

                        {/* Service 2 */}
                        <div className="py-5 border-b border-neutral-200">
                            <p className="text-[13px] font-semibold text-neutral-900">
                                Sound Design & Original Composition.
                            </p>
                            <p className="mt-2 text-neutral-600 text-[13px] leading-relaxed">
                                Themes, cues, scoring, foley, atmospheres, transitions.
                                Built for screen, digital, and interactive. We craft sound
                                that carries emotion, guides narrative, and lands impact
                                in campaign work, film, trailers, podcasts, and products.
                            </p>
                        </div>

                        {/* Service 3 */}
                        <div className="py-5 border-b border-neutral-200">
                            <p className="text-[13px] font-semibold text-neutral-900">
                                Voice Direction & Vocal Strategy.
                            </p>
                            <p className="mt-2 text-neutral-600 text-[13px] leading-relaxed">
                                Casting, directing, and shaping delivery to feel human,
                                intentional, and on-brand — from commercial VO to narrative
                                storytelling. We guide tone, pacing, and emotional clarity.
                            </p>
                        </div>

                        {/* Service 4 */}
                        <div className="py-5 border-b border-neutral-200">
                            <p className="text-[13px] font-semibold text-neutral-900">
                                Mixing, Mastering & Delivery.
                            </p>
                            <p className="mt-2 text-neutral-600 text-[13px] leading-relaxed">
                                Broadcast spec, cinema mix, podcast clarity, multi-platform
                                loudness and translation. Clean dialogue, balanced stems,
                                dynamic control — ready for rollout across channels.
                            </p>
                        </div>

                        {/* Service 5 */}
                        <div className="py-5">
                            <p className="text-[13px] font-semibold text-neutral-900">
                                Experiential & Spatial Audio.
                            </p>
                            <p className="mt-2 text-neutral-600 text-[13px] leading-relaxed">
                                Immersive, multi-channel sound for events, installations,
                                and branded environments. We design presence — not just
                                sound — so the audience feels it in their body.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
