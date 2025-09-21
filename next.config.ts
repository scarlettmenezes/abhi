import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      root: process.cwd(),
    },
  },
  poweredByHeader: false,
  compress: true,
  images: {
    unoptimized: false,
  },
  // Enable static optimization for better performance
  swcMinify: true,
};

export default nextConfig;
