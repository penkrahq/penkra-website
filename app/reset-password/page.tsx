import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { ResetPasswordScreen } from "../../components/website/password-recovery/ResetPasswordScreen";
import { parseElectronAuthQuery } from "../../lib/electron-auth-query";

export const metadata: Metadata = {
  title: "Set a new password",
};

export default async function ResetPasswordPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const email = single(params.email);
  if (!email) redirect("/forgot-password");
  return (
    <ResetPasswordScreen
      electronQuery={parseElectronAuthQuery(params)}
      email={email}
    />
  );
}

function single(value: string | string[] | undefined) {
  return typeof value === "string" ? value : undefined;
}
