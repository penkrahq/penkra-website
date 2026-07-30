"use client";

import { useEffect, useRef, useState } from "react";

import { ButtonPrimary } from "../../foundations/button-primary/ButtonPrimary";
import { StatusMessage } from "../../foundations/status-message/StatusMessage";
import {
  electronAuthFlavor,
  electronTransferQuery,
  type ElectronAuthQuery,
} from "../../../lib/electron-auth-query";
import {
  authClient,
  redirectPenkraElectronAuthorizationCode,
} from "../../../lib/auth-client";
import { AccountFlowCard } from "../account-flow-card/AccountFlowCard";
import formStyles from "../account-flow-card/AccountFlowForm.module.css";
import { AuthRouteScreen } from "../auth-route-screen/AuthRouteScreen";

export function EmailVerifiedScreen({
  electronQuery,
}: {
  electronQuery?: ElectronAuthQuery;
}) {
  const session = authClient.useSession();
  const transferStarted = useRef(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (
      !electronQuery ||
      !session.data?.user ||
      session.isPending ||
      transferStarted.current
    ) {
      return;
    }
    transferStarted.current = true;
    void authClient.electron
      .transferUser({
        fetchOptions: { query: electronTransferQuery(electronQuery) },
      })
      .then(({ data, error: transferError }) => {
        if (
          !transferError &&
          redirectPenkraElectronAuthorizationCode(
            electronAuthFlavor(electronQuery),
            data?.electron_authorization_code,
          )
        ) {
          return;
        }
        transferStarted.current = false;
        setError(
          transferError?.message ||
            "We couldn’t return you to Penkra. Please try again.",
        );
      })
      .catch(() => {
        transferStarted.current = false;
        setError("We couldn’t return you to Penkra. Please try again.");
      });
  }, [electronQuery, session.data?.user, session.isPending]);

  return (
    <AuthRouteScreen>
      <AccountFlowCard
        heading="Email verified"
        status="success"
        subhead={
          electronQuery
            ? "Your account is ready. We’re returning you to the Penkra app."
            : "Your account is ready. You can continue to Penkra."
        }
      >
        {error ? <StatusMessage>{error}</StatusMessage> : null}
        <ButtonPrimary
          fullWidth
          onClick={() => {
            if (electronQuery) window.location.reload();
            else window.location.assign("/");
          }}
        >
          {electronQuery ? "Open Penkra" : "Continue to Penkra"}
        </ButtonPrimary>
        {electronQuery ? (
          <p className={formStyles.note}>
            Keep this page open until Penkra finishes signing you in.
          </p>
        ) : null}
      </AccountFlowCard>
    </AuthRouteScreen>
  );
}
