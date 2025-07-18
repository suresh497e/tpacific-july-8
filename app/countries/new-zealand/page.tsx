import NewZealandUniversityPage from "./university-page"


import { cannonicalUrls } from "@/lib/cannonical"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Study in New Zealand from India | Top Universities & PR Pathways",
  description: " Discover affordable education, post-study work visas, and top universities in New Zealand. Transpacific offers full support for your study abroad journey.",
  alternates: {
    canonical: cannonicalUrls.newzealand,
  },
  keywords: ['study abroad', 'visa', 'immigration'],
  openGraph: {
    title: "Study in New Zealand from India | Top Universities & PR Pathways",
    description: " Affordable education, post-study visas, and career growth — all in one of the world’s most beautiful countries.",
    url: cannonicalUrls.newzealand,
    type: "website",
  },
  twitter: {
    title: "Study Abroad",
    description: "Expert visa guidance",
  }
}
export default function NewZealandPage() {
  return <NewZealandUniversityPage />
}
