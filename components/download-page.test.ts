import { describe, expect, it } from "vitest";

import { detectMacArchitecture, detectPlatform } from "./download-page";

describe("detectPlatform", () => {
  it.each([
    ["MacIntel", "Mozilla/5.0", "macos"],
    ["Win32", "Mozilla/5.0", "windows"],
    ["Linux x86_64", "Mozilla/5.0", "linux"],
    ["", "Mozilla/5.0 (X11; Linux x86_64)", "linux"],
  ])("detects %s", (platform, userAgent, expected) => {
    expect(detectPlatform({ platform, userAgent })).toBe(expected);
  });

  it("returns null for an unknown platform", () => {
    expect(detectPlatform({ platform: "", userAgent: "PenkraBot" })).toBeNull();
  });
});

describe("detectMacArchitecture", () => {
  it.each([
    ["arm", "arm64"],
    ["arm64", "arm64"],
    ["x86", "x64"],
    ["x86_64", "x64"],
  ])("maps %s to %s", async (reported, expected) => {
    await expect(
      detectMacArchitecture({
        platform: "MacIntel",
        userAgent: "Mozilla/5.0",
        userAgentData: {
          getHighEntropyValues: async () => ({ architecture: reported }),
        },
      }),
    ).resolves.toBe(expected);
  });

  it("returns null when architecture hints are unavailable", async () => {
    await expect(
      detectMacArchitecture({ platform: "MacIntel", userAgent: "Mozilla/5.0" }),
    ).resolves.toBeNull();
  });
});
