import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // Enable static export
  eslint: {
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;
