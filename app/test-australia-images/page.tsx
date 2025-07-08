import { Card } from "@/components/ui/card"
import { ReliableImage } from "@/components/reliable-image"

export default function TestAustraliaImagesPage() {
  const universities = [
    {
      name: "University of Melbourne",
      logo: "/images/logos/university-of-melbourne.png",
      image: "/images/university-of-melbourne-campus.png",
    },
    {
      name: "Australian National University",
      logo: "/images/logos/australian-national-university.png",
      image: "/images/anu-campus.png",
    },
    {
      name: "University of Sydney",
      logo: "/images/logos/university-of-sydney.png",
      image: "/images/university-of-sydney-campus.png",
    },
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
    {
      name: "University of Western Australia",
      logo: "/images/logos/university-of-western-australia.png",
      image: "/images/uwa-campus.png",
    },
    {
      name: "University of Adelaide",
      logo: "/images/logos/university-of-adelaide.png",
      image: "/images/adelaide-university-campus.png",
    },
    {
      name: "Queensland University of Technology",
      logo: "/images/logos/university-of-technology-sydney.png", // Using UTS logo as placeholder
      image: "/images/qut-campus.png",
    },
  ]

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8">Australian University Images Test</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {universities.map((university, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-4">{university.name}</h2>

              <div className="mb-6">
                <h3 className="text-sm font-medium mb-2">Logo:</h3>
                <div className="h-16 flex items-center justify-center bg-gray-50 rounded">
                  <ReliableImage
                    src={university.logo}
                    alt={`${university.name} logo`}
                    className="max-h-12 max-w-full object-contain"
                    fallbackSrc="/generic-university-logo.png"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-2">Campus Image:</h3>
                <div className="aspect-video overflow-hidden rounded">
                  <ReliableImage
                    src={university.image}
                    alt={`${university.name} campus`}
                    className="w-full h-full object-cover"
                    fallbackSrc={`/placeholder.svg?height=200&width=400&query=${university.name}%20campus`}
                  />
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
