import { GraduationCap, Briefcase, BookOpen } from "lucide-react"
import UniversityPageTemplate from "@/components/university-page-template"

export default function UKUniversityPage() {
  // Define UK universities
  const universities = [
    {
      name: "University of Oxford",
      logo: "/images/logos/oxford-logo.png",
      //image: "/uk_universities/1.png",
        image: "/compressed/uk/1-min.png",
      description:
        "One of the world's oldest and most prestigious universities, known for academic excellence and research.",
      link: "https://www.ox.ac.uk/",
    },
    {
      name: "University of Cambridge",
      logo: "/images/logos/cambridge-logo.png",
      image: "/compressed/uk/2-min.png",
      description: "A collegiate research university with a rich history and world-renowned reputation for excellence.",
      link: "https://www.cam.ac.uk/",
    },
    {
      name: "Imperial College London",
      logo: "/images/logos/imperial-logo.png",
      image: "/compressed/uk/3-min.png",
      description: "A world-class university focused on science, engineering, medicine, and business.",
      link: "https://www.imperial.ac.uk/",
    },
    {
      name: "University College London",
      logo: "/images/logos/ucl-logo.png",
      image: "/compressed/uk/4-min.png",
      description: "A diverse, global university with a progressive approach to research and education.",
      link: "https://www.ucl.ac.uk/",
    },
    {
      name: "London School of Economics",
      logo: "/images/logos/lse-logo.png",
      image: "/compressed/uk/5-min.png",
      description: "Specializing in social sciences, economics, politics, and related disciplines.",
      link: "https://www.lse.ac.uk/",
    },
    {
      name: "University of Edinburgh",
      logo: "/images/logos/edinburgh-logo.png",
      image: "/compressed/uk/6-min.png",
      description: "One of Scotland's ancient universities with strengths across humanities and sciences.",
      link: "https://www.ed.ac.uk/",
    },
    {
      name: "King's College London",
      logo: "/images/logos/kings-logo.png",
      image: "/compressed/uk/7-min.png",
      description: "A research-led university known for medicine, law, humanities, and social sciences.",
      link: "https://www.kcl.ac.uk/",
    },
    {
      name: "University of Manchester",
      logo: "/images/logos/manchester-logo.png",
       image: "/compressed/uk/8-min.png",
      description: "A large research university with a strong focus on innovation and social responsibility.",
      link: "https://www.manchester.ac.uk/",
    },
    {
      name: "University of Bristol",
      logo: "/images/logos/bristol-logo.png",
       image: "/compressed/uk/9-min.png",
      description: "A research-intensive university with a reputation for creativity and innovation.",
      link: "https://www.bristol.ac.uk/",
    },
    {
      name: "University of Warwick",
      logo: "/images/logos/warwick-logo.png",
       image: "/compressed/uk/10-min.png",
      description: "A modern research university known for business, economics, and interdisciplinary programs.",
      link: "https://warwick.ac.uk/",
    },
  ]

  // Define UK programs
  const programs = [
    {
      title: "Business & Finance",
      description:
        "From international business to finance and accounting, gain skills for the global marketplace with the UK's renowned business programs.",
      icon: <Briefcase className="h-6 w-6 text-[#2563eb]" />,
    },
    {
      title: "Engineering & Technology",
      description: "Study cutting-edge technologies and engineering disciplines in one of the world's innovation hubs.",
      icon: <GraduationCap className="h-6 w-6 text-[#2563eb]" />,
    },
    {
      title: "Medicine & Life Sciences",
      description:
        "Gain qualifications in healthcare with pathways to registration and excellent career prospects in the UK's comprehensive healthcare system.",
      icon: <GraduationCap className="h-6 w-6 text-[#2563eb]" />,
    },
    {
      title: "Law & Social Sciences",
      description:
        "Study at institutions that have shaped legal and social thought for centuries, with excellent career prospects.",
      icon: <GraduationCap className="h-6 w-6 text-[#2563eb]" />,
    },
    {
      title: "Arts & Humanities",
      description:
        "Develop creative and critical thinking skills at universities with rich cultural traditions and world-class facilities.",
      icon: <BookOpen className="h-6 w-6 text-[#2563eb]" />,
    },
    {
      title: "Computer Science & AI",
      description:
        "Join the UK's thriving tech sector with cutting-edge programs in computer science, data science, and artificial intelligence.",
      icon: <GraduationCap className="h-6 w-6 text-[#2563eb]" />,
    },
  ]

  // Define UK FAQs
  const faqs = [
    {
      question: "What are the visa requirements for studying in the UK?",
      answer:
        "International students need a Student visa to study in the UK for courses longer than 6 months. You'll need a confirmed place at a UK institution, proof of English language proficiency, and evidence of sufficient funds to support yourself.",
    },
    {
      question: "Can I work while studying in the UK?",
      answer:
        "Yes, most international students can work up to 20 hours per week during term time and full-time during holidays if studying at degree level or above.",
    },
    {
      question: "What is the Graduate Route visa?",
      answer:
        "The Graduate Route allows international students to stay in the UK for 2 years after completing a degree (3 years for PhD graduates) to work or look for work at any skill level.",
    },
    {
      question: "How much does it cost to study in the UK?",
      answer:
        "Tuition fees typically range from £10,000 to £38,000 per year depending on the course and university. Living costs vary by location, with London being the most expensive at around £12,000-£15,000 per year.",
    },
    {
      question: "Are scholarships available for international students?",
      answer:
        "Yes, many UK universities offer scholarships specifically for international students. The British government also offers Chevening Scholarships for outstanding students with leadership potential.",
    },
  ]

  // Custom UK logo carousel component
  const UKLogoCarousel = () => (
    <div className="flex flex-wrap justify-center gap-8 py-4">
      {universities.map((university, index) => (
        <div
          key={index}
          className="flex items-center justify-center mx-4 h-20 grayscale hover:grayscale-0 transition-all duration-300"
        >
          <img
            src={university.logo || "/placeholder.svg"}
            alt={university.name}
            className="h-auto max-h-16 w-auto object-contain"
            style={{ maxWidth: "180px" }}
          />
        </div>
      ))}
    </div>
  )

  return (
    <UniversityPageTemplate
      country="United Kingdom"
      countryColor="#2563eb"
     // heroImage="/countries_hero/UK.jpeg"
      heroImage="/compressed/countries_hero/uk.png"
      universities={universities}
      programs={programs}
      logoCarousel={<UKLogoCarousel />}
      testimonial={{
        quote:
          "Studying in the UK was transformative. The academic rigor, diverse perspectives, and networking opportunities have shaped my career path. Transpacific made the application process seamless.",
        name: "Rahul Sharma",
        title: "MSc International Business, University of Manchester",
        image: "/placeholder.svg?height=100&width=100&text=RS",
      }}
      faqs={faqs}
    />
  )
}
