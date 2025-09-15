import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Heart, Users, UserCheck } from "lucide-react";

export function FamilyVisaServices() {
  const visaTypes = [
    {
      icon: Heart,
      title: "Partner Visas",
      description: "For spouses and partners of residents/work visa holders.",
      features: [
        "Relationship verification",
        "Evidence preparation",
        "Application support",
      ],
    },
    {
      icon: Users,
      title: "Dependent Child Visas",
      description: "Bring your children to New Zealand.",
      features: [
        "Age requirements",
        "Custody documentation",
        "Education planning",
      ],
    },
    {
      icon: UserCheck,
      title: "Parent Visas",
      description: "For parents of residents or citizens.",
      features: [
        "Sponsorship requirements",
        "Health assessments",
        "Financial support",
      ],
    },
  ];

  const services = [
    "Relationship verification & documentation",
    "Preparing genuine partnership evidence",
    "Step-by-step application management",
    "Guidance for complex family situations",
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
            Family Visa Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We understand that family matters most. Our comprehensive services
            ensure your loved ones can join you in New Zealand.
          </p>
        </div>

        {/* Visa Types */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {visaTypes.map((visa, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <visa.icon className="w-8 h-8 text-accent-blue" />
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-3">
                  {visa.title}
                </h3>
                <p className="text-gray-600 mb-4">{visa.description}</p>
                <ul className="space-y-2">
                  {visa.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-gray-500 flex items-center justify-center gap-2"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Our Services */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <h3 className="text-2xl font-bold text-navy-900 mb-8 text-center">
            Our Services
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
