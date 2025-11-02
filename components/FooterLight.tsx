import { CONTACT_EMAIL } from "../lib/contact";

export default function FooterLight() {
    return (
        <footer className="bg-neutral-900 text-white px-4 py-20 sm:py-24">
            <div className="mx-auto max-w-5xl">
                <div className="rounded-2xl bg-neutral-900/95 p-8 sm:p-10 shadow-[0_30px_80px_-10px_rgba(0,0,0,0.6)]">
                    {/* Top row: intro + CTA + contact details */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-8">
                        {/* LEFT: headline + description + buttons */}
                        <div className="flex-1 min-w-0">
                            <a href="/" className="inline-flex" aria-label="Wanoura — Home">
                                <img src="/brand/wanoura-logo-neutral.png" alt="Wanoura" className="h-[40px] w-auto" height={40} />
                            </a>
                            <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.15em] text-white/70">
                                Wanoura — The Legacy of Sound.
                            </p>

                            <p className="mt-3 text-[0.9rem] leading-relaxed text-white/85 max-w-xl">
                                We build sonic worlds where emotion and precision coexist. From
                                score to mix, from texture to voice, we shape sound that moves
                                people and endures.
                            </p>

                            <div className="mt-5 flex flex-col sm:flex-row gap-3 text-[0.8rem] leading-relaxed">
                                <a
                                    href="#moving-pictures"
                                    className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 font-medium text-neutral-900 hover:bg-neutral-200 transition"
                                >
                                    Listen / Watch Work
                                </a>

                                <a
                                    href="#contact"
                                    className="inline-flex items-center justify-center rounded-full border border-white/30 px-4 py-2 font-medium text-white hover:bg-white/10 transition"
                                >
                                    Start a Project
                                </a>
                            </div>
                        </div>

                        {/* RIGHT: contact / socials */}
                        <div className="w-full max-w-xs shrink-0 space-y-6 text-[0.8rem] leading-relaxed">
                            {/* Location */}
                            <div>
                                <div className="font-semibold text-white">
                                    Johannesburg · Remote / Global
                                </div>
                                <div className="text-white/70">
                                    Built for brands, campaigns, and culture.
                                </div>
                            </div>

                            {/* Capabilities summary */}
                            <div>
                                <div className="text-white/70">
                                    Voice, Score, Sonic Identity, Mix &amp; Delivery.
                                </div>
                                <div className="text-white/70">
                                    Fast turnaround. Broadcast-ready. Streaming-safe.
                                </div>
                            </div>

                            {/* Direct contact */}
                            <div>
                                <div className="font-semibold text-white">
                                    Let’s talk
                                </div>
                                <div className="text-white/75">
                                    <a
                                        className="underline underline-offset-4 hover:text-white"
                                        href={`mailto:${CONTACT_EMAIL}`}
                                    >
                                        {CONTACT_EMAIL}
                                    </a>
                                </div>
                            </div>

                            {/* Social links */}
                            <div>
                                <div className="font-semibold text-white">
                                    Social
                                </div>
                                <ul className="mt-1 space-y-1 text-white/75">
                                    <li>
                                        <a
                                            className="underline underline-offset-4 hover:text-white"
                                            href="https://www.linkedin.com/company/wanoura/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            LinkedIn
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="underline underline-offset-4 hover:text-white"
                                            href="https://www.instagram.com/_wanoura/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Instagram
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Bottom fine-print / positioning */}
                    <div className="mt-10 border-t border-white/20 pt-6 text-[0.7rem] leading-relaxed text-white/60">
                        <div>
                            Commercial, campaign &amp; product.
                            <br />
                            Culture, community &amp; emerging talent.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
