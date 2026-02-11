import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Booth — Studio-quality product photos via WhatsApp";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          width: "100%",
          height: "100%",
          backgroundColor: "#fafafa",
          padding: "80px",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              backgroundColor: "#B76E5B",
            }}
          />
          <span
            style={{
              fontSize: "32px",
              fontWeight: 700,
              color: "#111",
              letterSpacing: "-0.02em",
            }}
          >
            booth
          </span>
        </div>
        <div
          style={{
            fontSize: "64px",
            fontWeight: 800,
            color: "#111",
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            marginBottom: "24px",
          }}
        >
          Kill Expensive
          <br />
          <span style={{ color: "#B76E5B" }}>Photo Shoots</span>
        </div>
        <div
          style={{
            fontSize: "24px",
            color: "#666",
            lineHeight: 1.5,
            maxWidth: "700px",
          }}
        >
          Studio-quality product photos in 30 seconds via WhatsApp. ~$0.50/photo.
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            right: "80px",
            fontSize: "20px",
            color: "#999",
          }}
        >
          trybooth.ai
        </div>
      </div>
    ),
    { ...size }
  );
}
