// data/original-compositions.ts

export type OriginalComposition = {
    slug: string;
    title: string;
    client: string;
    year: string;
    duration: string;
    poster: string; // path to svg in /public
    role?: string;
};

export const ORIGINAL_COMPOSITIONS: OriginalComposition[] = [
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
