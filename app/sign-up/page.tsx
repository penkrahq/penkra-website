import type { Metadata } from "next";

import { AuthScreen } from "../../components/website/auth-screen/AuthScreen";
import { parseElectronAuthQuery } from "../../lib/electron-auth-query";

export const metadata: Metadata = {
  title: "Create your account",
};

export default async function SignUpPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  return (
    <AuthScreen
      electronQuery={parseElectronAuthQuery(await searchParams)}
      mode="sign-up"
    />
  );
}
