// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  images: {
    domains: ['openai.com', 'oaidalleapiprodscus.blob.core.windows.net'],
    formats: ['image/avif', 'image/webp'],
    unoptimized: true,
  },
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  }
};

module.exports = nextConfig;
