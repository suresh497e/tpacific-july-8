import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  FileText,
  DollarSign,
  Users,
  ArrowRight,
} from "lucide-react";

export function BusinessVisaServices() {
  const services = [
    {
      icon: FileText,
      title: "Business Plan Preparation",
      description:
        "Comprehensive business plans that meet INZ requirements and showcase viability.",
    },
    {
      icon: DollarSign,
      title: "Financial & Compliance Support",
      description:
        "Investment structuring, financial documentation, and regulatory compliance guidance.",
    },
    {
      icon: Users,
      title: "End-to-End Application Management",
      description:
        "Complete visa application support from initial assessment to approval.",
    },
  ];

  const benefits = [
    "Business plan preparation",
    "Financial and compliance support",
    "End-to-end visa application management",
    "Investment strategy consultation",
    "Market research and analysis",
    "Ongoing business mentorship",
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Our Business Visa Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We understand that business matters require expertise. Our
            comprehensive services ensure your business venture can succeed in
            New Zealand.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="grid gap-6">
              {services.map((service, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-slate-600">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Book a Business Visa Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-slate-900">
                What We Provide
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
