import type React from "react"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"

const title = "Contact Center Services | Evallish BPO"
const description =
  "Explore inbound and outbound contact center services, customer support, technical support, telemarketing, and market research from Evallish BPO."

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/services",
})

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children
}
