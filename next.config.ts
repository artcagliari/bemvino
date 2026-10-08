import type { NextConfig } from "next";

// Páginas antigas foram consolidadas na home; redireciona para a seção equivalente.
const old: Record<string, string> = {
  "/calendario": "/#planejar",
  "/contato": "/#contato",
  "/enoturismo": "/#experiencias",
  "/experiencias": "/#experiencias",
  "/inspiracoes": "/#experiencias",
  "/sob-medida": "/#planejar",
  "/sobre": "/#sobre",
  "/viagens": "/#experiencias",
};

const nextConfig: NextConfig = {
  async redirects() {
    return Object.entries(old).map(([source, destination]) => ({ source, destination, permanent: true }));
  },
};

export default nextConfig;
