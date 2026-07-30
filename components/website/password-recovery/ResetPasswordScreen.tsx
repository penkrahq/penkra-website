"use client";

import type { FormEvent } from "react";
import { useState } from "react";

import { ButtonPrimary } from "../../foundations/button-primary/ButtonPrimary";
import { InputShared } from "../../foundations/input-shared/InputShared";
import { StatusMessage } from "../../foundations/status-message/StatusMessage";
import { VerificationCodeInput } from "../../foundations/verification-code-input/VerificationCodeInput";
import { accountAuthHref, type ElectronAuthQuery } from "../../../lib/electron-auth-query";
import { authClient } from "../../../lib/auth-client";
import {
  AccountFlowCard,
  AccountFlowLink,
} from "../account-flow-card/AccountFlowCard";
import formStyles from "../account-flow-card/AccountFlowForm.module.css";
import { AuthRouteScreen } from "../auth-route-screen/AuthRouteScreen";

export function ResetPasswordScreen({
  email,
  electronQuery,
}: {
  email: string;
  electronQuery?: ElectronAuthQuery;
}) {
  const [code, setCode] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const password = String(form.get("password") ?? "");
    const confirmation = String(form.get("password-confirmation") ?? "");
    if (code.length !== 6) {
      setError("Enter the complete six-digit code.");
      return;
    }
    if (password !== confirmation) {
      setError("The passwords don’t match.");
      return;
    }
    setError(null);
    setSubmitting(true);
    const result = await authClient.emailOtp.resetPassword({
      email,
      otp: code,
      password,
    });
    if (result.error) {
      setError(resetError(result.error.message));
      setSubmitting(false);
      return;
    }
    window.location.assign(
      accountAuthHref("/password-reset-complete", electronQuery),
    );
  }

  return (
    <AuthRouteScreen>
      <AccountFlowCard
        footer={
          <AccountFlowLink
            href={accountAuthHref("/forgot-password", electronQuery)}
          >
            Request a new code
          </AccountFlowLink>
        }
        heading="Set a new password"
        subhead={
          <>
            Enter the code sent to <strong>{email}</strong>, then choose a new
            password.
          </>
        }
      >
        <form className={formStyles.form} onSubmit={submit}>
          <VerificationCodeInput
            disabled={submitting}
            invalid={Boolean(error)}
            onChange={(value) => {
              setCode(value);
              setError(null);
            }}
            value={code}
          />
          <div className={formStyles.fields}>
            <InputShared
              aria-label="New password"
              autoComplete="new-password"
              disabled={submitting}
              icon="lock"
              invalid={Boolean(error)}
              minLength={8}
              name="password"
              placeholder="New password"
              required
              type="password"
            />
            <InputShared
              aria-label="Confirm new password"
              autoComplete="new-password"
              disabled={submitting}
              icon="lock"
              invalid={Boolean(error)}
              minLength={8}
              name="password-confirmation"
              placeholder="Confirm new password"
              required
              type="password"
            />
          </div>
          {error ? <StatusMessage>{error}</StatusMessage> : null}
          <ButtonPrimary disabled={submitting} fullWidth type="submit">
            {submitting ? "Please wait…" : "Reset password"}
          </ButtonPrimary>
          <p className={formStyles.note}>The code expires in 10 minutes.</p>
        </form>
      </AccountFlowCard>
    </AuthRouteScreen>
  );
}

function resetError(message?: string) {
  if (/expired/i.test(message ?? "")) return "That code has expired. Request a new one.";
  if (/invalid|attempt/i.test(message ?? "")) return "That code isn’t valid. Check it and try again.";
  if (/short|password/i.test(message ?? "")) {
    return "Use a password with at least eight characters.";
  }
  return message || "Your password couldn’t be reset. Please try again.";
}
