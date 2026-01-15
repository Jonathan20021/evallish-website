"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { serviceIconMap } from "@/lib/service-icons"
import { serviceOrder, type ServiceKey } from "@/lib/translations"

export function ServicesSection() {
  const { t } = useLanguage()
  const serviceThemes: Record<ServiceKey, string> = {
    customerService: "bg-blue-500",
    orderTaking: "bg-emerald-500",
    telemarketing: "bg-violet-500",
    appointmentSetting: "bg-amber-500",
    technicalSupport: "bg-rose-500",
    crossUpselling: "bg-sky-500",
    marketResearch: "bg-cyan-500",
  }

  const services = serviceOrder.map((key) => {
    const item = t.home.services.items[key]
    const detail = t.services.details[key]
    const Icon = serviceIconMap[detail.iconName] ?? serviceIconMap["message-square"]

    return {
      key,
      title: item.title,
      description: item.description,
      features: item.features,
      link: detail.link,
      color: serviceThemes[key],
      icon: Icon,
    }
  })

  return (
    <section className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              {t.home.services.eyebrow}
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t.home.services.title}</h2>
            <p className="text-lg text-gray-600">
              {t.home.services.description}
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="w-fit h-12 px-6 border-2 border-gray-200 hover:border-primary hover:text-primary font-semibold bg-transparent"
          >
            <Link href="/services">
              {t.home.services.viewAll}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Link
                key={service.key}
                href={service.link}
                className="group relative bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent overflow-hidden"
              >
                {/* Hover background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative z-10">
                  <div
                    className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 group-hover:text-white/80 mb-6 transition-colors leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="text-sm text-gray-500 group-hover:text-white/70 flex items-center gap-2 transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary group-hover:bg-white/70" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-2 text-primary group-hover:text-white font-semibold text-sm transition-colors">
                    {t.home.services.learnMore}
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
