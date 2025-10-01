import { GraduationCap, Briefcase, BookOpen, Globe } from "lucide-react";
import UniversityPageTemplate from "@/components/university-page-template";

export default function EuropeUniversityPage() {
  // Define Canadian universities with campus images
  const universities = [
    {
      name: "University of Toronto",
      logo: "/images/logos/university-of-toronto.png",
      //image: "/canada_universities/1.png",
      image: "/compressed/canada/1-min.png",
      description:
        "Canada's top-ranked university with strengths across all disciplines and research areas.",
      link: "https://www.utoronto.ca/",
    },
    {
      name: "University of British Columbia",
      logo: "/images/logos/university-of-british-columbia.png",
      image: "/compressed/canada/2-min.png",
      description:
        "A global center for research and teaching with a stunning campus in Vancouver.",
      link: "https://www.ubc.ca/",
    },
    {
      name: "McGill University",
      logo: "/images/logos/mcgill-university.png",
      image: "/compressed/canada/3-min.png",
      description:
        "One of Canada's oldest universities with a reputation for excellence in medicine and research.",
      link: "https://www.mcgill.ca/",
    },
    {
      name: "Queen's University",
      logo: "/images/logos/queens-university.png",
      image: "/compressed/canada/4-min.png",
      description:
        "One of Canada's oldest universities with a reputation for academic excellence and student experience.",
      link: "https://www.queensu.ca/",
    },
    {
      name: "University of Alberta",
      logo: "/images/logos/university-of-alberta.png",
      image: "/compressed/canada/5-min.png",
      description:
        "Known for research excellence in energy, health sciences, and artificial intelligence.",
      link: "https://www.ualberta.ca/",
    },
    {
      name: "Université de Montréal",
      logo: "/images/logos/universite-de-montreal.png",
      image: "/compressed/canada/6-min.png",
      description:
        "A leading French-language university with strengths in medicine, law, and sciences.",
      link: "https://www.umontreal.ca/",
    },
    {
      name: "University of Calgary",
      logo: "/images/logos/university-of-calgary.png",
      image: "/compressed/canada/7-min.png",
      description:
        "A research-intensive university with strong ties to the energy and healthcare sectors.",
      link: "https://www.ucalgary.ca/",
    },
    {
      name: "University of Waterloo",
      logo: "/images/logos/university-of-waterloo.png",
      image: "/compressed/canada/8-min.png",
      description:
        "Known for engineering, computer science, and the world's largest co-op program.",
      link: "https://uwaterloo.ca/",
    },
    {
      name: "Western University",
      logo: "/images/logos/western-university.png",
      image: "/compressed/canada/9-min.png",
      description:
        "A comprehensive university with a beautiful campus and strong business and medical programs.",
      link: "https://www.uwo.ca/",
    },
    {
      name: "University of Ottawa",
      logo: "/images/logos/university-of-ottawa.png",
      image: "/compressed/canada/10-min.png",
      description:
        "Canada's largest bilingual university with strong programs in law, medicine, and social sciences.",
      link: "https://www.uottawa.ca/",
    },
    {
      name: "Dalhousie University",
      logo: "/images/logos/dalhousie-university.png",
      image: "/compressed/canada/11-min.png",
      description:
        "Atlantic Canada's leading research university with strengths in marine sciences and health.",
      link: "https://www.dal.ca/",
    },
    {
      name: "Simon Fraser University",
      logo: "/images/logos/simon-fraser-university.png",
      image: "/compressed/canada/12-min.png",
      description:
        "Known for innovation and interdisciplinary programs with campuses throughout British Columbia.",
      link: "https://www.sfu.ca/",
    },
  ];

  // Define Canadian programs
  const programs = [
    {
      title: "Business & Management",
      description:
        "Study at top-ranked business schools with strong industry ties.",
      icon: <Briefcase className="h-6 w-6 text-[#e11d48]" />,
    },
    {
      title: "Engineering & Technology",
      description: "Access cutting-edge labs and innovation hubs",
      icon: <GraduationCap className="h-6 w-6 text-[#e11d48]" />,
    },
    {
      title: "Medicine & Life Sciences",
      description: "Train in world-renowned hospitals and research centers.",
      icon: <GraduationCap className="h-6 w-6 text-[#e11d48]" />,
    },
    {
      title: "Arts & Humanities",
      description: "Explore centuries of culture, philosophy, and creativity.",
      icon: <GraduationCap className="h-6 w-6 text-[#e11d48]" />,
    },
    {
      title: "Law & International Relations",
      description: "Learn from global leaders in policy and justice.",
      icon: <Globe className="h-6 w-6 text-[#e11d48]" />,
    },
    {
      title: "Sustainable Sciences ",
      description:
        " Be at the forefront of climate action and green technology.",
      icon: <BookOpen className="h-6 w-6 text-[#e11d48]" />,
    },
  ];

  // Define Canadian FAQs
  const faqs = [
    {
      question: "What are the entry requirements for European universities?",
      answer:
        " Each country has different academic and language requirements, often including IELTS/TOEFL.",
    },
    {
      question: "How much does it cost to study in Europe?",
      answer:
        " It varies—some countries like Germany and Norway offer free or low-cost education, while others may have higher tuition.",
    },
    {
      question: "Can I work while studying?",
      answer: "Yes, most countries allow part-time work during studies.",
    },
    {
      question: "What post-study options are available?",
      answer:
        "T Many European countries offer stay-back visas from 1–4 years, allowing graduates to work and gain experience.",
    },
  ];

  return (
    <UniversityPageTemplate
      country="Europe"
      countryColor="#e11d48"
      //heroImage="/countries_hero/Canada.jpeg"
      heroImage="/compressed/countries_hero/can.png"
      universities={universities}
      programs={programs}
      testimonial={[
        {
          quote:
            "Studying in Germany gave me exposure to world-class engineering labs. Transpacific supported me in preparing for the language and cultural shift.",
          name: "Aakash N.",
          title: "MSc Mechanical Engineering, Technical University of Munich",
          image: "/images/europe-student1.png",
        },
        {
          quote:
            "Thanks to Transpacific, I explored opportunities across Europe. My semester in France and internship in the Netherlands gave me a global edge.",
          name: "Riya K.",
          title: "MSc Management, ESCP Business School",
          image: "/images/europe-student2.png",
        },
        {
          quote:
            "The Erasmus program and cultural exposure were life-changing. Transpacific made the entire process—from university shortlisting to visa—very smooth.",
          name: "Vivek S.",
          title: "MSc Data Analytics, KU Leuven, Belgium",
          image: "/images/europe-student3.png",
        },
      ]}
      faqs={faqs}
    />
  );
}
