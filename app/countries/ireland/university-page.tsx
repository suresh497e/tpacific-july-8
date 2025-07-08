"use client"

import { GraduationCap, Code, BarChart, Pill, LineChart, Code2 } from "lucide-react"
import { UniversityPageTemplate } from "@/components/university-page-template"

export default function IrelandUniversityPage() {
  // Custom emerald green color for Ireland
  const emeraldGreen = "#007848"

  // Universities data
  const universities = [
    {
      name: "Trinity College Dublin",
      logo: "/images/logos/trinity-college-dublin-logo.png",
      image: "/ireland_universities/1.png",
      description:
        "Ireland's oldest university, founded in 1592, renowned for research and innovation across disciplines.",
      link: "https://www.tcd.ie/",
    },
    {
      name: "University College Dublin",
      logo: "/images/logos/ucd-logo.png",
      image: "/images/ucd-campus.png",
      description: "Ireland's largest university with strengths in research, innovation and teaching excellence.",
      link: "https://www.ucd.ie/",
    },
    {
      name: "Dublin City University",
      logo: "/images/logos/dcu-logo.png",
      image: "/images/dcu-campus.png",
      description:
        "Known for business, computing, engineering and humanities programs with strong industry connections.",
      link: "https://www.dcu.ie/",
    },
    {
      name: "National College of Ireland",
      logo: "/images/logos/nci-logo.png",
      image: "/images/nci-campus.png",
      description:
        "Focused on business, computing and psychology with strong industry links in Dublin's financial district.",
      link: "https://www.ncirl.ie/",
    },
    {
      name: "National University of Ireland, Galway",
      logo: "/images/logos/nui-galway-logo.png",
      image: "/nui-galway-indian-students.png",
      description: "Known for medical sciences, engineering, and arts programs with a beautiful campus.",
      link: "https://www.nuigalway.ie/",
    },
    {
      name: "University College Cork",
      logo: "/images/logos/ucc-logo.png",
      image: "/indian-students-ucc.png",
      description: "Excellent programs in medicine, business, and environmental sciences in a historic setting.",
      link: "https://www.ucc.ie/",
    },
    {
      name: "University of Limerick",
      logo: "/images/logos/ul-logo.png",
      image: "/indian-students-ul.png",
      description: "Strong in technology, business, and health sciences with innovative co-op programs.",
      link: "https://www.ul.ie/",
    },
    {
      name: "Maynooth University",
      logo: "/images/logos/maynooth-logo.png",
      image: "/indian-students-maynooth.png",
      description: "Ireland's fastest growing university with strengths in arts, sciences and technology.",
      link: "https://www.maynoothuniversity.ie/",
    },
  ]

  // Programs data
  const programs = [
    {
      title: "Computer Science & AI",
      description:
        "Programs in AI, machine learning, data analytics, and software development with strong industry connections to tech giants based in Dublin.",
      icon: <Code className="h-10 w-10 text-emerald-600" />,
    },
    {
      title: "Business Analytics & Finance",
      description:
        "Cutting-edge programs in business analytics, financial technology, and international business with internship opportunities.",
      icon: <BarChart className="h-10 w-10 text-emerald-600" />,
    },
    {
      title: "Pharmaceutical & Biomedical Sciences",
      description:
        "World-class programs in pharmaceutical science, biotechnology, and medical research with connections to Ireland's thriving pharma industry.",
      icon: <Pill className="h-10 w-10 text-emerald-600" />,
    },
    {
      title: "Data Science & Machine Learning",
      description:
        "Specialized programs in data science, machine learning, and artificial intelligence with strong links to Dublin's tech hub.",
      icon: <LineChart className="h-10 w-10 text-emerald-600" />,
    },
    {
      title: "Investment Banking & Corporate Finance",
      description:
        "Practical programs in investment banking, corporate finance, and financial analysis with project-based learning and industry placements.",
      icon: <Code2 className="h-10 w-10 text-emerald-600" />,
    },
    {
      title: "International Education",
      description:
        "Programs designed for international students with additional language support, cultural integration, and global career preparation.",
      icon: <GraduationCap className="h-10 w-10 text-emerald-600" />,
    },
  ]

  // Testimonial data
  const testimonial = {
    quote:
      "Ireland gave me more than a degree. It gave me direction, confidence, and my first international job. Transpacific made every step smooth and stress-free.",
    name: "Kavya R.",
    title: "MSc in Data Analytics, Trinity College Dublin",
    image: "/images/indian-student-testimonial.png",
  }

  // FAQs data
  const faqs = [
    {
      question: "Can I work during studies in Ireland?",
      answer:
        "Yes — 20 hours/week during term and 40 hours/week during breaks. This allows you to gain valuable work experience and supplement your income while studying.",
    },
    {
      question: "What is the cost of living?",
      answer:
        "Approx. €7,000–€12,000/year depending on city and lifestyle. Dublin tends to be more expensive than other Irish cities. Our counselors can help you find programs that match your budget.",
    },
    {
      question: "Do Irish universities offer scholarships?",
      answer:
        "Yes, both university and government-funded options are available. Many Irish universities offer scholarships for international students based on academic merit, specific country of origin, or field of study. The Government of Ireland also offers scholarships through programs like the Government of Ireland International Education Scholarships.",
    },
    {
      question: "Is the Irish degree globally recognized?",
      answer:
        "Yes. Degrees are accredited under QQI (Quality and Qualifications Ireland) and widely respected by employers worldwide, including in India.",
    },
    {
      question: "How long can I stay after graduation?",
      answer:
        "Most graduates receive a 1–2 year post-study work visa. The exact duration depends on your level of study - typically 12 months for Bachelor's graduates and 24 months for Master's and PhD graduates.",
    },
  ]

  return (
    <UniversityPageTemplate
      country="Ireland"
      countryColor={emeraldGreen}
      heroImage="/images/ireland-hero-image.png"
      universities={universities}
      programs={programs}
      testimonial={testimonial}
      faqs={faqs}
    />
  )
}
