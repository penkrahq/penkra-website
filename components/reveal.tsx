"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children?: React.ReactNode;
  className?: string;
  delay?: number;
  as?: React.ElementType;
  style?: React.CSSProperties;
};

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
  style,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setVisible(true);
      return;
    }

    const fallback = window.setTimeout(() => {
      setVisible(true);
    }, 700);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.clearTimeout(fallback);
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.01 }
    );

    observer.observe(el);
    return () => {
      window.clearTimeout(fallback);
      observer.disconnect();
    };
  }, []);

  const Component = Tag as any;

  return (
    <Component
      ref={ref as any}
      className={`reveal ${visible ? "is-visible" : ""} ${className ?? ""}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </Component>
  );
}
