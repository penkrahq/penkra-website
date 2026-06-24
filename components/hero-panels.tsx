import { Button } from "./button";
import { PillBadge } from "./pill-badge";
import { Reveal } from "./reveal";

type HeroPanelProps = {
  eyebrow: string;
  h1: string;
  copy: string;
  primaryCta: { label: string; href: string; external?: boolean };
  secondaryCta?: { label: string; href: string; external?: boolean };
  mockups: React.ReactNode;
};

export function HeroPanels({
  eyebrow,
  h1,
  copy,
  primaryCta,
  secondaryCta,
  mockups,
}: HeroPanelProps) {
  return (
    <div
      className="hero-grid"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "21px",
        alignItems: "stretch",
      }}
    >
      <Reveal
        className="hero-left"
        delay={0}
        style={{
          background: "var(--color-blue-wash)",
          borderRadius: "var(--radius-cards)",
          padding: "35px 28px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "18px",
        }}
      >
        <Reveal delay={80} style={{ display: "flex" }}>
          <PillBadge tone="soft">{eyebrow}</PillBadge>
        </Reveal>
        <Reveal delay={160}>
          <h1
            className="serif hero-h1"
            style={{
              fontSize: "clamp(40px, 7.5vw, var(--text-display))",
              lineHeight: "var(--leading-display)",
              fontWeight: 300,
              color: "var(--color-blue-ink)",
              letterSpacing: 0,
              maxWidth: "18ch",
            }}
          >
            {h1}
          </h1>
        </Reveal>
        <Reveal delay={240}>
          <p
            className="hero-copy"
            style={{
              fontSize: "var(--text-body)",
              lineHeight: "var(--leading-body)",
              color: "var(--color-charcoal)",
              maxWidth: "44ch",
            }}
          >
            {copy}
          </p>
        </Reveal>
        <Reveal
          delay={320}
          className="hero-ctas"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "14px",
            marginTop: "7px",
          }}
        >
          <Button
            href={primaryCta.href}
            external={primaryCta.external}
            aria-label={`${primaryCta.label} — opens a new tab`}
          >
            {primaryCta.label}
          </Button>
          {secondaryCta ? (
            <Button
              href={secondaryCta.href}
              external={secondaryCta.external}
              variant="secondary"
              aria-label={secondaryCta.label}
            >
              {secondaryCta.label}
            </Button>
          ) : null}
        </Reveal>
      </Reveal>

      <Reveal
        className="hero-right"
        delay={200}
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
        {mockups}
      </Reveal>

      <style>{`
        @media (min-width: 1024px) {
          .hero-grid { grid-template-columns: 42fr 58fr !important; gap: 28px; }
          .hero-left { padding: 42px 35px !important; gap: 21px; }
          .hero-right { padding: 35px !important; gap: 18px; }
          .hero-h1 { max-width: 14ch !important; }
        }
      `}</style>
    </div>
  );
}
