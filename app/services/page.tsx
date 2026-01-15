"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { TrendingUp, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useEffect, useState, useRef } from "react"
import { useLanguage } from "@/components/language-provider"
import { serviceIconMap } from "@/lib/service-icons"
import { serviceOrder } from "@/lib/translations"

export default function ServicesPage() {
  const [scrollY, setScrollY] = useState(0)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const services = serviceOrder.map((key) => {
    const detail = t.services.details[key]
    const Icon = serviceIconMap[detail.iconName] ?? serviceIconMap["message-square"]

    return {
      key,
      icon: Icon,
      title: detail.title,
      description: detail.description,
      features: detail.features.map((feature) => feature.title),
      benefits: detail.benefits[0]?.description ?? "",
      link: detail.link,
    }
  })

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section - Enhanced with animations and parallax */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10 animate-gradient" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, oklch(0.28 0.05 265) 1px, transparent 0)`,
              backgroundSize: "48px 48px",
              transform: `translateY(${scrollY * 0.3}px)`,
            }}
          />

          <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-float" />
          <div
            className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          />

          <div className="container relative mx-auto px-4 lg:px-6">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/15 text-secondary rounded-full text-sm font-medium border border-secondary/20 glass animate-fade-in-down">
                <span className="w-2 h-2 bg-secondary rounded-full animate-glow" />
                {t.services.page.heroPill}
              </div>

              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-foreground animate-fade-in-up leading-tight">
                {t.services.page.heroTitlePrefix}{" "}
                <span className="bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent animate-gradient">
                  {t.services.page.heroTitleHighlight}
                </span>
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-in-up delay-200">
                {t.services.page.heroDescription}
              </p>

              <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up delay-300">
                <Button size="lg" className="gap-2 group hover-lift" asChild>
                  <Link href="#servicios">
                    {t.services.page.heroPrimaryCta}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent" asChild>
                  <Link href="#contact">{t.services.page.heroSecondaryCta}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid - Enhanced with scroll animations */}
        <section id="servicios" className="py-20 lg:py-32 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `linear-gradient(oklch(0.28 0.05 265) 1px, transparent 1px), linear-gradient(90deg, oklch(0.28 0.05 265) 1px, transparent 1px)`,
              backgroundSize: "64px 64px",
            }}
          />

          <div className="container relative mx-auto px-4 lg:px-6">
            <div className="space-y-24">
              {services.map((service, index) => (
                <ServiceSection key={service.key} service={service} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Enhanced with gradient and animations */}
        <section id="contact" className="py-20 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary via-accent to-primary animate-gradient" />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "48px 48px",
            }}
          />

          <div className="container relative mx-auto px-4 lg:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="glass-strong rounded-3xl p-12 lg:p-16 text-center space-y-8 hover-lift">
                <div className="animate-fade-in-up">
                  <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">{t.services.page.ctaTitle}</h2>
                  <p className="text-lg lg:text-xl text-white/95 leading-relaxed max-w-2xl mx-auto">
                    {t.services.page.ctaDescription}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200">
                  <Button size="lg" variant="secondary" className="gap-2 group hover-lift shadow-xl" asChild>
                    <Link href="#contact">
                      {t.services.page.ctaPrimary}
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="gap-2 bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 shadow-xl"
                    asChild
                  >
                    <Link href="/">{t.services.page.ctaSecondary}</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

function ServiceSection({ service, index }: { service: any; index: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const { t } = useLanguage()
  const Icon = service.icon
  const isEven = index % 2 === 0

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isVisible ? (isEven ? "animate-fade-in-up" : "animate-fade-in-up") : "opacity-0"}`}
    >
      {/* Content */}
      <div className={`space-y-6 ${isEven ? "" : "lg:order-2"}`}>
        <div className="inline-flex w-16 h-16 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl items-center justify-center group-hover:scale-110 transition-transform">
          <Icon className="w-8 h-8 text-secondary" />
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground">{service.title}</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">{service.description}</p>

        <div className="pt-4">
          <h3 className="text-xl font-semibold text-foreground mb-4">{t.services.page.sectionFeaturesTitle}</h3>
          <ul className="space-y-3">
            {service.features.map((feature: string, fIndex: number) => (
              <li key={fIndex} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-4 p-6 bg-gradient-to-br from-secondary/5 to-accent/5 rounded-2xl border border-border">
          <p className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-secondary" />
            {t.services.page.sectionBenefitsTitle}
          </p>
          <p className="text-muted-foreground leading-relaxed">{service.benefits}</p>
        </div>

        <Button size="lg" className="gap-2 group hover-lift w-full sm:w-auto" asChild>
          <Link href={service.link}>
            {t.services.page.sectionLearnMore}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>

      {/* Visual Card */}
      <div className={`${isEven ? "" : "lg:order-1"}`}>
        <Card className="group border-2 border-border hover:border-secondary/50 shadow-lg hover-lift hover-glow transition-all">
          <CardHeader className="pb-4">
            <div className="aspect-video bg-gradient-to-br from-secondary/20 via-accent/10 to-primary/20 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent" />
              <Icon className="w-32 h-32 text-secondary/40 relative z-10" />
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-xl border border-secondary/20 group-hover:scale-105 transition-transform">
                <p className="text-3xl font-bold text-foreground">24/7</p>
                <p className="text-sm text-muted-foreground">{t.services.page.statAvailability}</p>
              </div>
              <div className="p-5 bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl border border-accent/20 group-hover:scale-105 transition-transform">
                <p className="text-3xl font-bold text-foreground">98%</p>
                <p className="text-sm text-muted-foreground">{t.services.page.statSatisfaction}</p>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-center gap-2 text-secondary font-medium text-sm group-hover:gap-3 transition-all">
              {t.services.page.viewDetails}
              <ArrowRight className="w-4 h-4" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
