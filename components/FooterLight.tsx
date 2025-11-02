import { CONTACT_EMAIL } from "../lib/contact";

export default function FooterLight() {
    return (
        <section className="bg-white text-neutral-900 px-4 py-20 sm:py-24">
            <div className="mx-auto max-w-5xl">
                <div className="rounded-2xl bg-neutral-900 text-neutral-100 p-8 sm:p-10 shadow-[0_30px_80px_-10px_rgba(0,0,0,0.6)]">
                    {/* Top row: intro + CTA + contact details */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-8">
                        {/* LEFT: headline + description + buttons */}
                        <div className="flex-1 min-w-0">
                            <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-neutral-400">
                                Wanoura — The Legacy of Sound.
                            </p>

                            <p className="mt-3 text-[0.9rem] leading-relaxed text-neutral-300 max-w-xl">
                                We build sonic worlds where emotion and precision coexist. From
                                score to mix, from texture to voice, we shape sound that moves
                                people and endures.
                            </p>

                            <div className="mt-5 flex flex-col sm:flex-row gap-3 text-[0.8rem] leading-relaxed text-neutral-300">
                                <a
                                    href="#moving-pictures"
                                    className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 font-medium text-neutral-900 hover:bg-neutral-200 transition"
                                >
                                    Listen / Watch Work
                                </a>

                                <a
                                    href="/#contact"
                                    className="inline-flex items-center justify-center rounded-full border border-neutral-600/60 px-4 py-2 font-medium text-neutral-100 hover:bg-neutral-800 transition"
                                >
                                    Start a Project
                                </a>
                            </div>
                        </div>

                        {/* RIGHT: contact / socials */}
                        <div className="w-full max-w-xs shrink-0 space-y-6 text-[0.8rem] leading-relaxed">
                            {/* Location */}
                            <div>
                                <div className="font-semibold text-neutral-100">
                                    Johannesburg · Remote / Global
                                </div>
                                <div className="text-neutral-400">
                                    Built for brands, campaigns, and culture.
                                </div>
                            </div>

                            {/* Capabilities summary */}
                            <div>
                                <div className="text-neutral-400">
                                    Voice, Score, Sonic Identity, Mix &amp; Delivery.
                                </div>
                                <div className="text-neutral-400">
                                    Fast turnaround. Broadcast-ready. Streaming-safe.
                                </div>
                            </div>

                            {/* Direct contact */}
                            <div>
                                <div className="font-semibold text-neutral-100">
                                    Let’s talk
                                </div>
                                <div className="text-neutral-400">
                                    <a
                                        className="hover:text-neutral-200 underline underline-offset-2"
                                        href={`mailto:${CONTACT_EMAIL}`}
                                    >
                                        {CONTACT_EMAIL}
                                    </a>
                                </div>
                            </div>

                            {/* Social links */}
                            <div>
                                <div className="font-semibold text-neutral-100">
                                    Social
                                </div>
                                <ul className="mt-1 space-y-1 text-neutral-400">
                                    <li>
                                        <a
                                            className="hover:text-neutral-200 underline underline-offset-2"
                                            href="https://instagram.com/wanoura"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Instagram
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="hover:text-neutral-200 underline underline-offset-2"
                                            href="https://soundcloud.com/wanoura"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Soundcloud
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="hover:text-neutral-200 underline underline-offset-2"
                                            href="https://vimeo.com/wanoura"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Vimeo / Reel
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Bottom fine-print / positioning */}
                    <div className="mt-10 border-t border-neutral-700/60 pt-6 text-[0.7rem] leading-relaxed text-neutral-500">
                        <div>
                            Commercial, campaign &amp; product.
                            <br />
                            Culture, community &amp; emerging talent.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
