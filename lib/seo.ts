import type { Metadata } from "next"

const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://evallishbpo.com"

export const siteUrl = rawSiteUrl.replace(/\/$/, "")
export const metadataBase = new URL(siteUrl)

export const siteName = "Evallish BPO"
export const defaultTitle = "Evallish BPO | Contact Center & BPO"
export const defaultDescription =
  "Evallish BPO is a business process outsourcing company located in Santiago, Dominican Republic. We handle inbound and outbound calls, emails, and live chat to improve customer loyalty and revenue."

export const ogImage = "/evallish-logo.jpg"
export const twitterImage = "/evallish-logo.jpg"

export const contact = {
  phone: "+18094178954",
  email: "info@evallishbpo.com",
}

export const address = {
  streetAddress: "Las Tres Cruces, Jacagua. San Francisco de Jacagua",
  addressLocality: "Santiago",
  addressRegion: "Santiago",
  postalCode: "50000",
  addressCountry: "DO",
}

export const socialLinks = [
  "https://www.facebook.com/EvallishContactCenter?locale=es_LA",
  "https://www.instagram.com/evallishbpo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
]

type BuildMetadataOptions = {
  title: string
  description: string
  path: string
}

export function buildMetadata({ title, description, path }: BuildMetadataOptions): Metadata {
  const canonical = path.startsWith("/") ? path : `/${path}`

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${siteName} logo`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [twitterImage],
    },
  }
}
