import type { Metadata } from "next";
import { PageHero } from "../../components/page-hero";
import { SectionHeading } from "../../components/section-heading";
import { FinalCta } from "../../components/final-cta";
import { Reveal } from "../../components/reveal";
import { Button } from "../../components/button";
import { COUNTRIES, FINAL_CTA, wa } from "../../lib/site-content";
import { bookCallLink } from "../../lib/links";

export const metadata: Metadata = {
  title: "Countries",
  description:
    "Penkra is starting in Ghana and built to expand country by country. See where we operate and tell us where you need help.",
};

export default function CountriesPage() {
  return (
    <>
      <PageHero
        badge="Countries"
        h1="Country-specific operations, one country at a time."
        copy="Requirements differ by country, so Penkra builds pages and service flows per market. Ghana is live. Tell us where else you need support and we will track demand as we expand."
        primary={{ label: "Message us about a country", href: wa("countries"), external: true }}
        secondary={{ label: "Book a call", href: bookCallLink(), external: true }}
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHeading
            badge="Where Penkra operates"
            heading="One live market, more on the way."
          />
          <div
            className="country-grid"
            style={{
              marginTop: "42px",
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "21px",
            }}
          >
            {COUNTRIES.map((c, i) => (
              <Reveal key={c.name} delay={i * 80}>
                <div
                  style={{
                    background:
                      c.status === "available"
                        ? "var(--color-blue-wash)"
                        : "var(--color-linen-blue)",
                    border: "1px solid var(--color-hairline-gray)",
                    borderRadius: "var(--radius-cards)",
                    padding: "42px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "18px",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <h3
                      className="serif"
                      style={{
                        fontSize: "var(--text-heading-lg)",
                        lineHeight: "var(--leading-heading-lg)",
                        fontWeight: 300,
                        color: "var(--color-blue-ink)",
                      }}
                    >
                      {c.name}
                    </h3>
                    <span
                      style={{
                        fontSize: "var(--text-caption)",
                        color:
                          c.status === "available"
                            ? "var(--color-blue-ink)"
                            : "var(--color-graphite)",
                        background:
                          c.status === "available"
                            ? "var(--color-linen-white)"
                            : "transparent",
                        border:
                          c.status === "available"
                            ? "none"
                            : "1px solid var(--color-hairline-gray)",
                        borderRadius: "var(--radius-badges)",
                        padding: "7px 14px",
                      }}
                    >
                      {c.status === "available" ? "Available" : "Coming later"}
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: "var(--text-body)",
                      lineHeight: "var(--leading-body)",
                      color: "var(--color-charcoal)",
                      maxWidth: "55ch",
                    }}
                  >
                    {c.blurb}
                  </p>
                  <div style={{ marginTop: "auto" }}>
                    {c.href ? (
                      <Button href={c.href} variant="secondary">
                        {c.cta}
                      </Button>
                    ) : (
                      <Button href={wa("countries")} external variant="secondary">
                        {c.cta}
                      </Button>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <style>{`
            @media (min-width: 768px) { .country-grid { grid-template-columns: repeat(2, 1fr) !important; } }
          `}</style>
        </div>
      </section>

      <FinalCta
        heading={FINAL_CTA.countries.heading}
        body={FINAL_CTA.countries.body}
        primary={{ label: "Message Penkra", href: wa("countries"), external: true }}
        secondary={{ label: "Book a call", href: bookCallLink(), external: true }}
      />
    </>
  );
}
