import { describe, expect, it } from "vitest";

import { penkraElectronAuthorizationCallbackUrl } from "./auth-client";

describe("Penkra Electron authorization callback", () => {
  it("returns the authorization code to the requested desktop flavor", () => {
    expect(
      penkraElectronAuthorizationCallbackUrl("production", "code_123"),
    ).toBe("com.penkra.app://auth/callback#token=code_123");
    expect(
      penkraElectronAuthorizationCallbackUrl("development", "code_123"),
    ).toBe("com.penkra.app.dev://auth/callback#token=code_123");
  });

  it("encodes the code and rejects missing values", () => {
    expect(
      penkraElectronAuthorizationCallbackUrl("canary", "code with spaces"),
    ).toBe("com.penkra.app.canary://auth/callback#token=code%20with%20spaces");
    expect(penkraElectronAuthorizationCallbackUrl("production", undefined)).toBeUndefined();
  });
});
