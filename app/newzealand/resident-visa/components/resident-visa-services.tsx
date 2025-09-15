import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export function ResidentVisaServices() {
  const services = [
    "Residency eligibility assessments",
    "Strong case preparation for INZ",
    "Appeals and complex residency cases",
    "Points calculation and optimization",
    "Document preparation and verification",
    "Application submission and tracking",
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Our Residency Services
            </h2>
            <p className="text-lg text-slate-600">
              Comprehensive support to maximize your chances of obtaining
              permanent residency in New Zealand.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              {services.map((service, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{service}</span>
                </div>
              ))}
            </div>

            <div className="bg-slate-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Why Choose Our Residency Services?
              </h3>
              <p className="text-slate-600 mb-6">
                Residency applications are complex and competitive. Our
                experienced team ensures your application stands out with
                comprehensive documentation and strategic preparation.
              </p>
              <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white">
                Start Building Your Future Today
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
