"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

// Balanced testimonials with similar word counts
const testimonials = [
  {
    name: "Abhilash Patel",
    rating: 5,
    time: "4 months ago",
    content:
      "I had a fantastic experience with Transpacific Immigration Service when planning my study in New Zealand. Their team was extremely knowledgeable and helped me select the perfect university program aligned with my career goals. They provided excellent guidance throughout the application process, including interview preparation, which significantly contributed to my acceptance. The visa application process was streamlined thanks to their detailed support. I highly recommend their services to anyone looking to study abroad.",
  },
  {
    name: "Atiq Adnan",
    rating: 5,
    time: "5 months ago",
    content:
      "I had an amazing experience with Transpacific for my New Zealand student visa application. The team was incredibly professional, knowledgeable, and supportive throughout the entire process. After my Australia visa was rejected, I met with Sai Sir who suggested the best universities for my situation. Ambika Ma'am helped arrange all my documents and filed my visa application perfectly. Thanks to their efforts, my visa was approved without any issues. I highly recommend Transpacific to anyone seeking reliable and efficient student visa consultancy services.",
  },
  {
    name: "Akhil Reddy",
    rating: 5,
    time: "5 months ago",
    content:
      "I am incredibly grateful for the exceptional support I received from Transpacific Immigration Services. Their team provided invaluable guidance in selecting the right country, university, and course, making the entire application process smooth and stress-free. They remained confident and supportive throughout my visa process, which helped me tremendously. Their never-give-up attitude was truly inspirational during challenging moments. For anyone considering a masters program abroad, Transpacific is absolutely the right choice for comprehensive guidance.",
  },
  {
    name: "Sanjay Maroju",
    rating: 5,
    time: "6 months ago",
    content:
      "I sincerely appreciate and thank the Transpacific team, especially Sai Kiran and Pratima, for patiently answering all our queries and wonderfully supporting us to get my New Zealand student visa approved. We experienced very professional and prompt service from the entire team. Sai guided us through every step with patience and expertise. His personalized advice helped us make informed decisions at each stage. We highly recommend Transpacific Immigration Services to anyone seeking reliable, knowledgeable guidance for their international education journey.",
  },
  {
    name: "Manikanth Arigala",
    rating: 5,
    time: "7 months ago",
    content:
      "I recently worked with Transpacific Consultancy for my visa application and couldn't be more satisfied with the experience. From the beginning, their team was professional, knowledgeable, and incredibly supportive throughout the process. They guided me through every step, promptly answering all questions and addressing concerns. Their expertise made what could have been a daunting experience feel seamless and straightforward. They kept me informed about timelines and requirements, which greatly reduced my stress and anxiety during the application process.",
  },
]

export default function TestimonialsSection({ className = "" }) {
  const ref = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextTestimonial = () => {
    setDirection(1)
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Function to split testimonial content into sentences
  const formatTestimonialContent = (content) => {
    // Split by sentence endings (., !, ?) followed by a space or end of string
    const sentences = content.split(/(?<=[.!?])\s+|(?<=[.!?])$/)
    return sentences
      .filter((sentence) => sentence.trim() !== "")
      .map((sentence, index) => (
        <span key={index} className="testimonial-sentence stats-intro-text">
          {sentence.trim()}
        </span>
      ))
  }

  return (
    <div className={`relative overflow-hidden ${className}`} ref={ref}>
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-blue-50"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-200 opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-blue-300 opacity-20 blur-3xl"></div>
      <div className="absolute top-40 right-20 text-blue-100">
        <Quote className="w-24 h-24 opacity-20" />
      </div>
      <div className="absolute bottom-40 left-20 text-blue-100">
        <Quote className="w-24 h-24 opacity-20 transform rotate-180" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-primary text-xs font-medium mb-2">
            Success Stories
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            What <span className="text-gradient">Our Clients</span> Have to Say
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            Hear from students who achieved their international education dreams with our help.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 1, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg p-6 md:p-8"
          >
            <div className="flex flex-col items-center">
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < testimonials[activeIndex].rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              <div className="testimonial-content mb-4 w-full">
                {formatTestimonialContent(testimonials[activeIndex].content)}
              </div>

              <div className="text-center">
                <h4 className="font-semibold text-base md:text-lg">{testimonials[activeIndex].name}</h4>
                <p className="text-xs text-gray-500">{testimonials[activeIndex].time}</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center mt-6 gap-4">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > activeIndex ? 1 : -1)
                    setActiveIndex(index)
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeIndex ? "bg-primary w-5" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Add custom CSS for testimonial sentences */}
      <style jsx global>{`
        .testimonial-content {
          display: flex;
          flex-direction: column;
          text-align: left;
          width: 100%;
          max-width: 100%;
          font-size: 0.9rem;
        }
        
        .testimonial-sentence {
          display: block;
          margin-bottom: 0.4em;
          text-align: justify;
          word-wrap: break-word;
          white-space: normal;
          width: 100%;
          overflow: hidden;
        }
        
        .testimonial-sentence:last-child {
          margin-bottom: 0;
        }
        
        @media (min-width: 768px) {
          .testimonial-content {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  )
}
