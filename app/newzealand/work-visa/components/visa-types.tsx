import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Clock,
  Users,
  Briefcase,
  GraduationCap,
  Heart,
  Building,
} from "lucide-react";

const visaTypes = [
  {
    icon: Briefcase,
    title: "Essential Skills Work Visa",
    description:
      "For skilled workers with a job offer from a New Zealand employer",
    duration: "Up to 5 years",
    requirements: [
      "Job offer",
      "Skills assessment",
      "Health & character checks",
    ],
    popular: true,
  },
  {
    icon: Users,
    title: "Skilled Migrant Category",
    description: "Pathway to residence for skilled workers under 55 years",
    duration: "Permanent",
    requirements: [
      "Points-based system",
      "Age under 55",
      "English proficiency",
    ],
    popular: false,
  },
  {
    icon: GraduationCap,
    title: "Post-Study Work Visa",
    description:
      "For international students who completed studies in New Zealand",
    duration: "1-3 years",
    requirements: ["NZ qualification", "Recent graduate", "Study completion"],
    popular: true,
  },
  {
    icon: Heart,
    title: "Partnership Work Visa",
    description: "For partners of New Zealand citizens or residents",
    duration: "Up to 2 years",
    requirements: [
      "Genuine relationship",
      "Partner sponsorship",
      "Living together",
    ],
    popular: false,
  },
  {
    icon: Building,
    title: "Entrepreneur Work Visa",
    description:
      "For those wanting to establish or buy a business in New Zealand",
    duration: "Up to 3 years",
    requirements: ["Business plan", "Investment funds", "Business experience"],
    popular: false,
  },
  {
    icon: Clock,
    title: "Working Holiday Visa",
    description: "For young people from partner countries to work and travel",
    duration: "12-23 months",
    requirements: ["Age 18-30/35", "Partner country", "Sufficient funds"],
    popular: true,
  },
];

export function VisaTypes() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            New Zealand Work Visa Options
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the right work visa pathway based on your qualifications,
            experience, and career goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visaTypes.map((visa, index) => {
            const Icon = visa.icon;
            return (
              <Card
                key={index}
                className="relative hover:shadow-lg transition-shadow"
              >
                {visa.popular && (
                  <Badge className="absolute -top-2 -right-2 bg-accent text-accent-foreground">
                    Popular
                  </Badge>
                )}
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{visa.title}</CardTitle>
                      <div className="flex items-center space-x-2 mt-1">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          {visa.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base">
                    {visa.description}
                  </CardDescription>
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm text-foreground">
                      Key Requirements:
                    </h4>
                    <ul className="space-y-1">
                      {visa.requirements.map((req, reqIndex) => (
                        <li
                          key={reqIndex}
                          className="text-sm text-muted-foreground flex items-center space-x-2"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
