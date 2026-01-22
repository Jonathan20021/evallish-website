"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Phone, Mail, MapPin, Globe } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { site } from "@/lib/translations"

export function CtaSection() {
  const { t, language } = useLanguage()
  const contact = t.home.contact
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const statusMessage =
    language === "es"
      ? {
          success: "¡Gracias! Recibimos tu solicitud y te contactaremos pronto.",
          error: "No pudimos enviar tu solicitud. Intenta de nuevo.",
        }
      : {
          success: "Thanks! We received your request and will reach out soon.",
          error: "We could not send your request. Please try again.",
        }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (isSubmitting) return

    setIsSubmitting(true)
    setStatus("idle")

    const form = event.currentTarget
    const formData = new FormData(form)
    const body = new URLSearchParams()
    formData.forEach((value, key) => {
      body.append(key, String(value))
    })

    try {
      const response = await fetch("https://formspree.io/f/mwvvdewp", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      })
      if (!response.ok) {
        throw new Error("Request failed")
      }
      form.reset()
      setStatus("success")
    } catch (error) {
      setStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Content */}
          <div>
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">{contact.eyebrow}</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {contact.title}
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              {contact.description}
            </p>

            {/* Contact info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{contact.info.call}</h3>
                  <a href={site.phone.href} className="text-gray-600 hover:text-primary transition-colors">
                    {site.phone.display}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{contact.info.email}</h3>
                  <a href={`mailto:${site.email}`} className="text-gray-600 hover:text-primary transition-colors">
                    {site.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{contact.info.visit}</h3>
                  <a
                    href={site.mapLink}
                    className="text-gray-600 hover:text-primary transition-colors"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {site.address[language]}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{contact.info.model}</h3>
                  <p className="text-gray-600">{site.serviceModel[language]}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 lg:p-10">
            <h3 className="text-xl font-bold text-gray-900 mb-2">{contact.form.title}</h3>
            <p className="text-gray-600 mb-8">{contact.form.description}</p>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    {contact.form.firstName}
                  </label>
                  <Input
                    id="firstName"
                    name="firstName"
                    required
                    placeholder={contact.form.placeholders.firstName}
                    className="h-12 bg-gray-50 border-gray-200"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    {contact.form.lastName}
                  </label>
                  <Input
                    id="lastName"
                    name="lastName"
                    required
                    placeholder={contact.form.placeholders.lastName}
                    className="h-12 bg-gray-50 border-gray-200"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  {contact.form.workEmail}
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder={contact.form.placeholders.workEmail}
                  className="h-12 bg-gray-50 border-gray-200"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  {contact.form.company}
                </label>
                <Input
                  id="company"
                  name="company"
                  required
                  placeholder={contact.form.placeholders.company}
                  className="h-12 bg-gray-50 border-gray-200"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  {contact.form.serviceInterest}
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  className="w-full h-12 px-4 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:ring-2 focus:ring-primary/20 focus:border-primary"
                >
                  <option value="">{contact.form.placeholders.serviceDefault}</option>
                  {contact.form.services.map((service) => (
                    <option key={service.value} value={service.value}>
                      {service.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  {contact.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder={contact.form.placeholders.message}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-semibold text-base"
              >
                {isSubmitting ? (language === "es" ? "Enviando..." : "Sending...") : contact.form.submit}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>

              {status !== "idle" && (
                <p
                  className={`text-sm text-center ${
                    status === "success" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {status === "success" ? statusMessage.success : statusMessage.error}
                </p>
              )}

              <p className="text-xs text-gray-500 text-center">
                {contact.form.privacyPrefix}{" "}
                <Link href="#" className="text-primary hover:underline">
                  {contact.form.privacyLink}
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
