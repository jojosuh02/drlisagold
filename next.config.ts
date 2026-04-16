import type { NextConfig } from 'next';

const config: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [{ protocol: 'https', hostname: 'drlisagold.com' }],
  },
  experimental: {
    mdxRs: false,
  },
  async redirects() {
    return [
      { source: '/my-account/:path*', destination: '/', permanent: true },
      { source: '/cart/:path*', destination: '/shop', permanent: true },
      { source: '/checkout/:path*', destination: '/shop', permanent: true },
      { source: '/psychotherapy-consulting', destination: '/psychotherapy', permanent: true },
      { source: '/product/:slug', destination: '/shop/:slug', permanent: true },
      { source: '/therapist-training-consultation-2', destination: '/for-practitioners/training', permanent: true },
    ];
  },
};

export default config;
