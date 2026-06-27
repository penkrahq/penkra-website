import type { Metadata } from "next";
import { FinalCta } from "../../components/final-cta";
import { JsonLd } from "../../components/json-ld";
import { PageHero } from "../../components/page-hero";
import { PillBadge } from "../../components/pill-badge";
import { Reveal } from "../../components/reveal";
import { SectionHeading } from "../../components/section-heading";
import { bookCallLink } from "../../lib/links";
import { absoluteUrl, pageMetadata } from "../../lib/metadata";
import { FINAL_CTA, SERVICE_SNAPSHOT, wa } from "../../lib/site-content";

export const metadata: Metadata = pageMetadata({
  title: "What Penkra Can Handle",
  description:
    "A concise list of operational work Penkra can help with: paperwork, registration support, records, follow-ups, logistics, admin, and custom requests.",
  path: "/what-we-handle",
});

export default function WhatWeHandlePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "What Penkra can handle",
          description:
            "A concise list of operational work Penkra can help with: paperwork, registration support, records, follow-ups, logistics, admin, and custom requests.",
          url: absoluteUrl("/what-we-handle"),
          author: {
            "@id": absoluteUrl("/#organization"),
          },
          publisher: {
            "@id": absoluteUrl("/#organization"),
          },
          mainEntityOfPage: absoluteUrl("/what-we-handle"),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: absoluteUrl("/"),
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "What we handle",
              item: absoluteUrl("/what-we-handle"),
            },
          ],
        }}
      />

      <PageHero
        badge="What we handle"
        h1="A short list of work you can hand off."
        copy="If the request is operational, paperwork-heavy, follow-up-heavy, or record-heavy, Penkra may be able to handle it directly, coordinate it, or route the specialist part."
        primary={{ label: "Message Penkra", href: wa("services"), external: true }}
        secondary={{ label: "View all services", href: "/services" }}
        variant="compact"
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHeading
            badge="Service list"
            heading="Use this as a starting point, not a limit."
            body="Real requests often combine several kinds of work. Send the outcome you want and Penkra will clarify what can be handled."
          />
          <div
            className="handle-grid"
            style={{
              marginTop: "42px",
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "14px",
            }}
          >
            {SERVICE_SNAPSHOT.map((service, index) => (
              <Reveal key={service.title} delay={index * 35}>
                <article
                  style={{
                    background: index % 2 === 0 ? "var(--color-blue-wash)" : "var(--color-linen-white)",
                    border: "1px solid var(--color-hairline-gray)",
                    borderRadius: "var(--radius-cards)",
                    padding: "21px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "11px",
                    minHeight: "100%",
                  }}
                >
                  <PillBadge tone="soft">{String(index + 1).padStart(2, "0")}</PillBadge>
                  <h2
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "var(--text-body)",
                      lineHeight: 1.3,
                      fontWeight: 500,
                      color: "var(--color-blue-ink)",
                      letterSpacing: 0,
                    }}
                  >
                    {service.title}
                  </h2>
                  <p
                    style={{
                      fontSize: "var(--text-body-sm)",
                      lineHeight: "var(--leading-body-sm)",
                      color: "var(--color-charcoal)",
                    }}
                  >
                    {service.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
          <style>{`
            @media (min-width: 700px) {
              .handle-grid { grid-template-columns: repeat(2, 1fr) !important; }
            }
            @media (min-width: 1080px) {
              .handle-grid { grid-template-columns: repeat(4, 1fr) !important; }
            }
          `}</style>
        </div>
      </section>

      <FinalCta
        heading={FINAL_CTA.services.heading}
        body={FINAL_CTA.services.body}
        primary={{ label: "Message Penkra", href: wa("services"), external: true }}
        secondary={{ label: "Book a call", href: bookCallLink(), external: true }}
      />
    </>
  );
}
