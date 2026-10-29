import { describe, expect, it } from "vitest";

import {
  accountAuthUrl,
  electronTransferQuery,
  parseElectronAuthQuery,
} from "./electron-auth-query";

const DESKTOP_QUERY = {
  client_id: "penkra-desktop",
  code_challenge: "le16dSSifPhVxBj0OhA0dJBjWg7fpXSgznl34NkxJcI=",
  code_challenge_method: "S256",
  state: "VuCYzN4WYtgqpOMr",
  desktop_flavor: "development",
  desktop_instance: "2",
} as const;

describe("Electron auth query", () => {


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
        desktop_instance: "0",
      }),
    ).toBeUndefined();
    expect(
      parseElectronAuthQuery({
        ...DESKTOP_QUERY,
        desktop_flavor: undefined,
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


});

it("accepts and preserves the separate mobile client while rejecting desktop overrides", () => {
  const mobile = { client_id: "penkra-mobile", state: DESKTOP_QUERY.state, code_challenge: DESKTOP_QUERY.code_challenge, code_challenge_method: "S256" };
  expect(parseElectronAuthQuery(mobile)).toEqual(mobile);
  expect(electronTransferQuery(parseElectronAuthQuery(mobile)!)).toEqual(mobile);
  expect(new URL(accountAuthUrl("https://penkra.com", "/sign-in", parseElectronAuthQuery(mobile))).searchParams.get("client_id")).toBe("penkra-mobile");
  expect(parseElectronAuthQuery({ ...mobile, desktop_flavor: "development" })).toBeUndefined();
  expect(parseElectronAuthQuery({ ...mobile, desktop_instance: "2" })).toBeUndefined();
});
