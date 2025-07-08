import { SafeImage } from "@/components/safe-image"

export default function DebugAustraliaPage() {
  const universities = [
    {
      name: "University of Sydney",
      logo: "/images/logos/university-of-sydney.png",
    },
    {
      name: "University of Melbourne",
      logo: "/images/logos/university-of-melbourne.png",
    },
    {
      name: "Australian National University",
      logo: "/images/logos/australian-national-university.png",
    },
    {
      name: "University of Queensland",
      logo: "/images/logos/university-of-queensland.png",
    },
    {
      name: "Monash University",
      logo: "/images/logos/monash-university.png",
    },
    {
      name: "University of New South Wales",
      logo: "/images/logos/unsw-sydney.png",
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
      name: "Macquarie University",
      logo: "/images/logos/macquarie-university.png",
    },
  ]

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Debug Australia University Logos</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {universities.map((uni, index) => (
          <div key={index} className="border p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">{uni.name}</h2>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <SafeImage
                src={uni.logo || "/placeholder.svg"}
                alt={`${uni.name} logo`}
                className="h-16 mx-auto object-contain"
                width={200}
                height={80}
              />
            </div>
            <div className="text-sm text-gray-500">
              <p>Path: {uni.logo}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-4">University Cards Preview</h2>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
        {universities.slice(0, 4).map((university, index) => (
          <div key={index} className="bg-white border rounded-lg shadow-sm hover:shadow-md transition-all group">
            <div className="p-6 flex flex-col items-center text-center space-y-4">
              <div className="h-20 flex items-center justify-center">
                <SafeImage
                  src={university.logo || "/placeholder.svg"}
                  alt={`${university.name} logo`}
                  className="max-h-16 w-auto object-contain grayscale group-hover:grayscale-0 transition-all"
                  width={200}
                  height={80}
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{university.name}</h3>
              </div>
              <button className="px-4 py-2 border rounded-md text-sm mt-auto">Visit Site</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
