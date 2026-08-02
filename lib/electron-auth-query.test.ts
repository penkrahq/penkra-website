import { describe, expect, it } from "vitest";

import {
  accountAuthUrl,
  electronAuthFlavor,
  electronTransferQuery,
  parseElectronAuthQuery,
} from "./electron-auth-query";

const DESKTOP_QUERY = {
  client_id: "penkra-desktop",
  code_challenge: "le16dSSifPhVxBj0OhA0dJBjWg7fpXSgznl34NkxJcI=",
  code_challenge_method: "S256",
  state: "VuCYzN4WYtgqpOMr",
  desktop_flavor: "development",
} as const;

describe("Electron auth query", () => {
  it("accepts the padded PKCE challenge emitted by the desktop client", () => {
    const parsed = parseElectronAuthQuery(DESKTOP_QUERY);

    expect(parsed).toEqual(DESKTOP_QUERY);
    expect(electronAuthFlavor(parsed!)).toBe("development");
    expect(electronTransferQuery(parsed!)).toEqual({
      client_id: DESKTOP_QUERY.client_id,
      code_challenge: DESKTOP_QUERY.code_challenge,
      code_challenge_method: DESKTOP_QUERY.code_challenge_method,
      state: DESKTOP_QUERY.state,
    });
  });

  it("rejects malformed padding and unrelated clients", () => {
    expect(
      parseElectronAuthQuery({
        ...DESKTOP_QUERY,
        code_challenge: `${DESKTOP_QUERY.code_challenge}=`,
      }),
    ).toBeUndefined();
    expect(
      parseElectronAuthQuery({
        ...DESKTOP_QUERY,
        client_id: "another-client",
      }),
    ).toBeUndefined();
    expect(
      parseElectronAuthQuery({
        ...DESKTOP_QUERY,
        desktop_flavor: "canary",
      }),
    ).toBeUndefined();
  });

  it("preserves the desktop authorization request in an absolute OAuth return URL", () => {
    const parsed = parseElectronAuthQuery(DESKTOP_QUERY);
    const url = new URL(
      accountAuthUrl("https://penkra.com", "/sign-in", parsed),
    );

    expect(url.origin).toBe("https://penkra.com");
    expect(url.pathname).toBe("/sign-in");
    expect(Object.fromEntries(url.searchParams)).toEqual(DESKTOP_QUERY);
  });
});
