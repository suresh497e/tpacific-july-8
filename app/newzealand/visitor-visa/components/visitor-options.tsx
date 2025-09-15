import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Camera, Users, GraduationCap, Clock } from "lucide-react"

export function VisitorVisaOptions() {
  const visaOptions = [
    {
      icon: Camera,
      title: "Tourism",
      description: "Short holidays and sightseeing",
      features: ["Up to 9 months stay", "Multiple entry options", "Explore all regions", "No work restrictions"],
    },
    {
      icon: Users,
      title: "Family Visits",
      description: "Visiting children, parents, or relatives",
      features: ["Extended stay periods", "Family sponsorship", "Multiple visits", "Flexible duration"],
    },
    {
      icon: GraduationCap,
      title: "Study Exploration",
      description: "Short-term stays to explore schools or universities",
      features: ["Campus visits", "Course exploration", "Education consultations", "Future planning"],
    },
    {
      icon: Clock,
      title: "Extensions",
      description: "Stay longer legally with our support",
      features: ["Extend current visa", "Change visa conditions", "Legal compliance", "Expert guidance"],
    },
  ]

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Visitor Visa Options</h2>
          <p className="stats-intro-text text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the right visitor visa type for your New Zealand journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {visaOptions.map((option, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <option.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{option.title}</CardTitle>
                <p className="text-muted-foreground tracking-tight stats-intro-text">{option.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {option.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></div>
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
  )
}
