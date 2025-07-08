import { Card, CardContent } from "@/components/ui/card"

export default function TestIrishUniversitiesImages() {
  const universities = [
    {
      name: "Dublin City University",
      campusImage: "/images/dcu-campus.png",
      logo: "/images/logos/dcu-logo.png",
    },
    {
      name: "National College of Ireland",
      campusImage: "/images/nci-campus.png",
      logo: "/images/logos/nci-logo.png",
    },
  ]

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8">Test Irish Universities Images</h1>

      <div className="grid gap-8">
        {universities.map((university, index) => (
          <Card key={index} className="overflow-hidden">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">{university.name}</h2>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Campus Image:</h3>
                <div className="aspect-video relative overflow-hidden rounded-md border">
                  <img
                    src={university.campusImage || "/placeholder.svg"}
                    alt={`${university.name} campus`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mt-2 text-sm text-muted-foreground">Path: {university.campusImage}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Logo:</h3>
                <div className="h-20 w-40 relative bg-muted/20 rounded-md border p-2 flex items-center justify-center">
                  <img
                    src={university.logo || "/placeholder.svg"}
                    alt={`${university.name} logo`}
                    className="max-h-16 max-w-32 object-contain"
                  />
                </div>
                <p className="mt-2 text-sm text-muted-foreground">Path: {university.logo}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
