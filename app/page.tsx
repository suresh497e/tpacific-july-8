import Hero from "@/components/hero"
import StatsSection from "@/components/stats-section"
import DestinationsSection from "@/components/destinations-section"
import TestimonialsSection from "@/components/testimonials-section"
import ProcessSection from "@/components/process-section"
import ConsultationCTA from "@/components/consultation-cta"
import FrustrationsSection from "@/components/frustrations-section"
import NewsletterSection from "@/components/newsletter-section"
import OfficeAnnouncement from "@/components/office-announcement"
import { DirectJustifier } from "@/components/direct-justifier"
import GetInTouch from "@/components/get-in-touch"
import { DebugTheme } from "@/components/debug-theme"
import type { Metadata } from "next"
import { withMetadataValidation } from "@/lib/metadata-utils"

export const metadata: Metadata = withMetadataValidation({
  title: "Study Abroad",
  description: "Expert visa guidance",
  keywords: ['study abroad', 'visa', 'immigration'],
  openGraph: {
    title: "Study Abroad",
    description: "Expert visa guidance",
  },
  twitter: {
    title: "Study Abroad",
    description: "Expert visa guidance",
  }
})

// Define more compact section classes
const sectionClasses = {
  white: "bg-white py-10 md:py-12",
  gray: "bg-gray-50 py-10 md:py-12",
}

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <StatsSection className={sectionClasses.white} />
      <ProcessSection className={sectionClasses.gray} />
      <OfficeAnnouncement className={sectionClasses.white} />
      <FrustrationsSection className={sectionClasses.gray} />
      <DestinationsSection className={sectionClasses.white} />
      <TestimonialsSection className={sectionClasses.gray} />
      {/* <NewsletterSection className={sectionClasses.white} /> */}
      <ConsultationCTA />
      <GetInTouch className={sectionClasses.white} />
      <DirectJustifier />
      {/* <DebugTheme /> */}
    </div>
  )
}
