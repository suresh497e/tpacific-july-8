import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, FileText, Clock, Users } from "lucide-react";

export function VisitorServices() {
  const services = [
    {
      icon: CheckCircle,
      title: "Eligibility Checks",
      description: "Comprehensive assessment of your visitor visa eligibility",
    },
    {
      icon: FileText,
      title: "Document Preparation",
      description:
        "Complete assistance with travel, funds, and purpose of visit documentation",
    },
    {
      icon: Clock,
      title: "Faster Submissions",
      description:
        "Streamlined process with fewer risks and faster processing times",
    },
    {
      icon: Users,
      title: "Multiple Entry Support",
      description: "Assistance for multiple-entry or longer visit applications",
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Our Visitor Visa Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto stats-intro-text">
            New Zealand is a world-class destination, but immigration requires
            accurate visitor visa paperwork. Many applications are delayed or
            refused due to missing documents or incorrect details. We remove
            that stress.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-primary/5 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-center mb-6">
            Why Choose Us?
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <p className="text-muted-foreground stats-intro-text">Compliant applications</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">Expert</div>
              <p className="text-muted-foreground stats-intro-text">
                Experience with both simple and complex visitor cases
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">
                Transparent
              </div>
              <p className="text-muted-foreground stats-intro-text">
                Process, no hidden surprises
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
