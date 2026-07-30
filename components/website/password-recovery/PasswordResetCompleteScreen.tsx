"use client";

import { ButtonPrimary } from "../../foundations/button-primary/ButtonPrimary";
import { accountAuthHref, type ElectronAuthQuery } from "../../../lib/electron-auth-query";
import { AccountFlowCard } from "../account-flow-card/AccountFlowCard";
import { AuthRouteScreen } from "../auth-route-screen/AuthRouteScreen";

export function PasswordResetCompleteScreen({
  electronQuery,
}: {
  electronQuery?: ElectronAuthQuery;
}) {
  return (
    <AuthRouteScreen>
      <AccountFlowCard
        heading="Password reset"
        status="success"
        subhead="Your password has been updated. Sign in with your new password."
      >
        <ButtonPrimary
          fullWidth
          onClick={() =>
            window.location.assign(accountAuthHref("/sign-in", electronQuery))
          }
          type="button"
        >
          Sign in
        </ButtonPrimary>
      </AccountFlowCard>
    </AuthRouteScreen>
  );
}
