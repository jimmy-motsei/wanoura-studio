import { CONTACT_EMAIL } from "@/lib/contact";

export default function HeroLight() {
    return (
        <section className="relative bg-white hero" id="hero">
            {/* You can later add the repeating tile pattern as a background div behind this container */}
            <div className="mx-auto max-w-5xl px-6 py-24">
                <div className="max-w-3xl">
                    {/* Headline */}
                    <h1 className="display text-[2rem] leading-[1.15] tracking-[-0.035em] font-medium text-neutral-900 md:text-[2.25rem] md:leading-[1.15]">
                        Warouna<br />
                        <span className="hero-nowrap">The Legacy of Sound</span>
                    </h1>

                    <h2 className="subtitle text-neutral-900">Award-Winning Sonic Design Studio</h2>

                    {/* Supporting copy */}
                    <p className="lead mt-6 max-w-prose text-sm leading-relaxed">
                        Wanoura is a creative studio crafting sonic identities for brands, creators, and
                        storytellers. We work where sound meets emotion — designing experiences that
                        move people and endure.
                    </p>

                    {/* CTA: Upload your project brief */}
                    <a
                        href="mailto:hello@dreamwanoura.com?subject=Project%20Brief"
                        className="cta-brief inline-flex mt-6 rounded-full bg-black px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        aria-label="Upload your project brief – email Wanoura"
                    >
                        Upload your project brief
                    </a>
                </div>
            </div>
        </section>
    );
}
