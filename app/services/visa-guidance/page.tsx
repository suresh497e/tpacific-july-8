
import { ServiceHero } from "@/components/service-hero";
import { ServiceContent } from "@/components/service-content";
import { CTASection } from "@/components/cta-section";

export default function VisaDocumentationGuidancePage() {


  const content = `Securing a student visa is often one of the most challenging parts of studying abroad. We provide end-to-end support by verifying financial documents, assisting with visa application forms, explaining country-specific requirements, and preparing students for embassy submissions.

Our guidance ensures compliance and smooth processing of visas across different countries and visa categories.

Our visa documentation services include:
• Document verification and preparation
• Visa application form assistance
• Country-specific requirement guidance
• Financial documentation support
• Embassy appointment scheduling
• Application tracking and follow-up
• Compliance verification`;

  return (
    <div className="min-h-screen bg-background">
      <ServiceHero
        title="Visa Documentation Guidance"
        description="Expert assistance with visa documentation and application processes to ensure smooth visa approval."
        ctaText="Get Visa Support"
        ctaLink="/contact"
        imageSrc="/visa-documentation-process.jpg"
        imageAlt="Visa documentation guidance"
      />
      <ServiceContent content={content} />
      <CTASection />
    </div>
  );
}
