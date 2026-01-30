import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import { VacantesClient } from "@/app/vacantes/vacantes-client"

export const metadata: Metadata = buildMetadata({
  title: "Vacantes | Evallish BPO",
  description: "Conoce Evallish BPO y aplica a nuestras vacantes disponibles.",
  path: "/vacantes",
})

export default function VacantesPage() {
  return <VacantesClient />
}
