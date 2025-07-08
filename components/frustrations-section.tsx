"use client"

import { AlertCircle } from "lucide-react"
import { motion } from "framer-motion"

const frustrations = [
  {
    title: "Confusion Over Financial Documentation",
    description:
      "Understanding and providing correct financial documentation can be confusing and stressful, especially when requirements vary by country and institution.",
  },
  {
    title: "Uncertainty About Visa Requirements",
    description:
      "Navigating complex and often-changing visa requirements can lead to confusion and stress when preparing your student visa application documents.",
  },
  {
    title: "Delays in Visa Processing",
    description:
      "Long processing times and unexpected delays can disrupt your academic plans and create uncertainty about your start date at your chosen institution abroad.",
  },
  {
    title: "Difficulty Understanding Visa Regulations",
    description:
      "Visa regulations can be intricate and difficult to understand, making it challenging to ensure all requirements are met and applications completed correctly.",
  },
  {
    title: "Lack of Application Guidance",
    description:
      "Without clear guidance on application procedures, you may face difficulties compiling necessary documentation and fulfilling all requirements for your visa application.",
  },
  {
    title: "Fear of Visa Rejection",
    description:
      "The fear of visa rejection due to minor errors or omissions can be a significant source of anxiety, potentially jeopardizing your plans to study abroad.",
  },
]

export default function FrustrationsSection({ className = "" }) {
  return (
    <section className={`${className}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center  mb-3">Are You Facing These Frustrations?</h2>
        <div className=" text-gray-600 mb-8 max-w-2xl  text-center text-sm md:text-base stats-intro-text center mx-auto">
          Many students encounter these common challenges when applying for international education. We're here to help
          you overcome them.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {frustrations.map((frustration, index) => (
            <motion.div
              key={index}
              className="border rounded-lg p-4 cursor-pointer"
              initial={{ boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)" }}
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
                transition: { duration: 0.2 },
              }}
            >
              <div className="flex items-start gap-2 mb-2">
                <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <h3 className="text-base md:text-lg font-semibold whitespace-normal">{frustration.title}</h3>
              </div>
              <p className="text-gray-600 text-sm  pl-7">{frustration.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
