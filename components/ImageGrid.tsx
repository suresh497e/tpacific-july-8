import Image from "next/image";

const images = [
  { src: "/office/officeimg1.jpeg", alt: "Visa Guidance" },
  { src: "/office/officeimg2.jpeg", alt: "Visa Guidance" },
  { src: "/office/officeimg3.jpeg", alt: "Visa Guidance" },
  { src: "/office/officeimg4.jpeg", alt: "Visa Guidance" },
  { src: "/office/officeimg5.jpeg", alt: "Visa Guidance" },
  { src: "/office/officeimg6.jpeg", alt: "Visa Guidance" },
];

export default function ImageGrid() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Inside Transpacific: Our Office Space
        </h2>
        <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto stats-intro-text">
          Explore the professional and welcoming environment where we help students fulfill their study abroad dreams. Our offices are designed for comfort, collaboration, and confidence.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-xl shadow-sm bg-white hover:shadow-md transition">
            <Image
              src={image.src}
              alt={image.alt}
              width={400}
              height={300}
              className="w-full h-52 object-cover"
            />
            {/* <p className="text-center text-sm text-gray-700 py-2 font-medium">
              {image.alt}
            </p> */}
          </div>
        ))}
      </div>
    </section>
  );
}
