export default function HeroLight() {
    return (
        <section className="relative bg-white hero min-h-[70vh]" id="hero">
            <div className="mx-auto max-w-5xl px-6 py-24">
                
                {/* HEADLINE BLOCK — vertically centered */}
                <div className="flex flex-col justify-center h-full">
                    <div>
                        {/* Headline */}
                        <h1 className="display text-[2rem] leading-[1.15] tracking-[-0.035em] font-semibold text-neutral-900 md:text-[2.25rem] md:leading-[1.15]">
                            wanoura
                        </h1>

                        {/* Strapline */}
                        <h2 className="text-xl md:text-2xl font-medium text-neutral-700 mt-2">
                            The Legacy of Sound
                        </h2>
                    </div>

                    {/* PARAGRAPH + CTA (now pushed further down) */}
                    <p className="lead mt-10 max-w-prose text-sm leading-relaxed text-neutral-600">
                        wanoura is a creative studio crafting sonic identities for brands, creators, and
                        storytellers. We work where sound meets emotion — designing experiences that
                        move people and endure.
                    </p>

                    <a
                        href="mailto:hello@dreamwanoura.com?subject=Project%20Brief"
                        className="inline-flex mt-6 rounded-full bg-black px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-neutral-900"
                    >
                        Upload your project brief
                    </a>
                </div>

            </div>
        </section>
    );
}
