"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Award, Users, Globe, Building } from "lucide-react"

interface StatsSectionProps {
  className?: string
}

export default function StatsSection({ className }: StatsSectionProps) {
  const ref = useRef(null)
  const [hasAnimated, setHasAnimated] = useState(false)
  const isInView = useInView(ref, { once: true, threshold: 0.3 })

  const counterAnimation = (el: HTMLElement, target: number, duration = 2000) => {
    let start = 0
    const increment = target / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        el.textContent = target.toString()
        clearInterval(timer)
      } else {
        el.textContent = Math.floor(start).toString()
      }
    }, 16)
  }

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
      // Run counter animations when section comes into view
      const yearsEl = document.getElementById("years-counter")
      const visasEl = document.getElementById("visas-counter")
      const countriesEl = document.getElementById("countries-counter")
      const officesEl = document.getElementById("offices-counter")

      if (yearsEl) counterAnimation(yearsEl, 10)
      if (visasEl) counterAnimation(visasEl, 5369)
      if (countriesEl) counterAnimation(countriesEl, 9)
      if (officesEl) counterAnimation(officesEl, 4)
    }
  }, [isInView, hasAnimated])

  return (
    <div className={`relative overflow-hidden ${className}`} ref={ref}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 left-0 w-full h-full bg-repeat"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23004d99' fillOpacity='1' fillRule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E\")",
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            About <span className="text-gradient">Transpacific</span>
          </h2>
         
          <p className="stats-intro-text !text-center md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We've helped thousands of students achieve their dreams of studying abroad with our expert guidance and
            support.
          </p>
         
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Years of Experience */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{
              scale: 1.05,
              y: -5,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
            className="card-hover bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg text-center h-full flex flex-col justify-center cursor-pointer"
          >
            {/* <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4 mx-auto">
              {/* <Award className="h-6 w-6 text-primary" /> 
            </div> */}
            <div className="text-3xl font-bold text-primary mb-1 flex justify-center items-baseline">
              <span id="years-counter">0</span>
              <span className="text-xl ml-1">+</span>
            </div>
            <div className="text-lg font-medium">Years of Experience</div>
          </motion.div>

          {/* Visas */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{
              scale: 1.05,
              y: -5,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
            className="card-hover bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg text-center h-full flex flex-col justify-center cursor-pointer"
          >
            {/* <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4 mx-auto">
              <Users className="h-6 w-6 text-primary" />
            </div> */}
            <div className="text-3xl font-bold text-primary mb-1 flex justify-center items-baseline">
              <span id="visas-counter">0</span>
              <span className="text-xl ml-1">+</span>
            </div>
            <div className="text-lg font-medium">Visa Applications Approved</div>
          </motion.div>

          {/* Countries */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{
              scale: 1.05,
              y: -5,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
            className="card-hover bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg text-center h-full flex flex-col justify-center cursor-pointer"
          >
            {/* <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4 mx-auto">
              <Globe className="h-6 w-6 text-primary" />
            </div> */}
            <div className="text-3xl font-bold text-primary mb-1 flex justify-center items-baseline">
              <span id="countries-counter">0</span>
              <span className="text-xl ml-1">+</span>
            </div>
            <div className="text-lg font-medium">Countries</div>
          </motion.div>

          {/* Offices */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{
              scale: 1.05,
              y: -5,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
            className="card-hover bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg text-center h-full flex flex-col justify-center cursor-pointer"
          >
            {/* <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4 mx-auto">
              <Building className="h-6 w-6 text-primary" />
            </div> */}
            <div className="text-3xl font-bold text-primary mb-1 flex justify-center items-baseline">
              <span id="offices-counter">0</span>
            </div>
            <div className="text-lg font-medium">Offices</div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
