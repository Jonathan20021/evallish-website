"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { site } from "@/lib/translations"

interface ServiceCtaProps {
  title: string
  description: string
}

export function ServiceCta({ title, description }: ServiceCtaProps) {
  const { t } = useLanguage()

  return (
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
            <div className="space-y-6 animate-fade-in-up">
              <h2 className="text-3xl lg:text-5xl font-bold text-white">{title}</h2>
              <p className="text-lg lg:text-xl text-white/95 leading-relaxed max-w-2xl mx-auto">{description}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200">
              <Button size="lg" variant="secondary" className="gap-2 text-base group hover-lift shadow-xl" asChild>
                <Link href="#contact">
                  {t.services.common.ctaButton}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 text-base bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 shadow-xl"
                asChild
              >
                <a href={site.phone.href}>
                  <Phone className="w-5 h-5" />
                  {site.phone.display}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
