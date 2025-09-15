import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function EmployerAccreditationHero() {
  return (
    <section className="relative bg-primary text-white py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                Grow your workforce with <span className="text-blue-400">confidence</span>
              </h1>
              <p className="text-xl text-blue-100">Full support for New Zealand employer accreditation.</p>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-slate-200 leading-relaxed">
                Employers must be accredited to hire under AEWV. Without it, your business cannot access skilled migrant
                workers.
              </p>

              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">98%</div>
                  <div className="text-sm text-slate-300">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">200+</div>
                  <div className="text-sm text-slate-300">Employers Accredited</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">10+</div>
                  <div className="text-sm text-slate-300">Years Experience</div>
                </div>
              </div>
            </div>

            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Apply for Employer Accreditation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="relative">
            <Image
              src="/diverse-global-recruitment-meeting.png"
              alt="Business team meeting discussing global talent acquisition"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
