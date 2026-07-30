import { electronProxyClient } from "@better-auth/electron/proxy";
import { emailOTPClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";

export const PENKRA_DESKTOP_AUTH_CLIENT_ID = "penkra-desktop";
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
  canary: "com.penkra.app.canary",
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
): boolean {
  const callbackUrl = penkraElectronAuthorizationCallbackUrl(
    flavor,
    authorizationCode,
  );
  if (!callbackUrl) return false;
  window.location.replace(callbackUrl);
  return true;
}

export function penkraElectronAuthorizationCallbackUrl(
  flavor: PenkraDesktopFlavor,
  authorizationCode: unknown,
): string | undefined {
  if (typeof authorizationCode !== "string" || !authorizationCode) return;
  const scheme = PENKRA_ACCOUNT_AUTH_SCHEMES[flavor];
  return `${scheme}:/${PENKRA_ACCOUNT_AUTH_CALLBACK_PATH}#token=${encodeURIComponent(authorizationCode)}`;
}
