import { PillBadge } from "./pill-badge";
import { Reveal } from "./reveal";

type SectionHeadingProps = {
  badge?: string;
  heading: string;
  body?: string;
  align?: "left" | "center";
  level?: "h2" | "h1";
};

export function SectionHeading({
  badge,
  heading,
  body,
  align = "left",
  level = "h2",
}: SectionHeadingProps) {
  const HTag = level;
  const alignStyle: React.CSSProperties =
    align === "center"
      ? { textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }
      : { textAlign: "left" };

  return (
    <Reveal style={{ ...alignStyle, maxWidth: "760px" }}>
      {badge ? (
        <div style={{ marginBottom: "14px" }}>
          <PillBadge>{badge}</PillBadge>
        </div>
      ) : null}
      <HTag
        className="serif"
        style={{
          fontSize: "clamp(32px, 5vw, var(--text-heading))",
          lineHeight: "var(--leading-heading)",
          fontWeight: 300,
          color: "var(--color-blue-ink)",
        }}
      >
        {heading}
      </HTag>
      {body ? (
        <p
          style={{
            marginTop: "18px",
            fontSize: "var(--text-body)",
            lineHeight: "var(--leading-body)",
            color: "var(--color-charcoal)",
            maxWidth: "62ch",
          }}
        >
          {body}
        </p>
      ) : null}
    </Reveal>
  );
}
