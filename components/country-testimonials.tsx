"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { QuoteIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface Testimonial {
  quote: string
  name: string
  title: string
  image: string
}

interface CountryTestimonialsProps {
  testimonials: Testimonial[]
  countryColor?: string
}

export default function CountryTestimonials({ testimonials, countryColor = "#007848" }: CountryTestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  // Auto-scroll testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [testimonials.length])
  
  // Get initials for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
  }

  return (
    <section className="py-16 text-white bg-primary">
      <div className="container mx-auto px-4">
        <div className="w-full mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Student Testimonials</h2>
          
          <div className="relative h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className="mb-6">
                  <QuoteIcon className="h-12 w-12 mx-auto opacity-20 mb-4" />
                  <p className="text-xl  stats-intro-text  italic mb-6"><span className="max-w-xl mx-auto text-center">"{testimonials[currentIndex].quote}"</span></p>
                  <div className="flex items-center justify-center">
                    <Avatar className="w-16 h-16 border-2 border-white/20 mr-4">
                      <AvatarImage src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} />
                      <AvatarFallback>{getInitials(testimonials[currentIndex].name)}</AvatarFallback>
                    </Avatar>
                    <div className="text-left">
                      <p className="font-semibold">{testimonials[currentIndex].name}</p>
                      <p className="text-sm opacity-80">{testimonials[currentIndex].title}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Pagination dots */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-white w-6" : "bg-white/40"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}