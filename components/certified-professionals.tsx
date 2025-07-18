
import Image from "next/image";

export default function CertifiedProfessionals() {
  return (
    <section className="relative bg-[#003087] text-white px-4 py-16">
      {/* Background map image */}
      {/* <div className="absolute inset-0 z-0">
        <Image
          src="/images/world-map.png" 
          alt="World Map"
          layout="fill"
          objectFit="cover"
          className="opacity-30"
        />
      </div> */}

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        {/* Left Stats */}
        <div className="lg:col-span-2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">About Transpacific</h2>

          <div className="flex flex-wrap justify-center lg:justify-start gap-10">
            <div>
              <p className="text-4xl font-semibold">10+</p>
              <p className="text-sm text-gray-200">Years of Experience</p>
            </div>
            <div>
              <p className="text-4xl font-semibold">5,369+</p>
              <p className="text-sm text-gray-200">Visa Applications Approved</p>
            </div>
            <div>
              <p className="text-4xl font-semibold">9+</p>
              <p className="text-sm text-gray-200">Countries</p>
            </div>
          </div>
        </div>

        {/* Certified Professionals */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-white">Certified Professionals</h3>

          {/* Card 1 */}
          <div className="text-gray-800 rounded-2xl p-4 shadow-md space-y-2">
            <div className="w-full rounded flex items-center justify-center text-sm font-medium h-1/2">
            <img src="/office/certified1.png" alt="IAA Logo" className="h-1/2" />
            </div>
            {/* <p className="text-sm font-medium">Rohit Reddy Thamineni</p>
            <p className="text-xs text-gray-600">(MARN : 2418408)</p> */}
          </div>

          {/* Card 2 */}
          <div className="text-gray-800 rounded-2xl p-4 shadow-md space-y-2">
            <div className="w-full rounded flex items-center justify-center text-sm font-medium h-1/2">
            <img src="/office/certified2.png" alt="IAA Logo" className="h-1/2" />
            </div>
            {/* <p className="text-sm font-medium">Rohit Reddy Thamineni</p>
            <p className="text-xs text-gray-600">(MARN : 2418408)</p> */}
          </div>
        </div>
      </div>
    </section>
  );
}
