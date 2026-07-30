import type { Metadata } from "next";

import { ForgotPasswordScreen } from "../../components/website/password-recovery/ForgotPasswordScreen";
import { parseElectronAuthQuery } from "../../lib/electron-auth-query";

export const metadata: Metadata = {
  title: "Reset your password",
};

export default async function ForgotPasswordPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  return (
    <ForgotPasswordScreen
      electronQuery={parseElectronAuthQuery(await searchParams)}
    />
  );
}
