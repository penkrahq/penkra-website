import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  className?: string;
  style?: React.CSSProperties;
  ctaId?: string;
  ctaLocation?: string;
  "aria-label"?: string;
};

const baseStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "var(--space-9)",
  padding: "14px 21px",
  borderRadius: "var(--radius-buttons)",
  fontSize: "var(--text-body-sm)",
  fontWeight: 400,
  lineHeight: 1,
  letterSpacing: 0,
  transition: "background-color 300ms cubic-bezier(0,0,0,1), color 300ms cubic-bezier(0,0,0,1), border-color 300ms cubic-bezier(0,0,0,1)",
  whiteSpace: "nowrap",
};

const primaryStyle: React.CSSProperties = {
  ...baseStyle,
  background: "var(--color-blue-ink)",
  color: "var(--color-linen-white)",
};

const secondaryStyle: React.CSSProperties = {
  ...baseStyle,
  background: "transparent",
  color: "var(--color-blue-ink)",
  border: "1px solid var(--color-hairline-gray)",
};

export function Button({
  href,
  children,
  variant = "primary",
  external,
  className,
  style,
  ctaId,
  ctaLocation,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const resolved =
    variant === "primary" ? primaryStyle : secondaryStyle;

  const isExternal = external || href.startsWith("http") || href.startsWith("mailto:");

  if (isExternal) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={className}
        style={{ ...resolved, ...style }}
        aria-label={ariaLabel}
        data-cta-id={ctaId}
        data-cta-location={ctaLocation}
      >
        {children}
        <Arrow />
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={className}
      style={{ ...resolved, ...style }}
      aria-label={ariaLabel}
      data-cta-id={ctaId}
      data-cta-location={ctaLocation}
    >
      {children}
      <Arrow />
    </Link>
  );
}

function Arrow() {
  return (
    <span aria-hidden style={{ display: "inline-flex", fontSize: "1em", lineHeight: 1 }}>
      →
    </span>
  );
}
