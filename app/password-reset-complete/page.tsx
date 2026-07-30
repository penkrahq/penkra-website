import type { Metadata } from "next";

import { PasswordResetCompleteScreen } from "../../components/website/password-recovery/PasswordResetCompleteScreen";
import { parseElectronAuthQuery } from "../../lib/electron-auth-query";

export const metadata: Metadata = {
  title: "Password reset",
};

export default async function PasswordResetCompletePage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  return (
    <PasswordResetCompleteScreen
      electronQuery={parseElectronAuthQuery(await searchParams)}
    />
  );
}
