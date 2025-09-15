
import { ServiceHero } from "@/components/service-hero"
import { ServiceContent } from "@/components/service-content"
import { CTASection } from "@/components/cta-section"

export default function CourseUniversitySelectionPage() {
  

  const content = `Selecting the right course and university can be overwhelming given the number of global options. We simplify this process by considering academic background, entrance test scores, budget, location preferences, and future opportunities.

We ensure that the institutions shortlisted are well-ranked, accredited, and aligned with the student's aspirations and career goals.

Our course and university selection services include:
• Academic background assessment
• University ranking analysis
• Course curriculum evaluation
• Budget and location considerations
• Application requirement analysis
• Deadline management
• Institution accreditation verification`

  return (
    <div className="min-h-screen bg-background">
      <ServiceHero
        title="Course / University Selection"
        description="Expert guidance in selecting the right course and university that aligns with your academic goals and career aspirations."
        ctaText="Get University Guidance"
        ctaLink="/contact"
        imageSrc="/university-campus-selection.jpg"
        imageAlt="University selection guidance"
      />
      <ServiceContent content={content} />
      <CTASection />
    </div>
  )
}
