import Image from "next/image";

const scores = [
    {
        slug: "jagermeister-my-waffles-tease",
        year: "2024",
        client: "Jägermeister",
        title: "My Waffles (Tease)",
        meta: "Original score, sound design, mix",
        length: "00:42",
        poster: "/original-compositions-custom-scores/posters/jagermeister-my-waffles-tease.svg",
    },
    {
        slug: "studio-bananaaa-love-letters-to-my-mom",
        year: "2024",
        client: "Studio Bananaaa",
        title: "Love Letters to my Mom",
        meta: "Score, VO direction, delivery",
        length: "01:13",
        poster: "/original-compositions-custom-scores/posters/studio-bananaaa-love-letters-to-my-mom.svg",
    },
    {
        slug: "studio-bananaaa-mamas-boy",
        year: "2024",
        client: "Studio Bananaaa",
        title: "Mama’s Boy",
        meta: "Original music, SFX, broadcast mix",
        length: "00:58",
        poster: "/original-compositions-custom-scores/posters/studio-bananaaa-mamas-boy.svg",
    },
    {
        slug: "studio-bananaaa-umfana-ka-ma",
        year: "2024",
        client: "Studio Bananaaa",
        title: "Umfana ka Ma",
        meta: "Score, cultural tone, mastering",
        length: "01:04",
        poster: "/original-compositions-custom-scores/posters/studio-bananaaa-umfana-ka-ma.svg",
    },
];

export default function OriginalCompositionsLight() {
    return (
        <section className="py-20 sm:py-24 bg-white" id="moving-pictures">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-start justify-between gap-6">
                    <div>
                        <p className="text-[10px] tracking-[0.2em] uppercase text-slate-400 mb-4">
                            Original compositions &amp; custom scores
                        </p>
                        <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">
                            Sound made for moving pictures.
                        </h2>
                        <p className="mt-4 max-w-2xl text-slate-500">
                            From teasers to branded films, these pieces were written, produced, and delivered in studio — tailored to
                            story, brand, and pace.
                        </p>
                    </div>
                    <p className="hidden sm:block text-xs text-slate-400 whitespace-nowrap mt-2">
                        {scores.length} selected works · 2024
                    </p>
                </div>

                <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {scores.map((score) => (
                        <article
                            key={score.slug}
                            className="reel-card rounded-3xl bg-neutral-950 border border-neutral-900/60 shadow-[0_18px_50px_rgba(15,23,42,0.06)] hover:shadow-[0_18px_50px_rgba(15,23,42,0.10)] transition overflow-hidden flex flex-col relative place-items-center"
                        >
                            <div className="relative h-48">
                                <Image
                                    src={score.poster}
                                    alt={score.title}
                                    fill
                                    className="object-cover"
                                    sizes="(min-width: 1024px) 250px, 100vw"
                                />
                                {/* Play control: button, accessible */}
                                <button className="reel-play absolute top-4 right-4 h-9 w-9 rounded-full bg-white shadow flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" aria-label={`Play reel: ${score.title}`}>
                                    <div className="w-0 h-0 border-y-[6px] border-y-transparent border-l-[10px] border-l-slate-900 translate-x-[1px]" />
                                </button>
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-medium tracking-wide text-slate-500">
                                    {score.year}
                                </div>
                                {/* Centered brand logo (subtle, white) */}
                                <div className="reel-logo absolute inset-0 grid place-items-center pointer-events-none">
                                    <img src={score.client === 'Jägermeister' ? '/logos/jagermeister-neutral.png' : score.client === 'Studio Bananaaa' ? '/logos/Studio-Bananaaa-neutral.png' : score.client === 'Zee Entertainment' ? '/logos/Zee-entertainment-neutral.png' : '/logos/Nike-neutral.png'} alt="" className="max-w-[128px] w-[22%] min-w-[72px] opacity-90 brightness-0 invert" />
                                </div>
                            </div>
                            <div className="p-6 flex flex-col gap-2 flex-1">
                                <p className="text-[10px] tracking-[0.2em] uppercase text-neutral-400">
                                    {score.client}
                                </p>
                                <h3 className="text-base font-semibold text-neutral-100 leading-tight">{score.title}</h3>
                                <p className="text-xs text-neutral-500">{score.meta}</p>
                            </div>
                            <div className="px-6 pb-6 flex items-center justify-between text-xs text-neutral-400">
                                <span>Custom score</span>
                                <span className="inline-flex items-center justify-center rounded-full bg-white border border-slate-100 px-3 py-1 text-slate-500">
                  {score.length}
                </span>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
