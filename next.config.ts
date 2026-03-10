import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Permite carregar imagens direto da Amazon se você quiser usar URLs externas no futuro
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.media-amazon.com',
      },
    ],
  },
  // 2. Resolve o erro "Cross origin request detected" do seu IP 192.168.56.1
  experimental: {
    allowedDevOrigins: ["localhost:3000", "192.168.56.1"]
  }
};

export default nextConfig;