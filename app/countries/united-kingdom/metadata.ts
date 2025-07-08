import type { Metadata } from "next";
import { withMetadataValidation } from "@/lib/metadata-utils";

export const metadata: Metadata = withMetadataValidation({
  title: "United Kingdom",
  description: "Immigration options",
  keywords: ['UK', 'visa', 'immigration', 'study'],
  openGraph: {
    title: "United Kingdom",
    description: "Immigration options",
    type: 'website',
    images: [
      {
        url: '/countries_hero/UK.jpeg',
        width: 1200,
        height: 630,
        alt: 'Study and Immigration in the United Kingdom',
      }
    ],
  },
  twitter: {
    title: "United Kingdom",
    description: "Immigration options",
    card: 'summary_large_image',
    images: [
      '/countries_hero/UK.jpeg',
    ],
  }
});