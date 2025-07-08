import { SafeImage } from "@/components/safe-image"

export default function TestImagesPage() {
  const australiaLogos = [
    {
      src: "/images/logos/university-of-sydney.png",
      alt: "The University of Sydney",
    },
    {
      src: "/images/logos/university-of-melbourne.png",
      alt: "The University of Melbourne",
    },
    {
      src: "/images/logos/australian-national-university.png",
      alt: "Australian National University",
    },
    {
      src: "/images/logos/university-of-queensland.png",
      alt: "The University of Queensland",
    },
    {
      src: "/images/logos/monash-university.png",
      alt: "Monash University",
    },
    {
      src: "/images/logos/unsw-sydney.png",
      alt: "UNSW Sydney",
    },
    {
      src: "/images/logos/university-of-western-australia.png",
      alt: "The University of Western Australia",
    },
    {
      src: "/images/logos/university-of-adelaide.png",
      alt: "The University of Adelaide",
    },
    {
      src: "/images/logos/university-of-technology-sydney.png",
      alt: "University of Technology Sydney",
    },
    {
      src: "/images/logos/macquarie-university.png",
      alt: "Macquarie University",
    },
  ]

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Test Images Page</h1>

      <h2 className="text-2xl font-semibold mb-4">Australian University Logos</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {australiaLogos.map((logo, index) => (
          <div key={index} className="border p-4 rounded-lg">
            <div className="mb-2 text-center">
              <SafeImage
                src={logo.src}
                alt={logo.alt}
                className="h-16 mx-auto object-contain"
                width={200}
                height={80}
              />
            </div>
            <p className="text-sm text-center">{logo.alt}</p>
            <p className="text-xs text-gray-500 text-center mt-1">{logo.src}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
