import { NextResponse } from "next/server";

import {
  isDownloadPlatform,
  resolveReleaseAssetUrl,
} from "../../../lib/download-assets";

const RELEASES_PAGE = "https://github.com/penkrahq/penkra/releases/latest";
const LATEST_RELEASE_API = "https://api.github.com/repos/penkrahq/penkra/releases/latest";

export async function GET(
  _request: Request,
  context: { params: Promise<{ platform: string }> },
) {
  const { platform } = await context.params;
  if (!isDownloadPlatform(platform)) {
    return new NextResponse("Unsupported download platform.", { status: 404 });
  }

  try {
    const response = await fetch(LATEST_RELEASE_API, {
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": "penkra.com",
        "X-GitHub-Api-Version": "2022-11-28",
      },
      next: { revalidate: 300 },
    });
    if (response.ok) {
      const assetUrl = resolveReleaseAssetUrl(platform, await response.json());
      if (assetUrl) {
        return NextResponse.redirect(assetUrl, 307);
      }
    }
  } catch {
    // The releases page remains a stable fallback during GitHub API outages.
  }

  return NextResponse.redirect(RELEASES_PAGE, 307);
}
