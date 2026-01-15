"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale"
  delay?: number
}

export function ScrollReveal({ children, className = "", animation = "fade-up", delay = 0 }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.style.animationDelay = `${delay}s`
            element.classList.add(`animate-fade-in-${animation.replace("fade-", "")}`)
            observer.unobserve(element)
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [animation, delay])

  return (
    <div ref={ref} className={`opacity-0 ${className}`}>
      {children}
    </div>
  )
}

export function useParallax() {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const parallaxElements = document.querySelectorAll("[data-parallax]")

      parallaxElements.forEach((element) => {
        const speed = Number.parseFloat(element.getAttribute("data-parallax") || "0.5")
        const yPos = -(scrolled * speed)
        ;(element as HTMLElement).style.transform = `translateY(${yPos}px)`
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
}
