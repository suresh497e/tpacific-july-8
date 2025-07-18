import CanadaUniversityPage from "./university-page"

import { cannonicalUrls } from "@/lib/cannonical"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Study in Canada from India | Affordable Education & PR Opportunities",
  description: "Get expert help to study in Canada’s top universities with work permits, co-op programs, and permanent residency pathways.",
  alternates: {
    canonical: cannonicalUrls.canada,
  },
  keywords: ['study abroad', 'visa', 'immigration'],
  openGraph: {
    title: "Study in Canada from India | Affordable Education & PR Opportunities",
    description: " Apply to top Canadian universities with expert visa guidance and permanent residency options.",
    url: cannonicalUrls.canada,
    type: "website",
  },
  twitter: {
    title: "Study Abroad",
    description: "Expert visa guidance",
  }
}

export default function CanadaPage() {
  return <CanadaUniversityPage />
}
