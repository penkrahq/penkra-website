import { HeroPanels } from "../components/hero-panels";
import { TrustStrip } from "../components/trust-strip";
import { TrustSection } from "../components/trust-section";
import { ProcessTrack } from "../components/process-track";
import { SectionHeading } from "../components/section-heading";
import { ServiceCard } from "../components/service-card";
import { FinalCta } from "../components/final-cta";
import { Reveal } from "../components/reveal";
import { Button } from "../components/button";
import {
  ConversationCard,
  CaseTrackerCard,
  InvoicePreviewCard,
  DocumentChecklistCard,
} from "../components/operation-mockup";
import {
  HOME_REQUEST_CARDS,
  HOW_IT_WORKS,
  SERVICE_SNAPSHOT,
  BILLING_LINE_ITEMS,
  COUNTRIES,
  BUSINESS_REG_INTAKE,
  FINAL_CTA,
  wa,
} from "../lib/site-content";
import { bookCallLink } from "../lib/links";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="section tight-mobile" style={{ paddingTop: "21px", paddingBottom: "35px" }}>
        <div className="container">
          <HeroPanels
            eyebrow="Starting in Ghana"
            h1="Tell us what you need handled."
            copy="Message us what you need done. We clarify the work, handle the paperwork, follow-ups, and logistics, and keep records — starting in Ghana."
            primaryCta={{ label: "Message Penkra", href: wa("home"), external: true }}
            secondaryCta={{ label: "Book a call", href: bookCallLink(), external: true }}
            mockups={
              <>
                <ConversationCard />
                <CaseTrackerCard />
              </>
            }
          />
        </div>
      </section>

      <TrustStrip />

      {/* What do you need? */}
      <section className="section">
        <div className="container">
          <SectionHeading
            badge="Start with the request"
            heading="You do not need to know the exact process before talking to us."
            body="Tell us what you are trying to get done. If it fits an existing service, we will route it there. If it is custom, we will clarify the work before starting."
          />
          <div
            className="cards-grid"
            style={{
              marginTop: "42px",
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "21px",
            }}
          >
            {HOME_REQUEST_CARDS.map((card, i) => (
              <Reveal key={card.title} delay={i * 60}>
                <ServiceCard
                  title={card.title}
                  body={
                    "href" in card && card.href
                      ? "A structured service path with clear steps, documents, and records."
                      : "Send the request on WhatsApp. We will clarify whether it fits and what the work looks like."
                  }
                  href={"href" in card ? card.href : undefined}
                  message={card.message}
                  tone={i % 2 === 0 ? "soft" : "default"}
                />
              </Reveal>
            ))}
          </div>
          <style>{`
            @media (min-width: 640px) { .cards-grid { grid-template-columns: repeat(2, 1fr) !important; } }
            @media (min-width: 1024px) { .cards-grid { grid-template-columns: repeat(3, 1fr) !important; } }
          `}</style>
        </div>
      </section>

      {/* How Penkra works — scroll-led sticky storytelling */}
      <ProcessTrack
        badge="How it works"
        heading="One conversation becomes a clear plan of work."
        cards={[
          {
            step: "01",
            title: HOW_IT_WORKS[0].title,
            body: HOW_IT_WORKS[0].body,
            mockup: <ConversationCard active />,
          },
          {
            step: "02",
            title: HOW_IT_WORKS[1].title,
            body: HOW_IT_WORKS[1].body,
            mockup: <DocumentChecklistCard items={BUSINESS_REG_INTAKE} active />,
          },
          {
            step: "03",
            title: HOW_IT_WORKS[2].title,
            body: HOW_IT_WORKS[2].body,
            mockup: <CaseTrackerCard active />,
          },
          {
            step: "04",
            title: HOW_IT_WORKS[3].title,
            body: HOW_IT_WORKS[3].body,
            mockup: <InvoicePreviewCard items={BILLING_LINE_ITEMS} active />,
          },
        ]}
      />

      <TrustSection />

      {/* Ghana first */}
      <section className="section">
        <div className="container">
          <SectionHeading
            badge="Countries"
            heading="Starting in Ghana, built to expand country by country."
            body="Requirements differ by country, so pages and service flows are country-specific. Ghana is live. Tell us where else you need help and we will track demand."
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
                    padding: "28px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "14px",
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
                        fontSize: "var(--text-heading-sm)",
                        lineHeight: "var(--leading-heading-sm)",
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
                        padding: "4px 11px",
                      }}
                    >
                      {c.status === "available" ? "Available" : "Coming later"}
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: "var(--text-body-sm)",
                      lineHeight: "var(--leading-body-sm)",
                      color: "var(--color-charcoal)",
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

      {/* Services snapshot */}
      <section className="section" style={{ background: "var(--color-linen-blue)" }}>
        <div className="container">
          <SectionHeading
            badge="Delegated operations"
            heading="Services are building blocks. Your request can combine several."
          />
          <div
            className="services-grid"
            style={{
              marginTop: "42px",
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "21px",
            }}
          >
            {SERVICE_SNAPSHOT.map((s, i) => (
              <Reveal key={s.title} delay={i * 50}>
                <ServiceCard
                  title={s.title}
                  body={s.body}
                  href={"href" in s ? s.href : undefined}
                  message={`I need help with ${s.title.toLowerCase()}.`}
                  tone={i % 3 === 0 ? "soft" : i % 3 === 1 ? "accent" : "default"}
                />
              </Reveal>
            ))}
          </div>
          <div style={{ marginTop: "42px" }}>
            <Button href="/services" variant="secondary">
              See all services
            </Button>
          </div>
          <style>{`
            @media (min-width: 640px) { .services-grid { grid-template-columns: repeat(2, 1fr) !important; } }
            @media (min-width: 1024px) { .services-grid { grid-template-columns: repeat(4, 1fr) !important; } }
          `}</style>
        </div>
      </section>

      {/* Billing */}
      <section className="section">
        <div className="container">
          <div
            className="billing-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "42px",
              alignItems: "center",
            }}
          >
            <SectionHeading
              badge="Pricing"
              heading="Granular work, itemized clearly."
              body="Some requests are simple. Others involve preparation, filing, follow-up, logistics, government fees, or third-party costs. We clarify expected work before starting and keep charges itemized for monthly invoicing."
            />
            <Reveal delay={120}>
              <InvoicePreviewCard items={BILLING_LINE_ITEMS} />
            </Reveal>
          </div>
          <style>{`
            @media (min-width: 1024px) { .billing-grid { grid-template-columns: 1.2fr 1fr !important; } }
          `}</style>
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
