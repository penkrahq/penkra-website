import { Reveal } from "./reveal";

const INTENTS = [
  "Register a business",
  "Prepare paperwork",
  "Follow up on an application",
  "Organize records",
  "Coordinate logistics",
  "Custom request",
];

export function TrustStrip() {
  return (
    <section className="section tight-mobile" style={{ paddingTop: "0", paddingBottom: "49px" }}>
      <div className="container">
        <Reveal
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "21px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "var(--text-body-sm)",
              color: "var(--color-graphite)",
              letterSpacing: 0,
              maxWidth: "52ch",
            }}
          >
            Clarity, convenience, and speed for the operational work you do not want to manage yourself.
          </p>
          <ul
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "11px 14px",
            }}
          >
            {INTENTS.map((label) => (
              <li
                key={label}
                style={{
                  fontSize: "var(--text-body-sm)",
                  color: "var(--color-blue-ink)",
                  fontWeight: 400,
                  padding: "7px 14px",
                  borderRadius: "var(--radius-badges)",
                  background: "var(--color-linen-blue)",
                }}
              >
                {label}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
