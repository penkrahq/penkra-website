export const DOWNLOAD_PLATFORMS = ["macos", "windows", "linux"] as const;
export const MAC_ARCHITECTURES = ["arm64", "x64"] as const;

export type DownloadPlatform = (typeof DOWNLOAD_PLATFORMS)[number];
export type MacArchitecture = (typeof MAC_ARCHITECTURES)[number];

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

export function isMacArchitecture(value: string): value is MacArchitecture {
  return MAC_ARCHITECTURES.some((architecture) => architecture === value);
}

export function resolveReleaseAssetUrl(
  platform: DownloadPlatform,
  release: unknown,
  macArchitecture: MacArchitecture = "arm64",
): string | null {
  if (!release || typeof release !== "object") return null;
  const assets = (release as GitHubRelease).assets;
  if (!Array.isArray(assets)) return null;

  const candidates = assets
    .map((asset) => normalizeAsset(asset))
    .filter((asset): asset is { name: string; url: string } => asset !== null)
    .map((asset) => ({ ...asset, score: scoreAsset(platform, asset.name, macArchitecture) }))
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

function scoreAsset(
  platform: DownloadPlatform,
  name: string,
  macArchitecture: MacArchitecture,
): number {
  if (platform === "macos") {
    if (!name.toLowerCase().endsWith(".dmg")) return 0;
    if (/universal/i.test(name)) return 2;
    if (macArchitecture === "arm64") return /(?:arm64|aarch64)/i.test(name) ? 3 : 0;
    return /(?:x64|x86_64|amd64)/i.test(name) ? 3 : 0;
  }
  if (platform === "windows") {
    if (!name.toLowerCase().endsWith(".exe")) return 0;
    return /x64/i.test(name) ? 3 : 1;
  }
  if (!name.endsWith(".AppImage")) return 0;
  return /x64/i.test(name) ? 3 : 1;
}
