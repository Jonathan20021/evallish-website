import { ServicePage } from "@/components/services/service-page"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"

const title = "Cross-Selling & Up-Selling - Maximice Ingresos | Evallish BPO"
const description =
  "Servicios expertos de cross-selling y up-selling. Aumente el valor del cliente y maximice ingresos con estrategias probadas."

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/services/cross-upselling",
})

export default function CrossUpsellingPage() {
  return <ServicePage serviceKey="crossUpselling" />
}
