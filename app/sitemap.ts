import type { MetadataRoute } from "next";

const routes = [
  { path: "", priority: 1 },
  { path: "/download", priority: 0.9 },
  { path: "/privacy", priority: 0.5 },
  { path: "/terms", priority: 0.5 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://penkra.com${route.path}`,
    lastModified: "2026-08-01",
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}
