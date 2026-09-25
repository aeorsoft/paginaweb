import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async rewrites() {
    return [
      {
        source: "/automatizacion-inteligente",
        destination: "/automatizacion-inteligente.html",
      },
      {
        source: "/laboratorio-sinapsis",
        destination: "/laboratorio-sinapsis.html",
      },
      {
        source: "/nexo-centro-de-datos",
        destination: "/nexo-centro-de-datos.html",
      },
    ];
  },
};

export default nextConfig;
