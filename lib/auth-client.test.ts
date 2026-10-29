import { expect, it } from "vitest";

import { penkraElectronAuthorizationCallbackUrl } from "./auth-client";


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
