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
//import { withMetadataValidation } from "@/lib/metadata-utils"
import Script from 'next/script'
import StatsBanner from "@/components/icef"
//import Head from 'next/head';
import { cannonicalUrls } from "@/lib/cannonical"

export const metadata: Metadata = {
  title: "Study Abroad & Immigration Services for Indian Students | Transpacific",
  description: "Trusted by thousands, Transpacific helps Indian students study in countries like Canada, UK, USA, Australia, and New Zealand with expert visa and admission support.",
  alternates: {
    canonical: cannonicalUrls.home,
  },
  keywords: ['study abroad', 'visa', 'immigration'],
  openGraph: {
    title: "Study Abroad & Immigration Services for Indian Students | Transpacific",
    description: "Get expert help to study in Canada, UK, USA, Australia, Ireland & New Zealand. Trusted by thousands of Indian students since 2010.",
    url: cannonicalUrls.home,
    type: "website",
  },
  twitter: {
    title: "Study Abroad",
    description: "Expert visa guidance",
  }
}

// Define more compact section classes
const sectionClasses = {
  white: "bg-white py-10 md:py-12",
  gray: "bg-gray-50 py-10 md:py-12",
}

export default function Home() {
  return (
    <>
     {/* <Head>
        <link rel="canonical" href={cannonicalUrls.home} />
      </Head> */}
    <div className="flex flex-col">
      <Hero />
      <div className="relative h-20 md:h-40">
        <StatsBanner />
      </div>
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
    </>
  )
}
