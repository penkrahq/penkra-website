import { Button } from "./button";
import { PillBadge } from "./pill-badge";
import { Reveal } from "./reveal";

type PageHeroProps = {
  badge: string;
  h1: string;
  copy: string;
  primary: { label: string; href: string; external?: boolean };
  secondary?: { label: string; href: string; external?: boolean };
  mockup?: React.ReactNode;
  variant?: "default" | "compact" | "split-wide" | "stacked";
};

export function PageHero({
  badge,
  h1,
  copy,
  primary,
  secondary,
  mockup,
  variant = "default",
}: PageHeroProps) {
  const isCompact = variant === "compact";
  const isStacked = variant === "stacked";

  return (
    <section
      className={`section ${isCompact ? "tight-mobile" : ""}`}
      style={{ paddingTop: "21px", paddingBottom: isCompact ? "21px" : "49px" }}
    >
      <div className="container">
        <div
          className={`page-hero-grid ${isStacked ? "page-hero-stacked" : ""}`}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "21px",
            alignItems: "stretch",
          }}
        >
          <Reveal
            style={{
              background: "var(--color-blue-wash)",
              borderRadius: "var(--radius-cards)",
              padding: isCompact ? "28px 24px" : "35px 28px",
              display: "flex",
              flexDirection: "column",
              gap: isCompact ? "14px" : "21px",
              justifyContent: "center",
            }}
          >
            <PillBadge tone="soft">{badge}</PillBadge>
            <h1
              className="serif"
              style={{
                fontSize: isCompact
                  ? "clamp(30px, 5vw, var(--text-heading))"
                  : "clamp(34px, 6vw, var(--text-heading-lg))",
                lineHeight: "var(--leading-heading-lg)",
                fontWeight: 300,
                color: "var(--color-blue-ink)",
                letterSpacing: 0,
                maxWidth: "22ch",
              }}
            >
              {h1}
            </h1>
            <p
              style={{
                fontSize: "var(--text-body)",
                lineHeight: "var(--leading-body)",
                color: "var(--color-charcoal)",
                maxWidth: "54ch",
              }}
            >
              {copy}
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "14px",
                marginTop: "4px",
              }}
            >
              <Button href={primary.href} external={primary.external} aria-label={primary.label}>
                {primary.label}
              </Button>
              {secondary ? (
                <Button
                  href={secondary.href}
                  external={secondary.external}
                  variant="secondary"
                  aria-label={secondary.label}
                >
                  {secondary.label}
                </Button>
              ) : null}
            </div>
          </Reveal>

          {mockup ? (
            <Reveal
              delay={120}
              style={{
                background: "var(--color-mist-blue)",
                borderRadius: "var(--radius-cards)",
                padding: "28px",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                justifyContent: "center",
              }}
            >
              {mockup}
            </Reveal>
          ) : null}
        </div>
      </div>
      <style>{`
        @media (min-width: 1024px) {
          .page-hero-grid { grid-template-columns: ${
            mockup ? (variant === "split-wide" ? "48fr 52fr" : "1fr 1fr") : "1fr"
          } !important; gap: 28px; }
          .page-hero-stacked { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
