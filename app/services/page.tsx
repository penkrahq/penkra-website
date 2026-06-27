import type { Metadata } from "next";
import { PageHero } from "../../components/page-hero";
import { ServiceCard } from "../../components/service-card";
import { FinalCta } from "../../components/final-cta";
import { Reveal } from "../../components/reveal";
import { PillBadge } from "../../components/pill-badge";
import { ServicesCountrySummary } from "../../components/services-country-summary";
import { SERVICES_CATEGORIES, SERVICE_BUNDLES, FINAL_CTA, wa } from "../../lib/site-content";
import { bookCallLink } from "../../lib/links";
import { absoluteUrl, pageMetadata } from "../../lib/metadata";
import { JsonLd } from "../../components/json-ld";

export const metadata: Metadata = pageMetadata({
  title: "Services",
  description:
    "What can Penkra handle for you? Choose a service or message us if the work does not fit a neat category.",
  path: "/services",
  image: "/og/services.png",
});

const ANCHOR_MAP: Record<string, string> = {
  "Business setup": "business",
  "Paperwork and forms": "paperwork",
  "Admin follow-ups": "admin",
  "Record keeping": "records",
  "Logistics coordination": "logistics",
  "Compliance awareness": "compliance",
  "Customer / admin messaging": "messaging",
  "Custom operations": "custom",
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": absoluteUrl("/services#service"),
          name: "Penkra operational support services",
          description:
            "Operational support for paperwork, registration, admin follow-ups, records, logistics, compliance awareness, and custom delegated work.",
          serviceType: "Operational support",
          provider: {
            "@id": absoluteUrl("/#organization"),
          },
          areaServed: {
            "@type": "Country",
            name: "Ghana",
          },
          url: absoluteUrl("/services"),
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Penkra service categories",
            itemListElement: SERVICES_CATEGORIES.map((service, index) => {
              const anchor = ANCHOR_MAP[service.title];
              return {
                "@type": "Offer",
                position: index + 1,
                itemOffered: {
                  "@type": "Service",
                  name: service.title,
                  description: service.body,
                  url: absoluteUrl("href" in service && service.href ? service.href : `/services#${anchor}`),
                },
              };
            }),
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
              name: "Services",
              item: absoluteUrl("/services"),
            },
          ],
        }}
      />
      <PageHero
        badge="Services"
        h1="What do you need handled?"
        copy="Choose a service or message us if the work does not fit a neat category. Most real requests combine a few of these."
        primary={{ label: "Message Penkra", href: wa("services"), external: true }}
        secondary={{ label: "Book a call", href: bookCallLink(), external: true }}
        variant="compact"
      />

      {/* Country-aware summary */}
      <ServicesCountrySummary />

      {/* Service cards — direct, first */}
      <section className="section tight-mobile" style={{ paddingTop: 0 }}>
        <div className="container">
          <div
            className="services-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "21px",
            }}
          >
            {SERVICES_CATEGORIES.map((s, i) => {
              const anchor = ANCHOR_MAP[s.title];
              return (
                <Reveal key={s.title} delay={i * 40}>
                  <div id={anchor} style={{ scrollMarginTop: "90px" }}>
                    <ServiceCard
                      title={s.title}
                      body={s.body}
                      href={"href" in s ? s.href : undefined}
                      message={s.message}
                      tone={i % 3 === 0 ? "soft" : i % 3 === 1 ? "accent" : "default"}
                    />
                  </div>
                </Reveal>
              );
            })}
          </div>
          <style>{`
            @media (min-width: 640px) { .services-grid { grid-template-columns: repeat(2, 1fr) !important; } }
            @media (min-width: 1024px) { .services-grid { grid-template-columns: repeat(4, 1fr) !important; } }
          `}</style>
        </div>
      </section>

      {/* Flexibility note — secondary, after services */}
      <section className="section tight-mobile" style={{ background: "var(--color-linen-blue)", paddingTop: "49px" }}>
        <div className="container">
          <div
            className="bundles-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "21px",
            }}
          >
            <Reveal style={{ display: "flex", flexDirection: "column", gap: "14px", maxWidth: "60ch" }}>
              <PillBadge tone="soft">How services combine</PillBadge>
              <h2
                className="serif"
                style={{
                  fontSize: "clamp(26px, 4vw, var(--text-heading))",
                  lineHeight: "var(--leading-heading)",
                  fontWeight: 300,
                  color: "var(--color-blue-ink)",
                }}
              >
                Most real requests are a bundle of smaller work items.
              </h2>
              <p style={{ fontSize: "var(--text-body-sm)", color: "var(--color-charcoal)", lineHeight: "var(--leading-body-sm)" }}>
                You do not need to pick the exact pieces. Tell us the outcome you want and we will assemble the work.
              </p>
            </Reveal>
            {SERVICE_BUNDLES.map((b, i) => (
              <Reveal key={b.title} delay={i * 50}>
                <div
                  style={{
                    background: "var(--color-linen-white)",
                    border: "1px solid var(--color-hairline-gray)",
                    borderRadius: "var(--radius-cards)",
                    padding: "24px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "14px",
                    height: "100%",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "var(--text-body)",
                      color: "var(--color-blue-ink)",
                      fontWeight: 500,
                      fontFamily: "var(--font-sans)",
                      letterSpacing: 0,
                    }}
                  >
                    {b.title}
                  </h3>
                  <ul style={{ display: "flex", flexWrap: "wrap", gap: "9px" }}>
                    {b.parts.map((p) => (
                      <li key={p}>
                        <PillBadge tone="soft">{p}</PillBadge>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <style>{`
            @media (min-width: 768px) { .bundles-grid { grid-template-columns: repeat(2, 1fr) !important; } }
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
