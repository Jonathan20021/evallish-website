import { ServicePage } from "@/components/services/service-page"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"

const title = "Soporte Técnico - Asistencia Experta 24/7 | Evallish BPO"
const description =
  "Soporte técnico profesional multicanal 24/7. Resolución rápida de problemas y asistencia experta para sus productos."

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/services/technical-support",
})

export default function TechnicalSupportPage() {
  return <ServicePage serviceKey="technicalSupport" />
}
