/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'api.ts', 'api.tsx'],
  images: {
    remotePatterns: [
      { hostname: 'github.com' },
      { hostname: 'lh3.googleusercontent.com' },
      { hostname: 'images.unsplash.com' },
    ],
  },
}

module.exports = nextConfig
