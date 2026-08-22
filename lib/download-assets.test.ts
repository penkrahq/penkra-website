import { describe, expect, it } from "vitest";

import {
  isDownloadPlatform,
  isMacArchitecture,
  resolveReleaseAssetUrl,
} from "./download-assets";

const release = {
  assets: [
    asset("Penkra-0.8.7-x64.dmg"),
    asset("Penkra-0.8.7-arm64.dmg"),
    asset("Penkra-0.8.7-x64.exe"),
    asset("Penkra-0.8.7-x64.exe.blockmap"),
    asset("Penkra-0.8.7-x64.AppImage"),
  ],
};

describe("download assets", () => {
  it("recognizes only supported platform route values", () => {
    expect(isDownloadPlatform("macos")).toBe(true);
    expect(isDownloadPlatform("windows")).toBe(true);
    expect(isDownloadPlatform("linux")).toBe(true);
    expect(isDownloadPlatform("android")).toBe(false);
    expect(isMacArchitecture("arm64")).toBe(true);
    expect(isMacArchitecture("x64")).toBe(true);
    expect(isMacArchitecture("universal")).toBe(false);
  });

  it("prefers the Apple silicon disk image for macOS", () => {
    expect(resolveReleaseAssetUrl("macos", release)).toContain("arm64.dmg");
  });

  it("selects the Intel disk image when requested", () => {
    expect(resolveReleaseAssetUrl("macos", release, "x64")).toContain("x64.dmg");
  });

  it("does not send an Intel Mac to an Apple silicon-only release", () => {
    expect(
      resolveReleaseAssetUrl("macos", { assets: [asset("Penkra-0.8.7-arm64.dmg")] }, "x64"),
    ).toBeNull();
  });

  it("selects executable and AppImage assets without matching metadata", () => {
    expect(resolveReleaseAssetUrl("windows", release)).toContain("x64.exe");
    expect(resolveReleaseAssetUrl("linux", release)).toContain("x64.AppImage");
  });

  it("rejects untrusted download origins", () => {
    expect(
      resolveReleaseAssetUrl("macos", {
        assets: [
          {
            name: "Penkra-0.8.7-arm64.dmg",
            browser_download_url: "https://example.com/Penkra.dmg",
          },
        ],
      }),
    ).toBeNull();
  });

  it("returns null for malformed or unavailable release data", () => {
    expect(resolveReleaseAssetUrl("macos", null)).toBeNull();
    expect(resolveReleaseAssetUrl("linux", { assets: [] })).toBeNull();
  });
});

function asset(name: string) {
  return {
    name,
    browser_download_url: `https://github.com/penkrahq/penkra/releases/download/v0.8.7/${name}`,
  };
}
