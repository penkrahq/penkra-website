import { electronProxyClient } from "@better-auth/electron/proxy";
import { emailOTPClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";

export const PENKRA_DESKTOP_AUTH_CLIENT_ID = "penkra-desktop";
export const PENKRA_MOBILE_AUTH_CLIENT_ID = "penkra-mobile";
export const PENKRA_ACCOUNT_AUTH_CALLBACK_PATH = "/auth/callback";
const configuredAccountAuthUrl =
  process.env.NEXT_PUBLIC_PENKRA_AUTH_URL?.trim().replace(/\/$/, "");
export const PENKRA_ACCOUNT_AUTH_URL =
  configuredAccountAuthUrl ||
  (process.env.NODE_ENV === "production"
    ? "https://api.penkra.com/auth"
    : "http://localhost:3012/auth");
export const PENKRA_ACCOUNT_AUTH_SCHEMES = {
  production: "com.penkra.app",
  development: "com.penkra.app.dev",
} as const;

export type PenkraDesktopFlavor = keyof typeof PENKRA_ACCOUNT_AUTH_SCHEMES;

export const authClient = createAuthClient({
  baseURL: PENKRA_ACCOUNT_AUTH_URL,
  fetchOptions: {
    credentials: "include",
  },
  plugins: [
    emailOTPClient(),
    electronProxyClient({
      callbackPath: PENKRA_ACCOUNT_AUTH_CALLBACK_PATH,
      clientID: PENKRA_DESKTOP_AUTH_CLIENT_ID,
      protocol: {
        scheme: PENKRA_ACCOUNT_AUTH_SCHEMES.production,
      },
    }),
  ],
});

export function redirectPenkraElectronAuthorizationCode(
  flavor: PenkraDesktopFlavor,
  authorizationCode: unknown,
  state: unknown,
  developmentInstance = 1,
  clientId: string = PENKRA_DESKTOP_AUTH_CLIENT_ID,
): boolean {
  const callbackUrl = penkraElectronAuthorizationCallbackUrl(
    flavor,
    authorizationCode,
    state,
    developmentInstance,
    clientId,
  );
  if (!callbackUrl) return false;
  window.location.replace(callbackUrl);
  return true;
}

export function penkraElectronAuthorizationCallbackUrl(
  flavor: PenkraDesktopFlavor,
  authorizationCode: unknown,
  state: unknown,
  developmentInstance = 1,
  clientId: string = PENKRA_DESKTOP_AUTH_CLIENT_ID,
): string | undefined {
  if (
    typeof authorizationCode !== "string" ||
    !authorizationCode ||
    typeof state !== "string" ||
    !state
  ) {
    return;
  }
  if (
    ![PENKRA_DESKTOP_AUTH_CLIENT_ID, PENKRA_MOBILE_AUTH_CLIENT_ID].includes(clientId) ||
    (clientId === PENKRA_MOBILE_AUTH_CLIENT_ID && (flavor !== "production" || developmentInstance !== 1)) ||
    !Number.isSafeInteger(developmentInstance) ||
    developmentInstance < 1 ||
    (flavor === "production" && developmentInstance !== 1)
  ) {
    return;
  }
  const baseScheme = PENKRA_ACCOUNT_AUTH_SCHEMES[flavor];
  const scheme = clientId === PENKRA_MOBILE_AUTH_CLIENT_ID ? "com.penkra.mobile" :
    flavor === "development" && developmentInstance > 1
      ? `${baseScheme}.${developmentInstance}`
      : baseScheme;
  const token = encodeBase64UrlJson({
    identifier: authorizationCode,
    state,
  });
  return `${scheme}:/${PENKRA_ACCOUNT_AUTH_CALLBACK_PATH}#token=${encodeURIComponent(token)}`;
}

function encodeBase64UrlJson(value: Record<string, string>): string {
  const bytes = new TextEncoder().encode(JSON.stringify(value));
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}
