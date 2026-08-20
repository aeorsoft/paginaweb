import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async rewrites() {
    return [
      {
        source: "/automatizacion-inteligente",
        destination: "/automatizacion-inteligente.html",
      },
    ];
  },
};

export default nextConfig;
