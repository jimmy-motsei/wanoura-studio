// components/ClientsBanner.tsx

const clients = [
    { name: "Nike", src: "/brand/nike.png" },
    { name: "Jägermeister", src: "/brand/jagermeister.png" },
    { name: "Kreative Kornerr", src: "/brand/kreative-kornerr.png" },
    // if you want to re-add later:
    // { name: "Studio Banana", src: "/brand/studio-banana.png" },
    // { name: "Zee Entertainment", src: "/brand/zee-entertainment.png" },
];

export default function ClientsBanner() {
    return (
        <section className="w-full bg-black rounded-none md:rounded-[1.5rem] h-14 md:h-16 shadow-[0_40px_120px_rgba(0,0,0,.25)]">
            <div className="mx-auto max-w-6xl h-full flex items-center gap-6">
                <p className="hidden md:block text-[10px] tracking-[0.12em] uppercase text-gray-500/70 mr-6">
                    We’ve worked with hundreds of amazing people
                </p>
                <div className="flex-1 flex items-center justify-between gap-4">
                    {clients.map((client) => (
                        <div
                            key={client.name}
                            className="flex items-center justify-center flex-1"
                        >
                            <img
                                src={client.src}
                                alt={client.name}
                                className="max-h-8 md:max-h-9 w-auto object-contain opacity-80 hover:opacity-100 transition"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
