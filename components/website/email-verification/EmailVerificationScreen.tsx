"use client";

import type { FormEvent } from "react";
import { useState } from "react";

import { ButtonPrimary } from "../../foundations/button-primary/ButtonPrimary";
import { VerificationCodeInput } from "../../foundations/verification-code-input/VerificationCodeInput";
import { accountAuthHref, type ElectronAuthQuery } from "../../../lib/electron-auth-query";
import { authClient } from "../../../lib/auth-client";
import {
  AccountFlowCard,
  AccountFlowLink,
} from "../account-flow-card/AccountFlowCard";
import formStyles from "../account-flow-card/AccountFlowForm.module.css";
import { AuthRouteScreen } from "../auth-route-screen/AuthRouteScreen";

export function EmailVerificationScreen({
  email,
  electronQuery,
}: {
  email: string;
  electronQuery?: ElectronAuthQuery;
}) {
  const [code, setCode] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function verify(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (code.length !== 6) {
      setError("Enter the complete six-digit code.");
      return;
    }
    setError(null);
    setSubmitting(true);
    const result = await authClient.emailOtp.verifyEmail({ email, otp: code });
    if (result.error) {
      setError(verificationError(result.error.message));
      setSubmitting(false);
      return;
    }
    window.location.assign(accountAuthHref("/email-verified", electronQuery));
  }

  async function resend() {
    setError(null);
    setMessage(null);
    setSubmitting(true);
    const result = await authClient.emailOtp.sendVerificationOtp({
      email,
      type: "email-verification",
    });
    if (result.error) setError(verificationError(result.error.message));
    else setMessage("A new code was sent.");
    setSubmitting(false);
  }

  return (
    <AuthRouteScreen>
      <AccountFlowCard
        footer={
          <AccountFlowLink href={accountAuthHref("/sign-in", electronQuery)}>
            Back to sign in
          </AccountFlowLink>
        }
        heading="Verify your email"
        subhead={
          <>
            We sent a six-digit code to <strong>{email}</strong>.
          </>
        }
      >
        <form className={formStyles.form} onSubmit={verify}>
          <VerificationCodeInput
            disabled={submitting}
            invalid={Boolean(error)}
            onChange={(value) => {
              setCode(value);
              setError(null);
            }}
            value={code}
          />
          {error ? (
            <p aria-live="polite" className={formStyles.status} role="alert">
              {error}
            </p>
          ) : null}
          {message ? (
            <p aria-live="polite" className={formStyles.note}>
              {message}
            </p>
          ) : null}
          <ButtonPrimary disabled={submitting} fullWidth type="submit">
            {submitting ? "Please wait…" : "Verify email"}
          </ButtonPrimary>
          <div className={formStyles.resend}>
            <span>Didn&apos;t receive it?</span>
            <button
              className={formStyles.textButton}
              disabled={submitting}
              onClick={resend}
              type="button"
            >
              Resend code
            </button>
          </div>
          <p className={formStyles.note}>The code expires in 10 minutes.</p>
        </form>
      </AccountFlowCard>
    </AuthRouteScreen>
  );
}

function verificationError(message?: string) {
  if (/expired/i.test(message ?? "")) return "That code has expired. Request a new one.";
  if (/invalid|attempt/i.test(message ?? "")) return "That code isn’t valid. Check it and try again.";
  return message || "Verification didn’t complete. Please try again.";
}
