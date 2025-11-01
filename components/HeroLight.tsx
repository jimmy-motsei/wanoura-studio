export default function HeroLight() {
    return (
        <section className="relative bg-white hero">
            {/* You can later add the repeating tile pattern as a background div behind this container */}
            <div className="mx-auto max-w-5xl px-6 py-24">
                <div className="max-w-3xl">
                    {/* Headline */}
                    <h1 className="display text-[2rem] leading-[1.15] tracking-[-0.035em] font-medium text-neutral-900 md:text-[2.25rem] md:leading-[1.15]">
                        Award-winning sonic design studio
                        <br className="hidden md:block" /> based in South Africa.
                    </h1>

                    {/* Supporting copy */}
                    <p className="lead mt-6 max-w-prose text-sm leading-relaxed text-neutral-600">
                        Wanoura is a creative studio crafting sonic identities for brands,
                        creators, and storytellers. We work where sound meets emotion —
                        designing experiences that move people and endure.
                    </p>

                    {/* CTA: Upload your project brief */}
                    <a
                        href="mailto:hello@dreamwarouna.com?subject=Project%20Brief"
                        className="inline-flex mt-6 rounded-full bg-black px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        aria-label="Upload your project brief – email Wanoura"
                    >
                        Upload your project brief
                    </a>
                </div>
            </div>
        </section>
    );
}
