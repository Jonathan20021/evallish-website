import { ImageResponse } from "next/og"
import { siteName } from "@/lib/seo"

export const dynamic = "force-static"
export const size = {
  width: 1200,
  height: 600,
}
export const contentType = "image/png"

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "64px",
          background: "linear-gradient(135deg, #111827 0%, #1d4ed8 55%, #38bdf8 100%)",
          color: "#ffffff",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: "26px",
            letterSpacing: "4px",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.7)",
            marginBottom: "18px",
          }}
        >
          Contact Center &amp; BPO
        </div>
        <div style={{ fontSize: "64px", fontWeight: 700, lineHeight: 1.1 }}>{siteName}</div>
        <div
          style={{
            fontSize: "30px",
            marginTop: "16px",
            maxWidth: "900px",
            color: "rgba(255,255,255,0.9)",
          }}
        >
          Bilingual teams. Multichannel support. Nearshore delivery.
        </div>
      </div>
    ),
    {
      ...size,
    },
  )
}
