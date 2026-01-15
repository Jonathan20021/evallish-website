import type React from "react"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"

const title = "Evallish BPO Blog | Insights & Updates"
const description =
  "Thought leadership, customer experience trends, and BPO updates from the Evallish BPO team."

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/blog",
})

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children
}
