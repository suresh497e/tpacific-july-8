import { ComplexMattersHero } from "./components/complex-matters-hero"
import { ComplexMattersSpecializations } from "./components/complex-matters-specializations"
import { ComplexMattersServices } from "./components/complex-matters-services"
import { TestimonialsSection } from "./components/testimonials"
import { CTASection } from "./components/cta-section"


export default function ComplexMattersPage() {
  return (
    <main>
      <ComplexMattersHero />
      <ComplexMattersSpecializations />
      <ComplexMattersServices />
      <TestimonialsSection />
      <CTASection />
    </main>
  )
}
