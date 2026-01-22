import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { LanguageProvider } from "@/components/language-provider"
import {
  address,
  contact,
  defaultDescription,
  defaultTitle,
  metadataBase,
  siteName,
  siteUrl,
  socialLinks,
} from "@/lib/seo"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  metadataBase,
  title: defaultTitle,
  description: defaultDescription,
  applicationName: siteName,
  generator: "v0.app",
  creator: siteName,
  publisher: siteName,
  category: "Business Services",
  keywords: [
    "BPO",
    "contact center",
    "customer service",
    "Dominican Republic",
    "telemarketing",
    "technical support",
    "outsourcing",
    "call center",
    "nearshore",
    "order taking",
    "appointment setting",
    "market research",
  ],
  authors: [{ name: siteName, url: siteUrl }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: siteName,
      legalName: siteName,
      url: siteUrl,
      logo: `${siteUrl}/evallish-logo.jpg`,
      image: `${siteUrl}/galeria/WhatsApp Image 2026-01-14 at 12.54.58 PM (3).jpeg`,
      description: defaultDescription,
      foundingDate: "2006",
      sameAs: socialLinks,
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: contact.phone,
          contactType: "sales",
          email: contact.email,
          availableLanguage: ["English", "Spanish"],
        },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: address.streetAddress,
        addressLocality: address.addressLocality,
        addressRegion: address.addressRegion,
        postalCode: address.postalCode,
        addressCountry: address.addressCountry,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: siteName,
      url: siteUrl,
      description: defaultDescription,
      inLanguage: "en",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
  ]

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} font-sans antialiased`}>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
