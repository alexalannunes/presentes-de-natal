import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "picsum.photos",
      },
      {
        hostname: "http2.mlstatic.com",
      },
    ],
  },
};

export default nextConfig;
