/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath: '/master-react-course',
    assetPrefix: '/master-react-course/',
};

module.exports = nextConfig;