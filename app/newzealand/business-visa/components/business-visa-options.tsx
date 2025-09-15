import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, TrendingUp, Globe } from "lucide-react";

export function BusinessVisaOptions() {
  const visaOptions = [
    {
      icon: Briefcase,
      title: "Entrepreneur Work Visa",
      description:
        "For innovative business ideas with growth potential in New Zealand's market.",
      features: [
        "12-month initial visa",
        "Path to residency",
        "Business mentorship support",
        "Family inclusion",
      ],
    },
    {
      icon: TrendingUp,
      title: "Investor Visa",
      description:
        "For high-net-worth individuals seeking investment opportunities.",
      features: [
        "Minimum $3M investment",
        "4-year visa duration",
        "Flexible investment options",
        "Fast-track residency",
      ],
    },
    {
      icon: Globe,
      title: "Global Impact Visa",
      description:
        "For entrepreneurs with globally scalable innovative businesses.",
      features: [
        "Recognized accelerator support",
        "Innovative business model",
        "International growth potential",
        "Streamlined process",
      ],
    },
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Business Visa Options
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Choose the pathway that aligns with your business goals and
            investment capacity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {visaOptions.map((option, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <option.icon className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-slate-900">
                  {option.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600 text-center">
                  {option.description}
                </p>
                <ul className="space-y-2">
                  {option.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-slate-700"
                    >
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
