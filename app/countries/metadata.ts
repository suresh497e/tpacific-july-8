import type { Metadata } from "next";
import { withMetadataValidation } from "@/lib/metadata-utils";

export const metadata: Metadata = withMetadataValidation({
  title: "Countries",
  description: "Immigration options",
  keywords: ['countries', 'immigration', 'visa'],
  openGraph: {
    title: "Countries",
    description: "Immigration options",
    type: 'website',
    images: [
      {
        url: '/images/hero-image-full.png',
        width: 1200,
        height: 630,
        alt: 'Study and Immigration Destinations',
      }
    ],
  },
  twitter: {
    title: "Countries",
    description: "Immigration options",
    card: 'summary_large_image',
    images: [
      '/images/hero-image-full.png',
    ],
  }
});