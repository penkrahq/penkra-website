import {
  forwardRef,
  type InputHTMLAttributes,
  type ReactNode,
  useState,
} from "react";

import styles from "./InputShared.module.css";

type InputIcon = "key" | "lock" | "mail" | "search";

export type InputSharedProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
  icon?: InputIcon;
  invalid?: boolean;
};

export const InputShared = forwardRef<HTMLInputElement, InputSharedProps>(
  function InputShared(
    {
      "aria-invalid": ariaInvalid,
      disabled = false,
      icon,
      invalid = false,
      type,
      ...props
    },
    ref,
  ) {
    const isInvalid = invalid || ariaInvalid === true || ariaInvalid === "true";
    const isPassword = type === "password";
    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
      <div
        className={styles.control}
        data-disabled={disabled || undefined}
        data-invalid={isInvalid || undefined}
        data-slot="input-shared"
      >
        {icon ? <span className={styles.icon}>{renderIcon(icon)}</span> : null}
        <input
          aria-invalid={isInvalid || undefined}
          className={styles.input}
          disabled={disabled}
          ref={ref}
          type={isPassword && passwordVisible ? "text" : type}
          {...props}
        />
        {isPassword ? (
          <button
            aria-label={passwordVisible ? "Hide password" : "Show password"}
            aria-pressed={passwordVisible}
            className={styles.passwordToggle}
            disabled={disabled}
            onClick={() => setPasswordVisible((visible) => !visible)}
            type="button"
          >
            {renderVisibilityIcon(passwordVisible)}
          </button>
        ) : null}
      </div>
    );
  },
);

function renderIcon(icon: InputIcon) {
  const paths: Record<InputIcon, ReactNode> = {
    key: (
      <>
        <circle cx="7.5" cy="15.5" r="5.5" />
        <path d="m12 12 9-9m-3 3 3 3m-6 0 3 3" />
      </>
    ),
    lock: (
      <>
        <rect width="18" height="11" x="3" y="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </>
    ),
    mail: (
      <>
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden
      fill="none"
      height="16"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="16"
    >
      {paths[icon]}
    </svg>
  );
}

function renderVisibilityIcon(visible: boolean) {
  return (
    <svg
      aria-hidden
      fill="none"
      height="16"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="16"
    >
      {visible ? (
        <>
          <path d="m2 2 20 20" />
          <path d="M6.7 6.7C4.6 8.1 3.1 10 2 12c2 3.7 5.8 7 10 7 1.9 0 3.6-.6 5.1-1.5" />
          <path d="M10.7 5.1A10.9 10.9 0 0 1 12 5c4.2 0 8 3.3 10 7a17.4 17.4 0 0 1-2 3" />
          <path d="M14.1 14.1A3 3 0 0 1 9.9 9.9" />
        </>
      ) : (
        <>
          <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
          <circle cx="12" cy="12" r="3" />
        </>
      )}
    </svg>
  );
}
