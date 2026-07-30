import type { HTMLAttributes } from "react";

import styles from "./StatusMessage.module.css";

export type StatusMessageProps = HTMLAttributes<HTMLDivElement>;

export function StatusMessage({
  children,
  className,
  ...props
}: StatusMessageProps) {
  return (
    <div
      className={[styles.status, className].filter(Boolean).join(" ")}
      data-pencil-component="QxdKk"
      role="alert"
      {...props}
    >
      <svg
        aria-hidden
        className={styles.icon}
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4" />
        <path d="M12 16h.01" />
      </svg>
      <span className={styles.text}>{children}</span>
    </div>
  );
}
