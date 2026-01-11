import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  turbopack: {
    root: __dirname,
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion', '@xenova/transformers'],
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'userpic.codeforces.org' },
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
      { protocol: 'https', hostname: 'cdn.codeforces.com' },
    ],
  },
};

export default nextConfig;
