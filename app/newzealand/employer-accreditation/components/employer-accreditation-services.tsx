import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, FileText, RefreshCw } from "lucide-react";

export default function EmployerAccreditationServices() {
  const services = [
    {
      icon: FileText,
      title: "Accreditation Applications",
      description:
        "Complete application preparation and submission for new employer accreditation under AEWV.",
    },
    {
      icon: CheckCircle,
      title: "Policy and Compliance Guidance",
      description:
        "Expert advice on immigration policies and compliance requirements for accredited employers.",
    },
    {
      icon: RefreshCw,
      title: "Ongoing Support for Renewals",
      description:
        "Continuous support for accreditation renewals and maintaining compliance standards.",
    },
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Our Employer Accreditation Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We provide comprehensive support to help your business become
            accredited and hire skilled migrant workers legally.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Why Choose Our Accreditation Services?
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-slate-900">
                  Expert Knowledge
                </h4>
                <p className="text-slate-600">
                  Deep understanding of AEWV requirements and immigration
                  policies.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-slate-900">
                  Compliance Assurance
                </h4>
                <p className="text-slate-600">
                  Ensure your business meets all legal requirements for hiring
                  migrant workers.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-slate-900">
                  Ongoing Support
                </h4>
                <p className="text-slate-600">
                  Continuous guidance for renewals and maintaining accreditation
                  status.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-slate-900">
                  Fast Processing
                </h4>
                <p className="text-slate-600">
                  Streamlined application process to get your accreditation
                  quickly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
