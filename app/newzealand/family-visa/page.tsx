
import { FamilyVisaHero } from "./components/family-visa-hero";
import { FamilyVisaServices } from "./components/family-visa-services";
import { TestimonialsSection } from "./components/testimonials";
import { CTASection } from "./components/cta-section";


export default function FamilyVisaPage() {
  return (
    <main className="min-h-screen">
    
      <FamilyVisaHero />
      <FamilyVisaServices />
      <TestimonialsSection />
      <CTASection
        title="Ready to Reunite Your Family?"
        description="Don't let complex visa requirements keep you apart from your loved ones. Our family visa experts are here to guide you through every step of the process."
        primaryButtonText="Start Your Family Visa Application"
        secondaryButtonText="Schedule Consultation"
      />
    </main>
  );
}
