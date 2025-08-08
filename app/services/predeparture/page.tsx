"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const steps = [
  {
    title: "Travel & Accommodation Guidance",
    description:
      "We help you book affordable flights and find suitable short-term or long-term housing near your university or workplace.",
    image: "/services/predeparture/1.png",
  },
  {
    title: "Forex, SIM, and Banking Setup",
    description:
      "You’ll get help in setting up forex cards, buying local SIMs, and opening a bank account before or just after arrival.",
    image: "/services/predeparture/2.png",
  },
  {
    title: "Airport Pick-up Coordination",
    description:
      "We can help arrange airport pick-up services to ensure a stress-free welcome when you land in a new country.",
    image: "/services/predeparture/3.png",
  },
  {
    title: "Onshore Legal & Visa Compliance Support",
    description:
      "Even after arrival, we provide guidance on maintaining visa conditions, reporting requirements, and legal assistance if needed.",
    image: "/services/predeparture/4.png",
  },
];

export default function AdmissionPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => {
      const stepEls = Array.from(document.querySelectorAll(".step"));
      const offsets = stepEls.map((el) => el.getBoundingClientRect().top);
      const closestIndex = offsets.findIndex((offset) => offset > 100);
      setActiveIndex(
        closestIndex === -1 ? steps.length - 1 : Math.max(0, closestIndex - 1)
      );
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="font-sans">
      {/* Hero */}
      <section className="bg-primary text-white flex flex-col lg:flex-row items-center px-6 lg:px-20 py-8 gap-10">
        <div className="lg:w-1/3 space-y-6">
          {/* <p className="uppercase text-sm tracking-widest">
            Empowering migrants securing futures
          </p> */}
          <h1 className="text-4xl font-bold leading-tight">
            Pre-Departure & Post-Arrival Services
            <br />
            {/* Process */}
          </h1>
          <button
            onClick={() => router.push("/contact")}
            className="mt-6 bg-primary text-white px-8 py-4 rounded-lg border"
          >
            Contact Us
          </button>
        </div>

        <div className="lg:w-2/3">
          <Image
            src="/services/services-hero/7.png"
            alt="Admission"
            width={500}
            height={600}
            className="rounded-xl mx-auto"
          />
        </div>

        {/* <div className="hidden lg:w-1/3 lg:flex flex-col gap-6">
          <Image
            src="/nagendar_white_bg.png"
            alt="Students working"
            width={300}
            height={200}
            className="rounded-xl"
          />
          <Image
            src="/nagendar_white_bg.png"
            alt="Happy student"
            width={300}
            height={200}
            className="rounded-xl"
          />
        </div> */}
      </section>

      {/* Timeline Section */}
      <section className="bg-[#f9f9f9] py-20 px-4 sm:px-8 relative">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
          {/* Numbers + Line */}
          <div className="hidden lg:flex flex-col items-center relative w-20">
            {/* Full vertical line */}
            <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 z-0" />
            {/* Sticky number */}
            <div className="sticky top-24 z-10">
              <div className="w-16 h-16 rounded-full bg-primary text-white font-bold text-2xl flex items-center justify-center shadow-md">
                {activeIndex + 1}
              </div>
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-24 flex-1">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="step grid grid-cols-1 lg:grid-cols-2  gap-8 items-center"
              >
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-700">{step.description}</p>
                </div>
                <Image
                  src={step.image}
                  alt={step.title}
                  width={500}
                  height={300}
                  className="rounded-xl w-full object-cover max-h-[300px]"
                />

                {/* <Image
                  src={step.image}
                  alt={step.title}
                  width={500}
                  height={300}
                  className="rounded-xl w-full object-cover max-h-[300px]"
                />

                <div className="bg-white rounded-xl p-6 shadow-md order-1">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-700">{step.description}</p>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#f9f9f9] px-6 py-20 rounded-xl border border-gray-300 mx-4 lg:mx-20 my-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Get Ready to Begin</h2>
        <p className="text-2xl font-bold text-black mb-6 stats-intro-text">
          Your{" "}
          <span
            className="underline decoration-primary decoration-4 underline-offset-4"
            style={{ textDecorationSkipInk: "all" }}
          >
            Journey
          </span>
        </p>
        <Link
          href={"/contact"}
          className="bg-black text-white px-6 py-3 rounded-lg"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
}
