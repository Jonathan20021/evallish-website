import { ServicePage } from "@/components/services/service-page"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"

const title = "Telemarketing - Generación de Leads | Evallish BPO"
const description =
  "Servicios profesionales de telemarketing outbound. Generación de leads, llamadas en frío y campañas efectivas para impulsar ventas."

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/services/telemarketing",
})

export default function TelemarketingPage() {
  return <ServicePage serviceKey="telemarketing" />
}
