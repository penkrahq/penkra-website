import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Penkra",
    short_name: "Penkra",
    description:
      "The open-source desktop workspace where AI agents use Apps.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0b0e",
    theme_color: "#0a0b0e",
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
