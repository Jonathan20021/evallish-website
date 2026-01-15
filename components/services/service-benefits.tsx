"use client"

import { useEffect, useRef, useState } from "react"
import { useLanguage } from "@/components/language-provider"

interface Benefit {
  title: string
  description: string
}

interface ServiceBenefitsProps {
  benefits: Benefit[]
}

export function ServiceBenefits({ benefits }: ServiceBenefitsProps) {
  const { t } = useLanguage()

  return (
    <section id="benefits" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

      <div className="container relative mx-auto px-4 lg:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
          <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
            {t.services.common.benefitsEyebrow}
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            {t.services.common.benefitsTitle}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.services.common.benefitsDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} benefit={benefit} delay={index * 0.15} />
          ))}
        </div>
      </div>
    </section>
  )
}

function BenefitCard({ benefit, delay }: { benefit: Benefit; delay: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

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
      className={`group relative bg-card border-2 border-border hover:border-accent/50 rounded-2xl p-8 shadow-lg hover-lift transition-all ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="relative space-y-4">
        <div className="w-2 h-16 bg-gradient-to-b from-accent to-secondary rounded-full" />
        <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
          {benefit.title}
        </h3>
        <p className="text-base text-muted-foreground leading-relaxed">{benefit.description}</p>
      </div>
    </div>
  )
}
