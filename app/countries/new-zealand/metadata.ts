import type { Metadata } from "next";
import { withMetadataValidation } from "@/lib/metadata-utils";

export const metadata: Metadata = withMetadataValidation({
  title: "New Zealand",
  description: "Immigration options",
  keywords: ['New Zealand', 'visa', 'immigration', 'study'],
  openGraph: {
    title: "New Zealand",
    description: "Immigration options",
    type: 'website',
    images: [
      {
        url: '/countries_hero/NZ.jpeg',
        width: 1200,
        height: 630,
        alt: 'Study and Immigration in New Zealand',
      }
    ],
  },
  twitter: {
    title: "New Zealand",
    description: "Immigration options",
    card: 'summary_large_image',
    images: [
      '/countries_hero/NZ.jpeg',
    ],
  }
});