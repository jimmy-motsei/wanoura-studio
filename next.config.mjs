// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        const isProd = process.env.NODE_ENV === "production";
        if (!isProd) return [];
        return [
            {
                source: "/:path*",
                headers: [
                    // keep this conservative; adjust if you add more origins
                    {
                        key: "Content-Security-Policy",
                        value: [
                            "default-src 'self'",
                            "frame-src https://player.vimeo.com",
                            "img-src 'self' data: https://i.vimeocdn.com https://*.google-analytics.com https://*.googletagmanager.com",
                            "script-src 'self' 'unsafe-inline' https://*.googletagmanager.com",
                            "style-src 'self' 'unsafe-inline'",
                            "connect-src 'self' https://player.vimeo.com https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com",
                            "media-src 'self' blob: data:",
                            "object-src 'none'",
                        ].join("; "),
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
