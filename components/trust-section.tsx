import { PillBadge } from "./pill-badge";
import { Reveal } from "./reveal";

const PROOF_ITEMS = [
  {
    title: "Human-reviewed",
    body: "Agents help with the boring work behind the scenes. A person reviews before anything goes out.",
  },
  {
    title: "We say no when it does not fit",
    body: "We tell you what we can and cannot handle before starting. No vague promises.",
  },
  {
    title: "Itemized billing",
    body: "Every line of work is visible. Government fees, logistics, follow-up — separated clearly.",
  },
  {
    title: "Records kept",
    body: "Final documents and the paper trail are organized so you can find them later.",
  },
  {
    title: "WhatsApp-first",
    body: "You do not learn a system. You message us, and we handle the rest.",
  },
  {
    title: "Country-specific",
    body: "Requirements differ by country. We work to the local offices and local context.",
  },
];

export function TrustSection() {
  return (
    <section
      className="section tight-mobile"
      style={{ background: "var(--color-linen-blue)" }}
    >
      <div className="container">
        <Reveal
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            maxWidth: "760px",
          }}
        >
          <PillBadge>How we keep work trustworthy</PillBadge>
          <h2
            className="serif"
            style={{
              fontSize: "clamp(30px, 4.5vw, var(--text-heading-lg))",
              lineHeight: "var(--leading-heading-lg)",
              fontWeight: 300,
              color: "var(--color-blue-ink)",
            }}
          >
            No fake traction. Just the things that make delegated work safe.
          </h2>
        </Reveal>
        <div
          className="proof-grid"
          style={{
            marginTop: "42px",
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "21px",
          }}
        >
          {PROOF_ITEMS.map((p, i) => (
            <Reveal key={p.title} delay={i * 50}>
              <div
                style={{
                  background: "var(--color-linen-white)",
                  border: "1px solid var(--color-hairline-gray)",
                  borderRadius: "var(--radius-cards)",
                  padding: "21px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "11px",
                  height: "100%",
                }}
              >
                <span
                  aria-hidden
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "32px",
                    height: "32px",
                    borderRadius: "var(--radius-nav)",
                    background: "var(--color-blue-ink)",
                    color: "var(--color-linen-white)",
                    fontSize: "14px",
                  }}
                >
                  ✓
                </span>
                <h3
                  style={{
                    fontSize: "var(--text-body)",
                    color: "var(--color-blue-ink)",
                    fontWeight: 500,
                    fontFamily: "var(--font-sans)",
                    letterSpacing: 0,
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontSize: "var(--text-body-sm)",
                    lineHeight: "var(--leading-body-sm)",
                    color: "var(--color-charcoal)",
                  }}
                >
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <style>{`
        @media (min-width: 640px) { .proof-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (min-width: 1024px) { .proof-grid { grid-template-columns: repeat(3, 1fr) !important; } }
      `}</style>
    </section>
  );
}
