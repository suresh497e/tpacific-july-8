"use client"
import { ReliableImage } from "@/components/reliable-image"

export default function TestMoreCanadianUniversities() {
  const universities = [
    {
      name: "Western University",
      campusImage: "/images/western-university-campus.png",
      logo: "/images/logos/western-university.png",
    },
    {
      name: "University of Calgary",
      campusImage: "/images/university-of-calgary-campus.png",
      logo: "/images/logos/university-of-calgary.png",
    },
    {
      name: "University of Waterloo",
      campusImage: "/images/university-of-waterloo-campus.png",
      logo: "/images/logos/university-of-waterloo.png",
    },
    {
      name: "Queen's University",
      campusImage: "/images/queens-university-campus.png",
      logo: "/images/logos/queens-university.png",
    },
  ]

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Test More Canadian Universities Images</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
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
