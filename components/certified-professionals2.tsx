import Image from "next/image";

export default function CertifiedProfessionals2() {
  return (
    <section className="px-4 py-16 md:mt-10">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Certified Professionals
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="rounded-2xl p-4 shadow-md flex items-center justify-center">
            <img
              src="/office/certified1.png"
              alt="Australian Government Certificate"
              className="h-auto object-contain lg:h-52"
            />
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl p-4 shadow-md flex items-center justify-center">
            <img
              src="/office/certified2.png"
              alt="IAA Certificate"
              className="h-auto  object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
