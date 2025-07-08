import { Card, CardContent } from "@/components/ui/card"
import { UniversityLogo } from "@/components/university-logo"

export default function TestAustraliaUniversitiesPage() {
  const universities = [
    {
      name: "University of Queensland",
      logo: "/images/logos/university-of-queensland.png",
      image: "/images/university-of-queensland-campus.png",
    },
    {
      name: "University of New South Wales",
      logo: "/images/logos/unsw-sydney.png",
      image: "/images/unsw-campus.png",
    },
    {
      name: "Monash University",
      logo: "/images/logos/monash-university.png",
      image: "/images/monash-university-campus.png",
    },
  ]

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8">Test Australia Universities Images</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {universities.map((university, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="p-4 border-b">
              <h2 className="text-xl font-semibold">{university.name}</h2>
            </div>
            <CardContent className="p-4 space-y-4">
              <div>
                <h3 className="text-sm font-medium mb-2">Campus Image:</h3>
                <div className="aspect-video relative overflow-hidden rounded-md border">
                  <UniversityLogo
                    src={university.image || "/placeholder.svg"}
                    alt={`${university.name} campus`}
                    name={university.name}
                    className="w-full h-full object-cover"
                    maxWidth="100%"
                    maxHeight="100%"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-2">Logo:</h3>
                <div className="h-16 flex items-center justify-center border rounded-md p-2">
                  <UniversityLogo
                    src={university.logo}
                    alt={`${university.name} logo`}
                    name={university.name}
                    className="max-h-12 w-auto object-contain"
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
