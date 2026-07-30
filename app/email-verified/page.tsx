import type { Metadata } from "next";

import { EmailVerifiedScreen } from "../../components/website/email-verification/EmailVerifiedScreen";
import { parseElectronAuthQuery } from "../../lib/electron-auth-query";

export const metadata: Metadata = {
  title: "Email verified",
};

export default async function EmailVerifiedPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  return (
    <EmailVerifiedScreen
      electronQuery={parseElectronAuthQuery(await searchParams)}
    />
  );
}
