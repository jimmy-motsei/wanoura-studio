"use client";

import * as React from "react";
import { CONTACT_EMAIL } from "../lib/contact";

type FormState = {
    name: string;
    email: string;
    company: string;
    message: string;
};

type FormStatus = "idle" | "success" | "error";

const initialForm: FormState = {
    name: "",
    email: "",
    company: "",
    message: "",
};

export default function ContactCTALight() {
    const [form, setForm] = React.useState<FormState>(initialForm);
    const [status, setStatus] = React.useState<FormStatus>("idle");
    const [error, setError] = React.useState<string | null>(null);

    const updateField = (field: keyof FormState) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm((prev) => ({ ...prev, [field]: event.target.value }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

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

        const subject = `Project inquiry from ${trimmed.name}`;
        const bodyLines = [
            `Name: ${trimmed.name}`,
            `Email: ${trimmed.email}`,
            trimmed.company ? `Company / Studio: ${trimmed.company}` : "Company / Studio: (not provided)",
            "",
            "Project details:",
            trimmed.message,
        ];

        const mailtoHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

        setStatus("success");
        setError(null);
        window.location.href = mailtoHref;
    };

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
                            aria-invalid={status === "error" && !form.name.trim()}
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
                            required
                            value={form.email}
                            onChange={updateField("email")}
                            aria-invalid={status === "error" && !form.email.trim()}
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
                            value={form.company}
                            onChange={updateField("company")}
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
                            required
                            value={form.message}
                            onChange={updateField("message")}
                            aria-invalid={status === "error" && !form.message.trim()}
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

                    <div className="lg:col-span-2">
                        {status === "success" && (
                            <p className="text-sm text-green-700" role="status">
                                Opening your email client with the project details — send the email to complete your request.
                            </p>
                        )}
                        {status === "error" && error && (
                            <p className="text-sm text-red-600" role="alert">
                                {error}
                            </p>
                        )}
                    </div>
                </form>
            </div>
        </section>
    );
}
