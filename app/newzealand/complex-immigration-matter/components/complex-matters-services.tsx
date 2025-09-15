import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ComplexMattersServices() {
  const services = [
    "Case review and assessment",
    "Strategy building for re-application or appeal",
    "Representation before Immigration New Zealand",
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-slate-600">
              Comprehensive support for complex immigration challenges with
              strategic expertise.
            </p>
          </div>

          <div className="bg-slate-50 rounded-lg p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-6">
                  Expert Immigration Solutions
                </h3>
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-lg font-semibold text-slate-900 mb-4">
                    Ready to Overcome Your Immigration Challenge?
                  </h4>
                  <p className="text-slate-600 mb-6">
                    Don't let complexity stop your journey. Get expert help
                    today.
                  </p>
                  <Button
                    asChild
                    className="bg-primary hover:bg-primary/90 text-white"
                  >
                    <Link href="/consultation">Get Help With Your Case</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
