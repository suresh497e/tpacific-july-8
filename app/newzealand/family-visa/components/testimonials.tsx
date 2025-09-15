"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Software Engineer",
    country: "Singapore",
    image: "/professional-asian-woman-smiling.png",
    rating: 5,
    text: "Transpacific made my work visa application seamless. Their expertise and attention to detail gave me confidence throughout the entire process. I'm now working in Auckland and couldn't be happier!",
  },
  {
    name: "Michael Rodriguez",
    role: "Marketing Manager",
    country: "Mexico",
    image: "/smiling-hispanic-professional.png",
    rating: 5,
    text: "The team's knowledge of immigration law is exceptional. They guided me through every step and helped me secure my Essential Skills Work Visa in just 3 weeks. Highly recommended!",
  },
  {
    name: "Priya Patel",
    role: "Nurse",
    country: "India",
    image: "/indian-healthcare-worker-smiling.png",
    rating: 5,
    text: "As a healthcare professional, I needed specialized guidance for my work visa. Transpacific understood the unique requirements and helped me navigate the process successfully.",
  },
  {
    name: "James Thompson",
    role: "Chef",
    country: "United Kingdom",
    image: "/british-chef-smiling.png",
    rating: 5,
    text: "Moving from the UK to New Zealand seemed daunting, but Transpacific made it straightforward. Their personalized approach and constant communication made all the difference.",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Success Stories from Our Clients
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto stats-intro-text">
            Join hundreds of professionals who have successfully obtained their
            New Zealand work visas with our help
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <Quote className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div className="space-y-4">
                    <p className="text-foreground leading-relaxed italic">
                      "{testimonial.text}"
                    </p>

                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>

                    <div className="flex items-center space-x-4">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-semibold text-foreground">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.role} • {testimonial.country}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export { Testimonials as TestimonialsSection };
