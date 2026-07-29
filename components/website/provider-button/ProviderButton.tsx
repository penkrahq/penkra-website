import type { ButtonHTMLAttributes, ReactNode } from "react";

import styles from "./ProviderButton.module.css";

export type ProviderButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: ReactNode;
};

export function ProviderButton({
  children,
  icon,
  type = "button",
  ...props
}: ProviderButtonProps) {
  return (
    <button className={styles.button} type={type} {...props}>
      <span className={styles.icon}>{icon}</span>
      {children}
    </button>
  );
}
