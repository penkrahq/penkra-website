import type { ReactNode } from "react";

import { PenkraMark } from "../penkra-mark/PenkraMark";
import styles from "./AuthRouteScreen.module.css";

export function AuthRouteScreen({ children }: { children: ReactNode }) {
  return (
    <div className={styles.screen}>
      <PenkraMark className={styles.mark} />
      {children}
    </div>
  );
}
