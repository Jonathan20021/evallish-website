"use client"

import { useEffect, useRef, useState } from "react"
import { Users, TrendingUp, Headphones, Globe, Award, Clock } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let start = 0
          const end = value
          const duration = 2000
          const increment = end / (duration / 16)

          const timer = setInterval(() => {
            start += increment
            if (start >= end) {
              setCount(end)
              clearInterval(timer)
            } else {
              setCount(Math.floor(start))
            }
          }, 16)
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value, hasAnimated])

  return (
    <div ref={ref} className="text-4xl lg:text-5xl font-bold text-gray-900">
      {count}
      {suffix}
    </div>
  )
}

export function StatsSection() {
  const { t } = useLanguage()
  const statIcons = [Clock, Users, Headphones, TrendingUp, Globe, Award]

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            {t.home.stats.eyebrow}
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">{t.home.stats.title}</h2>
          <p className="text-lg text-gray-600">
            {t.home.stats.description}
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {t.home.stats.items.map((stat, index) => {
            const Icon = statIcons[index] ?? Clock
            return (
              <div
                key={index}
                className="relative p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <div className="text-lg font-semibold text-gray-900 mt-2 mb-1">{stat.label}</div>
                <p className="text-sm text-gray-500">{stat.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
