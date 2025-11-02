"use client";

import Link from "next/link";
import Logo from "@/components/Logo";

const navItems = [
    { label: "Work", href: "/#moving-pictures" },
    { label: "Services", href: "/#services" },
    { label: "Clients", href: "/#client-logos" },
    { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
    return (
        <header className="sticky top-0 z-40 border-b border-neutral-200/70 bg-white/85 backdrop-blur">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Left: Brand */}
                <Link href="/" className="flex items-center gap-2">
                    <Logo className="h-6" />
                </Link>

                {/* Center / Right: Nav links */}
                <nav className="hidden items-center gap-6 md:flex">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="text-sm text-neutral-600 transition-colors hover:text-black"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                {/* CTA */}
                <div className="hidden md:block">
                    <a
                        href="/#contact"
                        className="rounded-full bg-black px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-neutral-900"
                    >
                        Get in touch
                    </a>
                </div>

                {/* Mobile placeholder (kept simple for now) */}
                <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-md border border-neutral-200 p-2 text-neutral-700 md:hidden"
                    onClick={() => {
                        // TODO: plug in mobile drawer later
                    }}
                    aria-label="Open navigation"
                >
                    <span className="block h-0.5 w-5 bg-neutral-800" />
                    <span className="mt-1 block h-0.5 w-5 bg-neutral-800" />
                </button>
            </div>
        </header>
    );
}
