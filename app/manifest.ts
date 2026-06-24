import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Penkra",
    short_name: "Penkra",
    description:
      "Paperwork, admin, logistics, and operational support handled for you.",
    start_url: "/",
    display: "standalone",
    background_color: "#fffefc",
    theme_color: "#073b63",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
