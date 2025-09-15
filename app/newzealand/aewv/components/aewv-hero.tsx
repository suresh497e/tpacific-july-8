import { Button } from "@/components/ui/button";
import Image from "next/image";

export function AEWVHero() {
  return (
    <section className="!bg-slate-900 text-white py-20 min-h-[600px]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              Accredited Employer Work Visa
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              AEWV Accreditation & Support
            </h1>

            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Get accredited to hire skilled migrant workers in New Zealand. We
              handle the entire process from application to ongoing compliance
              support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                size="lg"
                className="bg-primary text-white"
              >
                Start Your Application
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
              >
                Download AEWV Guide
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-700">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">
                  500+
                </div>
                <div className="text-sm text-slate-400">
                  Employers Accredited
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">
                  98%
                </div>
                <div className="text-sm text-slate-400">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">
                  15+
                </div>
                <div className="text-sm text-slate-400">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/diverse-global-recruitment-meeting.png"
                alt="AEWV accreditation consultation"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-blue-600 to-green-600 rounded-lg opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
