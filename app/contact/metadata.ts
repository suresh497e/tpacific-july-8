import type { Metadata } from "next";
import { withMetadataValidation } from "@/lib/metadata-utils";
import { generateContactPageSchema, addSchemaToMetadata } from "@/lib/schema-utils";

// Create ContactPage schema
const contactPageSchema = generateContactPageSchema({
  name: "Contact Transpacific Immigration",
  description: "Get in touch with Transpacific Immigration for all your immigration and education needs.",
  url: "https://transpacificimmigration.com/contact",
  contactPoint: {
    telephone: "+64-9-123-4567",
    email: "info@transpacificimmigration.com",
    contactType: "customer service"
  },
  address: {
    streetAddress: "123 Immigration Street",
    addressLocality: "Auckland",
    addressRegion: "Auckland",
    postalCode: "1010",
    addressCountry: "New Zealand"
  }
});

// Add schema to metadata
export const metadata: Metadata = withMetadataValidation(addSchemaToMetadata({
  title: "Contact Us",
  description: "Get in touch",
  keywords: ['contact', 'support', 'help', 'inquiry'],
  openGraph: {
    title: "Contact Us",
    description: "Get in touch",
    type: 'website',
    images: [
      {
        url: '/contact_hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Transpacific Immigration',
      }
    ],
  },
  twitter: {
    title: "Contact Us",
    description: "Get in touch",
    card: 'summary_large_image',
    images: [
      '/contact_hero.jpg',
    ],
  }
}, [contactPageSchema]));