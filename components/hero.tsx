"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Globe, GraduationCap, MapPin } from "lucide-react"
import { SafeImage } from "@/components/safe-image"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }

    const heroElement = heroRef.current
    if (heroElement) {
      heroElement.addEventListener("mousemove", handleMouseMove)
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [])

  return (
    <div className="hero-gradient relative overflow-hidden" ref={heroRef}>
      {/* Animated blobs - simplified for mobile */}
      <div
        className="blob opacity-30"
        style={{
          left: "20%",
          top: "30%",
        }}
      ></div>
      <div
        className="blob opacity-30"
        style={{
          left: "70%",
          top: "60%",
        }}
      ></div>

      {/* Parallax effect on mouse move - only on desktop */}
      <div
        className="absolute inset-0 z-0 hidden md:block"
        style={{
          transform: `translate(${mousePosition.x / 50}px, ${mousePosition.y / 50}px)`,
        }}
      >
        <div className="absolute top-20 left-20 w-20 h-20 rounded-full bg-blue-400 opacity-10"></div>
        <div className="absolute bottom-40 right-40 w-32 h-32 rounded-full bg-blue-300 opacity-10"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-blue-500 opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 py-10 md:py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
          <div>
            <div>
              <span className="inline-block px-3 py-1 md:px-4 md:py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-xs md:text-sm font-medium mb-3 md:mb-4">
                Your Gateway to Global Education
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-white leading-tight">
                Abroad Made <span className="bg-white text-primary px-2 rounded-md font-extrabold">Easy</span>
              </h1>
              <p className="text-base md:text-lg lg:text-xl mb-4 md:mb-5 text-blue-50 leading-relaxed">
                Achieve your goals of studying, working, or settling in top destinations worldwide with expert guidance
                at every step.
              </p>

              <div>
                <Link href="/contact" passHref>
                  <Button size="lg" className="bg-white text-primary hover:bg-gray-100 group w-full sm:w-auto">
                    Free Consultation
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="mt-6 md:mt-8 grid grid-cols-3 gap-2 md:gap-4">
             {/* <div className="glass rounded-lg p-2 md:p-3 text-center">
                <GraduationCap className="h-4 w-4 md:h-5 md:w-5 mx-auto mb-1 text-white" />
                <p className="text-white text-xs">5,369+ Visas</p>
              </div> */}
             {/* <div className="glass rounded-lg p-2 md:p-3 text-center">
                <Globe className="h-4 w-4 md:h-5 md:w-5 mx-auto mb-1 text-white" />
                <p className="text-white text-xs">9+ Countries</p>
              </div> */}
              <div className="glass rounded-lg  hidden text-center">
               {/* <MapPin className="h-4 w-4 md:h-5 md:w-5 mx-auto mb-1 text-white" />
                <p className="text-white text-xs">4 Offices</p> */}
              </div> 
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative w-full h-[450px]">
              <div className="absolute top-0 right-0 w-80 h-80 rounded-2xl overflow-hidden shadow-2xl transform rotate-3 z-20">
                <SafeImage
                  src="/compressed/hero/3-min.png"
                  alt="Student at airport with passport"
                  className="w-full h-full object-cover"
                  imageType="student"
                  seoParams={{
                    country: "global",
                    topic: "international travel"
                  }}
                />
              </div>
              <div className="absolute bottom-0 left-0 w-72 h-72 rounded-2xl overflow-hidden shadow-2xl transform -rotate-6 z-10">
                <SafeImage
                  src="/compressed/hero/1-min.png"
                  alt="Student on campus"
                  className="w-full h-full object-cover"
                  imageType="student"
                  seoParams={{
                    country: "global",
                    topic: "university education"
                  }}
                />
              </div>
              <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-2xl overflow-hidden shadow-2xl z-30">
                <SafeImage
                  src="/compressed/hero/2-min.png"
                  alt="Student traveling the world"
                  className="w-full h-full object-cover"
                  imageType="student"
                  seoParams={{
                    country: "global",
                    topic: "study abroad"
                  }}
                />
              </div> 

              {/* Floating elements */}
              <div
                className="absolute top-10 left-10 glass rounded-full p-3 floating"
                style={{ animationDelay: "0.5s" }}
              >
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div
                className="absolute bottom-20 right-10 glass rounded-full p-3 floating"
                style={{ animationDelay: "1s" }}
              >
                <Globe className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
