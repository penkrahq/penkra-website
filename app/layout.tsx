import type { Metadata } from "next";
import { Inter, Manrope, Newsreader } from "next/font/google";

import { Analytics } from "../components/analytics";
import { JsonLd } from "../components/json-ld";
import {
  absoluteUrl,
  defaultDescription,
  defaultTitle,
  siteName,
  siteUrl,
} from "../lib/metadata";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const pencilInter = Inter({
  subsets: ["latin"],
  variable: "--font-auth-inter",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | Penkra",
  },
  description: defaultDescription,
  alternates: { canonical: siteUrl },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: siteUrl,
    siteName,
    type: "website",
    images: [
      {
        url: absoluteUrl("/opengraph-image"),
        width: 1200,
        height: 630,
        alt: "Penkra — Give your AI agents Apps",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [absoluteUrl("/opengraph-image")],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${newsreader.variable} ${pencilInter.variable}`}
    >
      <body>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": absoluteUrl("/#organization"),
            name: siteName,
            url: siteUrl,
            logo: absoluteUrl("/icons/icon-512.png"),
            description: defaultDescription,
            email: "support@penkra.com",
            contactPoint: [
              {
                "@type": "ContactPoint",
                contactType: "customer support",
                email: "support@penkra.com",
                availableLanguage: ["en"],
              },
            ],
            sameAs: ["https://github.com/penkrahq/penkra"],
          }}
        />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": absoluteUrl("/#website"),
            name: siteName,
            url: siteUrl,
            inLanguage: "en",
            publisher: { "@id": absoluteUrl("/#organization") },
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
