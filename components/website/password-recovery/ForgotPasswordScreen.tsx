"use client";

import type { FormEvent } from "react";
import { useState } from "react";

import { ButtonPrimary } from "../../foundations/button-primary/ButtonPrimary";
import { InputShared } from "../../foundations/input-shared/InputShared";
import { StatusMessage } from "../../foundations/status-message/StatusMessage";
import { accountAuthHref, type ElectronAuthQuery } from "../../../lib/electron-auth-query";
import { authClient } from "../../../lib/auth-client";
import {
  AccountFlowCard,
  AccountFlowLink,
} from "../account-flow-card/AccountFlowCard";
import formStyles from "../account-flow-card/AccountFlowForm.module.css";
import { AuthRouteScreen } from "../auth-route-screen/AuthRouteScreen";

export function ForgotPasswordScreen({
  electronQuery,
}: {
  electronQuery?: ElectronAuthQuery;
}) {
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSubmitting(true);
    const form = new FormData(event.currentTarget);
    const email = String(form.get("email") ?? "").trim();
    const result = await authClient.emailOtp.requestPasswordReset({ email });
    if (result.error) {
      setError(
        result.error.message ||
          "We couldn’t send a reset code. Please try again.",
      );
      setSubmitting(false);
      return;
    }
    window.location.assign(
      accountAuthHref("/reset-password", electronQuery, { email }),
    );
  }

  return (
    <AuthRouteScreen>
      <AccountFlowCard
        footer={
          <AccountFlowLink href={accountAuthHref("/sign-in", electronQuery)}>
            Back to sign in
          </AccountFlowLink>
        }
        heading="Reset your password"
        subhead="Enter your email and we’ll send you a six-digit reset code."
      >
        <form className={formStyles.form} onSubmit={submit}>
          <InputShared
            aria-label="Email address"
            autoComplete="email"
            disabled={submitting}
            icon="mail"
            invalid={Boolean(error)}
            name="email"
            placeholder="you@company.com"
            required
            type="email"
          />
          {error ? <StatusMessage>{error}</StatusMessage> : null}
          <ButtonPrimary disabled={submitting} fullWidth type="submit">
            {submitting ? "Please wait…" : "Send reset code"}
          </ButtonPrimary>
        </form>
      </AccountFlowCard>
    </AuthRouteScreen>
  );
}
