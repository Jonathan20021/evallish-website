import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { StatsSection } from "@/components/home/stats-section"
import { ServicesSection } from "@/components/home/services-section"
import { GallerySection } from "@/components/home/gallery-section"
import { FrameworkSection } from "@/components/home/framework-section"
import { FaqSection } from "@/components/home/faq-section"
import { CtaSection } from "@/components/home/cta-section"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import { translations } from "@/lib/translations"

const title = "Evallish BPO | Contact Center & BPO"
const description =
  "Evallish BPO is a business process outsourcing company in Santiago, Dominican Republic. We handle inbound and outbound calls, emails, and live chat to improve customer loyalty and revenue."

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/",
})

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: translations.en.home.faq.items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navigation />
      <main>
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <GallerySection />
        <FrameworkSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
