"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function OfficeAnnouncement() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-primary text-sm font-medium mb-4">
            🎉 Exciting News!
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Hyderabad Office Just Got Bigger!
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto stats-intro-text">
            We’ve expanded to serve you better—with more space, more support,
            and even more personalized guidance for your study and work abroad
            journey.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-xl bg-white"
        >
          <div className="relative aspect-video bg-gray-100 flex items-center justify-center group overflow-hidden rounded-t-xl">
            <iframe
              src="https://www.youtube.com/embed/pO5vfwq6g1o"
              title="Transpacific Launch | Making Study Abroad Easy | Now in Hyderabad!"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          <div className="p-6 bg-white">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-gray-700">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Hyderabad, Telangana, India</span>
              </div>
              {/* <div className="flex items-center gap-2 text-gray-700">
                <Calendar className="h-5 w-5 text-primary" />
                <span>Grand Opening: May 18, 2025</span>
              </div> */}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10"
        >
          <Button className="rounded-full px-8 py-6 text-lg">
            Schedule a Visit
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
