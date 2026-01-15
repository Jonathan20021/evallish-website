"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ArrowRight, Phone, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/components/language-provider"
import { serviceOrder, site } from "@/lib/translations"

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { t, language, setLanguage } = useLanguage()

  const services = serviceOrder.map((key) => {
    const item = t.home.services.items[key]
    const detail = t.services.details[key]
    return {
      key,
      title: item.title,
      href: detail.link,
      description: item.description,
    }
  })

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent",
      )}
    >
      {/* Top bar */}
      <div className="hidden lg:block border-b border-gray-100 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="flex items-center gap-6 text-gray-300">
              <span>{t.nav.location}</span>
              <span className="w-px h-4 bg-gray-600" />
              <a href={site.phone.href} className="hover:text-white transition-colors flex items-center gap-2">
                <Phone className="w-3.5 h-3.5" />
                {site.phone.display}
              </a>
            </div>
            <div className="flex items-center gap-4 text-gray-300">
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={cn(
                  "text-xs font-semibold tracking-wider transition-colors",
                  language === "en" ? "text-white" : "text-gray-400 hover:text-white",
                )}
              >
                EN
              </button>
              <span className="text-gray-600">|</span>
              <button
                type="button"
                onClick={() => setLanguage("es")}
                className={cn(
                  "text-xs font-semibold tracking-wider transition-colors",
                  language === "es" ? "text-white" : "text-gray-400 hover:text-white",
                )}
              >
                ES
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11">
              <Image
                src="/evallish-logo.jpg"
                alt="Evallish BPO logo"
                fill
                sizes="44px"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900 tracking-tight">Evallish BPO</span>
              <span className="text-[10px] text-primary font-semibold tracking-[0.2em] uppercase">
                Contact Center & BPO
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <NavigationMenu viewport={false}>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/"
                      className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
                    >
                      {t.nav.menu.home}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-gray-900 font-medium">
                    {t.nav.menu.services}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white text-gray-900">
                    <ul className="grid w-[500px] gap-3 p-4 md:grid-cols-2">
                      {services.map((service) => (
                        <li key={service.key}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={service.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-50 focus:bg-gray-50"
                            >
                              <div className="text-sm font-medium text-gray-900">{service.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-500">{service.description}</p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                    <div className="border-t border-gray-100 p-4 bg-gray-50">
                      <Link
                        href="/services"
                        className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80"
                      >
                        {t.nav.viewAllServices}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/about"
                      className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
                    >
                      {t.nav.menu.about}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="#contact"
                      className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
                    >
                      {t.nav.menu.contact}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-white font-semibold h-11 px-6 rounded-lg shadow-lg shadow-primary/20"
            >
              <Link href="#contact">
                {t.nav.cta}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[400px] p-0">
              <div className="flex flex-col h-full">
                <div className="p-6 border-b">
                  <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
                    <div className="relative w-10 h-10">
                      <Image
                        src="/evallish-logo.jpg"
                        alt="Evallish BPO logo"
                        fill
                        sizes="40px"
                        className="object-contain"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-lg font-bold text-gray-900">Evallish BPO</span>
                      <span className="text-[9px] text-primary font-semibold tracking-[0.2em] uppercase">
                        Contact Center & BPO
                      </span>
                    </div>
                  </Link>
                </div>

                <div className="px-6 py-4 border-b bg-gray-50">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    {t.nav.languageLabel}
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setLanguage("en")}
                      className={cn(
                        "px-3 py-1 rounded-full text-xs font-semibold border transition-colors",
                        language === "en"
                          ? "bg-primary text-white border-primary"
                          : "bg-white text-gray-600 border-gray-200 hover:border-primary/40",
                      )}
                    >
                      EN
                    </button>
                    <button
                      type="button"
                      onClick={() => setLanguage("es")}
                      className={cn(
                        "px-3 py-1 rounded-full text-xs font-semibold border transition-colors",
                        language === "es"
                          ? "bg-primary text-white border-primary"
                          : "bg-white text-gray-600 border-gray-200 hover:border-primary/40",
                      )}
                    >
                      ES
                    </button>
                  </div>
                </div>

                <nav className="flex-1 overflow-auto py-6">
                  <div className="px-6 space-y-1">
                    <Link
                      href="/"
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between py-3 text-gray-900 font-medium hover:text-primary"
                    >
                      {t.nav.menu.home}
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </Link>
                    <Link
                      href="/services"
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between py-3 text-gray-900 font-medium hover:text-primary"
                    >
                      {t.nav.menu.services}
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </Link>
                    <Link
                      href="/about"
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between py-3 text-gray-900 font-medium hover:text-primary"
                    >
                      {t.nav.menu.about}
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </Link>
                    <Link
                      href="#contact"
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between py-3 text-gray-900 font-medium hover:text-primary"
                    >
                      {t.nav.menu.contact}
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </Link>
                  </div>
                </nav>

                <div className="p-6 border-t bg-gray-50">
                  <Button asChild className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-semibold">
                    <Link href="#contact" onClick={() => setOpen(false)}>
                      {t.nav.cta}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
