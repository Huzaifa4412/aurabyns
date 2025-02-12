import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // Enable static export
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,  // Disable Next.js optimization
  },
};

export default nextConfig;
