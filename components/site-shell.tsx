"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

import { CountryProvider } from "./country-provider";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

const AUTH_ROUTES = new Set([
  "/email-verified",
  "/forgot-password",
  "/password-reset-complete",
  "/reset-password",
  "/sign-in",
  "/sign-up",
  "/verify-email",
]);

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isAuthRoute = AUTH_ROUTES.has(pathname);

  if (isAuthRoute) {
    return <main className="auth-route-main">{children}</main>;
  }

  return (
    <CountryProvider>
      <SiteHeader />
      <main style={{ flex: 1, paddingTop: "70px" }}>{children}</main>
      <SiteFooter />
    </CountryProvider>
  );
}
