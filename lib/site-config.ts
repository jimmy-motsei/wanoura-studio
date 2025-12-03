export const navLinks = [
    { label: "About", href: "/#about" },
    { label: "Work", href: "/#selected-work" },
    { label: "Services", href: "/#services" },
    { label: "Clients", href: "/#client-logos" },
    { label: "Contact", href: "/#contact" },
] as const;

export const clients = [
    { name: "Nike", src: "/client-logos/nike.png", className: "h-14 md:h-16" },
    { name: "Jägermeister", src: "/client-logos/jagermeister.png", className: "h-14 md:h-16" },
    {
        name: "Kreative Kornerr",
        src: "/client-logos/Kreative-Kornerr.jpg",
        className: "h-10 md:h-12 max-w-[180px]",
    },
    {
        name: "Studio Banana",
        src: "/client-logos/studio-banana.png",
        className: "h-12 md:h-14",
    },
    {
        name: "Zee Entertainment",
        src: "/client-logos/zee-entertainment.png",
        className: "h-12 md:h-14 max-w-[120px]",
    },
];
