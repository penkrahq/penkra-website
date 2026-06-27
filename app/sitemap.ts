import type { MetadataRoute } from "next";

const lastModified = "2026-06-27";

const routes = [
  { path: "", priority: 1 },
  { path: "/services", priority: 0.8 },
  { path: "/countries", priority: 0.7 },
  { path: "/ghana", priority: 0.8 },
  { path: "/ghana/business-registration", priority: 0.9 },
  { path: "/contact", priority: 0.8 },
  { path: "/privacy", priority: 0.5 },
  { path: "/terms", priority: 0.5 },
  { path: "/billing", priority: 0.6 },
  { path: "/data-handling", priority: 0.6 },
  { path: "/ai-assisted", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://penkra.com";
  return routes.map((route) => ({
    url: `${base}${route.path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}
