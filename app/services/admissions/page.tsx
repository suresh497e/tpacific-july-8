"use client";
import { University } from "lucide-react";
import image from "next/image";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Form } from "react-hook-form";

const steps = [
  {
    title: "Course & Country Selection Guidance",
    description:
      "We help you choose the right course and destination based on your career goals, academic profile, budget, and long-term plans. Our team considers all key factors to guide you to the best fit.",
      image: "/services/admission-support/1.png",
  },
  {
    title: "University Shortlisting & Counseling",
    description:
      "After understanding your preferences and strengths, we create a personalized list of universities. You’ll receive one-on-one counseling sessions to explore your options confidently.",
    image:  "/services/admission-support/2.png",
  },
  {
    title: "Application Form Filling & SOP Writing",
    description:
      "We ensure your applications are error-free and complete. Our team helps draft compelling Statements of Purpose (SOPs) that reflect your aspirations, strengths, and eligibility.",
    image:  "/services/admission-support/3.png",
  },
  {
    title: "Interview Preparation",
    description:
      "Mock interview sessions help you present your profile confidently during university admission interviews, enhancing your chances of acceptance.",
    image:  "/services/admission-support/4.png",
  },
  
  {
    title: "Scholarship and Fee Guidance",
    description:
      "We guide you through available scholarships, fee waivers, and funding options so you can plan your finances wisely and reduce your burden.",
    image:  "/services/admission-support/5.png",
  },
];

export default function AdmissionPage() {
  const [activeIndex, setActiveIndex] = useState(0);
   const router = useRouter()

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
           Admission Support
            <br />
            Process
          </h1>
          <button onClick={() => router.push("/contact")} className="mt-6 bg-primary text-white px-8 py-4 rounded-lg border">
            Contact Us
          </button>
        </div>

        <div className="lg:w-2/3">
          <Image
            src="/services/services-hero/1.png"
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
          <span className="underline decoration-primary decoration-4 underline-offset-4"  style={{ textDecorationSkipInk: "all" }}>
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
