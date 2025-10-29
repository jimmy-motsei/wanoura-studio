"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-neutral-200">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 text-sm text-neutral-900">
                {/* Left: Logo / brand */}
                <Link href="/" className="flex items-center font-serif text-lg tracking-tight">
                    {/* If you want to use the image instead of text, uncomment:
          <Image
            src="/brand/wanoura-logo.png"
            alt="Wanoura"
            width={120}
            height={24}
            priority
          />
          */}
                    WANOURA
                </Link>

                {/* Right: Nav links */}
                <nav className="flex items-center gap-6">
                    <a href="#work" className="hover:text-black text-neutral-700 transition-colors">
                        Work
                    </a>
                    <a href="#services" className="hover:text-black text-neutral-700 transition-colors">
                        Services
                    </a>
                    <a href="#clients" className="hover:text-black text-neutral-700 transition-colors">
                        Clients
                    </a>
                    <a href="#contact" className="hover:text-black text-neutral-700 transition-colors">
                        Contact
                    </a>

                    <a
                        href="#contact"
                        className="rounded-full bg-neutral-900 px-3 py-2 text-xs font-medium text-white shadow-sm hover:bg-neutral-800 transition-colors"
                    >
                        Get in touch
                    </a>
                </nav>
            </div>
        </header>
    );
}
