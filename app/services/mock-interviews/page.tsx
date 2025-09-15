
import { ServiceHero } from "@/components/service-hero";
import { ServiceContent } from "@/components/service-content";
import { CTASection } from "@/components/cta-section";

export default function MockVisaInterviewsPage() {
 

  const content = `Visa interviews can be stressful for students. To build confidence, we conduct personalized mock interview sessions simulating real embassy interviews.

We train students on answering common questions, handling anxiety, and effectively presenting their academic and financial preparedness to maximize their success rates.

Our mock interview services include:
• Personalized interview simulation
• Common question preparation
• Confidence building techniques
• Body language and presentation training
• Document presentation practice
• Anxiety management strategies
• Multiple practice sessions until confident`;

  return (
    <div className="min-h-screen bg-background">
      <ServiceHero
        title="Mock Visa Interviews"
        description="Build confidence with personalized mock interview sessions that simulate real embassy interviews."
        ctaText="Book Mock Interview"
        ctaLink="/contact"
        imageSrc="/visa-interview-preparation.jpg"
        imageAlt="Mock visa interview session"
      />
      <ServiceContent content={content} />
      <CTASection />
    </div>
  );
}
