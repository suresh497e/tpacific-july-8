import { ServiceHero } from "@/components/service-hero";
import { ServiceContent } from "@/components/service-content";
import { CTASection } from "@/components/cta-section";

export default function FinancialAssistancePage() {
 
  const content = `Education abroad is a significant financial commitment. We assist parents and students in identifying the most suitable funding options, including education loans, tax benefits, and tie-ups with financial institutions for faster processing.

Our partnerships with organizations like CREDILA, IDP, ETS, and Normad Credit ensure students get access to the best financial support with minimal hassle.

Our financial assistance services include:
• Education loan guidance
• Financial planning consultation
• Tax benefit optimization
• Partnership with leading financial institutions
• Loan application support
• Documentation assistance
• Interest rate comparison and negotiation`;

  return (
    <div className="min-h-screen bg-background">
      <ServiceHero
        title="Financial Assistance"
        description="Comprehensive financial planning and loan assistance to make your international education dreams affordable."
        ctaText="Get Financial Guidance"
        ctaLink="/contact"
        imageSrc="/financial-planning-consultation.jpg"
        imageAlt="Financial assistance consultation"
      />
      <ServiceContent content={content} />
      <CTASection />
    </div>
  );
}
