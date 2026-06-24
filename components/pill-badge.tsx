type PillBadgeProps = {
  children: React.ReactNode;
  className?: string;
  tone?: "default" | "soft";
};

export function PillBadge({
  children,
  className,
  tone = "default",
}: PillBadgeProps) {
  return (
    <span
      className={className}
      style={{
        display: "inline-block",
        background:
          tone === "soft"
            ? "var(--color-linen-blue)"
            : "var(--color-mist-blue)",
        color: "var(--color-blue-ink)",
        borderRadius: "var(--radius-badges)",
        padding: "7px 14px",
        fontSize: "var(--text-caption)",
        lineHeight: 1,
        fontWeight: 400,
        letterSpacing: 0,
      }}
    >
      {children}
    </span>
  );
}
