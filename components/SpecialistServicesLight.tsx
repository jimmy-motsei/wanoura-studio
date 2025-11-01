// components/SpecialistServicesLight.tsx
import Link from "next/link";

export default function SpecialistServicesLight() {
    return (
        <section id="specialist-services" className="section bg-white">
            <div className="container mx-auto max-w-5xl">
                <p className="section-label text-slate-400">Our specialist services</p>
                <h2 className="text-3xl sm:text-[2.4rem] leading-tight tracking-[-0.02em] text-slate-900 mb-6">
                    Built for premium delivery and future-ready production.
                </h2>

                <div className="grid gap-8 md:grid-cols-2">
                    {/* Atmos Mixing */}
                    <article className="border-l-2 border-slate-100 pl-5 flex flex-col gap-3">
                        <h3 className="text-base font-semibold text-slate-900">
                            Atmos Mixing
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                            volutpat posuere tellus, a cursus enim porta at. Tailored for
                            broadcast, streaming, and experiential sound.
                        </p>
                        <Link
                            href="/atmos-mixing"
                            className="text-sm font-medium text-slate-900 hover:opacity-70"
                        >
                            Learn more →
                        </Link>
                    </article>

                    {/* AI Studio and Production */}
                    <article className="border-l-2 border-slate-100 pl-5 flex flex-col gap-3">
                        <h3 className="text-base font-semibold text-slate-900">
                            AI Studio and Production — launching soon
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Modular
                            tools for rapid concepting, voice experiments, and adaptive music
                            sketches — designed to stay on-brand.
                        </p>
                        <Link
                            href="/ai-studio-production"
                            className="text-sm font-medium text-slate-900 hover:opacity-70"
                        >
                            Join the waitlist →
                        </Link>
                    </article>
                </div>
            </div>
        </section>
    );
}
