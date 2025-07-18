import { baseUrl } from "@/lib/baseUrl";
import UnitedStatesUniversityPage from "./university-page";

import { cannonicalUrls } from "@/lib/cannonical";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: " Study in the USA from India | Ivy League Admissions & Visa Support",
  description:
    "Dreaming of studying in the USA? Get expert guidance to apply to top universities like Harvard, Stanford, and MIT with full visa assistance.",
  alternates: {
    canonical: cannonicalUrls.usa,
  },
  keywords: ["study abroad", "visa", "immigration"],
  openGraph: {
    title: "Study in the USA from India | Ivy League Admissions & Visa Support",
    description:
      "Apply to top US universities with full guidance on applications, interviews, and visa filing.",
    url: cannonicalUrls.usa,
    type: "website",
    images: [
      {
        url: `${baseUrl}/bluelogo.png`,
        width: 800,
        height: 600,
        alt: "united states page",
      },
    ],
  },
  twitter: {
    title: "Study Abroad",
    description: "Expert visa guidance",
  },
};

export default function UnitedStatesPage() {
  return <UnitedStatesUniversityPage />;
}
