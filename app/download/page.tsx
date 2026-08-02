import type { Metadata } from "next";

import { DownloadPageContent } from "../../components/download-page";
import { ProductFooter, ProductNav } from "../../components/product-site";

export const metadata: Metadata = {
  title: "Download",
  description: "Download Penkra for macOS, Windows, or Linux.",
  alternates: { canonical: "/download" },
};

export default function DownloadPage() {
  return (
    <div className="product-site pk-download-page">
      <ProductNav />
      <DownloadPageContent />
      <ProductFooter />
    </div>
  );
}
