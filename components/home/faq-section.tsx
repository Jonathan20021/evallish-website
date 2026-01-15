"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"

export function FaqSection() {
  const { t } = useLanguage()

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr,1.5fr] gap-12 lg:gap-20">
          {/* Left column - Header */}
          <div className="lg:self-start">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">{t.home.faq.eyebrow}</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">{t.home.faq.title}</h2>
            <p className="text-lg text-gray-600 mb-8">{t.home.faq.description}</p>

            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.home.faq.cardTitle}</h3>
              <p className="text-gray-600 mb-4">{t.home.faq.cardDescription}</p>
              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white">
                <Link href="#contact">{t.home.faq.cardCta}</Link>
              </Button>
            </div>
          </div>

          {/* Right column - Accordion */}
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {t.home.faq.items.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-gray-200 rounded-xl px-6 bg-white hover:border-primary/30 transition-colors data-[state=open]:border-primary/30 data-[state=open]:shadow-lg"
                >
                  <AccordionTrigger className="text-left font-semibold text-base hover:no-underline hover:text-primary transition-colors py-5 gap-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pb-5">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
