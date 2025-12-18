import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: false,
    qualities: [50, 75, 100],
  },
};

export default nextConfig;
