"use client"

import { CheckCircle2 } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { useLanguage } from "@/components/language-provider"

interface Feature {
  title: string
  description: string
}

interface ServiceFeaturesProps {
  features: Feature[]
}

export function ServiceFeatures({ features }: ServiceFeaturesProps) {
  const { t } = useLanguage()

  return (
    <section className="py-20 lg:py-32 bg-muted/30 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(oklch(0.28 0.05 265) 1px, transparent 1px), linear-gradient(90deg, oklch(0.28 0.05 265) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="container relative mx-auto px-4 lg:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
          <div className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-6">
            {t.services.common.featuresEyebrow}
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            {t.services.common.featuresTitle}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.services.common.featuresDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ feature, delay }: { feature: Feature; delay: number }) {
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
      className={`group bg-card border-2 border-border hover:border-secondary/50 rounded-2xl p-6 hover-lift hover-glow transition-all ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 bg-secondary/15 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
          <CheckCircle2 className="w-6 h-6 text-secondary" />
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-foreground group-hover:text-secondary transition-colors">
            {feature.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
        </div>
      </div>
    </div>
  )
}
