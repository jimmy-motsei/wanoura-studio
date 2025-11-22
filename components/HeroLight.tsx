export default function HeroLight() {
  return (
    <section className="relative bg-white hero" id="hero">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <div className="max-w-3xl">

          {/* Headline Lockup */}
          <h1 className="font-display text-neutral-900 leading-tight">
            <span className="
              block
              font-semibold
              text-[3.5rem] md:text-[4rem]
              tracking-[-0.01em]
              "
            >
              wanoura
            </span>

            <span className="
              block
              font-normal
              text-neutral-700
              text-[2rem] md:text-[2.35rem]
              tracking-[0.01em]
              -mt-1
              ml-[0.15rem]
            ">
              The Legacy of Sound
            </span>
          </h1>

          {/* Subheading */}
          <h2 className="mt-10 font-display text-[1.55rem] md:text-[1.75rem] text-neutral-800 tracking-[0.01em]">
            Award-Winning Sonic Design Studio
          </h2>

          {/* Supporting text */}
          <p className="mt-6 max-w-prose font-sans text-sm md:text-base leading-relaxed text-slate-600">
            wanoura is a creative studio crafting sonic identities for brands, creators, and
            storytellers. We work where sound meets emotion — designing experiences that
            move people and endure.
          </p>

          {/* CTA */}
          <a
            href="mailto:hello@dreamwanoura.com?subject=Project%20Brief"
            className="mt-6 inline-flex rounded-full bg-black px-4 py-2 font-sans text-sm font-medium text-white shadow-sm transition hover:bg-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            aria-label="Upload your project brief – email wanoura"
          >
            Upload your project brief
          </a>
        </div>
      </div>
    </section>
  );
}
