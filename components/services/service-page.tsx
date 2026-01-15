"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ServiceHero } from "@/components/services/service-hero"
import { ServiceFeatures } from "@/components/services/service-features"
import { ServiceBenefits } from "@/components/services/service-benefits"
import { ServiceCta } from "@/components/services/service-cta"
import { useLanguage } from "@/components/language-provider"
import { type ServiceKey } from "@/lib/translations"

export function ServicePage({ serviceKey }: { serviceKey: ServiceKey }) {
  const { t } = useLanguage()
  const service = t.services.details[serviceKey]

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <ServiceHero
          iconName={service.iconName}
          title={service.title}
          subtitle={service.subtitle}
          description={service.description}
          image={service.image}
        />
        <ServiceFeatures features={service.features} />
        <ServiceBenefits benefits={service.benefits} />
        <ServiceCta title={service.ctaTitle} description={service.ctaDescription} />
      </main>
      <Footer />
    </div>
  )
}
