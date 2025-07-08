export default function TestUnitecImagePage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Testing Unitec Image</h1>

      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Direct Image Test</h2>
          <img
            src="/images/unitec-institute-campus.png"
            alt="Unitec Institute of Technology Campus"
            className="border rounded-lg max-w-2xl"
          />
          <p className="mt-2 text-gray-600">Path: /images/unitec-institute-campus.png</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Fallback Image Test</h2>
          <img src="/unitec-institute-of-technology.png" alt="Fallback Unitec Image" className="border rounded-lg max-w-2xl" />
          <p className="mt-2 text-gray-600">Using placeholder.svg fallback</p>
        </div>
      </div>
    </div>
  )
}
