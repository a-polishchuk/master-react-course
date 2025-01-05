/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
    assetPrefix: 'http://mastering-react.tech',
};

module.exports = nextConfig; 