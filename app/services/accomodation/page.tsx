import { ServiceHero } from "@/components/service-hero"
import { ServiceContent } from "@/components/service-content"
import { CTASection } from "@/components/cta-section"

export default function AccommodationPage() {
 

  const content = `Finding safe and comfortable accommodation is a top priority for students and their families. We assist in arranging on-campus housing or off-campus shared apartments, depending on availability and student preference.

We also coordinate with existing students or associations abroad to ensure reliable and secure living arrangements for our students.

Our accommodation services include:
• On-campus housing assistance
• Off-campus apartment search
• Shared accommodation arrangements
• Safety and security verification
• Cost comparison and budgeting
• Lease agreement guidance
• Connection with existing student networks
• Ongoing accommodation support`

  return (
    <div className="min-h-screen bg-background">
      <ServiceHero
        title="Accommodation"
        description="Safe and comfortable housing solutions for students studying abroad, with both on-campus and off-campus options."
        ctaText="Find Accommodation"
        ctaLink="/contact"
        imageSrc="/student-accommodation.jpg"
        imageAlt="Student accommodation"
      />
      <ServiceContent content={content} />
      <CTASection />
    </div>
  )
}
