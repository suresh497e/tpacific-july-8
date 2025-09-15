
import { WorkVisaHero } from "./components/work-visa-hero"
import { VisaTypes } from "./components/visa-types"
import { ProcessSteps } from "./components/process-steps"
import { Testimonials } from "./components/testimonials"
import { CTASection } from "./components/cta-section"


export default function WorkVisaPage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <WorkVisaHero />
        <VisaTypes />
        <ProcessSteps />
        <Testimonials />
        <CTASection />
      </main>
    </div>
  )
}
