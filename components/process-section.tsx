"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

interface ProcessSectionProps {
  className?: string;
}

export default function ProcessSection({ className }: ProcessSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const steps = [
    {
      number: "01",
      title: "Personalised Consultation",
      description:
        "We assess your background and goals to craft a custom study plan.",
    },
    {
      number: "02",
      title: "Application Assistance",
      description:
        "From choosing universities to visa paperwork—we guide you every step.",
    },
    {
      number: "03",
      title: "Ongoing Support",
      description:
        "Get help with pre-departure, housing, and settling into your new life.",
    },
  ];

  return (
    <div className={`relative overflow-hidden ${className}`} ref={ref}>
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50 to-white"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div
          className="absolute top-0 left-0 w-full h-full bg-repeat"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23004d99' fillOpacity='1' fillRule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E\")",
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-primary text-xs font-medium mb-2">
            Our Approach
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Personalised <span className="text-gradient">Guidance</span> for
            Your Study Abroad Journey
          </h2>
          <p className="stats-intro-text text-sm md:text-base !text-center  text-gray-600 max-w-2xl mx-auto">
            We understand the challenges you face and provide tailored solutions
            to make your international education dreams a reality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{
              scale: 1.05,
              y: -5,
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
            className="bg-white p-4 rounded-xl shadow-lg h-full cursor-pointer"
          >
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary mr-2">
                <CheckCircle2 className="h-4 w-4" />
              </span>
              Your Dream, Our Mission
            </h3>
            <div className="text-gray-600 text-sm no-justify-container">
              <p className="keep-words-together">
                Want to study abroad? We help turn your dream into a clear,
                achievable plan.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{
              scale: 1.05,
              y: -5,
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
            className="bg-white p-4 rounded-xl shadow-lg h-full cursor-pointer"
          >
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary mr-2">
                <CheckCircle2 className="h-4 w-4" />
              </span>
              The Problem
            </h3>
            <div className="text-gray-600 text-sm no-justify-container">
              <p className="keep-words-together text-wrap">
                Confused by visas, forms, and rules? You're not alone—most
                students feel lost in the process.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:row-span-2 rounded-xl overflow-hidden shadow-lg h-full relative"
          >
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/personalised%20Guidance-n1b48adYejWbNTTCNrxdFXu1lQ1drA.jpeg"
              alt="Personalized guidance consultation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{
              scale: 1.05,
              y: -5,
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
            className="bg-white p-4 rounded-xl shadow-lg h-full cursor-pointer"
          >
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary mr-2">
                <CheckCircle2 className="h-4 w-4" />
              </span>
              Our Promise
            </h3>
            <div className="text-gray-600 text-sm no-justify-container">
              <p>
                Clarity. Confidence. Success. With personalized guidance, we
                simplify every step.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{
              scale: 1.05,
              y: -5,
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
            className="bg-white p-4 rounded-xl shadow-lg h-full cursor-pointer"
          >
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary mr-2">
                <CheckCircle2 className="h-4 w-4" />
              </span>
              Why Transpacific
            </h3>
            <div className="text-gray-600 text-sm no-justify-container">
              <p className="keep-words-together text-wrap">
                We get it—and we've got you. From paperwork to visa approval,
                we're with you all the way.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 pt-8 border-t border-gray-200"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
            🎓 Our 3-Step Study Abroad Success Plan
          </h3>

          <div className="relative">
            {/* Timeline bar */}
            <div className="absolute top-20 left-0 w-full h-1 bg-gradient-to-r from-blue-100 via-primary to-blue-100 hidden md:block"></div>

            <div className="flex flex-col md:flex-row gap-6 md:gap-0 relative">
              {/* Steps */}
              {steps.map((step, index) => (
                <motion.div
                  className="flex-1 relative"
                  key={index}
                  whileHover={{
                    scale: 1.02,
                    y: -3,
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className="flex flex-col items-center">
                    <div className="relative z-10 mb-4">
                      <div className="absolute inset-0 bg-blue-100 rounded-full transform scale-150 animate-pulse"></div>
                      <div className="relative flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary to-blue-400 rounded-full text-white text-lg font-bold shadow-lg">
                        {step.number}
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-lg text-center w-full cursor-pointer">
                      <h4 className="text-base md:text-lg font-semibold mb-2 text-primary">
                        {step.title}
                      </h4>
                      <div className="text-gray-600 text-sm no-justify-container">
                        <p className="keep-words-together stats-intro-text">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-20 right-0 transform translate-x-1/2 z-10">
                      <ArrowRight className="w-6 h-6 text-primary" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        .no-justify-container p {
          text-align: left;
          overflow-wrap: break-word;
          word-wrap: break-word;
          hyphens: auto;
          white-space: normal;
          overflow: visible;
          width: 100%;
        }

        .no-justify-container p span {
          display: inline;
          text-align: left;
          white-space: normal;
          width: auto;
        }
      `}</style>
    </div>
  );
}
