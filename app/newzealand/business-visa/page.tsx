import { BusinessVisaHero } from "./components/business-visa-hero";
import { BusinessVisaOptions } from "./components/business-visa-options";
import { BusinessVisaServices } from "./components/business-visa-services";
import { TestimonialsSection } from "./components/testimonials";
import { CTASection } from "./components/cta-section";


export default function BusinessVisaPage() {
  return (
    <main>
      <BusinessVisaHero />
      <BusinessVisaOptions />
      <BusinessVisaServices />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
