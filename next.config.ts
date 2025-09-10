import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.ldpg.co.uk" },
      { protocol: "https", hostname: "ldpg.co.uk" },
      { protocol: "http", hostname: "www.ldpg.co.uk" },
    ],
  },
};

export default nextConfig;
