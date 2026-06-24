import type { Metadata } from "next";
import { PageHero } from "../../../components/page-hero";
import { SectionHeading } from "../../../components/section-heading";
import { FeatureGrid } from "../../../components/feature-grid";
import { FinalCta } from "../../../components/final-cta";
import { Reveal } from "../../../components/reveal";
import { PillBadge } from "../../../components/pill-badge";
import {
  CaseTrackerCard,
  DocumentChecklistCard,
  InvoicePreviewCard,
  RegistrationPathCard,
} from "../../../components/operation-mockup";
import {
  BUSINESS_TYPES,
  BUSINESS_REG_WORK,
  BUSINESS_REG_INTAKE,
  AFTER_REGISTRATION,
  BUSINESS_REG_INVOICE,
  BUSINESS_REG_DISCLAIMER,
  FINAL_CTA,
  wa,
} from "../../../lib/site-content";
import { bookCallLink } from "../../../lib/links";

export const metadata: Metadata = {
  title: "Ghana Business Registration Help",
  description:
    "Penkra helps local, diaspora, and foreign-owned founders clarify the right registration path, prepare required information, coordinate paperwork, track follow-ups, and keep records.",
};

export default function BusinessRegistrationPage() {
  return (
    <>
      <PageHero
        badge="Ghana business registration"
        h1="Register your business without managing every step yourself."
        copy="Penkra helps local, diaspora, and foreign-owned founders clarify the right registration path, prepare required information, coordinate paperwork, track follow-ups, and keep records."
        primary={{ label: "Start on WhatsApp", href: wa("businessRegistration"), external: true }}
        secondary={{ label: "Book a call", href: bookCallLink(), external: true }}
        variant="split-wide"
        mockup={
          <>
            <RegistrationPathCard activeStep={2} />
            <CaseTrackerCard active />
          </>
        }
      />

      {/* Supported registration paths */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHeading
            badge="Business types"
            heading="Support for the main Ghana registration paths."
          />
          <div
            className="biz-types-grid"
            style={{
              marginTop: "42px",
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "21px",
            }}
          >
            {BUSINESS_TYPES.map((b, i) => (
              <Reveal key={b.title} delay={i * 60}>
                <div
                  style={{
                    background: "var(--color-linen-white)",
                    border: "1px solid var(--color-hairline-gray)",
                    borderRadius: "var(--radius-cards)",
                    padding: "28px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "11px",
                    height: "100%",
                  }}
                >
                  <h3
                    className="serif"
                    style={{
                      fontSize: "var(--text-subheading)",
                      lineHeight: "var(--leading-subheading)",
                      fontWeight: 300,
                      color: "var(--color-blue-ink)",
                    }}
                  >
                    {b.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "var(--text-body-sm)",
                      lineHeight: "var(--leading-body-sm)",
                      color: "var(--color-charcoal)",
                    }}
                  >
                    {b.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <style>{`
            @media (min-width: 640px) { .biz-types-grid { grid-template-columns: repeat(2, 1fr) !important; } }
            @media (min-width: 1024px) { .biz-types-grid { grid-template-columns: repeat(3, 1fr) !important; } }
          `}</style>
        </div>
      </section>

      {/* What Penkra helps with */}
      <section className="section" style={{ background: "var(--color-linen-blue)" }}>
        <div className="container">
          <SectionHeading
            badge="Work we can handle"
            heading="From unclear requirements to organized records."
          />
          <div style={{ marginTop: "42px" }}>
            <FeatureGrid items={BUSINESS_REG_WORK} columns={2} />
          </div>
        </div>
      </section>

      {/* Information usually needed */}
      <section className="section">
        <div className="container">
          <div
            className="intake-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "42px",
              alignItems: "center",
            }}
          >
            <SectionHeading
              badge="Intake"
              heading="We will ask for the details needed for your specific case."
              body="Requirements can vary by business type and circumstances. We will confirm what applies before preparing work."
            />
            <Reveal delay={120}>
              <DocumentChecklistCard
                items={BUSINESS_REG_INTAKE}
                title="Information usually needed"
              />
            </Reveal>
          </div>
          <style>{`
            @media (min-width: 1024px) { .intake-grid { grid-template-columns: 1.2fr 1fr !important; } }
          `}</style>
        </div>
      </section>

      {/* After registration */}
      <section className="section" style={{ background: "var(--color-linen-blue)" }}>
        <div className="container">
          <SectionHeading
            badge="After setup"
            heading="Registration is only the start of the operational record."
          />
          <div
            className="after-grid"
            style={{
              marginTop: "42px",
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "21px",
            }}
          >
            {AFTER_REGISTRATION.map((a, i) => (
              <Reveal key={a.title} delay={i * 50}>
                <div
                  style={{
                    background: "var(--color-linen-white)",
                    border: "1px solid var(--color-hairline-gray)",
                    borderRadius: "var(--radius-cards)",
                    padding: "21px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "9px",
                    height: "100%",
                  }}
                >
                  <h3
                    className="serif"
                    style={{
                      fontSize: "var(--text-subheading)",
                      lineHeight: "var(--leading-subheading)",
                      fontWeight: 300,
                      color: "var(--color-blue-ink)",
                    }}
                  >
                    {a.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "var(--text-body-sm)",
                      lineHeight: "var(--leading-body-sm)",
                      color: "var(--color-charcoal)",
                    }}
                  >
                    {a.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <style>{`
            @media (min-width: 640px) { .after-grid { grid-template-columns: repeat(2, 1fr) !important; } }
            @media (min-width: 1024px) { .after-grid { grid-template-columns: repeat(3, 1fr) !important; } }
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
              badge="Billing"
              heading="Clear line items instead of vague package pricing."
              body="Registration work may include Penkra service fees, government fees, document preparation, filing coordination, logistics, follow-up, and third-party costs. We keep these visible and itemized."
            />
            <Reveal delay={120}>
              <InvoicePreviewCard items={BUSINESS_REG_INVOICE} />
            </Reveal>
          </div>
          <style>{`
            @media (min-width: 1024px) { .billing-grid { grid-template-columns: 1.2fr 1fr !important; } }
          `}</style>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="section tight-mobile" style={{ paddingTop: 0, paddingBottom: "49px" }}>
        <div className="container">
          <Reveal>
            <div
              style={{
                background: "var(--color-linen-blue)",
                border: "1px solid var(--color-hairline-gray)",
                borderRadius: "var(--radius-cards)",
                padding: "28px",
                maxWidth: "88ch",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
              }}
            >
              <PillBadge tone="soft">What Penkra is and is not</PillBadge>
              <p
                style={{
                  fontSize: "var(--text-body-sm)",
                  lineHeight: "var(--leading-body-sm)",
                  color: "var(--color-charcoal)",
                }}
              >
                {BUSINESS_REG_DISCLAIMER}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCta
        heading={FINAL_CTA.businessRegistration.heading}
        body={FINAL_CTA.businessRegistration.body}
        primary={{ label: "Message Penkra", href: wa("businessRegistration"), external: true }}
        secondary={{ label: "Book a call", href: bookCallLink(), external: true }}
      />
    </>
  );
}
