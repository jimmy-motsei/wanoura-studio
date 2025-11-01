// components/OriginalCompositionsLight.tsx
import { WorkCard } from "@/components/WorkCard";

type Score = {
    slug: string;
    year: string;
    client: string;
    title: string;
    meta: string;
    length: string;
    poster: string;
};

const scores: Score[] = [
    {
        slug: "jagermeister-my-waffles-tease",
        year: "2024",
        client: "Jägermeister",
        title: "My Waffles (Tease)",
        meta: "Original score, sound design, mix",
        length: "00:42",
        poster:
            "/original-compositions-custom-scores/posters/jagermeister-my-waffles-tease.svg",
    },
    {
        slug: "studio-bananaaa-love-letters-to-my-mom",
        year: "2024",
        client: "Studio Bananaaa",
        title: "Love Letters to my Mom",
        meta: "Score, VO direction, delivery",
        length: "01:13",
        poster:
            "/original-compositions-custom-scores/posters/studio-bananaaa-love-letters-to-my-mom.svg",
    },
    {
        slug: "studio-bananaaa-mamas-boy",
        year: "2024",
        client: "Studio Bananaaa",
        title: "Mama’s Boy",
        meta: "Original music, SFX, broadcast mix",
        length: "00:58",
        poster:
            "/original-compositions-custom-scores/posters/studio-bananaaa-mamas-boy.svg",
    },
    {
        slug: "studio-bananaaa-umfana-ka-ma",
        year: "2024",
        client: "Studio Bananaaa",
        title: "Umfana ka Ma",
        meta: "Score, cultural tone, mastering",
        length: "01:04",
        poster:
            "/original-compositions-custom-scores/posters/studio-bananaaa-umfana-ka-ma.svg",
    },
];

export default function OriginalCompositionsLight() {
    return (
        <section className="bg-white py-20 md:py-24" id="moving-pictures">
            <div className="container mx-auto max-w-6xl">
                {/* header */}
                <div className="text-center">
                    <p className="eyebrow text-slate-500">
                        Original compositions &amp; custom scores
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">
                        Sound made for moving pictures.
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-slate-600">
                        From teasers to branded films, these pieces were written, produced,
                        and delivered in studio — tailored to story, brand, and pace.
                    </p>
                    <p className="mt-3 text-xs text-slate-400">
                        {scores.length} selected works · 2024
                    </p>
                </div>

                {/* cards */}
                <div className="mt-10 grid gap-6 md:grid-cols-2 md:max-w-5xl md:mx-auto">
                    {scores.map((score) => (
                        <WorkCard
                            key={score.slug}
                            client={score.client}
                            title={score.title}
                            description={score.meta}
                            duration={score.length}
                            year={score.year}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
