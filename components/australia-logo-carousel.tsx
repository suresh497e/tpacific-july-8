"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { UniversityLogo } from "@/components/university-logo"

interface AustraliaLogoCarouselProps {
  className?: string
  speed?: number
}

export function AustraliaLogoCarousel({ className, speed = 30 }: AustraliaLogoCarouselProps) {
  const logos = [
    {
      src: "/images/logos/university-of-melbourne.png",
      alt: "The University of Melbourne",
      width: 180,
    },
    {
      src: "/images/logos/australian-national-university.png",
      alt: "Australian National University",
      width: 180,
    },
    {
      src: "/images/logos/university-of-sydney.png",
      alt: "The University of Sydney",
      width: 180,
    },
    {
      src: "/images/logos/university-of-queensland.png",
      alt: "The University of Queensland",
      width: 180,
    },
    {
      src: "/images/logos/unsw-sydney.png",
      alt: "UNSW Sydney",
      width: 180,
    },
    {
      src: "/images/logos/monash-university.png",
      alt: "Monash University",
      width: 180,
    },
    {
      src: "/images/logos/university-of-western-australia.png",
      alt: "The University of Western Australia",
      width: 180,
    },
    {
      src: "/images/logos/university-of-adelaide.png",
      alt: "The University of Adelaide",
      width: 180,
    },
    {
      src: "/images/logos/university-of-technology-sydney.png",
      alt: "University of Technology Sydney",
      width: 180,
    },
    {
      src: "/images/logos/qut-logo.png",
      alt: "Queensland University of Technology",
      width: 180,
    },
  ]

  const containerRef = useRef<HTMLDivElement>(null)
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [start, setStart] = useState(false)

  useEffect(() => {
    addAnimation()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      // Calculate if we need to duplicate the logos to ensure continuous scrolling
      const scrollerContent = Array.from(scrollerRef.current.children)
      const scrollerWidth = scrollerRef.current.clientWidth
      const containerWidth = containerRef.current.clientWidth

      if (scrollerWidth < containerWidth * 2) {
        // Duplicate logos to ensure continuous scrolling
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true)
          scrollerRef.current?.appendChild(duplicatedItem)
        })
      }

      setStart(true)
    }
  }

  const logoItems = logos.map((logo, index) => (
    <div
      key={index}
      className="flex items-center justify-center mx-6 h-24 grayscale hover:grayscale-0 transition-all duration-300"
    >
      <div className="relative h-16 w-[180px] flex items-center justify-center">
        <UniversityLogo
          src={logo.src}
          alt={logo.alt}
          name={logo.alt}
          className="max-h-16 w-auto object-contain"
          maxWidth={`${logo.width}px`}
        />
      </div>
    </div>
  ))

  return (
    <div ref={containerRef} className={cn("relative overflow-hidden w-full max-w-full", className)}>
      <div
        ref={scrollerRef}
        className={cn("flex whitespace-nowrap w-max", start && "animate-scroll")}
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {logoItems}
      </div>
      <div className="absolute pointer-events-none inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="absolute pointer-events-none inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
    </div>
  )
}
