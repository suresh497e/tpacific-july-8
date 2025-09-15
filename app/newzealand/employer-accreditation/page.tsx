import EmployerAccreditationHero from "./components/employer-accreditation-hero"
import EmployerAccreditationServices from "./components/employer-accreditation-services"
import { TestimonialsSection } from "./components/testimonials"
import CTASection from "./components/cta-section"

export default function EmployerAccreditationPage() {
  return (
    <main>
      <EmployerAccreditationHero />
      <EmployerAccreditationServices />
      <TestimonialsSection />
      <CTASection />
    </main>
  )
}
