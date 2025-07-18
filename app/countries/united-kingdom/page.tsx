import UKUniversityPage from "./university-page"

import { cannonicalUrls } from "@/lib/cannonical"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Study in the UK from India | Top Ranked Universities & 2-Year Stay Back",
  description: "Apply to UK universities with Transpacific’s expert support. Benefit from world-class education, scholarships, and post-study work visas.",
  alternates: {
    canonical: cannonicalUrls.uk,
  },
  keywords: ['study abroad', 'visa', 'immigration'],
  openGraph: {
     title: "Study in the UK from India | Prestigious Degrees & 2-Year Stay Back",
    description: "World-class UK education with strong post-study career pathways and visa assistance.",
    url: cannonicalUrls.uk,
    type: "website",
  },
  twitter: {
    title: "Study Abroad",
    description: "Expert visa guidance",
  }
}


export default function UnitedKingdomPage() {
  return <UKUniversityPage />
}
