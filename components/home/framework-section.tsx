"use client"

import { Target, Eye, Heart, Sparkles, Shield, Users, Lightbulb, Handshake, BadgeCheck } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function FrameworkSection() {
  const { t } = useLanguage()
  const values = t.home.framework.values
  const valueIcons = [Users, Shield, Lightbulb, Sparkles, Handshake, BadgeCheck]

  return (
    <section className="py-24 lg:py-32 bg-[#0f172a] text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            {t.home.framework.eyebrow}
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">{t.home.framework.title}</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">{t.home.framework.description}</p>
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Mission */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-10 h-full hover:bg-white/10 transition-colors">
              <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{t.home.framework.missionTitle}</h3>
              <p className="text-gray-300 leading-relaxed text-lg">{t.home.framework.missionDescription}</p>
            </div>
          </div>

          {/* Vision */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-10 h-full hover:bg-white/10 transition-colors">
              <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{t.home.framework.visionTitle}</h3>
              <p className="text-gray-300 leading-relaxed text-lg">{t.home.framework.visionDescription}</p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 rounded-2xl" />
          <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center">
                <Heart className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{t.home.framework.valuesTitle}</h3>
                <p className="text-gray-400">{t.home.framework.valuesSubtitle}</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => {
                const Icon = valueIcons[index] ?? Users
                return (
                  <div
                    key={index}
                    className="group p-6 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-primary/30 transition-all"
                  >
                    <Icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                    <h4 className="text-lg font-semibold text-white mb-2">{value.label}</h4>
                    <p className="text-sm text-gray-400">{value.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
