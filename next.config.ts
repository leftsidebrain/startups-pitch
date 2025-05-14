import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
  /* config options here */

  experimental: {
    // ppr: "incremental",
    after: true,
  },
  devIndicators: {
    buildActivity: true,
    appIsrStatus: true,
    buildActivityPosition: "bottom-right",
  },
};

export default nextConfig;
