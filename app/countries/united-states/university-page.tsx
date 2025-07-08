"use client"

import { BookOpen, Code, FlaskRoundIcon as Flask, GraduationCap, Landmark, Microscope } from "lucide-react"
import UniversityPageTemplate from "@/components/university-page-template"

export default function UnitedStatesUniversityPage() {
  const universities = [
    {
      name: "Harvard University",
      logo: "/images/logos/harvard-university.png",
     // image: "/us_universities/1.png",
      image: "/compressed/us/1-min.png",
      description:
        "Founded in 1636, Harvard is America's oldest university and a member of the prestigious Ivy League.",
      link: "https://www.harvard.edu/",
    },
    {
      name: "Stanford University",
      logo: "/images/logos/stanford-university.png",
      image: "/compressed/us/2-min.png",
      description: "Located in Silicon Valley, Stanford is renowned for its entrepreneurial spirit and innovation.",
      link: "https://www.stanford.edu/",
    },
    {
      name: "Massachusetts Institute of Technology",
      logo: "/mit-logo-generic.png",
      image: "/compressed/us/3-min.png",
      description: "MIT is a world leader in science, technology, engineering, and mathematics education.",
      link: "https://www.mit.edu/",
    },
    {
      name: "California Institute of Technology",
      logo: "/caltech-logo.png",
     image: "/compressed/us/4-min.png",
      description: "Caltech is known for its strong focus on science and engineering education and research.",
      link: "https://www.caltech.edu/",
    },
    {
      name: "Princeton University",
      logo: "/princeton-university-logo.png",
     image: "/compressed/us/5-min.png",
      description:
        "Princeton combines the strengths of a major research university with the qualities of an outstanding liberal arts college.",
      link: "https://www.princeton.edu/",
    },
    {
      name: "University of Chicago",
      logo: "/university-of-chicago-logo.png",
       image: "/compressed/us/6-min.png",
      description: "UChicago is known for its rigorous academic programs and intellectual environment.",
      link: "https://www.uchicago.edu/",
    },
    {
      name: "Columbia University",
      logo: "/columbia-university-logo.png",
      image: "/compressed/us/7-min.png",
      description: "Located in New York City, Columbia offers a distinctive and distinguished learning environment.",
      link: "https://www.columbia.edu/",
    },
    {
      name: "Yale University",
      logo: "/yale-university-logo.png",
      image: "/compressed/us/8-min.png",
      description: "Yale is committed to improving the world today and for future generations through education.",
      link: "https://www.yale.edu/",
    },
    {
      name: "University of Pennsylvania",
      logo: "/upenn-logo.png",
     image: "/compressed/us/9-min.png",
      description: "Penn is known for its interdisciplinary approach and entrepreneurial spirit.",
      link: "https://www.upenn.edu/",
    },
  ]

  const programs = [
    {
      title: "Computer Science & Engineering",
      description: "Cutting-edge programs in AI, machine learning, software engineering, and computer systems.",
      icon: <Code className="h-10 w-10 text-blue-600" />,
    },
    {
      title: "Business & Management",
      description: "World-renowned MBA programs and undergraduate business degrees with global recognition.",
      icon: <Landmark className="h-10 w-10 text-blue-600" />,
    },
    {
      title: "Medicine & Life Sciences",
      description: "Leading medical schools and research programs in healthcare, biotechnology, and life sciences.",
      icon: <Microscope className="h-10 w-10 text-blue-600" />,
    },
    {
      title: "Liberal Arts",
      description: "Comprehensive liberal arts education emphasizing critical thinking and interdisciplinary learning.",
      icon: <BookOpen className="h-10 w-10 text-blue-600" />,
    },
    {
      title: "Science & Research",
      description: "Groundbreaking research opportunities in physics, chemistry, biology, and environmental science.",
      icon: <Flask className="h-10 w-10 text-blue-600" />,
    },
    {
      title: "Graduate Studies",
      description: "Advanced degree programs with opportunities to work alongside leading researchers and scholars.",
      icon: <GraduationCap className="h-10 w-10 text-blue-600" />,
    },
  ]

  const testimonial = {
    quote:
      "Studying in the United States opened doors I never thought possible. The education system encourages critical thinking and innovation, and the networking opportunities have been invaluable for my career.",
    name: "Rahul Sharma",
    title: "MBA Graduate, Stanford University",
    image: "/indian-male-student.png",
  }

  const faqs = [
    {
      question: "What are the admission requirements for US universities?",
      answer:
        "Admission requirements typically include academic transcripts, standardized test scores (SAT/ACT for undergraduate, GRE/GMAT for graduate), English proficiency tests (TOEFL/IELTS), letters of recommendation, personal statements, and sometimes interviews. Requirements vary by university and program.",
    },
    {
      question: "How much does it cost to study in the United States?",
      answer:
        "Tuition fees range from $20,000 to $60,000 per year depending on the institution and program. Living expenses add another $10,000 to $25,000 annually depending on location. Many universities offer scholarships and financial aid for international students.",
    },
    {
      question: "What types of scholarships are available for Indian students?",
      answer:
        "Indian students can apply for merit-based scholarships, need-based financial aid, athletic scholarships, diversity scholarships, and program-specific grants. Additionally, external organizations like Fulbright, Inlaks Foundation, and various Indian government schemes offer funding for US education.",
    },
    {
      question: "How do I apply for a US student visa?",
      answer:
        "After receiving your acceptance letter and I-20 form from the university, you'll need to pay the SEVIS fee, complete the DS-160 form, schedule a visa interview at the US embassy/consulate, prepare financial documents, and attend the interview. The F-1 visa is the most common for full-time students.",
    },
    {
      question: "Can I work while studying in the US?",
      answer:
        "F-1 visa holders can work on-campus for up to 20 hours per week during the academic year and full-time during breaks. After completing one academic year, you may be eligible for Curricular Practical Training (CPT) or Optional Practical Training (OPT) for off-campus employment related to your field of study.",
    },
  ]

  return (
    <UniversityPageTemplate
      country="United States"
      countryColor="#3c65af"
     // heroImage="/countries_hero/USA.jpeg"
      heroImage="/compressed/countries_hero/us.png"
      universities={universities}
      programs={programs}
      testimonial={testimonial}
      faqs={faqs}
    />
  )
}
