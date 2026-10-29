import { describe, expect, it } from "vitest";

import { resolveReleaseAssetUrl } from "./download-assets";

describe("download assets", () => {
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
});
