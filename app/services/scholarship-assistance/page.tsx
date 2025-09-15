import { ServiceHero } from "@/components/service-hero";
import { ServiceContent } from "@/components/service-content";
import { CTASection } from "@/components/cta-section";

export default function ScholarshipAssistancePage() {
  

  const content = `Scholarships can greatly reduce the financial burden of studying overseas. We actively inform students about available scholarships, assistantships, and tuition waivers at universities.

Our team guides them through eligibility requirements, application procedures, and documentation, increasing their chances of securing financial aid.

Our scholarship assistance includes:
• Scholarship database access
• Eligibility assessment
• Application strategy development
• Essay and personal statement guidance
• Documentation support
• Deadline management
• Follow-up and communication with institutions`;

  return (
    <div className="min-h-screen bg-background">
      <ServiceHero
        title="Scholarship Assistance"
        description="Expert guidance to help you secure scholarships and financial aid for your international education."
        ctaText="Find Scholarships"
        ctaLink="/contact"
        imageSrc="/scholarship-award-ceremony.jpg"
        imageAlt="Scholarship assistance"
      />
      <ServiceContent content={content} />
      <CTASection />
    </div>
  );
}
