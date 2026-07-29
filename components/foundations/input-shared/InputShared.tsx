import type { InputHTMLAttributes, ReactNode } from "react";

import styles from "./InputShared.module.css";

type InputIcon = "key" | "lock" | "mail" | "search";

export type InputSharedProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
  icon?: InputIcon;
  invalid?: boolean;
};

export function InputShared({
  "aria-invalid": ariaInvalid,
  disabled = false,
  icon,
  invalid = false,
  ...props
}: InputSharedProps) {
  const isInvalid = invalid || ariaInvalid === true || ariaInvalid === "true";

  return (
    <label
      className={styles.control}
      data-disabled={disabled || undefined}
      data-invalid={isInvalid || undefined}
    >
      {icon ? <span className={styles.icon}>{renderIcon(icon)}</span> : null}
      <input
        aria-invalid={isInvalid || undefined}
        className={styles.input}
        disabled={disabled}
        {...props}
      />
    </label>
  );
}

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
