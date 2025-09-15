import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Heart, Briefcase } from "lucide-react";

export function ResidentVisaPathways() {
  const pathways = [
    {
      icon: <GraduationCap className="h-8 w-8 text-blue-600" />,
      title: "Skilled Migrant Category",
      description:
        "For skilled workers who can contribute to New Zealand's economy and society.",
    },
    {
      icon: <Heart className="h-8 w-8 text-blue-600" />,
      title: "Partnership-Based Residency",
      description:
        "For partners of New Zealand citizens or residents in genuine relationships.",
    },
    {
      icon: <Briefcase className="h-8 w-8 text-blue-600" />,
      title: "Residence from Work Pathway",
      description:
        "Transition from temporary work visas to permanent residency through employment.",
    },
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Pathways to Residency
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Multiple routes to permanent residency in New Zealand, each with
            specific requirements and processes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pathways.map((pathway, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div className="flex justify-center mb-4">{pathway.icon}</div>
                <CardTitle className="text-xl text-slate-900">
                  {pathway.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">{pathway.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
