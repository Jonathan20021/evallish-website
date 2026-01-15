import type React from "react"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"

const title = "About Evallish BPO | Contact Center & BPO"
const description =
  "Learn about Evallish BPO, a nearshore contact center in Santiago, Dominican Republic. Discover our mission, values, and team."

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/about",
})

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
