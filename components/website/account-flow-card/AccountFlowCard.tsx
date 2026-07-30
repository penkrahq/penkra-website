import Link from "next/link";
import type { ReactNode } from "react";

import styles from "./AccountFlowCard.module.css";

type AccountFlowCardProps = {
  children?: ReactNode;
  footer?: ReactNode;
  heading: string;
  status?: "success";
  subhead: ReactNode;
};

export function AccountFlowCard({
  children,
  footer,
  heading,
  status,
  subhead,
}: AccountFlowCardProps) {
  return (
    <section className={styles.card}>
      {status === "success" ? (
        <span aria-hidden className={styles.successIcon}>
          <svg fill="none" height="28" viewBox="0 0 24 24" width="28">
            <path
              d="m5 12 4 4L19 6"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </span>
      ) : null}
      <header className={styles.headingGroup}>
        <h1 className={styles.heading}>{heading}</h1>
        <div className={styles.subhead}>{subhead}</div>
      </header>
      {children}
      {footer ? <div className={styles.footer}>{footer}</div> : null}
    </section>
  );
}

export function AccountFlowLink({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) {
  return (
    <Link className={styles.link} href={href}>
      {children}
    </Link>
  );
}
