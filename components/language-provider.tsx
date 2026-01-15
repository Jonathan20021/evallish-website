"use client"

import { createContext, useContext, useEffect, useMemo, useState } from "react"
import { translations, type Language } from "@/lib/translations"

type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  toggleLanguage: () => void
  t: (typeof translations)[Language]
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

const STORAGE_KEY = "evallish-language"

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === "en" || stored === "es") {
      setLanguage(stored)
      return
    }

    const browserLanguage = window.navigator.language.toLowerCase()
    if (browserLanguage.startsWith("es")) {
      setLanguage("es")
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language)
    document.documentElement.lang = language
  }, [language])

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage: () => setLanguage((prev) => (prev === "en" ? "es" : "en")),
      t: translations[language],
    }),
    [language],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }

  return context
}
