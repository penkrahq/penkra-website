import { ImageResponse } from "next/og";

export const alt = "Penkra — Give your AI agents Apps";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          color: "#f4f4f5",
          background:
            "radial-gradient(circle at 78% 18%, rgba(79, 139, 255, 0.22), transparent 34%), linear-gradient(135deg, #10131a 0%, #08090c 64%)",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <svg width="48" height="48" viewBox="0 0 512 512">
            <path
              d="M89 278v-67c0-91.7 74.3-166 166-166 92.2 0 167 74.3 167 166 0 88.5-70.3 160.8-158.2 163h-3.8v-71c50.8 0 92-41.2 92-92 0-52.5-42.5-95-95-95-54.7 0-99 43.1-99 95v67h-69zm0 25h69v164H89z"
              fill="#f4f4f5"
            />
            <path d="M182 303h78v71h-78z" fill="#8cb8e1" />
          </svg>
          <span style={{ fontSize: 34, fontWeight: 700, letterSpacing: "-1px" }}>
            Penkra
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22, maxWidth: 930 }}>
          <div
            style={{
              color: "#79a8ff",
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: "3px",
            }}
          >
            OPEN-SOURCE DESKTOP WORKSPACE
          </div>
          <div
            style={{
              fontSize: 78,
              lineHeight: 1.02,
              fontWeight: 700,
              letterSpacing: "-4px",
            }}
          >
            Give your AI agents Apps.
          </div>
          <div style={{ color: "#a7a7b0", fontSize: 27, lineHeight: 1.4 }}>
            Files, browser, tools, and parallel agent work—in one desktop workspace.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "#777982",
            fontSize: 20,
          }}
        >
          <span>Free and open source</span>
          <span>penkra.com</span>
        </div>
      </div>
    ),
    size,
  );
}
