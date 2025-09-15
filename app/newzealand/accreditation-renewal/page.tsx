import { AccreditationRenewalHero } from "./components/accreditation-renewal-hero"
import { AccreditationRenewalServices } from "./components/accreditation-renewal-services"
import { TestimonialsSection } from "./components/testimonials"
import CTASection from "@/components/cta-section"


export default function AccreditationRenewalPage() {
  return (
    <main>
      <AccreditationRenewalHero />
      <AccreditationRenewalServices />
      <TestimonialsSection />
      <CTASection />
    </main>
  )
}
