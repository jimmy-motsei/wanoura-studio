// components/ClientsStripLight.tsx
export default function ClientsStripLight() {
    const clients = [
        // nice, wide, already white
        { name: "Nike", src: "/brand/nike.png", className: "w-20 md:w-24" },

        // circular badge, can be a bit smaller
        { name: "Jägermeister", src: "/brand/jagermeister.png", className: "w-16 md:w-18" },

        // dark-on-dark → force invert/brightness + give it more width
        {
            name: "Kreative Kornerr",
            src: "/brand/kreative-kornerr.jpg",
            className: "w-32 md:w-40"},

        // long but small logo → bump width
        { name: "Studio Bananaaa", src: "/brand/studio-banana.png", className: "w-24 md:w-28" },

        // tall “Z” → a bit narrower
        { name: "Zee Entertainment", src: "/brand/zee-entertainment.png", className: "w-14 md:w-16" },
    ];

    return (
        <section className="relative py-6 md:py-8">
            <p className="text-center text-xs tracking-[0.32em] uppercase text-slate-900/70 mb-4">
                WE’VE WORKED WITH HUNDREDS OF AMAZING PEOPLE
            </p>

            <div className="mx-auto max-w-6xl rounded-[1.6rem] bg-black shadow-[0_28px_70px_rgba(0,0,0,0.35)] px-6 md:px-10 min-h-[9.5rem] flex items-center">
                <div className="grid grid-cols-5 items-center gap-6 md:gap-10 w-full">
                    {clients.map((client) => (
                        <div
                            key={client.name}
                            className="flex items-center justify-center min-h-[5rem]"
                        >
                            <img
                                src={client.src}
                                alt={client.name}
                                className={`object-contain ${client.className}`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
