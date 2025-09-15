import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FileCheck, Shield, Users, ArrowRight } from "lucide-react"

export function AccreditationRenewalServices() {
  const services = [
    {
      icon: FileCheck,
      title: "Renewal Applications",
      description:
        "Complete preparation and submission of your accreditation renewal applications with all required documentation.",
    },
    {
      icon: Shield,
      title: "Compliance Audits",
      description:
        "Thorough review of your current practices to ensure ongoing compliance with Immigration New Zealand requirements.",
    },
    {
      icon: Users,
      title: "Ongoing Employer Support",
      description: "Continuous guidance and support to maintain your accreditation status and hiring capabilities.",
    },
  ]

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Our Accreditation Renewal Services</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We ensure your accreditation remains active so you can continue hiring the talent your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-lg p-8 shadow-lg">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Why Renew Accreditation?</h3>
            <p className="text-lg text-slate-600 mb-8 max-w-3xl mx-auto">
              Without timely renewal, employers lose the ability to hire skilled migrants. We ensure your accreditation
              remains active and your hiring pipeline stays secure.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              Schedule Your Accreditation Renewal
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
