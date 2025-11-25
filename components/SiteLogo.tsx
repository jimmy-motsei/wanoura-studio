"use client";

import Image from "next/image";

type LogoVariant = "icon" | "wordmark" | "horizontal";

interface SiteLogoProps {
    variant?: LogoVariant;
    width?: number;
    height?: number;
    className?: string;
}

export default function SiteLogo({
                                     variant = "horizontal",
                                     width = 140,
                                     height = 40,
                                     className = "",
                                 }: SiteLogoProps) {
    const srcMap = {
        icon: "/img/wanoura/wanoura_favicon.ico",
        wordmark: "/img/wanoura/wanoura-logo-black-transparent.png",
        horizontal: "/img/wanoura/wanoura-logo-black-290-100-transparent.png",
    };


    return (
        <Image
            src={srcMap[variant]}
            alt="Wanoura Logo"
            width={width}
            height={height}
            priority
            className={`object-contain ${className}`}
        />
    );
}
