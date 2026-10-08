import type { MetadataRoute } from "next";
const routes = ["", "/privacidade"];
export default function sitemap(): MetadataRoute.Sitemap { const base = "https://bemvino.com.br"; return routes.map((route) => ({ url: `${base}${route}`, changeFrequency: "monthly", priority: route ? 0.7 : 1 })); }
