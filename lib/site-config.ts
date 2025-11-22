export const navLinks = [
    { label: "Work", href: "#selected-work" },
    { label: "Services", href: "#services" },
    { label: "Clients", href: "#client-logos" },
    { label: "Contact", href: "#contact" },
] as const;

export const clients = [
    // nice, wide, already white
    { name: "Nike", src: "/logos/nike.png", width: 60, height: 60 },

    // circular badge, can be a bit smaller
    { name: "Jägermeister", src: "/logos/jagermeister.png", width: 120, height: 120 },

    // dark-on-dark → force invert/brightness + give it more width
    {
        name: "Kreative Kornerr",
        src: "/logos/Kreative-Kornerr-neutral.png",
        width: 220,
        height: 100,
    },

    // long but small logo → bump width
    { name: "Studio Banana", src: "/logos/Studio-Bananaaa-neutral.png", width: 190, height: 70 },

    // tall “Z” → a bit narrower
    { name: "Zee Entertainment", src: "/logos/Zee-entertainment-neutral.png", width: 120, height: 120 },
] as const;
