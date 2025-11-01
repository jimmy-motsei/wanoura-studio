// components/ServicesLayoutLight.tsx
export default function ServicesLayoutLight() {
    return (
        <section id="services" className="section bg-white">
            <div className="container max-w-5xl mx-auto">
                {/* Eyebrow */}
                <p className="section-label text-slate-400">Services</p>

                {/* Title */}
                <h2 className="text-4xl sm:text-[2.65rem] leading-tight tracking-[-0.02em] text-slate-900 max-w-3xl">
                    Sound that works for screen, digital, and live experiences.
                </h2>

                {/* Intro */}
                <p className="mt-4 text-[1.05rem] leading-relaxed text-slate-600 max-w-3xl">
                    We craft music, voice, and sonic systems that carry emotion, guide narrative,
                    and land impact in campaign work, film, trailers, podcasts, products, and experiences.
                </p>

                {/* Service grid */}
                <div className="mt-10 grid gap-10 md:grid-cols-2">
                    {/* 1 */}
                    <div className="flex flex-col gap-3 border-l-2 border-slate-100 pl-5">
                        <h3 className="text-base font-semibold tracking-tight text-white/90 bg-[#151517] px-3 py-1 rounded-full w-fit">
                            Voice direction &amp; vocal strategy
                        </h3>
                        <p className="text-slate-600">
                            Casting, direction, and story-first delivery for campaigns, digital content,
                            and character-led work. We guide tone, pacing, and emotional clarity.
                        </p>
                    </div>

                    {/* 2 */}
                    <div className="flex flex-col gap-3 border-l-2 border-slate-100 pl-5">
                        <h3 className="text-base font-semibold tracking-tight text-white/90 bg-[#151517] px-3 py-1 rounded-full w-fit">
                            Score, sonic identity &amp; delivery
                        </h3>
                        <p className="text-slate-600">
                            Original music, brand-aligned motifs, stings, and broadcast/streaming-ready
                            mix &amp; master. Fast turnaround for spots, trailers, motion, and social.
                        </p>
                    </div>

                    {/* 3 */}
                    <div className="flex flex-col gap-3 border-l-2 border-slate-100 pl-5">
                        <h3 className="text-base font-semibold tracking-tight text-white/90 bg-[#151517] px-3 py-1 rounded-full w-fit">
                            Experiential &amp; spatial audio
                        </h3>
                        <p className="text-slate-600">
                            Immersive, room-aware sound for installations, events, and retail — built to
                            translate across systems without losing impact.
                        </p>
                    </div>

                    {/* 4 */}
                    <div className="flex flex-col gap-3 border-l-2 border-slate-100 pl-5">
                        <h3 className="text-base font-semibold tracking-tight text-white/90 bg-[#151517] px-3 py-1 rounded-full w-fit">
                            Podcast / longform sound
                        </h3>
                        <p className="text-slate-600">
                            Editorial polish, beds, ID tones, and delivery templates so your team can
                            produce at volume while keeping the Wanoura loudness + warmth.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
