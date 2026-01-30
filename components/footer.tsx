"use client"

import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Instagram, MessageCircle } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { serviceOrder, site } from "@/lib/translations"

const socialLinks = [
  { name: "Facebook", href: "https://www.facebook.com/EvallishContactCenter?locale=es_LA", icon: Facebook },
  {
    name: "Instagram",
    href: "https://www.instagram.com/evallishbpo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    icon: Instagram,
  },
  { name: "WhatsApp", href: site.whatsapp, icon: MessageCircle },
]

export function Footer() {
  const currentYear = new Date().getFullYear()
  const { t, language } = useLanguage()
  const services = serviceOrder.map((key) => ({
    name: t.services.details[key].title,
    href: t.services.details[key].link,
  }))

  const quickLinks = [
    { name: t.footer.quickLinks.home, href: "/" },
    { name: t.footer.quickLinks.about, href: "/about" },
    { name: t.footer.quickLinks.solutions, href: "/services" },
    { name: t.footer.quickLinks.blogs, href: "/blog" },
    { name: t.footer.quickLinks.careers, href: "/vacantes" },
    { name: t.footer.quickLinks.contact, href: "#contact" },
  ]

  const contactLinks = [
    { name: t.footer.contactLinks.whatsapp, href: site.whatsapp },
    { name: t.footer.contactLinks.email, href: `mailto:${site.email}` },
    { name: t.footer.contactLinks.map, href: site.mapLink },
  ]

  return (
    <footer className="bg-[#0f172a] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-11 h-11">
                <Image src="/evallish-logo.jpg" alt="Evallish BPO logo" fill sizes="44px" className="object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white">Evallish BPO</span>
                <span className="text-[9px] text-primary font-semibold tracking-[0.2em] uppercase">
                  Contact Center & BPO
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">{t.footer.tagline}</p>

            {/* Contact info */}
            <div className="space-y-3">
              <a
                href={site.phone.href}
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                {site.phone.display}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                {site.email}
              </a>
              <div className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>{site.address[language]}</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">{t.footer.columns.services}</h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">{t.footer.columns.quickLinks}</h3>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">{t.footer.columns.contact}</h3>
            <ul className="space-y-3">
              {contactLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">{t.footer.columns.newsletter}</h3>
            <p className="text-sm text-gray-400 mb-4">{t.footer.newsletterText}</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder={t.footer.newsletterPlaceholder}
                className="flex-1 h-10 px-4 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button
                type="submit"
                className="h-10 px-4 bg-primary hover:bg-primary/90 text-white text-sm font-medium rounded-lg transition-colors"
              >
                {t.footer.newsletterButton}
              </button>
            </form>

            {/* Social links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                    aria-label={item.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">(c) {currentYear} Evallish BPO. {t.footer.bottom.rights}</p>
            <div className="flex items-center gap-6">
              <span className="text-sm text-gray-500">{t.footer.bottom.language}</span>
              <span className="w-px h-4 bg-white/10" />
              <span className="text-sm text-gray-500">{t.footer.bottom.model}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
