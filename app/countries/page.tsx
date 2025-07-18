import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import CountryCard from "@/components/country-card"

import { cannonicalUrls } from "@/lib/cannonical"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Compare Top Study Abroad Destinations for Indian Students | Transpacific",
  description: "Explore countries like Canada, UK, USA, Australia, Ireland & New Zealand. Find the best destination for your education and career goals with expert help.",
  alternates: {
    canonical: cannonicalUrls.countries,
  },
  keywords: ['study abroad', 'visa', 'immigration'],
  openGraph: {
   title: "Compare Top Study Abroad Destinations | Transpacific",
    description: " Explore and compare countries for your education journey — Canada, UK, USA, Australia, Ireland, and New Zealand.",
    url: cannonicalUrls.countries,
    type: "website",
  },
  twitter: {
    title: "Study Abroad",
    description: "Expert visa guidance",
  }
}

export default function CountriesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background dark:from-primary/10 dark:via-background dark:to-background section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <Badge variant="outline" className="px-3 py-1 text-sm bg-background dark:bg-muted">
              Study Destinations
            </Badge>
            <h1 className="font-galano text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              Explore Your <span className="text-primary">Global Education</span> Options
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto stats-intro-text">
              Discover top study destinations with world-class universities, vibrant cultures, and exciting career
              opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center">
              <Button size="lg" asChild>
                <Link href="/consultation" className="gap-2">
                  Start Your Free Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Countries Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CountryCard
              country="New Zealand"
              description="Affordable tuition with excellent quality of life and post-study work opportunities."
              image="/compressed/countries_hero/nz.png"
            />
            <CountryCard
              country="Australia"
              description="World-class universities with flexible work rights and diverse study options."
              image="/compressed/countries_hero/aus.png"
            />
            <CountryCard
              country="Canada"
              description="Pathway to permanent residency with affordable education in a safe environment."
              image="/compressed/countries_hero/can.png"
            />
            <CountryCard
              country="United Kingdom"
              description="Prestigious education with 2-3 year post-study work visas and global recognition."
              image="/compressed/countries_hero/uk.png"
            />
            <CountryCard
              country="United States"
              description="World-renowned universities with cutting-edge research and diverse campus experiences."
              image="/compressed/countries_hero/us.png"
            />
            <CountryCard
              country="Ireland"
              description="English-speaking EU destination with growing tech opportunities and a 2-year stay-back option."
              image="/compressed/countries_hero/ire.png"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-muted/30 dark:bg-muted/10 border-y">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-galano text-3xl md:text-4xl font-bold">Not Sure Which Country is Right for You?</h2>
            <p className="text-xl text-muted-foreground stats-intro-text">
              Our education experts can help you compare options and find the perfect fit for your academic goals,
              budget, and career aspirations.
            </p>
            <div className="pt-4">
              <Button size="lg" asChild>
                <Link href="/consultation" className="gap-2">
                  Book Your Free Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
