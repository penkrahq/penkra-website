import { afterEach, describe, expect, it, vi } from "vitest";

import { GET } from "./route";

const release = {
  assets: [
    asset("Penkra-0.11.7-arm64.dmg"),
    asset("Penkra-0.11.7-x64.dmg"),
  ],
};

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("download route", () => {
  it.each([
    ["arm64", "Penkra-0.11.7-arm64.dmg"],
    ["x64", "Penkra-0.11.7-x64.dmg"],
  ])("redirects macOS %s requests to the matching release asset", async (arch, assetName) => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async () => Response.json(release)),
    );

    const response = await GET(new Request(`https://penkra.com/download/macos?arch=${arch}`), {
      params: Promise.resolve({ platform: "macos" }),
    });

    expect(response.status).toBe(307);
    expect(response.headers.get("location")).toContain(assetName);
  });

  it("keeps the legacy macOS URL on Apple silicon", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async () => Response.json(release)),
    );

    const response = await GET(new Request("https://penkra.com/download/macos"), {
      params: Promise.resolve({ platform: "macos" }),
    });

    expect(response.headers.get("location")).toContain("Penkra-0.11.7-arm64.dmg");
  });

  it("rejects unsupported macOS architectures before fetching release data", async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);

    const response = await GET(new Request("https://penkra.com/download/macos?arch=universal"), {
      params: Promise.resolve({ platform: "macos" }),
    });

    expect(response.status).toBe(404);
    expect(fetchMock).not.toHaveBeenCalled();
  });
});

function asset(name: string) {
  return {
    name,
    browser_download_url: `https://github.com/penkrahq/penkra/releases/download/v0.11.7/${name}`,
  };
}
