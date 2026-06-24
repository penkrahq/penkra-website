import type { Metadata } from "next";

export const siteUrl = "https://penkra.com";
export const siteName = "Penkra";
export const defaultTitle = "Penkra | Paperwork, admin, and logistics handled";
export const defaultDescription =
  "Penkra helps people and businesses delegate paperwork, registrations, admin follow-ups, records, logistics, and compliance awareness.";

type PageMetadataInput = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
};

export function absoluteUrl(path = ""): string {
  return new URL(path, siteUrl).toString();
}

export function pageMetadata({
  title,
  description = defaultDescription,
  path = "",
  image = "/og/default.png",
}: PageMetadataInput = {}): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);
  const resolvedTitle = title ?? defaultTitle;

  return {
    title: resolvedTitle,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: resolvedTitle,
      description,
      url,
      siteName,
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${siteName} preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description,
      images: [imageUrl],
    },
  };
}
