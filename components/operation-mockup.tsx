import { PillBadge } from "./pill-badge";

const cardBase: React.CSSProperties = {
  background: "var(--color-linen-white)",
  borderRadius: "var(--radius-cards)",
  padding: "21px",
  border: "1px solid var(--color-hairline-gray)",
};

const cardBlueBase: React.CSSProperties = {
  background: "var(--color-linen-blue)",
  borderRadius: "var(--radius-cards)",
  padding: "21px",
  border: "1px solid var(--color-hairline-gray)",
};

const labelStyle: React.CSSProperties = {
  fontSize: "var(--text-caption)",
  lineHeight: "var(--leading-caption)",
  color: "var(--color-graphite)",
  letterSpacing: 0,
};

const miniBtn: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  background: "var(--color-blue-ink)",
  color: "var(--color-linen-white)",
  borderRadius: "var(--radius-buttons)",
  padding: "7px 14px",
  fontSize: "var(--text-caption)",
  fontWeight: 400,
};

function CheckSquare({ done }: { done?: boolean }) {
  return (
    <span
      aria-hidden
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: "18px",
        height: "18px",
        borderRadius: "4px",
        background: done ? "var(--color-blue-ink)" : "transparent",
        border: done ? "none" : "1px solid var(--color-hairline-gray)",
        color: "var(--color-linen-white)",
        fontSize: "11px",
        lineHeight: 1,
        flexShrink: 0,
      }}
    >
      {done ? "✓" : ""}
    </span>
  );
}

function activeCard(active?: boolean): React.CSSProperties {
  return {
    ...cardBase,
    borderColor: active ? "var(--color-blue-ink)" : "var(--color-hairline-gray)",
    transition: "border-color 400ms cubic-bezier(0,0,0,1)",
  };
}

export function ConversationCard({ active }: { active?: boolean }) {
  return (
    <div style={activeCard(active)}>
      <div style={{ ...labelStyle, marginBottom: "14px" }}>WhatsApp</div>
      <div
        style={{
          background: "var(--color-sky-veil)",
          borderRadius: "var(--radius-cards)",
          padding: "14px",
          marginBottom: "11px",
          fontSize: "var(--text-body-sm)",
          lineHeight: "var(--leading-body-sm)",
          color: "var(--color-charcoal)",
          maxWidth: "85%",
        }}
      >
        I need to register a business in Ghana.
      </div>
      <div
        style={{
          background: "var(--color-blue-ink)",
          color: "var(--color-linen-white)",
          borderRadius: "var(--radius-cards)",
          padding: "14px",
          marginBottom: "14px",
          fontSize: "var(--text-body-sm)",
          lineHeight: "var(--leading-body-sm)",
          maxWidth: "90%",
          marginLeft: "auto",
        }}
      >
        We will confirm the type, collect the details, prepare the paperwork, track the steps, and keep records for you.
      </div>
      <div style={{ display: "flex", gap: "9px", alignItems: "center" }}>
        <span style={miniBtn}>Reply</span>
        <span style={labelStyle}>Penkra · typically replies in minutes</span>
      </div>
    </div>
  );
}

export function CaseTrackerCard({ active }: { active?: boolean }) {
  const stages = [
    { label: "Intake", state: "done" },
    { label: "Documents", state: "done" },
    { label: "Preparation", state: "current" },
    { label: "Follow-up", state: "todo" },
    { label: "Records", state: "todo" },
  ];

  return (
    <div style={activeCard(active)}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "18px",
        }}
      >
        <div style={labelStyle}>Case status</div>
        <PillBadge tone="soft">{active ? "Active" : "In progress"}</PillBadge>
      </div>
      <ol style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        {stages.map((s) => (
          <li
            key={s.label}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              fontSize: "var(--text-body-sm)",
              lineHeight: 1.3,
            }}
          >
            <CheckSquare done={s.state !== "todo"} />
            <span
              style={{
                color:
                  s.state === "current"
                    ? "var(--color-blue-ink)"
                    : "var(--color-charcoal)",
                fontWeight: s.state === "current" ? 500 : 400,
              }}
            >
              {s.label}
            </span>
            {s.state === "current" ? (
              <span style={{ ...labelStyle, marginLeft: "auto" }}>now</span>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}

export function DocumentChecklistCard({
  items,
  title = "Document checklist",
  active,
}: {
  items: string[];
  title?: string;
  active?: boolean;
}) {
  return (
    <div style={activeCard(active)}>
      <div style={{ ...labelStyle, marginBottom: "14px" }}>{title}</div>
      <ul style={{ display: "flex", flexDirection: "column", gap: "11px" }}>
        {items.map((item, i) => (
          <li
            key={item}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "11px",
              fontSize: "var(--text-body-sm)",
              lineHeight: 1.3,
              color: "var(--color-charcoal)",
            }}
          >
            <CheckSquare done={active ? i < items.length - 1 : i < 3} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function InvoicePreviewCard({
  items,
  title = "Monthly invoice",
  active,
}: {
  items: string[];
  title?: string;
  active?: boolean;
}) {
  return (
    <div style={activeCard(active)}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "18px",
        }}
      >
        <div style={labelStyle}>{title}</div>
        <PillBadge tone="soft">{active ? "Ready" : "Itemized"}</PillBadge>
      </div>
      <ul style={{ display: "flex", flexDirection: "column", gap: "11px" }}>
        {items.map((item) => (
          <li
            key={item}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "var(--text-body-sm)",
              lineHeight: 1.3,
              color: "var(--color-charcoal)",
              paddingBottom: "11px",
              borderBottom: "1px solid var(--color-hairline-gray)",
            }}
          >
            <span>{item}</span>
            <span style={labelStyle}>—</span>
          </li>
        ))}
      </ul>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "14px",
          fontSize: "var(--text-body-sm)",
          color: "var(--color-blue-ink)",
          fontWeight: 500,
        }}
      >
        <span>Total</span>
        <span>Clarified before starting</span>
      </div>
    </div>
  );
}

export function ClientSpacePreviewCard() {
  const items = ["Conversations", "Services", "Documents", "Tasks", "Fees"];
  return (
    <div style={cardBlueBase}>
      <div style={{ ...labelStyle, marginBottom: "14px" }}>Client space</div>
      <ul style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
        {items.map((item) => (
          <li
            key={item}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "11px",
              fontSize: "var(--text-body-sm)",
              color: "var(--color-charcoal)",
            }}
          >
            <span
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "var(--radius-badges)",
                background: "var(--color-blue-ink)",
              }}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function CountryServiceSelectorCard() {
  return (
    <div style={cardBase}>
      <div style={{ ...labelStyle, marginBottom: "14px" }}>
        Country / service
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
        <Row label="Ghana" tag="Available" tone="available" />
        <Row label="Business registration" tag="Launched" tone="available" />
        <Row label="More services" tag="On request" tone="muted" />
      </div>
    </div>
  );
}

function Row({
  label,
  tag,
  tone,
}: {
  label: string;
  tag: string;
  tone: "available" | "muted";
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "11px 14px",
        borderRadius: "var(--radius-nav)",
        background:
          tone === "available"
            ? "var(--color-sky-veil)"
            : "var(--color-linen-blue)",
        fontSize: "var(--text-body-sm)",
        color: "var(--color-charcoal)",
      }}
    >
      <span>{label}</span>
      <span
        style={{
          fontSize: "var(--text-caption)",
          color:
            tone === "available"
              ? "var(--color-blue-ink)"
              : "var(--color-graphite)",
        }}
      >
        {tag}
      </span>
    </div>
  );
}

/* Ghana operating model mockup — shows the local work loop */
export function GhanaOperatingModelCard() {
  const loop = [
    { label: "Local filing offices", note: "Registrar General, IRS, MMDAs" },
    { label: "On-the-ground follow-up", note: "In-person where needed" },
    { label: "Local logistics", note: "Pickups, drop-offs, errands" },
    { label: "Records kept in Ghana time", note: "GMT, local context" },
  ];
  return (
    <div style={cardBase}>
      <div style={{ ...labelStyle, marginBottom: "14px" }}>Ghana operating model</div>
      <ul style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        {loop.map((r) => (
          <li
            key={r.label}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              padding: "11px 14px",
              borderRadius: "var(--radius-nav)",
              background: "var(--color-linen-blue)",
            }}
          >
            <span
              style={{
                fontSize: "var(--text-body-sm)",
                color: "var(--color-blue-ink)",
                fontWeight: 500,
              }}
            >
              {r.label}
            </span>
            <span style={{ ...labelStyle }}>{r.note}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* Staged registration path visual for the business registration page */
export function RegistrationPathCard({ activeStep }: { activeStep?: number }) {
  const stages = [
    "Clarify path & business type",
    "Collect details & documents",
    "Prepare forms",
    "Coordinate filing",
    "Track follow-up",
    "Organize final records",
  ];
  return (
    <div style={cardBase}>
      <div style={{ ...labelStyle, marginBottom: "18px" }}>Registration path</div>
      <ol style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        {stages.map((s, i) => {
          const done = activeStep != null && i < activeStep;
          const current = activeStep != null && i === activeStep;
          return (
            <li
              key={s}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                fontSize: "var(--text-body-sm)",
                lineHeight: 1.3,
              }}
            >
              <span
                aria-hidden
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "22px",
                  height: "22px",
                  borderRadius: "var(--radius-nav)",
                  background:
                    done || current
                      ? "var(--color-blue-ink)"
                      : "transparent",
                  border:
                    done || current
                      ? "none"
                      : "1px solid var(--color-hairline-gray)",
                  color: "var(--color-linen-white)",
                  fontSize: "11px",
                  flexShrink: 0,
                }}
              >
                {done ? "✓" : i + 1}
              </span>
              <span
                style={{
                  color: current
                    ? "var(--color-blue-ink)"
                    : "var(--color-charcoal)",
                  fontWeight: current ? 500 : 400,
                }}
              >
                {s}
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
