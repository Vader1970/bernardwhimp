import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.vimeocdn.com",
        pathname: "/**", // Allows all image paths on this host
      },
    ],
  },
};

export default nextConfig;
