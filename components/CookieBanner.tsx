"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { tapSpring } from "@/lib/motion";

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already accepted cookies
        const consent = localStorage.getItem("wanoura-cookie-consent");
        if (!consent) {
            // Small delay for better UX
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("wanoura-cookie-consent", "accepted");
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem("wanoura-cookie-consent", "declined");
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.8, 0.3, 1] }}
                    className="absolute bottom-6 right-6 z-30 w-72 rounded-2xl border border-neutral-200 bg-white p-5 shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
                >
                    {/* Cookie Icon */}
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-neutral-700"
                        >
                            <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
                            <path d="M8.5 8.5v.01" />
                            <path d="M16 15.5v.01" />
                            <path d="M12 12v.01" />
                            <path d="M11 17v.01" />
                            <path d="M7 14v.01" />
                        </svg>
                    </div>

                    {/* Content */}
                    <h3 className="text-sm font-semibold text-neutral-900">
                        We use cookies
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-neutral-600">
                        We use cookies to enhance your experience and analyze site traffic. 
                        By continuing, you agree to our use of cookies.
                    </p>

                    {/* Actions */}
                    <div className="mt-4 flex gap-2">
                        <motion.button
                            onClick={handleAccept}
                            className="flex-1 rounded-lg bg-neutral-900 px-4 py-2 text-xs font-medium text-white transition hover:bg-neutral-800"
                            {...tapSpring}
                        >
                            Accept
                        </motion.button>
                        <motion.button
                            onClick={handleDecline}
                            className="flex-1 rounded-lg border border-neutral-200 bg-white px-4 py-2 text-xs font-medium text-neutral-700 transition hover:bg-neutral-50"
                            {...tapSpring}
                        >
                            Decline
                        </motion.button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
