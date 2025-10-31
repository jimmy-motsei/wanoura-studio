"use client";

import Image from "next/image";

type OriginalComposition = {
    slug: string;
    title: string;
    client: string;
    year: string;
    duration: string;
    poster: string;
    role?: string;
};

const ORIGINAL_COMPOSITIONS: OriginalComposition[] = [
    {
        slug: "jagermeister-my-waffles-tease",
        title: "My Waffles (Tease)",
        client: "Jägermeister",
        year: "2024",
        duration: "00:42",
        poster:
            "/original-compositions-custom-scores/posters/jagermeister-my-waffles-tease.svg",
        role: "Original score, sound design, mix",
    },
    {
        slug: "studio-bananaaa-love-letters-to-my-mom",
        title: "Love Letters to My Mom",
        client: "Studio Bananaaa",
        year: "2024",
        duration: "01:13",
        poster:
            "/original-compositions-custom-scores/posters/studio-bananaaa-love-letters-to-my-mom.svg",
        role: "Score, VO direction, delivery",
    },
    {
        slug: "studio-bananaaa-mamas-boy",
        title: "Mama’s Boy",
        client: "Studio Bananaaa",
        year: "2024",
        duration: "00:58",
        poster:
            "/original-compositions-custom-scores/posters/studio-bananaaa-mamas-boy.svg",
        role: "Original music, SFX, broadcast mix",
    },
    {
        slug: "studio-bananaaa-umfana-ka-ma",
        title: "Umfana ka Ma",
        client: "Studio Bananaaa",
        year: "2024",
        duration: "01:04",
        poster:
            "/original-compositions-custom-scores/posters/studio-bananaaa-umfana-ka-ma.svg",
        role: "Score, cultural tone, mastering",
    },
];

export default function OriginalCompositionsLight() {
    return (
        <section
            id="original-compositions"
            className="bg-white text-neutral-900 py-20 sm:py-24"
        >
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-10">
                    <div>
                        <p className="text-[13px] font-medium tracking-[0.2em] uppercase text-neutral-400">
                            Original Compositions &amp; Custom Scores
                        </p>
                        <h2 className="mt-3 text-3xl sm:text-[2.3rem] leading-tight font-semibold text-neutral-900">
                            Sound made for moving pictures.
                        </h2>
                        <p className="mt-3 max-w-2xl text-sm sm:text-base text-neutral-500">
                            From teasers to branded films, these pieces were written,
                            produced, and delivered in studio — tailored to story, brand, and
                            pace.
                        </p>
                    </div>
                    <div className="text-sm text-neutral-400">
                        {ORIGINAL_COMPOSITIONS.length} selected works • 2024
                    </div>
                </div>

                {/* Grid */}
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                    {ORIGINAL_COMPOSITIONS.map((item) => (
                        <article
                            key={item.slug}
                            className="group rounded-2xl border border-neutral-100 bg-white/40 shadow-[0_20px_40px_rgba(15,23,42,0.04)] backdrop-blur-sm overflow-hidden flex flex-col"
                        >
                            {/* Poster */}
                            <div className="relative aspect-[4/3] bg-neutral-100 overflow-hidden">
                                <Image
                                    src={item.poster}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition duration-300 group-hover:scale-[1.02]"
                                    sizes="(min-width: 1280px) 260px, (min-width: 768px) 50vw, 100vw"
                                />

                                {/* Play overlay */}
                                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                                    <div className="bg-white/90 group-hover:bg-white transition-all duration-200 rounded-full w-14 h-14 flex items-center justify-center shadow-lg">
                                        <div className="ml-1 h-3.5 w-3.5 bg-neutral-900 clip-path-triangle" />
                                    </div>
                                </div>

                                {/* Year badge */}
                                <div className="absolute top-3 right-3 rounded-full bg-white/80 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-600">
                                    {item.year}
                                </div>
                            </div>

                            {/* Body */}
                            <div className="flex-1 px-5 py-5 flex flex-col gap-3">
                                <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-400">
                                    {item.client}
                                </p>
                                <h3 className="text-base font-semibold leading-snug text-neutral-900 group-hover:text-neutral-950">
                                    {item.title}
                                </h3>
                                {item.role ? (
                                    <p className="text-sm text-neutral-500 leading-relaxed">
                                        {item.role}
                                    </p>
                                ) : null}
                            </div>

                            {/* Footer */}
                            <div className="mt-auto flex items-center justify-between border-t border-neutral-100 px-5 py-3 text-[12px] text-neutral-400">
                                <span>Custom score</span>
                                <span className="rounded-full bg-neutral-100 px-2 py-1 text-[11px] font-medium text-neutral-600">
                  {item.duration}
                </span>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            {/* Local style for triangle */}
            <style jsx>{`
                .clip-path-triangle {
                    clip-path: polygon(0 0, 100% 50%, 0 100%);
                }
            `}</style>
        </section>
    );
}
