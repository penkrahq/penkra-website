"use client";

import type { FormEvent } from "react";
import { useCallback, useEffect, useRef, useState } from "react";

import type { ElectronAuthQuery } from "../../../lib/electron-auth-query";
import {
  accountAuthHref,
  accountAuthUrl,
  electronAuthFlavor,
  electronAuthDevelopmentInstance,
  electronAuthSearch,
  electronTransferQuery,
} from "../../../lib/electron-auth-query";
import {
  authClient,
  redirectPenkraElectronAuthorizationCode,
} from "../../../lib/auth-client";
import { AuthCard, type AuthCardMode } from "../auth-card/AuthCard";
import { PenkraMark } from "../penkra-mark/PenkraMark";
import styles from "./AuthScreen.module.css";

type AuthScreenProps = {
  electronQuery?: ElectronAuthQuery;
  mode: AuthCardMode;
};

export function AuthScreen({ electronQuery, mode }: AuthScreenProps) {
  const session = authClient.useSession();
  const transferStarted = useRef(false);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const transferToDesktop = useCallback(async (): Promise<boolean> => {
    if (!electronQuery || transferStarted.current) return false;
    transferStarted.current = true;
    setSubmitting(true);
    try {
      const { data, error: transferError } = await authClient.electron.transferUser({
        fetchOptions: {
          query: electronTransferQuery(electronQuery),
        },
      });
      if (transferError) throw new Error(transferError.message);
      if (
        !redirectPenkraElectronAuthorizationCode(
          electronAuthFlavor(electronQuery),
          data?.electron_authorization_code,
          electronQuery.state,
          electronAuthDevelopmentInstance(electronQuery),
          electronQuery.client_id,
        )
      ) {
        throw new Error("Authentication didn’t complete. Please try again.");
      }
      return true;
    } catch (transferError) {
      transferStarted.current = false;
      setError(
        messageForError(
          transferError instanceof Error ? transferError.message : undefined,
        ),
      );
      setSubmitting(false);
      return false;
    }
  }, [electronQuery]);

  useEffect(() => {
    if (
      !electronQuery ||
      !session.data?.user ||
      session.isPending ||
      transferStarted.current
    ) {
      return;
    }

    void transferToDesktop();
  }, [electronQuery, session.data?.user, session.isPending, transferToDesktop]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSubmitting(true);

    const form = new FormData(event.currentTarget);
    const email = String(form.get("email") ?? "").trim();
    const password = String(form.get("password") ?? "");
    const fetchOptions = electronQuery ? { query: electronQuery } : undefined;
    const result =
      mode === "sign-in"
        ? await authClient.signIn.email({
            email,
            fetchOptions,
            password,
          })
        : await authClient.signUp.email({
            email,
            fetchOptions,
            name: email,
            password,
          });

    if (result.error) {
      if (/email.*not.*verified/i.test(result.error.message ?? "")) {
        window.location.assign(
          accountAuthHref("/verify-email", electronQuery, { email }),
        );
        return;
      }
      setError(messageForError(result.error.message));
      setSubmitting(false);
      return;
    }

    if (mode === "sign-up") {
      window.location.assign(
        accountAuthHref("/verify-email", electronQuery, { email }),
      );
    } else if (electronQuery) {
      await transferToDesktop();
    } else if (!electronQuery) {
      window.location.assign("/");
    }
  }

  async function continueWithGoogle() {
    setError(null);
    setSubmitting(true);
    const authPath = mode === "sign-in" ? "/sign-in" : "/sign-up";
    const authReturnUrl = accountAuthUrl(
      window.location.origin,
      electronQuery ? authPath : "/",
      electronQuery,
    );
    const authErrorUrl = accountAuthUrl(
      window.location.origin,
      authPath,
      electronQuery,
    );
    const { error: socialError } = await authClient.signIn.social({
      callbackURL: authReturnUrl,
      errorCallbackURL: authErrorUrl,
      fetchOptions: electronQuery ? { query: electronQuery } : undefined,
      newUserCallbackURL: authReturnUrl,
      provider: "google",
    });

    if (socialError) {
      setError(messageForError(socialError.message));
      setSubmitting(false);
    }
  }

  const alternatePath = mode === "sign-in" ? "/sign-up" : "/sign-in";

  return (
    <div className={styles.screen}>
      <PenkraMark className={styles.mark} />
      <AuthCard
        alternateHref={`${alternatePath}${electronAuthSearch(electronQuery)}`}
        error={error}
        forgotPasswordHref={accountAuthHref(
          "/forgot-password",
          electronQuery,
        )}
        mode={mode}
        onGoogle={continueWithGoogle}
        onSubmit={submit}
        submitting={submitting}
      />
    </div>
  );
}

function messageForError(message?: string): string {
  if (!message) return "Authentication didn’t complete. Please try again.";
  if (/invalid.*(email|password)|credentials/i.test(message)) {
    return "Email or password is incorrect.";
  }
  if (/already exists|already registered/i.test(message)) {
    return "An account with this email already exists.";
  }
  return message;
}
