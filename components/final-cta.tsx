import { Button } from "./button";
import { Reveal } from "./reveal";

type FinalCtaProps = {
  heading: string;
  body: string;
  primary: { label: string; href: string; external?: boolean };
  secondary?: { label: string; href: string; external?: boolean };
};

export function FinalCta({ heading, body, primary, secondary }: FinalCtaProps) {
  return (
    <section className="section">
      <div className="container">
        <Reveal
          style={{
            background: "var(--color-blue-ink)",
            color: "var(--color-linen-white)",
            borderRadius: "var(--radius-cards)",
            padding: "42px",
            display: "flex",
            flexDirection: "column",
            gap: "21px",
          }}
        >
          <div
            className="final-cta-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "28px",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <h2
                className="serif"
                style={{
                  fontSize: "clamp(28px, 4.5vw, var(--text-heading-lg))",
                  lineHeight: "var(--leading-heading-lg)",
                  fontWeight: 300,
                  color: "var(--color-linen-white)",
                  letterSpacing: 0,
                }}
              >
                {heading}
              </h2>
              <p
                style={{
                  fontSize: "var(--text-body)",
                  lineHeight: "var(--leading-body)",
                  color: "var(--color-linen-white)",
                  maxWidth: "52ch",
                  opacity: 0.9,
                }}
              >
                {body}
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "14px",
              }}
            >
              <Button
                href={primary.href}
                external={primary.external}
                variant="secondary"
                aria-label={primary.label}
                ctaId="final_cta_primary"
                ctaLocation="final_cta"
                style={{
                  background: "var(--color-linen-white)",
                  color: "var(--color-blue-ink)",
                  border: "none",
                }}
              >
                {primary.label}
              </Button>
              {secondary ? (
                <Button
                  href={secondary.href}
                  external={secondary.external}
                  variant="secondary"
                  aria-label={secondary.label}
                  ctaId="final_cta_secondary"
                  ctaLocation="final_cta"
                  style={{
                    background: "transparent",
                    color: "var(--color-linen-white)",
                    border: "1px solid rgba(255,254,252,0.4)",
                  }}
                >
                  {secondary.label}
                </Button>
              ) : null}
            </div>
          </div>
        </Reveal>
      </div>
      <style>{`
        @media (min-width: 768px) {
          .final-cta-grid { grid-template-columns: 1.6fr 1fr !important; }
          .final-cta-grid > div:last-child { justify-content: flex-end; }
        }
      `}</style>
    </section>
  );
}
