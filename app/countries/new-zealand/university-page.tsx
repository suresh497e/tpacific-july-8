"use client"

import UniversityPageTemplate from "@/components/university-page-template"
import { Briefcase, BookOpen, Globe, MapPin, Beaker, GraduationCap } from "lucide-react"

export default function NewZealandUniversityPage() {
  const universities = [
    {
      name: "University of Auckland",
      logo: "/images/logos/auckland-university-logo.png",
     // image: "/newzealand_universities/1.png",
     image: "/compressed/newzealand/1-min.png",
      description:
        "New Zealand's largest and highest-ranked university, offering a diverse range of programs across multiple disciplines.",
      link: "https://www.auckland.ac.nz/",
    },
    {
      name: "University of Canterbury",
      logo: "/images/logos/canterbury-university-logo.png",
     image: "/compressed/newzealand/2-min.png",
      description: "Known for its engineering and science programs, with a beautiful campus in Christchurch.",
      link: "https://www.canterbury.ac.nz/",
    },
    {
      name: "Victoria University of Wellington",
      logo: "/images/logos/victoria-university-logo.png",
     image: "/compressed/newzealand/3-min.png",
      description:
        "Located in New Zealand's capital city, offering strong programs in law, humanities, and government studies.",
      link: "https://www.wgtn.ac.nz/",
    },
    {
      name: "University of Otago",
      logo: "/images/logos/otago-university-logo.png",
     image: "/compressed/newzealand/4-min.png",
      description: "New Zealand's first university, renowned for its medical school and research excellence.",
      link: "https://www.otago.ac.nz/",
    },
    {
      name: "Lincoln University",
      logo: "/images/logos/lincoln-university-logo.png",
      image: "/compressed/newzealand/5-min.png",
      description: "Specializing in agriculture, food science, and environmental management.",
      link: "https://www.lincoln.ac.nz/",
    },
    {
      name: "Massey University",
      logo: "/images/logos/massey-university-logo.png",
      image: "/compressed/newzealand/6-min.png",
      description: "Known for its distance education programs and strong focus on agricultural sciences.",
      link: "https://www.massey.ac.nz/",
    },
    {
      name: "Auckland University of Technology (AUT)",
      logo: "/images/logos/aut-logo.png",
     image: "/compressed/newzealand/7-min.png",
      description: "A modern university with a focus on technology, business, and creative industries.",
      link: "https://www.aut.ac.nz/",
    },
    {
      name: "University of Waikato",
      logo: "/images/logos/waikato-university-logo.png",
     image: "/compressed/newzealand/8-min.png",
      description: "Known for its management school and Māori and Pacific development programs.",
      link: "https://www.waikato.ac.nz/",
    },
    {
      name: "Unitec Institute of Technology",
      logo: "/images/logos/unitec-logo.png",
     image: "/compressed/newzealand/9-min.png",
      description: "Offering practical, career-focused education with strong industry connections in Auckland.",
      link: "https://www.unitec.ac.nz/",
    },
  ]

  const programs = [
    {
      title: "Business and Management",
      description: "Develop global business skills in a country known for innovation and ethical practices.",
      icon: <Briefcase className="h-6 w-6 text-emerald-600" />,
    },
    {
      title: "Engineering and Technology",
      description:
        "Gain practical skills and innovative thinking in New Zealand's technology-focused education system.",
      icon: <Beaker className="h-6 w-6 text-emerald-600" />,
    },
    {
      title: "Environmental Sciences",
      description: "Study in a country renowned for its commitment to sustainability and environmental protection.",
      icon: <Globe className="h-6 w-6 text-emerald-600" />,
    },
    {
      title: "Agriculture and Forestry",
      description: "Learn from world leaders in sustainable agriculture and forestry management.",
      icon: <MapPin className="h-6 w-6 text-emerald-600" />,
    },
    {
      title: "Tourism and Hospitality",
      description: "Gain practical experience in one of the world's premier tourism destinations.",
      icon: <MapPin className="h-6 w-6 text-emerald-600" />,
    },
    {
      title: "Film and Creative Arts",
      description: "Study in the country that brought Lord of the Rings to life, with world-class creative facilities.",
      icon: <BookOpen className="h-6 w-6 text-emerald-600" />,
    },
    {
      title: "Health Sciences",
      description: "Study in a country with an excellent healthcare system and innovative medical research.",
      icon: <GraduationCap className="h-6 w-6 text-emerald-600" />,
    },
  ]

  const testimonial = {
    quote:
      "New Zealand offered me a world-class education in a breathtaking environment. The practical learning approach and friendly community made my international study experience unforgettable. Transpacific helped me find the perfect program.",
    name: "Arjun Singh",
    title: "Master of Tourism Management, Victoria University of Wellington",
    image: "/indian-male-student.png",
  }

  const faqs = [
    {
      question: "What are the visa requirements for Indian students in New Zealand?",
      answer:
        "Indian students need a student visa to study in New Zealand. Requirements include an offer of place from a New Zealand educational institution, proof of sufficient funds, and health insurance. The visa process typically takes 3-4 weeks.",
    },
    {
      question: "Can I work while studying in New Zealand?",
      answer:
        "Yes, student visas usually allow you to work up to 20 hours per week during the semester and full-time during scheduled breaks. This helps students gain valuable work experience and supplement their income.",
    },
    {
      question: "What are the post-study work opportunities in New Zealand?",
      answer:
        "New Zealand offers post-study work visas that allow graduates to work in New Zealand after completing their studies. The duration depends on your level of study and where you studied in New Zealand.",
    },
    {
      question: "How much does it cost to study in New Zealand?",
      answer:
        "Tuition fees typically range from NZD 22,000 to NZD 35,000 per year for international students. Living costs are approximately NZD 20,000 per year.",
    },
    {
      question: "Are scholarships available for international students?",
      answer:
        "Yes, many New Zealand universities offer scholarships for international students. The New Zealand government also offers scholarships through the New Zealand Aid Programme.",
    },
  ]

  return (
    <UniversityPageTemplate
      country="New Zealand"
      countryColor="#10b981"
     // heroImage="/countries_hero/NZ.jpeg"
      heroImage="/compressed/countries_hero/nz.png"
      universities={universities}
      programs={programs}
      testimonial={testimonial}
      faqs={faqs}
    />
  )
}
