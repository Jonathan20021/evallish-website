"use client"

import { useLanguage } from "@/components/language-provider"

const getInitials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase()

export function TestimonialsSection() {
  const { t } = useLanguage()
  const testimonials = t.home.testimonials

  return (
    <section className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            {testimonials.eyebrow}
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">{testimonials.title}</h2>
          <p className="text-lg text-gray-600">{testimonials.description}</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.items.map((item) => (
            <div
              key={item.name}
              className="h-full rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <p className="text-gray-600 leading-relaxed mb-6">“{item.quote}”</p>

              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary font-semibold flex items-center justify-center">
                    {getInitials(item.name)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{item.name}</p>
                    <p className="text-xs text-gray-500">
                      {item.role} · {item.company}
                    </p>
                  </div>
                </div>
                <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {item.result}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
