
import Image from "next/image";
import Link from "next/link";

export default function TeamSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Meet Our Leadership Team</h2>
        <p className="mt-2 text-gray-600 text-lg stats-intro-text">Experts who guide your study and immigration journey with experience and care.</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Nagendar */}
        <div className="bg-gray-50 rounded-xl shadow-sm p-6 order-1">
          <Image
            src="/office/nagendar.jpg" 
            alt="Nagendar – Director & New Zealand Visa Expert"
            width={500}
            height={400}
            className="w-full h-80 object-contain rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold text-blue-800 mb-1">
            Nagendar – Director & New Zealand Visa Expert
          </h3>
          <p className="text-gray-600 mb-4">
            <strong>Your Trusted Guide for Studying in New Zealand</strong>
          </p>
          <p className="text-gray-700 text-base leading-relaxed mb-4">
            As the Director of Transpacific Immigration Services Ltd.,Nagendar brings over a decade of hands-on experience in guiding students toward successful academic journeys in New Zealand. With a deep understanding of New Zealand student visa policies and a personalized approach, he has helped 1,000+ students secure their visas with confidence.
          </p>
          <ul className="list-disc text-base text-gray-700 pl-5 mb-4">
            <li>✅ Director with 10+ Years of Experience</li>
            <li>✅ Expert in New Zealand Visa Regulations</li>
            <li>✅ 1000+ Visa Success Stories</li>
            <li>✅ Personalized, Step-by-Step Support</li>
          </ul>
          <p className="text-gray-700 text-base mb-4">
            From selecting the right course to crafting a winning visa application, Nagendar ensures each student receives dedicated attention and clear guidance at every stage.
          </p>
          {/* <Link
            href="/contact"
            className="inline-block text-blue-700 font-medium hover:underline"
          >
            👉 Learn More About Nagendar →
          </Link> */}
        </div>

        {/* Rohit */}
        <div className="bg-gray-50 rounded-xl shadow-sm p-6">
          <Image
            src="/office/rohit.jpg" 
            alt="Rohit Reddy Thamineni – Founder & CEO"
            width={500}
            height={400}
            className="w-full h-80 object-contain rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold text-blue-800 mb-1">
            👨‍💼 Rohit Reddy Thamineni – Founder & CEO
          </h3>
          <p className="text-gray-600 mb-4">
            <strong>Registered Migration Agent | Global Education Advocate</strong>
          </p>
          <p className="text-gray-700 text-base leading-relaxed mb-4">
            Rohit Reddy Thamineni is the visionary behind Transpacific Immigration Services Ltd.,bringing over 15 years of leadership in global education and immigration consulting. As a registered migration agent (MARN: 2418408), Rohit combines legal expertise with genuine passion to help students and professionals navigate their immigration journeys.
          </p>
          <ul className="list-disc text-base text-gray-700 pl-5 mb-4">
            <li>✅ 15+ Years of Experience in Immigration</li>
            <li>✅ Founder & CEO of Transpacific Immigration Services Ltd.</li>
            <li>✅ Registered Migration Agent (MARN: 2418408)</li>
            <li>✅ Collaborator with Auckland Institute of Studies</li>
          </ul>
          <p className="text-gray-700 text-base mb-4">
            Rohit has helped build one of the most trusted immigration consulting brands in Hyderabad and beyond. His unwavering commitment to ethical guidance and client success makes him a pillar in the international education space.
          </p>
          {/* <Link
            href="/contact"
            className="inline-block text-blue-700 font-medium hover:underline"
          >
            👉 Get in Touch with Rohit →
          </Link> */}
        </div>
      </div>
    </section>
  );
}
