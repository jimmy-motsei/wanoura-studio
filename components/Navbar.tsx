"use client";

import Image from "next/image";
import Link from "next/link";

const navItems = [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Clients", href: "#clients" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    return (
        <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/80 backdrop-blur">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/brand/wanoura-logo.png"
                        alt="Wanoura"
                        width={140}
                        height={28}
                        priority
                    />
                </Link>

                {/* Desktop nav */}
                <nav className="hidden gap-6 text-sm text-neutral-700 md:flex">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="transition hover:text-neutral-950"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                {/* CTA */}
                <a
                    href="#contact"
                    className="hidden rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-neutral-800 md:inline-flex"
                >
                    Get in touch
                </a>
            </div>
        </header>
    );
}
