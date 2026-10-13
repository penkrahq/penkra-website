import { describe, expect, it } from "vitest";

import { penkraElectronAuthorizationCallbackUrl } from "./auth-client";

describe("Penkra Electron authorization callback", () => {
  it("returns the authorization code to the requested desktop flavor", () => {
    const production = new URL(
      penkraElectronAuthorizationCallbackUrl(
        "production",
        "code_123",
        "state_123",
      )!,
    );
    const development = new URL(
      penkraElectronAuthorizationCallbackUrl(
        "development",
        "code_123",
        "state_123",
      )!,
    );

    expect(`${production.protocol}//${production.host}${production.pathname}`).toBe(
      "com.penkra.app://auth/callback",
    );
    expect(`${development.protocol}//${development.host}${development.pathname}`).toBe(
      "com.penkra.app.dev://auth/callback",
    );
    const developmentThree = new URL(
      penkraElectronAuthorizationCallbackUrl(
        "development",
        "code_123",
        "state_123",
        3,
      )!,
    );
    expect(
      `${developmentThree.protocol}//${developmentThree.host}${developmentThree.pathname}`,
    ).toBe("com.penkra.app.dev.3://auth/callback");
    expect(decodeAuthorizationToken(production)).toEqual({
      identifier: "code_123",
      state: "state_123",
    });
  });

  it("encodes the Better Auth token and rejects missing values", () => {
    const callback = new URL(
      penkraElectronAuthorizationCallbackUrl(
        "development",
        "code with spaces",
        "state_123",
      )!,
    );

    expect(decodeAuthorizationToken(callback)).toEqual({
      identifier: "code with spaces",
      state: "state_123",
    });
    expect(
      penkraElectronAuthorizationCallbackUrl(
        "production",
        undefined,
        "state_123",
      ),
    ).toBeUndefined();
    expect(
      penkraElectronAuthorizationCallbackUrl(
        "production",
        "code_123",
        undefined,
      ),
    ).toBeUndefined();
  });
});

function decodeAuthorizationToken(url: URL): unknown {
  const token = url.hash.replace(/^#token=/, "");
  return JSON.parse(Buffer.from(token, "base64url").toString("utf8"));
}

it("returns the mobile client to its own scheme without changing desktop callbacks", () => {
  const url = new URL(penkraElectronAuthorizationCallbackUrl("production", "mobile-code", "mobile-state", 1, "penkra-mobile")!);
  expect(`${url.protocol}//${url.host}${url.pathname}`).toBe("com.penkra.mobile://auth/callback");
  expect(decodeAuthorizationToken(url)).toEqual({ identifier: "mobile-code", state: "mobile-state" });
  expect(penkraElectronAuthorizationCallbackUrl("production", "code", "state", 1, "unknown-app")).toBeUndefined();
  expect(penkraElectronAuthorizationCallbackUrl("development", "code", "state", 2, "penkra-mobile")).toBeUndefined();
});
