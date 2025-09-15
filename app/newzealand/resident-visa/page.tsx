import { ResidentVisaHero } from "./components/resident-visa-hero";
import { ResidentVisaPathways } from "./components/resident-visa-pathways";
import { ResidentVisaServices } from "./components/resident-visa-services";
import { TestimonialsSection } from "./components/testimonials";
import { CTASection } from "./components/cta-section";


export default function ResidentVisaPage() {
  return (
    <main>
      <ResidentVisaHero />
      <ResidentVisaPathways />
      <ResidentVisaServices />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
