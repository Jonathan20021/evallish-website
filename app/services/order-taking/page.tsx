import { ServicePage } from "@/components/services/service-page"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"

const title = "Toma de Pedidos - Procesamiento Eficiente | Evallish BPO"
const description =
  "Servicios profesionales de toma de pedidos multicanal. Procesamiento preciso y rápido para aumentar sus ventas."

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/services/order-taking",
})

export default function OrderTakingPage() {
  return <ServicePage serviceKey="orderTaking" />
}
