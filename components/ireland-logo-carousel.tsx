"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

export default function IrelandLogoCarousel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)

  // Logos for Irish universities
  const logos = [
    {
      src: "/images/logos/trinity-college-dublin-logo.png",
      alt: "Trinity College Dublin Logo",
      width: 120,
    },
    {
      src: "/images/logos/ucd-logo.png",
      alt: "University College Dublin Logo",
      width: 120,
    },
    {
      src: "/images/logos/dcu-logo-new.png",
      alt: "Dublin City University Logo",
      width: 120,
    },
    {
      src: "/images/logos/nci-logo-new.png",
      alt: "National College of Ireland Logo",
      width: 120,
    },
    {
      src: "/images/logos/nui-galway-logo.png",
      alt: "National University of Ireland, Galway Logo",
      width: 120,
    },
    {
      src: "/images/logos/ucc-logo.png",
      alt: "University College Cork Logo",
      width: 120,
    },
    {
      src: "/images/logos/ul-logo.png",
      alt: "University of Limerick Logo",
      width: 120,
    },
    {
      src: "/images/logos/maynooth-logo.png",
      alt: "Maynooth University Logo",
      width: 120,
    },
  ]

  // Duplicate logos for seamless scrolling
  const allLogos = [...logos, ...logos]

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let animationId: number
    let startTime: number | null = null
    const totalDuration = 30000 // 30 seconds for one complete loop
    const containerWidth = container.scrollWidth / 2

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      const progress = (elapsed % totalDuration) / totalDuration

      // Calculate position based on progress
      const position = progress * containerWidth

      // Apply the transform
      container.style.transform = `translateX(-${position}px)`

      animationId = requestAnimationFrame(animate)
    }

    if (!isHovering) {
      animationId = requestAnimationFrame(animate)
    }

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [isHovering])

  return (
    <div className="w-full overflow-hidden">
      <div
        className="flex items-center"
        ref={containerRef}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {allLogos.map((logo, i) => (
          <div
            key={i}
            className={cn(
              "flex-shrink-0 mx-8 py-4 transition-opacity duration-300",
              isHovering ? "opacity-100" : "opacity-70 hover:opacity-100",
            )}
          >
            <img
              src={logo.src || "/placeholder.svg"}
              alt={logo.alt}
              className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all"
              style={{ maxWidth: `${logo.width}px` }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
