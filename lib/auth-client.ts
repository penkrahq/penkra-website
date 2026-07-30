import { electronProxyClient } from "@better-auth/electron/proxy";
import { emailOTPClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";

export const PENKRA_DESKTOP_AUTH_CLIENT_ID = "penkra-desktop";
export const PENKRA_ACCOUNT_AUTH_CALLBACK_PATH = "/auth/callback";
export const PENKRA_ACCOUNT_AUTH_SCHEMES = {
  production: "com.penkra.app",
  development: "com.penkra.app.dev",
  canary: "com.penkra.app.canary",
} as const;

export type PenkraDesktopFlavor = keyof typeof PENKRA_ACCOUNT_AUTH_SCHEMES;

const REDIRECT_COOKIE_NAME = `better-auth.${PENKRA_DESKTOP_AUTH_CLIENT_ID}`;

export const authClient = createAuthClient({
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

export function ensurePenkraElectronRedirect(
  flavor: PenkraDesktopFlavor,
  options: { interval?: number; timeout?: number } = {},
): ReturnType<typeof setInterval> {
  const timeout = options.timeout ?? 10_000;
  const interval = options.interval ?? 100;
  const startedAt = Date.now();

  const timer = setInterval(() => {
    const authorizationCode = authClient.electron.getAuthorizationCode();
    if (!authorizationCode && Date.now() - startedAt <= timeout) return;
    clearInterval(timer);
    if (!authorizationCode) return;

    document.cookie = `${REDIRECT_COOKIE_NAME}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
    const scheme = PENKRA_ACCOUNT_AUTH_SCHEMES[flavor];
    window.location.replace(
      `${scheme}:/${PENKRA_ACCOUNT_AUTH_CALLBACK_PATH}#token=${authorizationCode}`,
    );
  }, interval);

  return timer;
}
