import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ab2bbkrtuubturud.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
