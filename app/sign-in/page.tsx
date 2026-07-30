import type { Metadata } from "next";

import { AuthScreen } from "../../components/website/auth-screen/AuthScreen";
import { parseElectronAuthQuery } from "../../lib/electron-auth-query";

export const metadata: Metadata = {
  title: "Sign in",
};

export default async function SignInPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  return (
    <AuthScreen
      electronQuery={parseElectronAuthQuery(await searchParams)}
      mode="sign-in"
    />
  );
}
