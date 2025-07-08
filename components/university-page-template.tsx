"use client"

import type React from "react"

import { useRef, useState } from "react"
import { ReliableImage } from "@/components/reliable-image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import UniversityLogoCarousel from "@/components/university-logo-carousel"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import CountryTestimonials from "./country-testimonials"

interface University {
  name: string
  logo: string
  image: string
  description: string
  link: string
}

interface Program {
  title: string
  description: string
  icon: React.ReactNode
}

interface Testimonial {
  quote: string
  name: string
  title: string
  image: string
}

interface FAQ {
  question: string
  answer: string
}

interface UniversityPageTemplateProps {
  country: string
  countryColor: string
  heroImage: string
  universities: University[]
  programs: Program[]
  testimonial: Testimonial
  faqs: FAQ[]
}

export function UniversityPageTemplate({
  country,
  countryColor,
  heroImage,
  universities,
  programs,
  testimonial,
  faqs,
}: UniversityPageTemplateProps) {
  const [activeTab, setActiveTab] = useState("overview")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#007848]/5 via-background to-background dark:from-[#007848]/10 dark:via-background dark:to-background section-padding">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="outline" className="px-3 py-1 text-sm bg-background dark:bg-muted">
                Study in {country}
              </Badge>
              <h1 className="font-galano text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                Where <span>Innovation</span> Meets Heritage
              </h1>
              <p className="text-xl text-muted-foreground">
                Discover world-class education opportunities for Indian students in {country}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button size="lg" asChild>
                  <Link href="/consultation" className="gap-2">
                    Book Free Consultation
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#universities">Explore Universities</Link>
                </Button>
              </div>
            </div>
            <div className="relative lg:h-[500px]">
              <div className="relative h-full w-full rounded-2xl overflow-hidden">
                <ReliableImage
                  src={heroImage}
                  alt={`${country} landscape`}
                  fallbackSrc="/bustling-university-campus.png"
                  className="h-full w-full object-cover"
                  imageType="hero"
                  seoParams={{
                    country: country
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Carousel Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Our Partner Universities in {country}</h2>
            <p className="text-gray-600 stats-intro-text">Transpacific has partnerships with top universities across {country}</p>
          </div>
          <UniversityLogoCarousel universities={universities} speed={40} />
        </div>
      </section>

      {/* University Cards Section */}
      <section className="py-16 bg-white" id="universities">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Top Universities in {country}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {universities.map((university, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <ReliableImage
                    src={university.image}
                    alt={`${university.name} campus`}
                    fallbackSrc="/bustling-university-campus.png"
                    className="w-full h-full object-cover"
                    imageType="university"
                    seoParams={{
                      name: university.name,
                      country: country
                    }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold">{university.name}</h3>
                    <ReliableImage
                      src={university.logo}
                      alt={`${university.name} logo`}
                      fallbackSrc="/generic-university-logo.png"
                      className="h-10 w-10 object-contain ml-3"
                      imageType="logo"
                      seoParams={{
                        name: university.name,
                        country: country
                      }}
                    />
                  </div>
                  <p className="text-gray-600 mb-4">{university.description}</p>
                  <Button asChild>
                   
                  <a
                    href={university.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
                    // style={{ backgroundColor: countryColor }}
                  >
                    Visit Website
                  </a>
                   </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Programs Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Popular Programs in {country}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4">{program.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                <p className="text-gray-600">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

{/* Popular Programs Test Section */}
<section className="py-16" ref={ref}> {/* Changed background color to differentiate */}
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold mb-12 text-center">Popular Programs in {country}</h2> {/* Changed title */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6, delay: 0.1 }}
      className="p-6 rounded-xl shadow-lg"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {programs.map((program, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
            className="bg-gray-50 p-6 rounded-lg shadow-md transition-shadow duration-300"
          >
            <div className="mb-4">{program.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
            <p className="text-gray-600">{program.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
</section>

      {/* Testimonial Section */}
      <section className="py-8 text-white bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            {/* <h2 className="text-3xl font-bold mb-8">Student Testimonial</h2> */}
            {/* <div className="mb-6">
              <p className="text-xl italic mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <ReliableImage
                    src={testimonial.image}
                    alt={testimonial.name}
                    fallbackSrc="/diverse-students-studying.png"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm opacity-80">{testimonial.title}</p>
                </div>
              </div>
            </div> */}
             <div className="mx-auto w-full">
                        <CountryTestimonials
                          testimonials={[
                            {
                              quote:
                                "Ireland gave me more than a degree. It gave me direction, confidence, and my first international job. Transpacific made every step smooth and stress-free.",
                              name: "Kavya R.",
                              title: "MSc in Data Analytics, Trinity College Dublin",
                              image: "/images/indian-student-testimonial.png",
                            },
                            {
                              quote:
                                "The cultural experience in Ireland was incredible. I made friends from all over the world while studying at UCD. Transpacific's guidance on accommodation and part-time work opportunities was invaluable.",
                              name: "Arjun P.",
                              title: "MBA, University College Dublin",
                              image: "/images/male-student-testimonial.png",
                            },
                            {
                              quote:
                                "As a tech student, Ireland's Silicon Docks provided amazing networking opportunities. I secured an internship at a major tech company during my studies, which led to a full-time role after graduation.",
                              name: "Meera S.",
                              title: "MSc Computer Science, Dublin City University",
                              image: "/images/female-student-testimonial.png",
                            },
                          ]}
                          //countryColor={emeraldGreen}
                        />
                      </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your {country} Education Journey?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto stats-intro-text">
            Let Transpacific guide you through every step of the application process. Our experts have helped thousands
            of students achieve their dreams of studying in {country}.
          </p>
          <Button asChild>
          <a
            href="/contact"
            className="inline-block py-3 px-8  text-[#000] bg-white font-semibold rounded-md hover:bg-[#000] hover:text-white"
            //style={{ backgroundColor: countryColor }}
          >
            Book a Free Consultation
          </a>
          </Button>
        </div>
      </section> */}

       <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-galano text-3xl md:text-4xl font-bold">Ready to Start Your {country} Education Journey?</h2>
            <p className="text-xl opacity-90 stats-intro-text">
             Let Transpacific guide you through every step of the application process. Our experts have helped thousands
            of students achieve their dreams of studying in {country}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" variant="secondary" asChild className="px-8 py-6 text-lg">
                <Link href="/consultation" className="gap-2">
                  Book Your Free Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              {/* <Button
                size="lg"
                variant="outline"
                className="bg-primary-foreground/10 border-primary-foreground/20 hover:bg-primary-foreground/20 px-8 py-6 text-lg"
                asChild
              >
                <Link href="/apply">Apply to Study in Australia</Link>
              </Button> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Keep the default export for backward compatibility
export default UniversityPageTemplate
