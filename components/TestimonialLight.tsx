export default function TestimonialLight() {
    return (
        <section className="bg-white text-neutral-900 px-4 py-20 sm:py-24 border-t border-neutral-200">
            <div className="mx-auto max-w-4xl text-center">
                {/* Quote */}
                <blockquote className="text-[1.1rem] leading-[1.5] font-medium tracking-[-0.03em] text-neutral-900 sm:text-[1.25rem]">
                    “The Wanoura team captured the essence of our brand through sound —
                    building something that feels alive, human, and unmistakably ours.
                    It didn’t just ‘fit the brief’. It became part of our voice.”
                </blockquote>

                {/* Attribution */}
                <div className="mt-6 text-[0.8rem] leading-relaxed text-neutral-600">
                    <div className="font-semibold text-neutral-800">
                        Placeholder Name
                    </div>
                    <div className="text-neutral-500">
                        Creative Director · Zee Entertainment
                    </div>
                </div>

                {/* Logo row / brands we've worked with */}
                <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-neutral-400">
                    {/* These are placeholders for logos.
             Replace each <div> with <Image /> components once you have SVGs/PNGs */}
                    <div className="text-[0.75rem] font-semibold text-neutral-500">
                        Jagemeister
                    </div>
                    <div className="text-[0.75rem] font-semibold text-neutral-500">
                        Nike
                    </div>
                    <div className="text-[0.75rem] font-semibold text-neutral-500">
                        Uncle&nbsp;Waffles
                    </div>
                    <div className="text-[0.75rem] font-semibold text-neutral-500 text-center">
                        Zee&nbsp;Entertainment
                    </div>
                </div>
            </div>
        </section>
    );
}
