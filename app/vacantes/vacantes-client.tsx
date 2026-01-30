"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"
import { ArrowRight, Briefcase, Users, Headphones, Laptop, HeartHandshake } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const portalUrl = "https://punch.evallishbpo.com/careers"

export function VacantesClient() {
  const { t } = useLanguage()
  const careers = t.careers

  const valueIcons = [Users, HeartHandshake, Laptop, Briefcase]
  const roleIcons = [Headphones, Briefcase, Laptop, Users]
  const highlights = careers.about.highlights.slice(0, 4)

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-background to-secondary/10 animate-gradient" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, oklch(0.28 0.05 265) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-secondary/15 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-24 w-[28rem] h-[28rem] bg-accent/10 rounded-full blur-3xl" />

          <div className="container relative mx-auto px-4 lg:px-6">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/15 text-secondary rounded-full text-sm font-medium border border-secondary/20 glass animate-fade-in-down">
                  <span className="w-2 h-2 bg-secondary rounded-full animate-glow" />
                  {careers.hero.pill}
                </div>
                <h1 className="mt-6 text-4xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] text-foreground animate-fade-in-up">
                  {careers.hero.titlePrefix}{" "}
                  <span className="bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent animate-gradient">
                    {careers.hero.titleHighlight}
                  </span>
                </h1>
                <p className="mt-6 text-lg lg:text-xl text-muted-foreground leading-relaxed animate-fade-in-up delay-200">
                  {careers.hero.description}
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
                  <Button size="lg" className="gap-2 group hover-lift" asChild>
                    <Link href={portalUrl} target="_blank" rel="noopener noreferrer">
                      {careers.hero.primaryCta}
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="bg-transparent" asChild>
                    <Link href="#vacantes">{careers.hero.secondaryCta}</Link>
                  </Button>
                </div>

                <div className="mt-10 grid grid-cols-2 gap-4">
                  {highlights.map((item) => (
                    <div key={item} className="glass-strong rounded-2xl p-4 border border-white/30">
                      <div className="flex items-start gap-3 text-sm text-foreground/80">
                        <span className="mt-2 w-2 h-2 rounded-full bg-secondary" />
                        <span>{item}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl hover-lift group">
                  <Image
                    src="/galeria/WhatsApp Image 2026-01-14 at 12.56.25 PM (4).jpeg"
                    alt="Evallish team"
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent" />
                </div>

                <div className="absolute -bottom-8 right-8 glass-strong p-5 rounded-2xl shadow-2xl border border-white/20 w-64">
                  <p className="text-xs uppercase tracking-wider text-foreground/70">{careers.openings.eyebrow}</p>
                  <p className="mt-2 text-base font-semibold text-foreground">{careers.openings.title}</p>
                  <Button size="sm" className="mt-4 w-full gap-2 group" asChild>
                    <Link href={portalUrl} target="_blank" rel="noopener noreferrer">
                      {careers.hero.primaryCta}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>

                <div className="absolute -top-8 left-6 glass-strong p-5 rounded-2xl shadow-xl border border-white/20 w-60">
                  <p className="text-xs uppercase tracking-wider text-foreground/70 mb-3">{careers.process.eyebrow}</p>
                  <div className="space-y-2 text-sm text-foreground/80">
                    {careers.process.steps.slice(0, 2).map((step, index) => (
                      <div key={step.title} className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-secondary text-white text-xs flex items-center justify-center">
                          {index + 1}
                        </span>
                        <span>{step.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Evallish */}
        <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage:
                "linear-gradient(oklch(0.28 0.05 265) 1px, transparent 1px), linear-gradient(90deg, oklch(0.28 0.05 265) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
              <div className="relative">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/galeria/WhatsApp Image 2026-01-14 at 12.54.58 PM (3).jpeg"
                    alt="Evallish facilities"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent" />
                </div>
                <div className="absolute -bottom-6 left-6 glass-strong p-5 rounded-2xl shadow-xl border border-white/20 w-64">
                  <p className="text-xs uppercase tracking-wider text-foreground/70">{careers.about.eyebrow}</p>
                  <p className="mt-2 text-base font-semibold text-foreground">{careers.about.title}</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  {careers.about.eyebrow}
                </div>
                <h2 className="text-3xl lg:text-5xl font-bold text-foreground">{careers.about.title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{careers.about.description}</p>
                <div className="grid sm:grid-cols-2 gap-6 pt-4">
                  {careers.values.map((value, index) => {
                    const Icon = valueIcons[index] ?? Users
                    return (
                      <Card
                        key={value.title}
                        className="border border-border bg-white/80 backdrop-blur-sm hover:border-secondary/50 hover-lift transition-all"
                      >
                        <CardContent className="p-6 space-y-4">
                          <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                            <Icon className="w-6 h-6 text-secondary" />
                          </div>
                          <h3 className="text-xl font-bold text-foreground">{value.title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vacancies */}
        <section id="vacantes" className="py-20 lg:py-28 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-secondary/5 to-transparent" />
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-end mb-12">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                  {careers.openings.eyebrow}
                </div>
                <h2 className="mt-6 text-3xl lg:text-5xl font-bold text-foreground">{careers.openings.title}</h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-3xl leading-relaxed">
                  {careers.openings.description}
                </p>
              </div>
              <div className="glass-strong rounded-2xl p-6 border border-white/30">
                <p className="text-sm text-foreground/70">{careers.openings.helper}</p>
                <Button size="lg" className="mt-4 w-full gap-2 group hover-lift" asChild>
                  <Link href={portalUrl} target="_blank" rel="noopener noreferrer">
                    {careers.openings.primaryCta}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {careers.openings.roles.map((role, index) => {
                const Icon = roleIcons[index] ?? Briefcase
                return (
                  <Card
                    key={role.title}
                    className="relative border border-border bg-white/90 backdrop-blur-sm hover:border-primary/50 hover-lift transition-all"
                  >
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <span className="inline-flex items-center gap-2 text-xs font-semibold text-secondary">
                          <Briefcase className="w-4 h-4" />
                          {role.type}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground">{role.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{role.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{ backgroundImage: "linear-gradient(oklch(0.28 0.05 265) 1px, transparent 1px)", backgroundSize: "64px 64px" }}
          />
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                {careers.process.eyebrow}
              </div>
              <h2 className="mt-6 text-3xl lg:text-5xl font-bold text-foreground">{careers.process.title}</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {careers.process.description}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {careers.process.steps.map((step, index) => (
                <Card
                  key={step.title}
                  className="border border-border bg-white/85 backdrop-blur-sm hover:border-secondary/40 hover-lift transition-all"
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-accent text-white flex items-center justify-center text-sm font-semibold shadow-lg">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary via-accent to-primary animate-gradient" />
          <div className="container relative mx-auto px-4 lg:px-6">
            <div className="max-w-4xl mx-auto glass-strong rounded-3xl p-12 lg:p-16 text-center space-y-8 hover-lift">
              <div>
                <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">{careers.cta.title}</h2>
                <p className="text-lg lg:text-xl text-white/95 leading-relaxed max-w-2xl mx-auto">
                  {careers.cta.description}
                </p>
              </div>
              <Button size="lg" variant="secondary" className="gap-2 group" asChild>
                <Link href={portalUrl} target="_blank" rel="noopener noreferrer">
                  {careers.cta.button}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
