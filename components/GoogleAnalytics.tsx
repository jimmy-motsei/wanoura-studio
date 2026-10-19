"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

export const GA_MEASUREMENT_ID = "G-7CWDHLJM1G";
export const CONSENT_STORAGE_KEY = "wanoura-cookie-consent";
export const CONSENT_EVENT = "wanoura-consent-change";

function hasAnalyticsConsent(): boolean {
    try {
        return window.localStorage.getItem(CONSENT_STORAGE_KEY) === "accepted";
    } catch {
        return false;
    }
}

/**
 * Loads GA4 only after the visitor has clicked "Accept" on the cookie banner
 * (opt-in, POPIA-aligned). Nothing is requested from Google before that.
 */
export default function GoogleAnalytics() {
    const [consented, setConsented] = useState(false);

    useEffect(() => {
        const sync = () => setConsented(hasAnalyticsConsent());
        sync();
        window.addEventListener(CONSENT_EVENT, sync);
        window.addEventListener("storage", sync);
        return () => {
            window.removeEventListener(CONSENT_EVENT, sync);
            window.removeEventListener("storage", sync);
        };
    }, []);

    if (!consented) return null;

    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
                strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
                {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');`}
            </Script>
        </>
    );
}
