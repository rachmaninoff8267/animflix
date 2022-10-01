/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
    images: {
        domains: [
            "s4.anilist.co",
            "media.kitsu.io",
            "artworks.thetvdb.com",
            "media.comicbook.com",
        ],
    },
};

module.exports = nextConfig;
