"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"

export function HeroSection() {
  const { t } = useLanguage()
  const hero = t.home.hero

  return (
    <section className="relative pt-32 lg:pt-44 pb-20 lg:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-primary/5" />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              {hero.pill}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-6 animate-fade-up delay-100">
              {hero.titlePrefix}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">
                {hero.titleHighlight}
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-8 animate-fade-up delay-200">
              {hero.description}
            </p>

            {/* Feature list */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10 animate-fade-up delay-300">
              {hero.features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-400">
              <Button
                asChild
                size="lg"
                className="h-14 px-8 text-base font-semibold bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20"
              >
                <Link href="/about">
                  {hero.primaryCta}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 px-8 text-base font-semibold border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 bg-transparent"
              >
                <Link href="/services">
                  <Play className="w-5 h-5 mr-2" />
                  {hero.secondaryCta}
                </Link>
              </Button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative animate-fade-up delay-300">
            <div className="relative aspect-[4/3] lg:aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
              <Image
                src="/galeria/WhatsApp Image 2026-01-14 at 12.54.58 PM (1).jpeg"
                alt="Evallish operations floor"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                priority
              />
              <video
                className="absolute inset-0 h-full w-full object-cover"
                poster="/galeria/WhatsApp Image 2026-01-14 at 12.54.58 PM (1).jpeg"
                autoPlay
                controls
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source src="/evallish-overview.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent pointer-events-none" />

              {/* Stats overlay */}
              <div className="absolute bottom-16 left-6 right-6 pointer-events-none">
                <div className="flex gap-4">
                  {hero.stats.map((stat) => (
                    <div key={stat.label} className="flex-1 bg-white/90 backdrop-blur rounded-xl p-4 shadow-lg">
                      <div className="text-3xl font-bold text-primary">{stat.value}</div>
                      <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 lg:-right-8 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">{hero.badge.value}</div>
                  <div className="text-sm text-gray-500">{hero.badge.label}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Logos section */}
        <div className="mt-20 lg:mt-28 pt-12 border-t border-gray-200 animate-fade-up delay-500">
          <p className="text-center text-sm font-medium text-gray-500 uppercase tracking-wider mb-8">
            {hero.channelsTitle}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale">
            {hero.channels.map((channel) => (
              <div key={channel} className="text-xl font-semibold text-gray-400">
                {channel}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
