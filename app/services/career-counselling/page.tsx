

import { ServiceHero } from "@/components/service-hero"
import { ServiceContent } from "@/components/service-content"
import { CTASection } from "@/components/cta-section"

export default function CareerCounsellingPage() {


  const content = `Choosing the right career path is the foundation of a student's future success. Our expert counsellors guide students in identifying their strengths, interests, and long-term goals to select the most suitable field of study.

With personalized sessions, we help students understand global education trends, career opportunities, and industry demands so they can make informed decisions about their academic and professional future.

Our comprehensive career counselling includes:
• Personality and aptitude assessments
• Industry trend analysis
• Career pathway mapping
• Goal setting and planning
• One-on-one counselling sessions
• Follow-up support and guidance`

  return (
    <div className="min-h-screen bg-background">
      <ServiceHero
        title="Career Counselling"
        description="Expert guidance to help students identify their strengths and choose the right career path for future success."
        ctaText="Book Career Counselling"
        ctaLink="/contact"
        imageSrc="/career-counselling-session.jpg"
        imageAlt="Career counselling session"
      />
      <ServiceContent content={content} />
      <CTASection />
    </div>
  )
}
