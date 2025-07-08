"use client"
import ReliableImage from "@/components/reliable-image"

export default function TestNZLogosPage() {
  const universities = [
    {
      name: "University of Auckland",
      logo: "/images/logos/auckland-university-logo.png",
    },
    {
      name: "University of Canterbury",
      logo: "/images/logos/canterbury-university-logo.png",
    },
    {
      name: "Victoria University of Wellington",
      logo: "/images/logos/victoria-university-logo.png",
    },
    {
      name: "University of Otago",
      logo: "/images/logos/otago-university-logo.png",
    },
    {
      name: "Massey University",
      logo: "/images/logos/massey-university-logo.png",
    },
    {
      name: "University of Waikato",
      logo: "/images/logos/waikato-university-logo.png",
    },
    {
      name: "Lincoln University",
      logo: "/images/logos/lincoln-university-logo.png",
    },
    {
      name: "Auckland University of Technology (AUT)",
      logo: "/images/logos/aut-logo.png",
    },
    {
      name: "Unitec Institute of Technology",
      logo: "/images/logos/unitec-logo.png",
    },
  ]

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">New Zealand University Logos Test Page</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {universities.map((university, index) => (
          <div key={index} className="border p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">{university.name}</h2>
            <p className="text-sm text-gray-500 mb-4">{university.logo}</p>
            <div className="h-32 flex items-center justify-center bg-gray-100 p-4 rounded">
              <ReliableImage
                src={university.logo}
                alt={`${university.name} logo`}
                fallbackSrc="/generic-university-logo.png"
                className="max-h-24 max-w-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
