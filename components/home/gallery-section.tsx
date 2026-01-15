"use client"

import Image from "next/image"
import { useLanguage } from "@/components/language-provider"

const galleryImages = [
  {
    src: "/galeria/WhatsApp Image 2026-01-14 at 12.54.58 PM (3).jpeg",
    alt: "Evallish headquarters exterior",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/galeria/WhatsApp Image 2026-01-14 at 12.54.58 PM (1).jpeg",
    alt: "Open office floor with red columns",
    className: "md:row-span-2",
  },
  {
    src: "/galeria/WhatsApp Image 2026-01-14 at 12.54.58 PM (2).jpeg",
    alt: "Conference room with green chairs",
  },
  {
    src: "/galeria/WhatsApp Image 2026-01-14 at 12.56.25 PM (1).jpeg",
    alt: "Interior staircase",
    className: "md:row-span-2",
  },
  {
    src: "/galeria/WhatsApp Image 2026-01-14 at 12.56.25 PM (2).jpeg",
    alt: "Outdoor terrace area",
  },
  {
    src: "/galeria/WhatsApp Image 2026-01-14 at 12.56.25 PM (3).jpeg",
    alt: "Cubicle row in production floor",
  },
  {
    src: "/galeria/WhatsApp Image 2026-01-14 at 12.56.25 PM (4).jpeg",
    alt: "Glass partitioned workspace",
  },
  {
    src: "/galeria/WhatsApp Image 2026-01-14 at 12.56.25 PM (5).jpeg",
    alt: "Open plan office floor",
  },
  {
    src: "/galeria/WhatsApp Image 2026-01-14 at 12.56.25 PM (6).jpeg",
    alt: "Operations floor and glass wall",
  },
  {
    src: "/galeria/WhatsApp Image 2026-01-14 at 12.56.25 PM (7).jpeg",
    alt: "Operations wall with screens",
  },
  {
    src: "/galeria/WhatsApp Image 2026-01-14 at 12.56.25 PM.jpeg",
    alt: "Operations floor overview",
  },
  {
    src: "/galeria/WhatsApp Image 2026-01-14 at 12.56.26 PM (1).jpeg",
    alt: "Large open workspace",
  },
  {
    src: "/galeria/WhatsApp Image 2026-01-14 at 12.56.26 PM (2).jpeg",
    alt: "Glass entry with plants",
  },
  {
    src: "/galeria/WhatsApp Image 2026-01-14 at 12.56.26 PM (3).jpeg",
    alt: "Workstations with computers",
  },
  {
    src: "/galeria/WhatsApp Image 2026-01-14 at 12.56.26 PM (4).jpeg",
    alt: "Agent workstations",
  },
  {
    src: "/galeria/WhatsApp Image 2026-01-14 at 12.56.26 PM (5).jpeg",
    alt: "Meeting room seating",
    className: "md:col-span-2",
  },
  {
    src: "/galeria/WhatsApp Image 2026-01-14 at 12.56.26 PM (6).jpeg",
    alt: "Meeting room with view",
  },
  {
    src: "/galeria/WhatsApp Image 2026-01-14 at 12.56.26 PM (7).jpeg",
    alt: "Glass corridor with plants",
  },
  {
    src: "/galeria/WhatsApp Image 2026-01-14 at 12.56.26 PM.jpeg",
    alt: "Open workspace with red columns",
  },
  {
    src: "/galeria/WhatsApp Image 2026-01-14 at 12.56.27 PM (1).jpeg",
    alt: "Lobby seating area",
  },
  {
    src: "/galeria/WhatsApp Image 2026-01-14 at 12.56.27 PM (2).jpeg",
    alt: "Lobby and waiting area",
    className: "md:col-span-2",
  },
  {
    src: "/galeria/WhatsApp Image 2026-01-14 at 12.56.27 PM (3).jpeg",
    alt: "Windowed lounge with view",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/galeria/WhatsApp Image 2026-01-14 at 12.56.27 PM (4).jpeg",
    alt: "Glass stair landing",
  },
  {
    src: "/galeria/WhatsApp Image 2026-01-14 at 12.56.27 PM.jpeg",
    alt: "Glass corridor entrance",
  },
]

export function GallerySection() {
  const { t } = useLanguage()
  const gallery = t.home.gallery

  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-primary/5" />
      <div className="absolute -top-24 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">{gallery.eyebrow}</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{gallery.title}</h2>
          <p className="text-lg text-gray-600">{gallery.description}</p>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[160px] md:auto-rows-[200px]">
          {galleryImages.map((image) => (
            <div
              key={image.src}
              className={`group relative overflow-hidden rounded-2xl border border-gray-100 shadow-sm bg-gray-50 ${image.className ?? ""}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
