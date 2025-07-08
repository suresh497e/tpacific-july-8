import type { Metadata } from "next";
import { withMetadataValidation } from "@/lib/metadata-utils";
import { generateServiceSchema, addSchemaToMetadata } from "@/lib/schema-utils";

// Create Service schema for Consultation
const consultationServiceSchema = generateServiceSchema({
  name: "Free Immigration Consultation",
  description: "Get expert advice on study abroad options, visa applications, and immigration pathways with our free consultation service.",
  url: "https://transpacificimmigration.com/consultation",
  provider: {
    name: "Transpacific Immigration",
    url: "https://transpacificimmigration.com"
  },
  serviceType: "Immigration Consultation",
  areaServed: ["Australia", "Canada", "Ireland", "New Zealand", "United Kingdom", "United States"],
  offers: {
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock"
  }
});

// Add schema to metadata
export const metadata: Metadata = withMetadataValidation(addSchemaToMetadata({
  title: "Free Consultation | Transpacific Immigration",
  description: "Book a free consultation with our immigration experts to discuss your study abroad and visa options",
  keywords: ['consultation', 'immigration', 'visa', 'study abroad', 'free consultation'],
  openGraph: {
    title: "Free Consultation | Transpacific Immigration",
    description: "Book a free consultation with our immigration experts to discuss your study abroad and visa options",
    type: 'website',
    images: [
      {
        url: '/images/consultation-hero.png',
        width: 1200,
        height: 630,
        alt: 'Free Immigration Consultation',
      }
    ],
  },
  twitter: {
    title: "Free Consultation | Transpacific Immigration",
    description: "Book a free consultation with our immigration experts to discuss your study abroad and visa options",
    card: 'summary_large_image',
    images: [
      '/images/consultation-hero.png',
    ],
  }
}, [consultationServiceSchema]));