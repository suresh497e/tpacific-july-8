import { Card, CardContent } from "@/components/ui/card"

export default function TestUKLogosPage() {
  const logos = [
    { name: "University of Glasgow", path: "/images/logos/glasgow-logo.png" },
    { name: "Durham University", path: "/images/logos/durham-logo.png" },
  ]

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">UK University Logo Test</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {logos.map((logo, index) => (
          <Card key={index} className="overflow-hidden">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">{logo.name}</h2>
              <div className="bg-gray-100 p-4 rounded-md">
                <p className="text-sm text-gray-500 mb-2">Logo path: {logo.path}</p>
                <div className="h-24 flex items-center justify-center border border-dashed border-gray-300 rounded-md">
                  <img
                    src={logo.path || "/placeholder.svg"}
                    alt={`${logo.name} logo`}
                    className="max-h-20 object-contain"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
