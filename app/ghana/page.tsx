import type { Metadata } from "next";
import { PageHero } from "../../components/page-hero";
import { SectionHeading } from "../../components/section-heading";
import { ServiceCard } from "../../components/service-card";
import { FeatureGrid } from "../../components/feature-grid";
import { FinalCta } from "../../components/final-cta";
import { Reveal } from "../../components/reveal";
import { Button } from "../../components/button";
import { CountryServiceSelectorCard, GhanaOperatingModelCard } from "../../components/operation-mockup";
import {
  GHANA_REQUEST_CARDS,
  GHANA_WHO_THIS_HELPS,
  FINAL_CTA,
  wa,
} from "../../lib/site-content";
import { bookCallLink } from "../../lib/links";
import { absoluteUrl, pageMetadata } from "../../lib/metadata";
import { JsonLd } from "../../components/json-ld";

export const metadata: Metadata = pageMetadata({
  title: "Ghana Services",
  description:
    "Penkra helps local founders, diaspora founders, foreign-owned businesses, and individuals handle Ghana-specific paperwork, registration, records, admin follow-ups, and logistics.",
  path: "/ghana",
  image: "/og/services.png",
});

export default function GhanaPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": absoluteUrl("/ghana#service"),
          name: "Ghana paperwork and operations support",
          description:
            "Ghana-specific paperwork, business registration, records, admin follow-ups, and logistics support.",
          serviceType: "Ghana operational support",
          provider: {
            "@id": absoluteUrl("/#organization"),
          },
          areaServed: {
            "@type": "Country",
            name: "Ghana",
          },
          url: absoluteUrl("/ghana"),
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Ghana service request types",
            itemListElement: GHANA_REQUEST_CARDS.map((name, index) => ({
              "@type": "Offer",
              position: index + 1,
              itemOffered: {
                "@type": "Service",
                name,
                areaServed: {
                  "@type": "Country",
                  name: "Ghana",
                },
              },
            })),
          },
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
              name: "Ghana",
              item: absoluteUrl("/ghana"),
            },
          ],
        }}
      />
      <PageHero
        badge="Ghana"
        h1="Paperwork and operations support in Ghana."
        copy="Penkra helps local founders, diaspora founders, foreign-owned businesses, and individuals handle Ghana-specific paperwork, registration, records, admin follow-ups, and logistics."
        primary={{ label: "Message us about Ghana", href: wa("ghana"), external: true }}
        secondary={{ label: "View business registration", href: "/ghana/business-registration" }}
        variant="split-wide"
        mockup={
          <>
            <GhanaOperatingModelCard />
            <CountryServiceSelectorCard />
          </>
        }
      />

      {/* Available first */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHeading
            badge="Available now"
            heading="Business registration is the first Ghana service path."
          />
          <Reveal delay={80}>
            <div
              style={{
                marginTop: "42px",
                background: "var(--color-blue-wash)",
                border: "1px solid var(--color-hairline-gray)",
                borderRadius: "var(--radius-cards)",
                padding: "42px",
                display: "flex",
                flexDirection: "column",
                gap: "21px",
              }}
            >
              <h3
                className="serif"
                style={{
                  fontSize: "var(--text-heading-sm)",
                  lineHeight: "var(--leading-heading-sm)",
                  fontWeight: 300,
                  color: "var(--color-blue-ink)",
                }}
              >
                Business registration
              </h3>
              <p
                style={{
                  fontSize: "var(--text-body)",
                  lineHeight: "var(--leading-body)",
                  color: "var(--color-charcoal)",
                  maxWidth: "60ch",
                }}
              >
                Supported for sole proprietorships, partnerships, limited
                liability companies, companies limited by guarantee, and
                external companies or foreign branches.
              </p>
              <div>
                <Button href="/ghana/business-registration">Explore business registration</Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Ghana requests we can discuss */}
      <section className="section" style={{ background: "var(--color-linen-blue)" }}>
        <div className="container">
          <SectionHeading
            badge="On request"
            heading="Ghana requests we can discuss."
            body="Not every request will be listed. Tell us what you need and Penkra can clarify whether it is something we can support."
          />
          <div
            className="ghana-requests-grid"
            style={{
              marginTop: "42px",
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "21px",
            }}
          >
            {GHANA_REQUEST_CARDS.map((title, i) => (
              <Reveal key={title} delay={i * 50}>
                <ServiceCard
                  title={title}
                  body="Send the request on WhatsApp. We will clarify the work, steps, and likely costs."
                  message={`I need help with ${title.toLowerCase()} in Ghana.`}
                  tone={i % 2 === 0 ? "soft" : "default"}
                />
              </Reveal>
            ))}
          </div>
          <style>{`
            @media (min-width: 640px) { .ghana-requests-grid { grid-template-columns: repeat(2, 1fr) !important; } }
            @media (min-width: 1024px) { .ghana-requests-grid { grid-template-columns: repeat(3, 1fr) !important; } }
          `}</style>
        </div>
      </section>

      {/* Who this helps */}
      <section className="section">
        <div className="container">
          <SectionHeading
            badge="Who this helps"
            heading="Built for the people doing the work in Ghana."
          />
          <div style={{ marginTop: "42px" }}>
            <FeatureGrid items={GHANA_WHO_THIS_HELPS} columns={2} />
          </div>
        </div>
      </section>

      <FinalCta
        heading={FINAL_CTA.ghana.heading}
        body={FINAL_CTA.ghana.body}
        primary={{ label: "Start on WhatsApp", href: wa("ghana"), external: true }}
        secondary={{ label: "Book a call", href: bookCallLink(), external: true }}
      />
    </>
  );
}
