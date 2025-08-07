// components/TeamCarousel.tsx
"use client"

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const teamMembers = [
  {
    name: "M. Prabhakar Reddy",
    img: "/team/team1.jpeg",
   // license: "IAA - Licence No - 201800110",
    description:
      "Student Advisor - New Zealand",
  },
  {
    name: "G. Naveen Kumar Reddy",
    img: "/team/team2.jpeg",
    //license: "IAA Licence No - 202100582",
    description:
      "Process Associate - USA",
  },
  {
    name: "J. Sharada",
    img: "/team/team3.jpeg",
    //license: "IAA Licence No - 202200657",
    description:
      "Manager - Sales",
  },
  {
    name: "Ch. Prathima Sai",
    img: "/team/team4.jpeg",
    //license: "IAA Licence No - 202400771",
    description:
      "Student Advisor - New Zealand",
  },
  {
    name: "N. Nikhil Reddy",
    img: "/team/team5.jpeg",
    //license: "Licence No - IAA 202400831",
    description:
      "Student Advisor - New Zealand",
  },
  {
    name: "T. Siri Kishan",
    img: "/team/team6.jpeg",
    //license: "Licence No - IAA 202400831",
    description:
      "Process Associate - UK",
  },
   {
    name: "G - Gangareddy",
    img: "/team/team7.jpg",
    //license: "Licence No - IAA 202400831",
    description:
      "Director - Marketing",
  },

   {
    name: "A. Ashwini",
    img: "/team/team8.jpg",
    //license: "Licence No - IAA 202400831",
    description:
      "Finance - Advisor",
  },

  {
    name: "G. Mahesh Reddy",
    img: "/team/team9.jpeg",
    //license: "Licence No - IAA 202400831",
    description:
      "Business Development Manager",
  },
   {
    name: "B. Preethi",
    img: "/team/team10.jpeg",
    //license: "Licence No - IAA 202400831",
    description:
      "Team Lead - Uk",
  },
   {
    name: "S. Sai Shravan Reddy",
    img: "/team/team11.jpeg",
    //license: "Licence No - IAA 202400831",
    description:
      "Team Lead - USA",
  },
   {
    name: "S. Nagasree",
    img: "/team/team12.jpeg",
    //license: "Licence No - IAA 202400831",
    description:
      "Senior Student Advisor - UK",
  },
   {
    name: "Sai Kiran Narayan",
    img: "/team/team13.jpeg",
    //license: "Licence No - IAA 202400831",
    description:
      "Team Lead - New Zealand(India)",
  },
 
];

export function TeamCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-[#202c58] text-white py-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-white">Meet the Team</h2>
      </div>

      <div className="relative">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-primary text-white p-3 rounded-full z-10"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-8 px-12 pb-4 snap-x snap-mandatory scrollbar-hide"
        >
          {teamMembers.map((member, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-64 snap-center text-center space-y-4"
            >
              <div className="w-48 h-48 mx-auto rounded-full border-4 border-white overflow-hidden">
                <Image
                  src={member.img}
                  alt={member.name}
                  width={192}
                  height={192}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-white font-medium text-lg">{member.name}</h3>
              {/* <p className="text-sm  stats-intro-text">
                New Zealand Immigration Adviser Authority<br />
                ({member.license})
              </p> */}
              <p className="text-sm stats-intro-text">{member.description}</p>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-primary text-white p-3 rounded-full z-10"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* <div className="mt-8 text-center">
        <button className="bg-primary text-white px-6 py-2 rounded-md">
          Team Kiwiana Immigration
        </button>
      </div> */}
    </section>
  );
}
