"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import {
  Target,
  Eye,
  Heart,
  Award,
  Users,
  TrendingUp,
  Globe,
  Shield,
  ShieldCheck,
  Zap,
  CheckCircle,
  ArrowRight,
  Headphones,
  Stethoscope,
  Landmark,
  Hotel,
  Truck,
  Factory,
  GraduationCap,
  Building2,
  Settings,
  UserCog,
  LineChart,
} from "lucide-react"
import Link from "next/link"
import { useEffect, useState, useRef } from "react"
import { useLanguage } from "@/components/language-provider"

export default function AboutPage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  const { t } = useLanguage()
  const hero = t.about.hero
  const values = t.about.values.items
  const milestones = t.about.journey.items
  const stats = t.about.stats
  const advantages = t.about.advantages.items
  const features = t.about.features
  const solutions = t.about.solutions
  const team = t.about.team
  const industries = t.about.industries
  const trustedBy = t.about.trustedBy
  const offerings = t.about.offerings
  const overview = t.about.overview
  const valueIcons = [Users, Shield, Zap, Award, Users, CheckCircle]
  const advantageIcons = [Globe, Award, TrendingUp, Zap]
  const featureIcons = [Users, Headphones, TrendingUp, ShieldCheck]
  const industryIcons = [
    Headphones,
    Stethoscope,
    Landmark,
    Hotel,
    Truck,
    Factory,
    GraduationCap,
    Building2,
  ]
  const offeringIcons = [Settings, UserCog, GraduationCap, ShieldCheck, LineChart, Headphones]
  const getInitials = (value: string) =>
    value
      .split(" ")
      .map((part) => part[0])
      .join("")
      .slice(0, 3)
      .toUpperCase()

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section - Enhanced with parallax and animations */}
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
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/15 text-secondary rounded-full text-sm font-medium border border-secondary/20 glass animate-fade-in-down">
                  <span className="w-2 h-2 bg-secondary rounded-full animate-glow" />
                  {hero.pill}
                </div>

                <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] text-foreground animate-fade-in-up">
                  {hero.titlePrefix}{" "}
                  <span className="bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent animate-gradient">
                    {hero.titleHighlight}
                  </span>
                </h1>

                <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed animate-fade-in-up delay-200">
                  {hero.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
                  <Button size="lg" className="gap-2 group hover-lift" asChild>
                    <Link href="#contact">
                      {hero.primaryCta}
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="bg-transparent" asChild>
                    <Link href="/services">{hero.secondaryCta}</Link>
                  </Button>
                </div>
              </div>

              <div className="relative animate-fade-in-right delay-300">
                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl hover-lift group">
                  <img
                    src="/galeria/WhatsApp Image 2026-01-14 at 12.54.58 PM (3).jpeg"
                    alt={hero.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent" />
                </div>

                <div className="absolute -bottom-6 -left-6 glass-strong p-6 rounded-2xl shadow-2xl border border-white/20 animate-float">
                  <p className="text-sm text-foreground/70 mb-1 font-medium">{hero.satisfactionLabel}</p>
                  <p className="text-5xl font-bold text-foreground">98%</p>
                </div>

                <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-secondary to-accent rounded-full opacity-20 blur-2xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section - Added animations and improved design */}
        <section className="py-20 lg:py-32 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `linear-gradient(oklch(0.28 0.05 265) 1px, transparent 1px), linear-gradient(90deg, oklch(0.28 0.05 265) 1px, transparent 1px)`,
              backgroundSize: "64px 64px",
            }}
          />

          <div className="container relative mx-auto px-4 lg:px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {stats.map((stat, index) => (
                <StatCard key={index} stat={stat} delay={index * 0.1} />
              ))}
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values - Enhanced with better animations and layout */}
        <section className="py-20 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary animate-gradient" />
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "48px 48px",
            }}
          />

          <div className="container relative mx-auto px-4 lg:px-6">
            <div className="max-w-6xl mx-auto space-y-20">
              {/* Mission & Vision */}
              <div className="grid lg:grid-cols-2 gap-12">
                <MissionVisionCard
                  icon={Target}
                  title={t.about.mission.title}
                  description={t.about.mission.description}
                  delay={0}
                />

                <MissionVisionCard
                  icon={Eye}
                  title={t.about.vision.title}
                  description={t.about.vision.description}
                  delay={0.2}
                />
              </div>

              {/* Values */}
              <div className="space-y-12">
                <div className="text-center animate-fade-in-up">
                  <div className="inline-flex w-20 h-20 glass-strong rounded-2xl items-center justify-center mb-6">
                    <Heart className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">{t.about.values.title}</h2>
                  <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
                    {t.about.values.description}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {values.map((value, index) => (
                    <ValueCard
                      key={index}
                      value={{ ...value, icon: valueIcons[index] ?? Users }}
                      delay={index * 0.1}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `linear-gradient(oklch(0.28 0.05 265) 1px, transparent 1px), linear-gradient(90deg, oklch(0.28 0.05 265) 1px, transparent 1px)`,
              backgroundSize: "64px 64px",
            }}
          />
          <div className="container relative mx-auto px-4 lg:px-6">
            <div className="text-center mb-16 animate-fade-in-up">
              <div className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-6">
                {features.eyebrow}
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">{features.title}</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {features.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.items.map((feature, index) => {
                const Icon = featureIcons[index] ?? Users
                return (
                  <Card
                    key={feature.title}
                    className="border border-border hover:border-secondary/40 hover-lift transition-all"
                  >
                    <CardContent className="p-6 space-y-4">
                      <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-secondary" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 lg:py-32 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in-up">
              <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
                {solutions.eyebrow}
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">{solutions.title}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{solutions.description}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {solutions.paragraphs.map((paragraph) => (
                <Card key={paragraph} className="bg-white/80 border border-border/60 shadow-sm">
                  <CardContent className="p-6 text-muted-foreground leading-relaxed">{paragraph}</CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-16 animate-fade-in-up">
              <div className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-6">
                {team.eyebrow}
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">{team.title}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                {team.description}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.members.map((member) => (
                <Card
                  key={member.name}
                  className="border border-border hover:border-secondary/40 hover-lift transition-all"
                >
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="relative w-24 h-24 mx-auto rounded-full border border-border bg-gradient-to-br from-secondary/10 via-background to-primary/10 overflow-hidden flex items-center justify-center">
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={`${member.name} portrait`}
                          fill
                          sizes="96px"
                          className="object-cover"
                        />
                      ) : (
                        <span className="text-2xl font-semibold text-foreground">
                          {getInitials(member.name)}
                        </span>
                      )}
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-foreground">{member.name}</p>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 lg:py-32 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-16 animate-fade-in-up">
              <div className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-6">
                {industries.eyebrow}
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">{industries.title}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                {industries.description}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.items.map((industry, index) => {
                const Icon = industryIcons[index] ?? Headphones
                return (
                  <div
                    key={industry}
                    className="flex items-center gap-4 p-5 bg-white rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-base font-semibold text-foreground">{industry}</span>
                  </div>
                )
              })}
            </div>

            <p className="mt-10 text-center text-sm text-muted-foreground">{industries.footer}</p>
          </div>
        </section>

        {/* Trusted By Section */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-16 animate-fade-in-up">
              <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
                {trustedBy.eyebrow}
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">{trustedBy.title}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                {trustedBy.description}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {trustedBy.items.map((client, index) => (
                <div
                  key={`${client}-${index}`}
                  className="flex flex-col items-center justify-center gap-4 rounded-xl border border-border bg-white p-6 shadow-sm"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-semibold">
                    {getInitials(client)}
                  </div>
                  <span className="text-xs text-muted-foreground">{client}</span>
                </div>
              ))}
            </div>

            <p className="mt-10 text-center text-sm text-muted-foreground">{trustedBy.footer}</p>
          </div>
        </section>

        {/* Offerings Section */}
        <section className="py-20 lg:py-32 bg-[#0f172a] text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#0b1120] to-[#101b37]" />
          <div className="container relative mx-auto px-4 lg:px-6">
            <div className="text-center mb-16 animate-fade-in-up">
              <div className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium mb-6">
                {offerings.eyebrow}
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">{offerings.title}</h2>
              <p className="text-lg text-white/80 leading-relaxed max-w-3xl mx-auto">{offerings.description}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {offerings.items.map((offering, index) => {
                const Icon = offeringIcons[index] ?? Settings
                return (
                  <div
                    key={offering.title}
                    className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{offering.title}</h3>
                    <p className="text-sm text-white/70 mb-6 leading-relaxed">{offering.description}</p>
                    <Link href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-white">
                      {offering.cta}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-center">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/galeria/WhatsApp Image 2026-01-14 at 12.56.25 PM (4).jpeg"
                  alt={overview.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent" />
              </div>

              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                  {overview.eyebrow}
                </div>
                <h2 className="text-3xl lg:text-5xl font-bold text-foreground">{overview.title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{overview.description}</p>
                <ul className="space-y-3">
                  {overview.highlights.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-base text-foreground">
                      <CheckCircle className="w-5 h-5 text-secondary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button size="lg" className="gap-2 hover-lift" asChild>
                  <Link href="#contact">
                    {overview.cta}
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline - Enhanced with improved animations */}
        <section className="py-20 lg:py-32 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `linear-gradient(oklch(0.28 0.05 265) 1px, transparent 1px), linear-gradient(90deg, oklch(0.28 0.05 265) 1px, transparent 1px)`,
              backgroundSize: "64px 64px",
            }}
          />

          <div className="container relative mx-auto px-4 lg:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16 animate-fade-in-up">
                <div className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-6">
                  {t.about.journey.eyebrow}
                </div>
                <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">{t.about.journey.title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{t.about.journey.description}</p>
              </div>

              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <TimelineItem
                    key={index}
                    milestone={milestone}
                    milestoneTag={t.about.journey.milestoneTag}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us - Enhanced cards with better hover effects */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16 animate-fade-in-up">
                <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
                  {t.about.advantages.eyebrow}
                </div>
                <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">{t.about.advantages.title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{t.about.advantages.description}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {advantages.map((advantage, index) => (
                  <AdvantageCard
                    key={index}
                    advantage={{ ...advantage, icon: advantageIcons[index] ?? Globe }}
                    delay={index * 0.15}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Enhanced with gradient background and animations */}
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
                  <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">{t.about.cta.title}</h2>
                  <p className="text-lg lg:text-xl text-white/95 leading-relaxed max-w-2xl mx-auto">
                    {t.about.cta.description}
                  </p>
                </div>

                <Button
                  size="lg"
                  variant="secondary"
                  className="gap-2 group hover-lift shadow-xl animate-fade-in-up delay-200"
                  asChild
                >
                  <Link href="#contact">
                    {t.about.cta.button}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

function StatCard({ stat, delay }: { stat: { value: string; label: string }; delay: number }) {
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
      className={`group text-center p-8 bg-gradient-to-br from-card to-muted/50 rounded-2xl border-2 border-border hover:border-secondary/50 shadow-lg hover-lift transition-all ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <p className="text-5xl lg:text-6xl font-bold text-foreground mb-3 group-hover:text-secondary transition-colors">
        {stat.value}
      </p>
      <p className="text-sm lg:text-base text-muted-foreground font-medium">{stat.label}</p>
    </div>
  )
}

function MissionVisionCard({
  icon: Icon,
  title,
  description,
  delay,
}: {
  icon: any
  title: string
  description: string
  delay: number
}) {
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
      className={`group space-y-6 glass-strong rounded-2xl p-8 hover-lift hover:bg-white/15 transition-all ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="inline-flex w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all">
        <Icon className="w-10 h-10 text-white" />
      </div>
      <h2 className="text-3xl lg:text-4xl font-bold text-white">{title}</h2>
      <p className="text-lg text-white/90 leading-relaxed">{description}</p>
    </div>
  )
}

function ValueCard({ value, delay }: { value: any; delay: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const Icon = value.icon

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
    <Card
      ref={ref}
      className={`group glass-strong bg-white/10 text-white border-white/20 hover:bg-white/15 hover-lift transition-all ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <CardContent className="p-6 space-y-4">
        <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all">
          <Icon className="w-7 h-7 text-white" />
        </div>
        <h3 className="text-xl font-bold text-white">{value.title}</h3>
        <p className="text-sm text-white/85 leading-relaxed">{value.description}</p>
      </CardContent>
    </Card>
  )
}

function TimelineItem({
  milestone,
  milestoneTag,
  index,
}: {
  milestone: any
  milestoneTag: string
  index: number
}) {
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
      className={`relative pl-12 pb-8 border-l-2 border-secondary/30 last:border-l-0 last:pb-0 ${isVisible ? "animate-fade-in-left" : "opacity-0"}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="absolute -left-3 top-0 w-6 h-6 bg-secondary rounded-full border-4 border-background shadow-lg animate-glow" />
      <div className="space-y-3 p-6 bg-card rounded-xl border border-border hover:border-secondary/50 hover-lift transition-all">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-4xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            {milestone.year}
          </span>
          <span className="px-3 py-1 bg-secondary/15 text-secondary rounded-full text-xs font-semibold uppercase tracking-wider">
            {milestoneTag}
          </span>
        </div>
        <h3 className="text-xl lg:text-2xl font-bold text-foreground">{milestone.title}</h3>
        <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
      </div>
    </div>
  )
}

function AdvantageCard({ advantage, delay }: { advantage: any; delay: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const Icon = advantage.icon

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
    <Card
      ref={ref}
      className={`group border-2 border-border hover:border-accent/50 hover-lift hover-glow transition-all ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <CardContent className="p-8 space-y-5">
        <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all">
          <Icon className="w-8 h-8 text-accent" />
        </div>
        <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
          {advantage.title}
        </h3>
        <p className="text-base text-muted-foreground leading-relaxed">{advantage.description}</p>
      </CardContent>
    </Card>
  )
}
