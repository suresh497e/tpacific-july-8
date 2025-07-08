import { GraduationCap, Briefcase, BookOpen, Globe } from "lucide-react"
import UniversityPageTemplate from "@/components/university-page-template"

export default function CanadaUniversityPage() {
  // Define Canadian universities with campus images
  const universities = [
    {
      name: "University of Toronto",
      logo: "/images/logos/university-of-toronto.png",
      //image: "/canada_universities/1.png",
      image: "/compressed/canada/1-min.png",
      description: "Canada's top-ranked university with strengths across all disciplines and research areas.",
      link: "https://www.utoronto.ca/",
    },
    {
      name: "University of British Columbia",
      logo: "/images/logos/university-of-british-columbia.png",
       image: "/compressed/canada/2-min.png",
      description: "A global center for research and teaching with a stunning campus in Vancouver.",
      link: "https://www.ubc.ca/",
    },
    {
      name: "McGill University",
      logo: "/images/logos/mcgill-university.png",
       image: "/compressed/canada/3-min.png",
      description: "One of Canada's oldest universities with a reputation for excellence in medicine and research.",
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
      description: "Known for research excellence in energy, health sciences, and artificial intelligence.",
      link: "https://www.ualberta.ca/",
    },
    {
      name: "Université de Montréal",
      logo: "/images/logos/universite-de-montreal.png",
       image: "/compressed/canada/6-min.png",
      description: "A leading French-language university with strengths in medicine, law, and sciences.",
      link: "https://www.umontreal.ca/",
    },
    {
      name: "University of Calgary",
      logo: "/images/logos/university-of-calgary.png",
       image: "/compressed/canada/7-min.png",
      description: "A research-intensive university with strong ties to the energy and healthcare sectors.",
      link: "https://www.ucalgary.ca/",
    },
    {
      name: "University of Waterloo",
      logo: "/images/logos/university-of-waterloo.png",
       image: "/compressed/canada/8-min.png",
      description: "Known for engineering, computer science, and the world's largest co-op program.",
      link: "https://uwaterloo.ca/",
    },
    {
      name: "Western University",
      logo: "/images/logos/western-university.png",
       image: "/compressed/canada/9-min.png",
      description: "A comprehensive university with a beautiful campus and strong business and medical programs.",
      link: "https://www.uwo.ca/",
    },
    {
      name: "University of Ottawa",
      logo: "/images/logos/university-of-ottawa.png",
       image: "/compressed/canada/10-min.png",
      description: "Canada's largest bilingual university with strong programs in law, medicine, and social sciences.",
      link: "https://www.uottawa.ca/",
    },
    {
      name: "Dalhousie University",
      logo: "/images/logos/dalhousie-university.png",
       image: "/compressed/canada/11-min.png",
      description: "Atlantic Canada's leading research university with strengths in marine sciences and health.",
      link: "https://www.dal.ca/",
    },
    {
      name: "Simon Fraser University",
      logo: "/images/logos/simon-fraser-university.png",
       image: "/compressed/canada/12-min.png",
      description: "Known for innovation and interdisciplinary programs with campuses throughout British Columbia.",
      link: "https://www.sfu.ca/",
    },
  ]

  // Define Canadian programs
  const programs = [
    {
      title: "Business & Management",
      description:
        "From international business to finance and entrepreneurship, gain skills for the global marketplace with Canada's world-renowned business programs.",
      icon: <Briefcase className="h-6 w-6 text-[#e11d48]" />,
    },
    {
      title: "Engineering & Technology",
      description:
        "Study innovative engineering disciplines with a focus on sustainability and practical skills in state-of-the-art facilities.",
      icon: <GraduationCap className="h-6 w-6 text-[#e11d48]" />,
    },
    {
      title: "Computer Science & AI",
      description:
        "Learn cutting-edge technologies in one of the world's tech hubs with strong industry connections and co-op opportunities.",
      icon: <GraduationCap className="h-6 w-6 text-[#e11d48]" />,
    },
    {
      title: "Health Sciences & Medicine",
      description:
        "Gain qualifications in healthcare with pathways to registration and global opportunities in Canada's world-class health system.",
      icon: <GraduationCap className="h-6 w-6 text-[#e11d48]" />,
    },
    {
      title: "Environmental Sciences",
      description:
        "Study in a country at the forefront of environmental research with unique ecosystems and biodiversity.",
      icon: <Globe className="h-6 w-6 text-[#e11d48]" />,
    },
    {
      title: "Arts & Humanities",
      description:
        "Develop critical thinking and creative skills in Canada's diverse and multicultural academic environment.",
      icon: <BookOpen className="h-6 w-6 text-[#e11d48]" />,
    },
  ]

  // Define Canadian FAQs
  const faqs = [
    {
      question: "What are the visa requirements for studying in Canada?",
      answer:
        "International students need a study permit to study in Canada for courses longer than 6 months. You'll need an acceptance letter from a designated learning institution (DLI), proof of financial support, and a clean criminal record.",
    },
    {
      question: "Can I work while studying in Canada?",
      answer:
        "Yes, most international students can work up to 20 hours per week during academic sessions and full-time during scheduled breaks without an additional work permit.",
    },
    {
      question: "What is the Post-Graduation Work Permit (PGWP)?",
      answer:
        "The PGWP allows international graduates to work in Canada for up to 3 years after completing their studies, depending on the length of their program. This provides valuable Canadian work experience that can help with permanent residency applications.",
    },
    {
      question: "How much does it cost to study in Canada?",
      answer:
        "Tuition fees typically range from CAD 20,000 to CAD 40,000 per year for international students. Living costs vary by city, with Toronto and Vancouver being the most expensive at around CAD 15,000-20,000 per year.",
    },
    {
      question: "Are scholarships available for international students?",
      answer:
        "Yes, many Canadian universities offer scholarships specifically for international students. The Canadian government also offers scholarships through programs like the Vanier Canada Graduate Scholarships and the Canada-CARICOM Leadership Scholarships.",
    },
  ]

  return (
    <UniversityPageTemplate
      country="Canada"
      countryColor="#e11d48"
      //heroImage="/countries_hero/Canada.jpeg"
      heroImage="/compressed/countries_hero/can.png"
      universities={universities}
      programs={programs}
      testimonial={{
        quote:
          "Studying in Canada was the best decision I made. The quality of education, multicultural environment, and post-graduation opportunities have set me up for success. Transpacific made the entire process smooth from application to arrival.",
        name: "Vikram Mehta",
        title: "MSc Computer Science, University of Toronto",
        image: "/placeholder.svg?height=100&width=100&text=VM",
      }}
      faqs={faqs}
    />
  )
}
