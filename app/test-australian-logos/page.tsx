import { Card, CardContent } from "@/components/ui/card"
import { AustraliaLogoCarousel } from "@/components/australia-logo-carousel"
import { UniversityLogo } from "@/components/university-logo"

export default function TestAustralianLogosPage() {
  const australianUniversities = [
    {
      name: "University of Melbourne",
      logo: "/images/logos/university-of-melbourne.png",
    },
    {
      name: "Australian National University",
      logo: "/images/logos/australian-national-university.png",
    },
    {
      name: "University of Sydney",
      logo: "/images/logos/university-of-sydney.png",
    },
    {
      name: "University of Queensland",
      logo: "/images/logos/university-of-queensland.png",
    },
    {
      name: "University of New South Wales",
      logo: "/images/logos/unsw-sydney.png",
    },
    {
      name: "Monash University",
      logo: "/images/logos/monash-university.png",
    },
    {
      name: "University of Western Australia",
      logo: "/images/logos/university-of-western-australia.png",
    },
    {
      name: "University of Adelaide",
      logo: "/images/logos/university-of-adelaide.png",
    },
    {
      name: "University of Technology Sydney",
      logo: "/images/logos/university-of-technology-sydney.png",
    },
    {
      name: "Queensland University of Technology",
      logo: "/images/logos/qut-logo.png",
    },
  ]

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Australian University Logos</h1>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Logo Carousel</h2>
        <Card>
          <CardContent className="p-6">
            <AustraliaLogoCarousel speed={40} />
          </CardContent>
        </Card>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Individual Logos</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {australianUniversities.map((university, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex flex-col items-center">
                  <div className="h-16 flex items-center justify-center mb-4">
                    <UniversityLogo src={university.logo} alt={`${university.name} logo`} name={university.name} />
                  </div>
                  <p className="text-sm text-center">{university.name}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
