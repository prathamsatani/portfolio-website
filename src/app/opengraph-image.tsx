import { ImageResponse } from "next/og";

export const alt = "Pratham Satani — ML Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// ponytail: default system serif; load Instrument Serif via fetch() if the card needs exact brand type
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#F6F4EF",
          color: "#141414",
          fontFamily: "serif",
        }}
      >
        <div style={{ fontSize: 24, letterSpacing: 4, color: "#C2410C", fontFamily: "monospace" }}>
          ML ENGINEER · BOSTON, MA
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, lineHeight: 1 }}>Pratham Satani</div>
          <div style={{ fontSize: 40, marginTop: 24, color: "#6B6862" }}>
            Machine learning, built for the real world.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
