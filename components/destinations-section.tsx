"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getAllCountries } from "@/lib/countries"
import { JustifiedText } from "@/components/justified-text"

export default function DestinationsSection({ className = "" }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const countries = getAllCountries()

  // Function to get the correct image URL for each country
  const getCountryImageUrl = (slug: string) => {
    switch (slug) {
      case "new-zealand":
        return "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-BLTlyPKGRUh8ISSYl1R7cL2nMelmCf.png"
      case "australia":
        return "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-AoRJd3NM511VvesrduKlMk2SpLOhHe.png"
      case "united-kingdom":
        return "/uk_main.png"
      case "united-states":
        return "/usa_main.png"
      case "canada":
        return "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-RznHKEEhIWiWM1aRQ7YF6ncCqphBSf.png"
      case "ireland":
        return "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-jw1FxSsSk99QTPHYVLlKswTUQSiyde.png"
      default:
        return `/abstract-geometric-shapes.png?height=400&width=600&query=${slug} landscape`
    }
  }

  return (
    <section className={`${className}`} ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold mb-3"
          >
            Popular Study Destinations
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base"
          >
            <JustifiedText
              text="Explore top educational destinations around the world and find the perfect place to pursue your academic goals."
              className="text-justify stats-intro-text"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {countries.map((country, index) => (
            <motion.div
              key={country.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                transition: { duration: 0.3 },
              }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all"
            >
              <Link href={`/countries/${country.slug}`} className="block">
                <div className="relative h-40 md:h-44 w-full overflow-hidden group">
                  <motion.img
                    src={getCountryImageUrl(country.slug) || "/placeholder.svg"}
                    alt={`${country.name} - Study Destination`}
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/70 transition-all duration-300"></div>
                  <div className="absolute bottom-0 left-0 p-4 transform transition-transform duration-300 group-hover:translate-y-[-5px]">
                    <h3 className="text-white text-lg md:text-xl font-bold">{country.name}</h3>
                  </div>
                </div>
              </Link>
              <div className="p-4">
                <div className="text-gray-600 text-sm py-2">
                  <JustifiedText
                    text={`Discover world-class education opportunities in ${country.name}.`}
                    className="text-justify"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/contact" passHref>
            <Button className="bg-primary hover:bg-primary/90 group">
              Get Expert Guidance
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
