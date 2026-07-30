import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { EmailVerificationScreen } from "../../components/website/email-verification/EmailVerificationScreen";
import { parseElectronAuthQuery } from "../../lib/electron-auth-query";

export const metadata: Metadata = {
  title: "Verify your email",
};

export default async function VerifyEmailPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const email = single(params.email);
  if (!email) redirect("/sign-up");
  return (
    <EmailVerificationScreen
      electronQuery={parseElectronAuthQuery(params)}
      email={email}
    />
  );
}

function single(value: string | string[] | undefined) {
  return typeof value === "string" ? value : undefined;
}
