"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { serviceIconMap, type ServiceIconName } from "@/lib/service-icons"
import { useLanguage } from "@/components/language-provider"

interface ServiceHeroProps {
  iconName: ServiceIconName
  title: string
  subtitle: string
  description: string
  image: string
}

export function ServiceHero({ iconName, title, subtitle, description, image }: ServiceHeroProps) {
  const [scrollY, setScrollY] = useState(0)
  const { t } = useLanguage()
  const Icon = serviceIconMap[iconName] ?? serviceIconMap["message-square"]

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, oklch(0.28 0.05 265) 1px, transparent 0)`,
          backgroundSize: "48px 48px",
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      />

      <div className="container relative mx-auto px-4 lg:px-6">
        <div className="mb-8 animate-fade-in-down">
          <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-foreground" asChild>
            <Link href="/services">
              <ArrowLeft className="w-4 h-4" />
              {t.services.common.backToServices}
            </Link>
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 px-5 py-3 bg-secondary/15 text-secondary rounded-2xl border border-secondary/20 glass animate-fade-in-up">
              <div className="w-10 h-10 bg-secondary/20 rounded-xl flex items-center justify-center">
                <Icon className="w-6 h-6" />
              </div>
              <span className="font-semibold">{title}</span>
            </div>

            <div className="space-y-4 animate-fade-in-up delay-100">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-foreground">{subtitle}</h1>
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">{description}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-200">
              <Button size="lg" className="gap-2 text-base group hover-lift" asChild>
                <Link href="#contact">
                  {t.services.common.requestConsultation}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 text-base bg-transparent" asChild>
                <Link href="#benefits">{t.services.common.learnBenefits}</Link>
              </Button>
            </div>
          </div>

          <div className="relative lg:h-[500px] animate-fade-in-left delay-300">
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl hover-lift group">
              <img
                src={image || "/galeria/WhatsApp Image 2026-01-14 at 12.54.58 PM (1).jpeg"}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
