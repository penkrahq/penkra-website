import Link from "next/link";
import { whatsappLink } from "../lib/links";

type ServiceCardProps = {
  title: string;
  body: string;
  message?: string;
  href?: string;
  tag?: string;
  tone?: "default" | "soft" | "accent";
  ctaLabel?: string;
};

const surfaces: Record<NonNullable<ServiceCardProps["tone"]>, string> = {
  default: "var(--color-linen-white)",
  soft: "var(--color-linen-blue)",
  accent: "var(--color-sky-veil)",
};

export function ServiceCard({
  title,
  body,
  message,
  href,
  tag,
  tone = "default",
  ctaLabel,
}: ServiceCardProps) {
  const ctaHref = href ?? (message ? whatsappLink(message) : undefined);
  const label = ctaLabel ?? (href ? "Start this request" : "Ask about this");

  return (
    <div
      style={{
        background: surfaces[tone],
        borderRadius: "var(--radius-cards)",
        padding: "21px",
        border: "1px solid var(--color-hairline-gray)",
        display: "flex",
        flexDirection: "column",
        gap: "14px",
        height: "100%",
      }}
    >
      {tag ? (
        <span
          style={{
            alignSelf: "flex-start",
            fontSize: "var(--text-caption)",
            color: "var(--color-blue-ink)",
            background: "var(--color-mist-blue)",
            borderRadius: "var(--radius-badges)",
            padding: "4px 11px",
            lineHeight: 1,
          }}
        >
          {tag}
        </span>
      ) : null}
      <h3
        className="serif"
        style={{
          fontSize: "var(--text-heading-sm)",
          lineHeight: "var(--leading-heading-sm)",
          fontWeight: 300,
          color: "var(--color-blue-ink)",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: "var(--text-body-sm)",
          lineHeight: "var(--leading-body-sm)",
          color: "var(--color-charcoal)",
        }}
      >
        {body}
      </p>
      {ctaHref ? (
        <Link
          href={ctaHref}
          target={ctaHref.startsWith("http") ? "_blank" : undefined}
            rel={ctaHref.startsWith("http") ? "noopener noreferrer" : undefined}
            style={{
              marginTop: "auto",
              fontSize: "var(--text-body-sm)",
              color: "var(--color-blue-ink)",
              display: "inline-flex",
              alignItems: "center",
              gap: "7px",
            }}
          >
            {label} <span aria-hidden>→</span>
        </Link>
      ) : null}
    </div>
  );
}
