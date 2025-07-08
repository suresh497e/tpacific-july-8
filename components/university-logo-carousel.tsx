"use client"

import { useEffect, useRef, useState } from "react"

interface UniversityLogoCarouselProps {
  universities: {
    name: string
    logo: string
  }[]
  speed?: number
}

export default function UniversityLogoCarousel({ universities, speed = 30 }: UniversityLogoCarouselProps) {
  const [duplicatedUniversities, setDuplicatedUniversities] = useState<typeof universities>([])
  const containerRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    // Duplicate the universities array to create a seamless loop
    setDuplicatedUniversities([...universities, ...universities])
  }, [universities])

  return (
    <div className="w-full overflow-hidden relative">
      {/* Gradient overlay on the left */}
      <div className="absolute left-0 top-0 h-full w-16 z-10 bg-gradient-to-r from-background to-transparent"></div>

      {/* Gradient overlay on the right */}
      <div className="absolute right-0 top-0 h-full w-16 z-10 bg-gradient-to-l from-background to-transparent"></div>

      <div
        ref={containerRef}
        className="flex items-center gap-8 py-6"
        style={{
          animation: isHovered ? "none" : `scroll ${speed}s linear infinite`,
          width: "max-content",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {duplicatedUniversities.map((university, index) => (
          <div
            key={index}
            className="flex items-center justify-center h-20 grayscale hover:grayscale-0 transition-all duration-300"
          >
            <img
              src={university.logo || "/placeholder.svg"}
              alt={university.name}
              className="h-auto max-h-16 w-auto object-contain"
              style={{ maxWidth: "180px" }}
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  )
}
