import { ServicePage } from "@/components/services/service-page"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"

const title = "Agendamiento de Citas - Programación Profesional | Evallish BPO"
const description =
  "Servicios expertos de agendamiento de citas. Maximice su tiempo y aumente conversiones con programación profesional."

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/services/appointment-setting",
})

export default function AppointmentSettingPage() {
  return <ServicePage serviceKey="appointmentSetting" />
}
