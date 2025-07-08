import type { Metadata } from "next";
import { withMetadataValidation } from "@/lib/metadata-utils";

export const metadata: Metadata = withMetadataValidation({
  title: "Ireland",
  description: "Immigration options",
  keywords: ['Ireland', 'visa', 'immigration', 'study'],
  openGraph: {
    title: "Ireland",
    description: "Immigration options",
    type: 'website',
    images: [
      {
        url: '/countries_hero/Ireland.jpeg',
        width: 1200,
        height: 630,
        alt: 'Study and Immigration in Ireland',
      }
    ],
  },
  twitter: {
    title: "Ireland",
    description: "Immigration options",
    card: 'summary_large_image',
    images: [
      '/countries_hero/Ireland.jpeg',
    ],
  }
});