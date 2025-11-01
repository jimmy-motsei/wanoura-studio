export default function TestimonialLight() {
    return (
        <section className="section bg-white text-neutral-900 border-t border-neutral-200">
            <div className="container mx-auto max-w-4xl text-center testimonial">
                {/* Eyebrow */}
                <div className="eyebrow text-neutral-500">What clients say</div>
                {/* Quote */}
                <blockquote className="text-[1.1rem] leading-[1.6] font-medium tracking-[-0.01em] text-neutral-900 sm:text-[1.25rem]">
                    <p>
                        “The Wanoura team captured the essence of our brand through sound — building something that
                        feels alive, human, and unmistakably ours.
                    </p>
                    <p>
                        It didn’t just ‘fit the brief’. It became part of our voice.”
                    </p>
                </blockquote>

                {/* Attribution */}
                <div className="mt-6 text-[0.85rem] leading-relaxed text-neutral-600">
                    <div className="author text-neutral-800">Placeholder Name</div>
                    <div className="author text-neutral-700">Creative Director · Zee Entertainment</div>
                </div>

                {/* Logo row / brands we've worked with */}
                <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-neutral-500">
                    {/* These are placeholders for logos.
             Replace each <div> with <Image /> components once you have SVGs/PNGs */}
                    <div className="text-[0.75rem] font-semibold">Jagemeister</div>
                    <div className="text-[0.75rem] font-semibold">Nike</div>
                    <div className="text-[0.75rem] font-semibold">Uncle&nbsp;Waffles</div>
                    <div className="text-[0.75rem] font-semibold text-center">Zee&nbsp;Entertainment</div>
                </div>
            </div>
        </section>
    );
}
