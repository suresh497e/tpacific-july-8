"use client"
import { ReliableImage } from "@/components/reliable-image"

export default function TestCanadianUniversities() {
  const universities = [
    {
      name: "McGill University",
      campusImage: "/images/mcgill-campus.png",
      logo: "/images/logos/mcgill-university.png",
    },
    {
      name: "University of Alberta",
      campusImage: "/images/university-of-alberta-campus.png",
      logo: "/images/logos/university-of-alberta.png",
    },
    {
      name: "Université de Montréal",
      campusImage: "/images/universite-de-montreal-campus.png",
      logo: "/images/logos/universite-de-montreal.png",
    },
  ]

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Test Canadian Universities Images</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {universities.map((university) => (
          <div key={university.name} className="border rounded-lg overflow-hidden shadow-md">
            <div className="relative h-48 w-full">
              <ReliableImage
                src={university.campusImage}
                alt={`${university.name} campus`}
                fill
                className="object-cover"
                fallbackSrc={`/placeholder.svg?height=400&width=600&query=${university.name} campus`}
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{university.name}</h2>
              <div className="h-16 flex items-center justify-center bg-gray-50 rounded p-2 mb-4">
                <div className="relative h-12 w-32">
                  <ReliableImage
                    src={university.logo}
                    alt={`${university.name} logo`}
                    fill
                    className="object-contain"
                    fallbackSrc={`/placeholder.svg?height=100&width=200&query=${university.name} logo`}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
