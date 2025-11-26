"use client";

import { FadeUpOnScroll } from "@/components/animation/FadeUpOnScroll";
import * as React from "react";
import { CONTACT_EMAIL } from "../lib/contact";
import { useFormStatus } from "@/lib/hooks/useFormStatus";

type FormState = {
    name: string;
    email: string;
    company: string;
    message: string;
};

const initialForm: FormState = {
    name: "",
    email: "",
    company: "",
    message: "",
};

export default function ContactCTALight() {
    const [form, setForm] = React.useState<FormState>(initialForm);
    const { status, setStatus, error, setError } = useFormStatus();

    const updateField = (field: keyof FormState) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm((prev) => ({ ...prev, [field]: event.target.value }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setStatus("submitting");
        setError(null);

        const trimmed = {
            name: form.name.trim(),
            email: form.email.trim(),
            company: form.company.trim(),
            message: form.message.trim(),
        };

        if (!trimmed.name || !trimmed.email || !trimmed.message) {
            setStatus("error");
            setError("Name, email, and project details are required.");
            return;
        }

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(trimmed),
            });

            if (!res.ok) throw new Error("Failed to submit");

            setStatus("success");
            setForm(initialForm);

            // Optional: Google Analytics event
            // @ts-ignore
            if (typeof window !== "undefined" && window.gtag) {
                // @ts-ignore
                window.gtag("event", "contact_submit", { method: "site_form" });
            }

        } catch (err) {
            console.error(err);
            setError("Something went wrong. Please try again or email us directly.");
            setStatus("error");
        }
    };

    return (
        <section className="bg-white py-20">
            <FadeUpOnScroll
                className="mx-auto max-w-5xl rounded-[32px] border border-neutral-200 bg-white/70 p-10 lg:p-14 shadow-[0_24px_80px_rgba(15,23,42,0.06)]"
                amount={0.3}
            >
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

                <form className="mt-10 grid gap-6 lg:grid-cols-2" onSubmit={handleSubmit} noValidate>
                    <div className="lg:col-span-2">
                        <label htmlFor="contact-name" className="block text-sm font-medium text-neutral-700">
                            Name
                        </label>
                        <input
                            id="contact-name"
                            name="name"
                            autoComplete="name"
                            type="text"
                            required
                            value={form.name}
                            onChange={updateField("name")}
                            disabled={status === "submitting"}
                            className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-neutral-900 disabled:opacity-50"
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
                            required
                            value={form.email}
                            onChange={updateField("email")}
                            disabled={status === "submitting"}
                            className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-neutral-900 disabled:opacity-50"
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
                            value={form.company}
                            onChange={updateField("company")}
                            disabled={status === "submitting"}
                            className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-neutral-900 disabled:opacity-50"
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
                            required
                            value={form.message}
                            onChange={updateField("message")}
                            disabled={status === "submitting"}
                            className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-neutral-900 disabled:opacity-50"
                            placeholder="What are we scoring? Deadlines, references, deliverables…"
                        />
                    </div>
                    <div className="lg:col-span-2 flex flex-wrap items-center gap-4">
                        <button
                            type="submit"
                            disabled={status === "submitting"}
                            className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-6 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-neutral-700 disabled:bg-neutral-400"
                        >
                            {status === "submitting" ? "Sending..." : "Send request"}
                        </button>
                        <p className="text-sm text-neutral-400">
                            Or email us directly at <a href={`mailto:${CONTACT_EMAIL}`} className="text-neutral-900 underline underline-offset-2 hover:text-neutral-500">{CONTACT_EMAIL}</a>
                        </p>
                    </div>

                    <div className="lg:col-span-2">
                        {status === "success" && (
                            <p className="mt-3 text-sm text-emerald-500">
                                Thanks for reaching out — we’ll get back to you soon.
                            </p>
                        )}
                        {status === "error" && error && (
                            <p className="mt-3 text-sm text-red-500">
                                {error}
                            </p>
                        )}
                    </div>
                </form>
            </FadeUpOnScroll>
        </section>
    );
}
