"use client";

export default function HeroLight() {
    return (
        <section className="relative bg-white">
            {/* You can later add the repeating tile pattern as a background div behind this container */}
            <div className="mx-auto max-w-5xl px-6 py-24">
                <div className="max-w-3xl">
                    {/* Headline */}
                    <h1 className="text-[2rem] leading-[1.15] tracking-[-0.035em] font-medium text-neutral-900 md:text-[2.25rem] md:leading-[1.15]">
                        Award-winning sonic design studio
                        <br className="hidden md:block" /> based in South Africa.
                    </h1>

                    {/* Supporting copy */}
                    <p className="mt-6 max-w-prose text-sm leading-relaxed text-neutral-600">
                        Wanoura is a creative studio crafting sonic identities for brands,
                        creators, and storytellers. We work where sound meets emotion —
                        designing experiences that move people and endure.
                    </p>
                </div>
            </div>
        </section>
    );
}
