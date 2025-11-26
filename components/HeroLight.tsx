"use client";

import { FadeUpOnScroll } from "@/components/animation/FadeUpOnScroll";

export default function HeroLight() {
    return (
        <section
            id="hero"
            className="relative bg-white hero min-h-screen"
        >
            {/*
              h-16 ≈ navbar height.
              We subtract it so the hero content + CTA can sit flush with the bottom of the viewport.
            */}
            <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-5xl flex-col px-6 pt-16 pb-8">
                {/* Push content to the bottom of the available space */}
                <div className="mt-auto">
                    {/* HEADLINE + STRAPLINE */}
                    <FadeUpOnScroll
                        as="div"
                        className="space-y-2"
                        amount={0.35}
                    >
                        <h1 className="display text-[2rem] leading-[1.15] tracking-[-0.035em] font-semibold text-neutral-900 md:text-[2.25rem] md:leading-[1.15]">
                            wanoura.
                        </h1>

                        <h2 className="text-xl md:text-2xl font-medium text-neutral-700">
                            The Legacy of Sound.
                        </h2>
                    </FadeUpOnScroll>

                    {/* BODY COPY */}
                    <FadeUpOnScroll
                        as="p"
                        className="lead mt-6 max-w-prose text-sm leading-relaxed text-neutral-600"
                        delay={0.12}
                        amount={0.35}
                    >
                        Wanoura is an award-winning creative studio crafting sonic identities for brands, creators,
                        and storytellers. Our craft is applied where sound meets emotion — designing experiences
                        that move people and endure.
                    </FadeUpOnScroll>

                    {/* CTA – sits right above the bottom padding */}
                    <FadeUpOnScroll
                        as="a"
                        href="mailto:hello@dreamwanoura.com?subject=Project%20Brief"
                        className="inline-flex mt-6 rounded-full bg-black px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        aria-label="Upload your project brief – email wanoura"
                        delay={0.24}
                        amount={0.35}
                    >
                        Upload your project brief
                    </FadeUpOnScroll>
                </div>
            </div>
        </section>
    );
}
