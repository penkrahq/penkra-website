import { describe, expect, it } from "vitest";

import { detectPlatform } from "./download-page";

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
