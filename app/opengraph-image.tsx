import { ImageResponse } from "next/og"
import { siteName } from "@/lib/seo"

export const runtime = "edge"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px",
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 45%, #0ea5e9 100%)",
          color: "#ffffff",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: "28px",
            letterSpacing: "4px",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.7)",
            marginBottom: "20px",
          }}
        >
          Contact Center &amp; BPO
        </div>
        <div style={{ fontSize: "72px", fontWeight: 700, lineHeight: 1.1 }}>{siteName}</div>
        <div
          style={{
            fontSize: "32px",
            marginTop: "18px",
            maxWidth: "900px",
            color: "rgba(255,255,255,0.9)",
          }}
        >
          Nearshore support from the Dominican Republic since 2006.
        </div>
      </div>
    ),
    {
      ...size,
    },
  )
}
