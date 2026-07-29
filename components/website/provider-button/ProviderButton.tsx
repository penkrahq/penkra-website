import type { ButtonHTMLAttributes, ReactNode } from "react";

import styles from "./ProviderButton.module.css";

export type ProviderButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: ReactNode;
};

export function ProviderButton({
  children,
  className,
  icon,
  type = "button",
  ...props
}: ProviderButtonProps) {
  const classes = [styles.button, className].filter(Boolean).join(" ");

  return (
    <button className={classes} type={type} {...props}>
      <span className={styles.icon}>{icon}</span>
      {children}
    </button>
  );
}
