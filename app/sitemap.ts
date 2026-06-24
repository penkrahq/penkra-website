import type { MetadataRoute } from "next";

const routes = [
  "",
  "/services",
  "/countries",
  "/ghana",
  "/ghana/business-registration",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://penkra.com";
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
