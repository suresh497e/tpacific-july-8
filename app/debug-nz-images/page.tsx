export default function DebugNZImagesPage() {
  const images = [
    {
      name: "University of Otago",
      path: "/images/otago-university-students.png",
    },
    {
      name: "Massey University",
      path: "/images/massey-university-students.png",
    },
    {
      name: "University of Waikato",
      path: "/images/waikato-university-students.png",
    },
    {
      name: "Unitec Institute of Technology",
      path: "/images/unitec-students.png",
    },
  ]

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Debug New Zealand University Images</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {images.map((image, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <div className="aspect-video relative">
              <img src={image.path || "/placeholder.svg"} alt={image.name} className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold">{image.name}</h2>
              <p className="text-gray-500 mt-1">Path: {image.path}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
