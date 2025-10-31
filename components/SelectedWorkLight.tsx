export default function SelectedWorkLight() {
    return (
        <section className="bg-white text-neutral-900 px-4 py-16 sm:py-24">
            <div className="mx-auto max-w-5xl">
                {/* Section header */}
                <header className="max-w-3xl">
                    <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-neutral-500">
                        Selected Work
                    </p>

                    <h2 className="mt-3 text-[1.4rem] leading-[1.3] font-semibold tracking-[-0.03em] text-neutral-900 sm:text-[1.6rem]">
                        From global campaigns to cultural moments, we design sound that
                        moves people — emotionally, physically, and culturally.
                    </h2>

                    <p className="mt-4 text-[0.9rem] leading-relaxed text-neutral-600">
                        This is a snapshot of recent work. Each project blends score,
                        identity, voice, mix, and delivery — built for speed, built for
                        story, built for roll-out.
                    </p>
                </header>

                {/* Cards grid */}
                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {/* CARD 1 */}
                    <article className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
                        <div className="text-[10px] uppercase tracking-[0.12em] text-neutral-500 flex flex-wrap gap-2">
                            <span className="font-medium">2024 · Launch Film</span>
                            <span className="text-neutral-400">/ Sonic Identity</span>
                        </div>

                        <h3 className="mt-3 text-[1rem] font-semibold leading-[1.3] tracking-[-0.03em] text-neutral-900">
                            “Make them feel it in 3 seconds.”
                        </h3>

                        <p className="mt-2 text-[0.8rem] leading-relaxed text-neutral-600">
                            We built an aggressive, high-memory hook for 
                            <span className="font-semibold text-neutral-800">Jagemeister </span>
                            that had to hit fast on social. Instant grit. No warm-up. The
                            brief: sound that tastes like fire, but still clears legal.
                        </p>

                        <p className="mt-4 text-[0.8rem] leading-relaxed text-neutral-600">
                            Deliverables: hero sting, cutdowns, edit-safe alts, paid +
                            organic versions.
                        </p>
                    </article>

                    {/* CARD 2 */}
                    <article className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
                        <div className="text-[10px] uppercase tracking-[0.12em] text-neutral-500 flex flex-wrap gap-2">
                            <span className="font-medium">2024 · Brand World</span>
                            <span className="text-neutral-400">/ Voice & Identity</span>
                        </div>

                        <h3 className="mt-3 text-[1rem] font-semibold leading-[1.3] tracking-[-0.03em] text-neutral-900">
                            A voice that sounds like the future — not a script.
                        </h3>

                        <p className="mt-2 text-[0.8rem] leading-relaxed text-neutral-600">
                            For <span className="font-semibold text-neutral-800">Nike</span>, we
                            built a vocal identity that feels human, urgent, and
                            undeniable — not announcer-y. Casting, direction, timing,
                            breathing, pace. Culture-forward, not corporate.
                        </p>

                        <p className="mt-4 text-[0.8rem] leading-relaxed text-neutral-600">
                            Deliverables: campaign VO system, multilingual reads, creator
                            handoff kit.
                        </p>
                    </article>

                    {/* CARD 3 */}
                    <article className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
                        <div className="text-[10px] uppercase tracking-[0.12em] text-neutral-500 flex flex-wrap gap-2">
              <span className="font-medium">
                2023 · Show / Cultural Moment
              </span>
                            <span className="text-neutral-400">/ Mix & Delivery</span>
                        </div>

                        <h3 className="mt-3 text-[1rem] font-semibold leading-[1.3] tracking-[-0.03em] text-neutral-900">
                            Turning a live set into a brand.
                        </h3>

                        <p className="mt-2 text-[0.8rem] leading-relaxed text-neutral-600">
                            With <span className="font-semibold text-neutral-800">Uncle Waffles</span>, we shaped the full audio experience — transitions, drops,
                            crowd texture, on-stage identity. The brief: feel the room
                            through a phone speaker.
                        </p>

                        <p className="mt-4 text-[0.8rem] leading-relaxed text-neutral-600">
                            Deliverables: live show stems, streaming masters, teaser audio
                            for socials.
                        </p>
                    </article>
                </div>
            </div>
        </section>
    );
}
