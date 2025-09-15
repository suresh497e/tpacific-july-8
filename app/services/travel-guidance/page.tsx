import { ServiceHero } from "@/components/service-hero";
import { ServiceContent } from "@/components/service-content";
import { CTASection } from "@/components/cta-section";

export default function PreDepartureTravelGuidancePage() {
  

  const content = `Studying abroad requires preparation beyond academics. We provide detailed guidance on cultural adaptation, handling culture shock, weather preparedness, essential items to carry, and country-specific do's and don'ts.

We also assist with airport pickup arrangements and connect students with support networks to ensure a smooth transition to their new environment.

Our pre-departure guidance includes:
• Cultural orientation sessions
• Weather and climate preparation
• Essential items checklist
• Country-specific guidelines
• Airport pickup arrangements
• Support network connections
• Emergency contact information
• Banking and financial setup guidance`;

  return (
    <div className="min-h-screen bg-background">
      <ServiceHero
        title="Pre-Departure & Travel Guidance"
        description="Comprehensive preparation support to ensure a smooth transition to your new study destination."
        ctaText="Get Travel Guidance"
        ctaLink="/contact"
        imageSrc="/student-departure-preparation.jpg"
        imageAlt="Pre-departure guidance session"
      />
      <ServiceContent content={content} />
      <CTASection />
    </div>
  );
}
