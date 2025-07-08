"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface LogoCarouselProps {
  className?: string
  speed?: number
}

export function LogoCarousel({ className, speed = 30 }: LogoCarouselProps) {
  const logos = [
    // Canadian Universities
    {
      src: "/images/logos/university-of-toronto.png",
      alt: "University of Toronto",
      width: 200,
    },
    {
      src: "/images/logos/university-of-british-columbia.png",
      alt: "University of British Columbia",
      width: 200,
    },
    {
      src: "/images/logos/mcgill-university.png",
      alt: "McGill University",
      width: 200,
    },
    {
      src: "/images/logos/university-of-alberta.png",
      alt: "University of Alberta",
      width: 200,
    },
    {
      src: "/images/logos/universite-de-montreal.png",
      alt: "Université de Montréal",
      width: 200,
    },
    // UK Universities
    {
      src: "/images/logos/oxford-logo.png",
      alt: "University of Oxford",
      width: 180,
    },
    {
      src: "/images/logos/cambridge-logo.png",
      alt: "University of Cambridge",
      width: 180,
    },
    {
      src: "/images/logos/imperial-logo.png",
      alt: "Imperial College London",
      width: 180,
    },
    {
      src: "/images/logos/ucl-logo.png",
      alt: "University College London",
      width: 180,
    },
    {
      src: "/images/logos/lse-logo.png",
      alt: "London School of Economics",
      width: 180,
    },
    // Australian Universities
    {
      src: "/images/logos/university-of-sydney.png",
      alt: "The University of Sydney",
      width: 180,
    },
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
      src: "/images/logos/university-of-queensland.png",
      alt: "The University of Queensland",
      width: 180,
    },
    {
      src: "/images/logos/monash-university.png",
      alt: "Monash University",
      width: 180,
    },
    // US Universities
    {
      src: "/images/logos/harvard-logo.png",
      alt: "Harvard University",
      width: 180,
    },
    {
      src: "/images/logos/stanford-logo.png",
      alt: "Stanford University",
      width: 180,
    },
    {
      src: "/images/logos/mit-logo.png",
      alt: "Massachusetts Institute of Technology",
      width: 180,
    },
    {
      src: "/images/logos/caltech-logo.png",
      alt: "California Institute of Technology",
      width: 180,
    },
    {
      src: "/images/logos/princeton-logo.png",
      alt: "Princeton University",
      width: 180,
    },
    // New Zealand Universities
    {
      src: "/images/logos/auckland-university-logo.png",
      alt: "University of Auckland",
      width: 180,
    },
    {
      src: "/images/logos/canterbury-university-logo.png",
      alt: "University of Canterbury",
      width: 180,
    },
    {
      src: "/images/logos/victoria-university-logo.png",
      alt: "Victoria University of Wellington",
      width: 180,
    },
    {
      src: "/images/logos/otago-university-logo.png",
      alt: "University of Otago",
      width: 180,
    },
    {
      src: "/images/logos/lincoln-university-logo.png",
      alt: "Lincoln University",
      width: 180,
    },
    // Irish Universities
    {
      src: "/images/logos/trinity-college-dublin-logo.png",
      alt: "Trinity College Dublin",
      width: 180,
    },
    {
      src: "/images/logos/ucd-logo.png",
      alt: "University College Dublin",
      width: 180,
    },
    {
      src: "/images/logos/dcu-logo.png",
      alt: "Dublin City University",
      width: 180,
    },
    {
      src: "/images/logos/nui-galway-logo.png",
      alt: "NUI Galway",
      width: 180,
    },
    {
      src: "/images/logos/ucc-logo.png",
      alt: "University College Cork",
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
      className="flex items-center justify-center mx-6 h-20 grayscale hover:grayscale-0 transition-all duration-300"
    >
      <img
        src={logo.src || "/placeholder.svg"}
        alt={logo.alt}
        className="h-auto max-h-16 w-auto object-contain"
        style={{ maxWidth: `${logo.width}px` }}
      />
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
