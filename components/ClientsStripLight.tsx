"use client";

export default function ClientsStripLight() {
    return (
        <section className="relative z-10 -mt-8 pb-16">
            {/* Card */}
            <div className="mx-auto w-full max-w-5xl rounded-xl border border-neutral-800 bg-neutral-900 px-6 py-8 text-white shadow-[0_40px_120px_rgba(0,0,0,0.8)]">
                {/* Eyebrow */}
                <div className="text-[10px] font-medium uppercase tracking-widest text-neutral-400">
                    We’ve collaborated with some truly inspiring people and brands
                </div>

                {/* Logo grid / name grid */}
                <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-6 text-[11px] leading-tight text-white/90 sm:grid-cols-3 md:grid-cols-6 md:text-[11px]">
                    {/* Each item would be an icon+label in the final version.
             For now we're using text placeholders. */}

                    <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-[4px] bg-white/80" />
                        <span>Audiowave</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-[4px] bg-white/80" />
                        <span>Family Fund</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-[4px] bg-white/80" />
                        <span>BrightPath</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-[4px] bg-white/80" />
                        <span>North Adventures</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-[4px] bg-white/80" />
                        <span>Mailmark</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-[4px] bg-white/80" />
                        <span>Green Life</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
