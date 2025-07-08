import type { Metadata } from "next";
import { withMetadataValidation } from "@/lib/metadata-utils";
import { generatePlaceSchema, addSchemaToMetadata } from "@/lib/schema-utils";

// Create Place schema for Australia
const australiaSchema = generatePlaceSchema({
  name: "Australia",
  description: "Study and immigration options in Australia. Explore top universities, visa pathways, and settlement opportunities.",
  url: "https://transpacificimmigration.com/countries/australia",
  image: "https://transpacificimmigration.com/countries_hero/AUS.jpeg",
  address: {
    addressCountry: "Australia"
  },
  geo: {
    latitude: -25.2744,
    longitude: 133.7751
  }
});

// Add schema to metadata
export const metadata: Metadata = withMetadataValidation(addSchemaToMetadata({
  title: "Australia",
  description: "Immigration options",
  keywords: ['Australia', 'visa', 'immigration', 'study'],
  openGraph: {
    title: "Australia",
    description: "Immigration options",
    type: 'website',
    images: [
      {
        url: '/countries_hero/AUS.jpeg',
        width: 1200,
        height: 630,
        alt: 'Study and Immigration in Australia',
      }
    ],
  },
  twitter: {
    title: "Australia",
    description: "Immigration options",
    card: 'summary_large_image',
    images: [
      '/countries_hero/AUS.jpeg',
    ],
  }
}, [australiaSchema]));