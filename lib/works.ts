export type WorkItem = {
  slug: string;
  title: string;
  client?: string;
  year?: number;
  cover?: string;   // optional for future thumbnails
  vimeoId: string;
};

export const WORKS: WorkItem[] = [
  {
    slug: "my-waffles-tease",
    title: "My Waffles (Tease) — The Brooklyn Mirage",
    client: "JÄGERMEISTER",
    year: 2024,
    vimeoId: "1132870462",
  },
  {
    slug: "mamas-boy",
    title: "Mama’s Boy",
    client: "STUDIO BANANAAA",
    year: 2024,
    vimeoId: "1132870415",
  },
  {
    slug: "love-letters-to-my-mom",
    title: "Love Letters to my Mom",
    client: "STUDIO BANANAAA",
    year: 2024,
    vimeoId: "1132870361",
  },
  {
    slug: "umfana-ka-ma",
    title: "Umfana ka Ma",
    client: "STUDIO BANANAAA",
    year: 2024,
    vimeoId: "1132873566",
  },
];
