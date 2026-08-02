export const DOWNLOAD_PLATFORMS = ["macos", "windows", "linux"] as const;

export type DownloadPlatform = (typeof DOWNLOAD_PLATFORMS)[number];

interface ReleaseAsset {
  readonly browser_download_url?: unknown;
  readonly name?: unknown;
}

interface GitHubRelease {
  readonly assets?: unknown;
}

export function isDownloadPlatform(value: string): value is DownloadPlatform {
  return DOWNLOAD_PLATFORMS.some((platform) => platform === value);
}

export function resolveReleaseAssetUrl(
  platform: DownloadPlatform,
  release: unknown,
): string | null {
  if (!release || typeof release !== "object") return null;
  const assets = (release as GitHubRelease).assets;
  if (!Array.isArray(assets)) return null;

  const candidates = assets
    .map((asset) => normalizeAsset(asset))
    .filter((asset): asset is { name: string; url: string } => asset !== null)
    .map((asset) => ({ ...asset, score: scoreAsset(platform, asset.name) }))
    .filter((asset) => asset.score > 0)
    .sort((left, right) => right.score - left.score || left.name.localeCompare(right.name));

  return candidates[0]?.url ?? null;
}

function normalizeAsset(asset: unknown): { name: string; url: string } | null {
  if (!asset || typeof asset !== "object") return null;
  const candidate = asset as ReleaseAsset;
  if (typeof candidate.name !== "string" || typeof candidate.browser_download_url !== "string") {
    return null;
  }

  try {
    const url = new URL(candidate.browser_download_url);
    if (
      url.protocol !== "https:" ||
      url.hostname !== "github.com" ||
      !url.pathname.startsWith("/penkrahq/penkra/releases/download/")
    ) {
      return null;
    }
    return { name: candidate.name, url: url.toString() };
  } catch {
    return null;
  }
}

function scoreAsset(platform: DownloadPlatform, name: string): number {
  if (platform === "macos") {
    if (!name.toLowerCase().endsWith(".dmg")) return 0;
    return /arm64/i.test(name) ? 3 : 1;
  }
  if (platform === "windows") {
    if (!name.toLowerCase().endsWith(".exe")) return 0;
    return /x64/i.test(name) ? 3 : 1;
  }
  if (!name.endsWith(".AppImage")) return 0;
  return /x64/i.test(name) ? 3 : 1;
}
