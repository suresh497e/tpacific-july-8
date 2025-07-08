import ReliableImage from "@/components/reliable-image"

export default function TestUnitecPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Unitec Institute of Technology Image Test</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Standard Image</h2>
          <img
            src="/images/unitec-institute-campus.png"
            alt="Unitec Institute of Technology Campus"
            className="w-full h-auto rounded-lg"
          />
        </div>

        <div className="border p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">ReliableImage Component</h2>
          <ReliableImage
            src="/images/unitec-institute-campus.png"
            alt="Unitec Institute of Technology Campus"
            className="w-full h-auto rounded-lg"
          />
        </div>

        <div className="border p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Logo</h2>
          <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-center">
            <img src="/images/logos/unitec-logo.png" alt="Unitec Institute of Technology Logo" className="max-h-24" />
          </div>
        </div>
      </div>
    </div>
  )
}
