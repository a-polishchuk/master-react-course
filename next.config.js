/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath: '/master-react-course',
    assetPrefix: '/master-react-course/',
    experimental: {
        serverActions: false,
    },
};

module.exports = nextConfig;