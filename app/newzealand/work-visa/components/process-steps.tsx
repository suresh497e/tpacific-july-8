import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Search, Send, Clock, Award } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Initial Assessment",
    description:
      "We evaluate your qualifications, experience, and visa options during a comprehensive consultation.",
    duration: "1-2 days",
  },
  {
    icon: FileText,
    title: "Document Preparation",
    description:
      "Our team helps you gather and prepare all required documents, ensuring everything meets immigration standards.",
    duration: "1-2 weeks",
  },
  {
    icon: Send,
    title: "Application Submission",
    description:
      "We submit your complete application to Immigration New Zealand with all supporting documentation.",
    duration: "1 day",
  },
  {
    icon: Clock,
    title: "Processing & Follow-up",
    description:
      "We monitor your application progress and respond to any requests from immigration officers.",
    duration: "2-8 weeks",
  },
  {
    icon: Award,
    title: "Visa Approval",
    description:
      "Receive your work visa approval and get guidance on your next steps for moving to New Zealand.",
    duration: "Same day",
  },
];

export function ProcessSteps() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Our Proven 5-Step Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From initial consultation to visa approval, we guide you through
            every step of your work visa journey
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl h-0.5 bg-border"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <Card className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-4">
                      <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 relative z-10">
                        <Icon className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <div className="absolute -top-2 -right-2 bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <CardTitle className="text-lg">{step.title}</CardTitle>
                      <div className="text-sm text-accent font-medium">
                        {step.duration}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
