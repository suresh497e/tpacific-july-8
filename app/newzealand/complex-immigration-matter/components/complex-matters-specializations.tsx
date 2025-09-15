import { AlertTriangle, FileText, Users } from "lucide-react";

export function ComplexMattersSpecializations() {
  const specializations = [
    {
      icon: AlertTriangle,
      title: "Visa Refusals & Appeals",
      description:
        "Expert representation for visa refusals and immigration appeals before Immigration New Zealand.",
    },
    {
      icon: FileText,
      title: "Medical or Character Issues",
      description:
        "Specialized handling of medical waivers, character requirements, and complex documentation.",
    },
    {
      icon: Users,
      title: "Complicated Family or Work Cases",
      description:
        "Complex relationship evidence, employment situations, and multi-faceted immigration scenarios.",
    },
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            We Specialize In
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our expertise covers the most challenging immigration scenarios,
            providing strategic solutions where others see obstacles.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {specializations.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-6 mx-auto">
                <item.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4 text-center">
                {item.title}
              </h3>
              <p className="text-slate-600 text-center leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
