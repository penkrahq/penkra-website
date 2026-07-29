import type { ButtonHTMLAttributes } from "react";

import styles from "./ButtonPrimary.module.css";

export type ButtonPrimaryProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  fullWidth?: boolean;
};

export function ButtonPrimary({
  className,
  fullWidth = false,
  type = "button",
  ...props
}: ButtonPrimaryProps) {
  const classes = [styles.button, fullWidth ? styles.fullWidth : "", className ?? ""]
    .filter(Boolean)
    .join(" ");

  return <button className={classes} type={type} {...props} />;
}
