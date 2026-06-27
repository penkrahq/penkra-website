import type { Metadata } from "next";
import { Button } from "../../components/button";
import { FinalCta } from "../../components/final-cta";
import { JsonLd } from "../../components/json-ld";
import { PageHero } from "../../components/page-hero";
import { PillBadge } from "../../components/pill-badge";
import { Reveal } from "../../components/reveal";
import { SectionHeading } from "../../components/section-heading";
import { bookCallLink } from "../../lib/links";
import { absoluteUrl, pageMetadata } from "../../lib/metadata";
import { FINAL_CTA, wa } from "../../lib/site-content";

const focusAreas = [
  {
    title: "Paperwork and forms",
    body: "Turn unclear requirements, forms, and supporting documents into a handled workstream.",
    href: "/what-we-handle",
  },
  {
    title: "Business registration support",
    body: "Start with Ghana business registration support, with preparation, coordination, follow-up, and records.",
    href: "/ghana/business-registration",
  },
  {
    title: "Follow-ups and logistics",
    body: "Delegate the chase work, local coordination, reminders, handoffs, and practical next steps.",
    href: "/services",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Penkra Is Live",
  description:
    "Penkra is live to help people and businesses delegate paperwork, admin, records, follow-ups, logistics, and business registration support.",
  path: "/launch",
});

export default function LaunchPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Penkra is live for delegated operations",
          description:
            "Penkra helps people and businesses hand off paperwork, admin, records, follow-ups, logistics, and business registration support.",
          url: absoluteUrl("/launch"),
          author: {
            "@id": absoluteUrl("/#organization"),
          },
          publisher: {
            "@id": absoluteUrl("/#organization"),
          },
          mainEntityOfPage: absoluteUrl("/launch"),
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
              name: "Launch",
              item: absoluteUrl("/launch"),
            },
          ],
        }}
      />

      <PageHero
        badge="Launch note"
        h1="Penkra is live for delegated operations."
        copy="Penkra helps people and businesses hand off paperwork, admin, records, follow-ups, logistics, and business registration support. You send what needs to be handled, we clarify the work, and we keep the next step clear."
        primary={{ label: "Message Penkra", href: wa("home"), external: true }}
        secondary={{ label: "Book a call", href: bookCallLink(), external: true }}
        variant="compact"
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHeading
            badge="What is live"
            heading="Start with a request. Penkra turns it into handled work."
            body="The first public focus is Ghana business registration support and operational tasks around paperwork, records, follow-ups, logistics, and admin. The longer-term system is designed to support more services and countries as real demand becomes clear."
          />
          <div
            className="launch-grid"
            style={{
              marginTop: "42px",
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "18px",
            }}
          >
            {focusAreas.map((area, index) => (
              <Reveal key={area.title} delay={index * 45}>
                <article
                  style={{
                    background: "var(--color-linen-white)",
                    border: "1px solid var(--color-hairline-gray)",
                    borderRadius: "var(--radius-cards)",
                    padding: "24px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "14px",
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
                    {area.title}
                  </h2>
                  <p
                    style={{
                      fontSize: "var(--text-body-sm)",
                      lineHeight: "var(--leading-body-sm)",
                      color: "var(--color-charcoal)",
                    }}
                  >
                    {area.body}
                  </p>
                  <div style={{ marginTop: "auto" }}>
                    <Button href={area.href} variant="secondary">
                      Learn more
                    </Button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <style>{`
            @media (min-width: 760px) {
              .launch-grid { grid-template-columns: repeat(3, 1fr) !important; }
            }
          `}</style>
        </div>
      </section>

      <section className="section" style={{ background: "var(--color-linen-blue)" }}>
        <div className="container">
          <SectionHeading
            badge="How to start"
            heading="You do not need to know the process before you message us."
            body="Send the outcome you want, the country involved, any deadline, and what you already have. Penkra will clarify whether the request fits an existing service, needs a custom scope, or should be routed to a specialist."
          />
          <div style={{ marginTop: "28px", display: "flex", flexWrap: "wrap", gap: "14px" }}>
            <Button href="/how-it-works" variant="secondary">
              Read how it works
            </Button>
            <Button href="/data-handling" variant="secondary">
              Read data handling
            </Button>
          </div>
        </div>
      </section>

      <FinalCta
        heading={FINAL_CTA.home.heading}
        body={FINAL_CTA.home.body}
        primary={{ label: "Message Penkra", href: wa("home"), external: true }}
        secondary={{ label: "Book a call", href: bookCallLink(), external: true }}
      />
    </>
  );
}
