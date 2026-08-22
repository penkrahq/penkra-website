import { NextResponse } from "next/server";

import {
  isDownloadPlatform,
  isMacArchitecture,
  resolveReleaseAssetUrl,
  type MacArchitecture,
} from "../../../lib/download-assets";

const RELEASES_PAGE = "https://github.com/penkrahq/penkra/releases/latest";
const LATEST_RELEASE_API = "https://api.github.com/repos/penkrahq/penkra/releases/latest";

export async function GET(
  request: Request,
  context: { params: Promise<{ platform: string }> },
) {
  const { platform } = await context.params;
  if (!isDownloadPlatform(platform)) {
    return new NextResponse("Unsupported download platform.", { status: 404 });
  }

  const requestedArchitecture = new URL(request.url).searchParams.get("arch");
  if (
    platform === "macos" &&
    requestedArchitecture !== null &&
    !isMacArchitecture(requestedArchitecture)
  ) {
    return new NextResponse("Unsupported macOS architecture.", { status: 404 });
  }
  const macArchitecture: MacArchitecture =
    platform === "macos" &&
    requestedArchitecture !== null &&
    isMacArchitecture(requestedArchitecture)
      ? requestedArchitecture
      : "arm64";

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
      const assetUrl = resolveReleaseAssetUrl(platform, await response.json(), macArchitecture);
      if (assetUrl) {
        return NextResponse.redirect(assetUrl, 307);
      }
    }
  } catch {
    // The releases page remains a stable fallback during GitHub API outages.
  }

  return NextResponse.redirect(RELEASES_PAGE, 307);
}
