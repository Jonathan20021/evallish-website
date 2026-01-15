import { ServicePage } from "@/components/services/service-page"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"

const title = "Investigación de Mercado y Encuestas | Evallish BPO"
const description =
  "Servicios profesionales de investigación de mercado y encuestas. Obtenga insights valiosos para tomar decisiones basadas en datos."

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/services/market-research",
})

export default function MarketResearchPage() {
  return <ServicePage serviceKey="marketResearch" />
}
