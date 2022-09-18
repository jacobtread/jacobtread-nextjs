/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        locales: ["en"],
        defaultLocale: "en"
    },
    reactStrictMode: true,
    experimental: {
        images: {
            // Images cannot be optimized when SSG is done
            unoptimized: true
        }
    },
    // Trailing slashes to make webserver work properly with SSG
    trailingSlash: true
}

module.exports = nextConfig
