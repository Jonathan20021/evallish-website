"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { CtaSection } from "@/components/home/cta-section"

export default function BlogPage() {
  const { t } = useLanguage()
  const blog = t.blog

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10 animate-gradient" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, oklch(0.28 0.05 265) 1px, transparent 0)`,
              backgroundSize: "48px 48px",
            }}
          />

          <div className="container relative mx-auto px-4 lg:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/15 text-secondary rounded-full text-sm font-medium border border-secondary/20 glass animate-fade-in-down">
                <span className="w-2 h-2 bg-secondary rounded-full animate-glow" />
                {blog.eyebrow}
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-foreground animate-fade-in-up leading-tight">
                {blog.title}
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed animate-fade-in-up delay-200">
                {blog.description}
              </p>

              <div className="flex justify-center animate-fade-in-up delay-300">
                <Button size="lg" className="gap-2 group hover-lift" asChild>
                  <Link href="#contact">
                    {blog.cta}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
