import { DebugImage } from "@/components/debug-image"

export default function TestLogosPage() {
  const logos = [
    {
      name: "York University",
      path: "/images/logos/york-university.png",
    },
    {
      name: "Concordia University",
      path: "/images/logos/concordia-university.png",
    },
  ]

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Logo Test Page</h1>

      <div className="grid grid-cols-2 gap-8">
        {logos.map((logo, index) => (
          <div key={index} className="border p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-2">{logo.name}</h2>
            <DebugImage src={logo.path} alt={logo.name} />
            <p className="mt-2 text-sm text-gray-500">Path: {logo.path}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
