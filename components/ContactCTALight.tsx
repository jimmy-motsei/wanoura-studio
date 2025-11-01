import { CONTACT_EMAIL } from "../lib/contact";

export default function ContactCTALight() {
    return (
        <section className="bg-white py-20">
            <div className="mx-auto max-w-5xl rounded-[32px] border border-neutral-200 bg-white/70 p-10 lg:p-14 shadow-[0_24px_80px_rgba(15,23,42,0.06)]">
                <div className="max-w-2xl">
                    <p className="text-xs font-medium uppercase tracking-[0.4em] text-neutral-400">
                        Contact us
                    </p>
                    <h2 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
                        Let’s work together
                    </h2>
                    <p className="mt-3 text-sm text-neutral-500 leading-relaxed">
                        Tell us about your project — we’ll come back with options, timelines, and a sonic POV.
                    </p>
                </div>

                <form className="mt-10 grid gap-6 lg:grid-cols-2">
                    <div className="lg:col-span-2">
                        <label htmlFor="contact-name" className="block text-sm font-medium text-neutral-700">
                            Name
                        </label>
                        <input
                            id="contact-name"
                            name="name"
                            autoComplete="name"
                            type="text"
                            className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-neutral-900"
                            placeholder="Your full name"
                        />
                    </div>

                    <div>
                        <label htmlFor="contact-email" className="block text-sm font-medium text-neutral-700">
                            Email
                        </label>
                        <input
                            id="contact-email"
                            name="email"
                            autoComplete="email"
                            type="email"
                            className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-neutral-900"
                            placeholder="you@example.com"
                        />
                    </div>

                    <div>
                        <label htmlFor="contact-company" className="block text-sm font-medium text-neutral-700">
                            Company / Studio
                        </label>
                        <input
                            id="contact-company"
                            name="company"
                            autoComplete="organization"
                            type="text"
                            className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-neutral-900"
                            placeholder="Production, brand, agency…"
                        />
                    </div>
                    <div className="lg:col-span-2">
                        <label htmlFor="contact-message" className="block text-sm font-medium text-neutral-700">
                            Project details
                        </label>
                        <textarea
                            id="contact-message"
                            name="message"
                            autoComplete="off"
                            rows={4}
                            className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-neutral-900"
                            placeholder="What are we scoring? Deadlines, references, deliverables…"
                        />
                    </div>
                    <div className="lg:col-span-2 flex flex-wrap items-center gap-4">
                        <button
                            type="submit"
                            className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-6 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-neutral-700"
                        >
                            Send request
                        </button>
                        <p className="text-sm text-neutral-400">
                            Or email us directly at <a href={`mailto:${CONTACT_EMAIL}`} className="text-neutral-900 underline underline-offset-2 hover:text-neutral-500">{CONTACT_EMAIL}</a>
                        </p>
                    </div>
                </form>
            </div>
        </section>
    );
}
