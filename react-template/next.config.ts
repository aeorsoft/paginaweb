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
      {
        source: "/radar-de-ciberataques",
        destination: "/radar-de-ciberataques.html",
      },
    ];
  },
};

export default nextConfig;
