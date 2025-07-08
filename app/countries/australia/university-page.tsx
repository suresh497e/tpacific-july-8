import { Briefcase, Code, FlaskRoundIcon as Flask, GraduationCap, HeartPulse, Scale } from "lucide-react"
import UniversityPageTemplate from "@/components/university-page-template"

export default function AustraliaUniversityPage() {
  const australianUniversities = [
    {
      name: "University of Melbourne",
      logo: "/images/logos/university-of-melbourne.png",
      image: "/australia_universities/one.png",
      description:
        "Australia's second-oldest university and the oldest in Victoria, consistently ranked among the leading universities in the world. Known for research excellence and outstanding teaching quality.",
      link: "https://www.unimelb.edu.au/",
      ranking: 1,
      location: "Melbourne, Victoria",
      programs: ["Medicine", "Law", "Engineering", "Business", "Arts"],
    },
    {
      name: "Australian National University",
      logo: "/images/logos/australian-national-university.png",
      image: "/public/australia_universities/2.png",
      description:
        "Australia's national university and a world-leading centre for education and research. Located in the nation's capital, ANU is renowned for its intensive research culture.",
      link: "https://www.anu.edu.au/",
      ranking: 2,
      location: "Canberra, ACT",
      programs: ["International Relations", "Science", "Law", "Computing", "Arts"],
    },
    {
      name: "University of Sydney",
      logo: "/images/logos/university-of-sydney.png",
      image: "/images/university-of-sydney-campus.png",
      description:
        "Australia's first university, founded in 1850. A member of the prestigious Group of Eight, it's known for its beautiful campus, progressive values, and world-class research facilities.",
      link: "https://www.sydney.edu.au/",
      ranking: 3,
      location: "Sydney, NSW",
      programs: ["Medicine", "Engineering", "Business", "Arts", "Science"],
    },
    {
      name: "University of Queensland",
      logo: "/images/logos/university-of-queensland.png",
      image: "/images/university-of-queensland-campus.png",
      description:
        "One of Australia's leading research and teaching institutions. UQ is renowned for its vibrant campus culture, world-class facilities, and exceptional graduate outcomes.",
      link: "https://www.uq.edu.au/",
      ranking: 4,
      location: "Brisbane, Queensland",
      programs: ["Science", "Engineering", "Business", "Health Sciences", "Arts"],
    },
    {
      name: "University of New South Wales",
      logo: "/images/logos/unsw-sydney.png",
      image: "/images/unsw-campus.png",
      description:
        "A leading Australian university with a focus on cutting-edge research, innovative teaching and learning, and community engagement. Known for its strong industry connections.",
      link: "https://www.unsw.edu.au/",
      ranking: 5,
      location: "Sydney, NSW",
      programs: ["Engineering", "Business", "Law", "Medicine", "Arts"],
    },
    {
      name: "Monash University",
      logo: "/images/logos/monash-university.png",
      image: "/images/monash-university-campus.png",
      description:
        "Australia's largest university, known for its international presence and research excellence. Monash offers a wide range of courses and has campuses in Australia, Malaysia, and more.",
      link: "https://www.monash.edu/",
      ranking: 6,
      location: "Melbourne, Victoria",
      programs: ["Pharmacy", "Engineering", "Business", "Medicine", "Arts"],
    },
    {
      name: "University of Western Australia",
      logo: "/images/logos/university-of-western-australia.png",
      image: "/images/uwa-campus.png",
      description:
        "Western Australia's oldest university, known for its picturesque campus and research strengths. UWA is a member of the prestigious Group of Eight and offers a comprehensive range of courses.",
      link: "https://www.uwa.edu.au/",
      ranking: 7,
      location: "Perth, WA",
      programs: ["Medicine", "Engineering", "Business", "Science", "Arts"],
    },
    {
      name: "University of Adelaide",
      logo: "/images/logos/university-of-adelaide.png",
      image: "/images/adelaide-university-campus.png",
      description:
        "One of Australia's oldest and most prestigious universities, known for its research excellence and beautiful campus. Adelaide offers a wide range of undergraduate and postgraduate programs.",
      link: "https://www.adelaide.edu.au/",
      ranking: 8,
      location: "Adelaide, SA",
      programs: ["Health Sciences", "Engineering", "Business", "Sciences", "Arts"],
    },
    {
      name: "Queensland University of Technology",
      logo: "/images/logos/qut-logo.png",
      image: "/images/qut-campus.png",
      description:
        "A highly successful Australian university with an applied emphasis in courses and research. QUT has been named one of the fastest-rising universities in the world.",
      link: "https://www.qut.edu.au/",
      ranking: 9,
      location: "Brisbane, Queensland",
      programs: ["Creative Industries", "Business", "Engineering", "Health", "Education"],
    },
  ]

  const australiaPrograms = [
    {
      title: "Business & Management",
      description:
        "Gain a globally recognized business degree from Australia's top-ranked institutions, with strong industry connections and practical learning experiences.",
      icon: <Briefcase className="h-6 w-6 text-[#00843D]" />,
    },
    {
      title: "Engineering & Technology",
      description:
        "Study cutting-edge engineering in world-class facilities, with programs designed in collaboration with industry leaders and research opportunities.",
      icon: <Code className="h-6 w-6 text-[#00843D]" />,
    },
    {
      title: "Medicine & Health Sciences",
      description:
        "Pursue a career in healthcare with Australia's internationally recognized medical programs, featuring clinical placements and research opportunities.",
      icon: <HeartPulse className="h-6 w-6 text-[#00843D]" />,
    },
    {
      title: "Natural Sciences",
      description:
        "Explore Australia's unique environment through science programs that combine theoretical knowledge with hands-on fieldwork and laboratory research.",
      icon: <Flask className="h-6 w-6 text-[#00843D]" />,
    },
    {
      title: "Law & Legal Studies",
      description:
        "Study law in Australia's prestigious institutions, with programs that combine theoretical foundations with practical skills and international perspectives.",
      icon: <Scale className="h-6 w-6 text-[#00843D]" />,
    },
    {
      title: "Education",
      description:
        "Become a qualified teacher with Australia's comprehensive education programs, featuring practical placements and innovative teaching methodologies.",
      icon: <GraduationCap className="h-6 w-6 text-[#00843D]" />,
    },
  ]

  const australiaFAQs = [
    {
      question: "What are the entry requirements for Australian universities?",
      answer:
        "Entry requirements vary by university and program, but generally include academic qualifications (high school certificate or equivalent), English language proficiency (IELTS, TOEFL, or equivalent), and sometimes program-specific requirements. Transpacific can help you understand the specific requirements for your chosen program.",
    },
    {
      question: "How much does it cost to study in Australia?",
      answer:
        "Tuition fees range from AUD 20,000 to AUD 45,000 per year depending on the university and program. Living expenses are approximately AUD 20,000-25,000 per year. Various scholarships and financial aid options are available for international students.",
    },
    {
      question: "Can I work while studying in Australia?",
      answer:
        "Yes, student visa holders can work up to 48 hours per fortnight during term time and unlimited hours during scheduled breaks. This helps many students offset their living expenses while gaining valuable work experience.",
    },
    {
      question: "What accommodation options are available for international students?",
      answer:
        "Options include on-campus accommodation (university colleges and halls of residence), off-campus rentals (apartments or houses), homestays with local families, and purpose-built student accommodation. Transpacific can help you find the best option for your needs and budget.",
    },
    {
      question: "What post-study work opportunities are available in Australia?",
      answer:
        "Graduates from Australian universities may be eligible for the Post-Study Work visa, allowing you to work in Australia for 2-4 years after graduation, depending on your qualification level. This provides valuable international work experience and can be a pathway to permanent residency.",
    },
  ]

  return (
    <UniversityPageTemplate
      country="Australia"
      countryColor="#00843D"
      heroImage="/images/australia-landscape.png"
      universities={australianUniversities}
      programs={australiaPrograms}
      testimonial={{
        quote:
          "Studying in Australia was the best decision I've made. The quality of education, multicultural environment, and the beautiful country itself made my experience unforgettable. Transpacific guided me through every step of my journey.",
        name: "Rahul Sharma",
        title: "MBA Graduate, University of Melbourne",
        image: "/indian-male-student.png",
      }}
      faqs={australiaFAQs}
    />
  )
}
