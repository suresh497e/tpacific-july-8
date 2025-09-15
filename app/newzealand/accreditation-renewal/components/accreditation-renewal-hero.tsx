import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function AccreditationRenewalHero() {
  return (
    <section className="bg-primary text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                Keep your doors open to <span className="text-blue-400">global talent</span>
              </h1>
              <p className="text-xl text-blue-100">Smooth renewals without disruption.</p>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-slate-200 leading-relaxed">
                Without timely renewal, employers lose the ability to hire skilled migrants. We ensure your
                accreditation remains active.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 py-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">100%</div>
                <div className="text-sm text-slate-300">Renewal Success</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">200+</div>
                <div className="text-sm text-slate-300">Employers Renewed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">10+</div>
                <div className="text-sm text-slate-300">Years Experience</div>
              </div>
            </div>

            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Schedule Your Accreditation Renewal
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="relative">
            <img
              src="/business-compliance.png"
              alt="Business compliance and renewal process"
              className="rounded-lg shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
