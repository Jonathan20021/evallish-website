import { ServicePage } from "@/components/services/service-page"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"

const title = "Atención al Cliente - Servicio Multicanal | Evallish BPO"
const description =
  "Soporte al cliente excepcional 24/7 a través de teléfono, chat, email y WhatsApp. Mejore la satisfacción del cliente con Evallish BPO."

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/services/customer-service",
})

export default function CustomerServicePage() {
  return <ServicePage serviceKey="customerService" />
}
