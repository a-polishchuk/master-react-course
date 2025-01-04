/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath: '/mastering-react-landing',
    assetPrefix: '/mastering-react-landing',
};

module.exports = nextConfig; 