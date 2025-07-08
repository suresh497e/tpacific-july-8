import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { UniversityLogo } from "@/components/university-logo"

export default function TestUTSImagePage() {
  const university = {
    name: "University of Technology Sydney",
    logo: "/images/logos/university-of-technology-sydney.png",
    image: "/images/uts-campus.png",
    description:
      "A dynamic and innovative university, known for its practice-oriented teaching and strong industry connections. UTS is ranked as one of Australia's top young universities.",
    link: "https://www.uts.edu.au/",
    ranking: 10,
    location: "Sydney, NSW",
  }

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8">Testing UTS Image Display</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="overflow-hidden bg-background border-border/50 hover:shadow-md transition-shadow">
          <div className="aspect-video w-full overflow-hidden">
            <UniversityLogo
              src={university.image || "/placeholder.svg"}
              alt={`${university.name} campus`}
              name={university.name}
              className="h-full w-full object-cover transition-transform hover:scale-105"
              maxWidth="100%"
              maxHeight="100%"
            />
          </div>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-galano text-xl font-semibold">{university.name}</h3>
              <div className="h-8 w-16 flex items-center justify-end">
                <UniversityLogo
                  src={university.logo || "/placeholder.svg"}
                  alt={`${university.name} logo`}
                  name={university.name}
                  className="max-h-6 w-auto object-contain"
                  maxWidth="64px"
                />
              </div>
            </div>
            <p className="text-muted-foreground mb-4">{university.description}</p>
            <Button variant="outline" size="sm" asChild>
              <Link href={university.link} className="gap-2" target="_blank" rel="noopener noreferrer">
                Visit Website
                <ExternalLink className="h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Image Details</h2>
          <p>
            <strong>Image Path:</strong> {university.image}
          </p>
          <p>
            <strong>Logo Path:</strong> {university.logo}
          </p>
          <div className="mt-4">
            <h3 className="font-medium mb-2">Raw Image:</h3>
            <div className="border border-dashed border-gray-300 p-2 max-h-[300px] w-auto">
              <UniversityLogo
                src={university.image || "/placeholder.svg"}
                alt="UTS Campus Raw"
                name={university.name}
                className="max-h-[300px] w-auto"
                maxWidth="100%"
                maxHeight="300px"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <Button asChild>
          <Link href="/countries/australia">Return to Australia Page</Link>
        </Button>
      </div>
    </div>
  )
}
