import Link from "next/link";
import type { FormEventHandler } from "react";

import { ButtonPrimary } from "../../foundations/button-primary/ButtonPrimary";
import { InputShared } from "../../foundations/input-shared/InputShared";
import { StatusMessage } from "../../foundations/status-message/StatusMessage";
import { ContinueWithGoogleButton } from "../continue-with-google-button/ContinueWithGoogleButton";
import styles from "./AuthCard.module.css";

export type AuthCardMode = "sign-in" | "sign-up";

export type AuthCardProps = {
  alternateHref?: string;
  error?: string | null;
  forgotPasswordHref?: string;
  mode?: AuthCardMode;
  onGoogle?: () => void;
  onSubmit?: FormEventHandler<HTMLFormElement>;
  submitting?: boolean;
};

const copy = {
  "sign-in": {
    alternateHref: "/sign-up",
    alternateLabel: "Create one",
    alternatePrompt: "Don't have an account?",
    heading: "Welcome back",
    submit: "Sign in",
    subhead: "Sign in to your Penkra account.",
  },
  "sign-up": {
    alternateHref: "/sign-in",
    alternateLabel: "Sign in",
    alternatePrompt: "Already have an account?",
    heading: "Create your account",
    submit: "Create account",
    subhead: "Start building with Penkra in minutes.",
  },
} as const;

export function AuthCard({
  alternateHref,
  error,
  forgotPasswordHref = "/forgot-password",
  mode = "sign-in",
  onGoogle,
  onSubmit,
  submitting = false,
}: AuthCardProps) {
  const content = copy[mode];

  return (
    <section
      className={styles.card}
      data-pencil-component="P8VhfD"
      data-pencil-instance={mode === "sign-in" ? "de8aZ" : "XibI9"}
    >
      <header className={styles.headingGroup}>
        <h1 className={styles.heading}>{content.heading}</h1>
        <p className={styles.subhead}>{content.subhead}</p>
      </header>

      <div className={styles.oauth}>
        <ContinueWithGoogleButton disabled={submitting} onClick={onGoogle} />
      </div>

      <div className={styles.divider}>or</div>

      <form className={styles.form} onSubmit={onSubmit}>
        <div className={styles.fields}>
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
          <InputShared
            aria-label="Password"
            autoComplete={mode === "sign-in" ? "current-password" : "new-password"}
            disabled={submitting}
            icon="lock"
            invalid={Boolean(error)}
            minLength={8}
            name="password"
            placeholder="Password"
            required
            type="password"
          />
          {error || mode === "sign-in" ? (
            <div className={styles.utilityRow}>
              {error ? (
                <StatusMessage className={styles.inlineStatus}>{error}</StatusMessage>
              ) : null}
              {mode === "sign-in" ? (
                <Link className={styles.forgotLink} href={forgotPasswordHref}>
                  Forgot password?
                </Link>
              ) : null}
            </div>
          ) : null}
        </div>
        <ButtonPrimary disabled={submitting} fullWidth type="submit">
          {submitting ? "Please wait…" : content.submit}
        </ButtonPrimary>
      </form>

      <div className={styles.footer}>
        <span>{content.alternatePrompt}</span>
        <Link className={styles.footerLink} href={alternateHref ?? content.alternateHref}>
          {content.alternateLabel}
        </Link>
      </div>

      <p className={styles.legal}>
        By continuing, you agree to Penkra&apos;s <Link href="/terms">Terms of Service</Link> and{" "}
        <Link href="/privacy">Privacy Policy</Link>.
      </p>
    </section>
  );
}
