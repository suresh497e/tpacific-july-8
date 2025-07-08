export interface Institution {
  name: string
  type?: string
  website?: string
}

export interface Reason {
  title: string
  description: string
}

export interface Country {
  id: string
  name: string
  slug: string
  heroTitle?: string
  heroDescription?: string
  whyChoose: Reason[]
  topReasons: Reason[]
  popularPrograms: string[]
  institutions: Institution[]
}

const countries: Country[] = [
  {
    id: "new-zealand",
    name: "New Zealand",
    slug: "new-zealand",
    whyChoose: [
      {
        title: "World-Class Education",
        description:
          "Top universities like the University of Auckland, Lincoln, Victoria University & University of Otago offer excellent academic programs.",
      },
      {
        title: "Innovative Learning",
        description: "Focus on research and practical experience across various disciplines.",
      },
      {
        title: "Supportive Community",
        description: "Diverse student life and a friendly environment to make you feel at home.",
      },
      {
        title: "Career Opportunities",
        description: "Strong career prospects and a vibrant job market for graduates.",
      },
      {
        title: "Inclusive Culture",
        description: "Welcoming, multicultural society that makes it easy for international students to adapt.",
      },
    ],
    topReasons: [
      {
        title: "Three Years Post-Study Work Visa",
        description:
          "Kickstart your career by gaining hands-on experience with a post-study work visa for up to three years, giving you an advantage in the job market.",
      },
      {
        title: "Green List Roles",
        description:
          "Secure high-demand jobs boost your employability by targeting roles in New Zealand's green list, where your skills are in high demand.",
      },
      {
        title: "Partner of a Student Work Visa",
        description:
          "Dual income potential: Your spouse can work full-time while you study, providing added financial security for your family. Conditions apply.",
      },
      {
        title: "Study in the World's Most Peaceful Country",
        description: "Immerse yourself in a serene and safe environment, ideal for achieving academic excellence.",
      },
      {
        title: "No Application Fee",
        description:
          "Start your journey risk-free: Take the first step towards your dream education with no application fees, making it easier to apply.",
      },
      {
        title: "No Consultation Fee",
        description:
          "Get professional guidance for free. Enjoy the benefit of expert advice without any upfront consultation fees, helping you make well-informed decisions.",
      },
      {
        title: "Dependent Child Student Visa",
        description:
          "This visa opens the door for a child to reunite with their parent in New Zealand and venture on an incredible journey of learning in a primary or secondary school, where they can thrive as a domestic student, embracing the opportunity to study without the burden of tuition fees.",
      },
      {
        title: "Pay After Visa Approval",
        description:
          "A stress-free process: Enjoy peace of mind with a payment plan that requires fees only after your visa is successfully approved.",
      },
    ],
    popularPrograms: [
      "Engineering & Technology",
      "Business & Management",
      "Information Technology",
      "Medicine & Health Sciences",
    ],
    institutions: [
      { name: "Lincoln University", website: "https://www.lincoln.ac.nz/" },
      { name: "University of Canterbury", website: "https://www.canterbury.ac.nz/" },
      { name: "University of Auckland", website: "https://www.auckland.ac.nz/" },
      { name: "Victoria University of Wellington", website: "https://www.wgtn.ac.nz/" },
      { name: "Waikato Institute of Technology (Wintec)", type: "Polytechnic", website: "https://www.wintec.ac.nz/" },
      { name: "Whitireia and WelTec", type: "Polytechnic", website: "https://www.whitireiaweltec.ac.nz/" },
      { name: "Otago Polytechnic", type: "Polytechnic", website: "https://www.op.ac.nz/" },
      {
        name: "Nelson Marlborough Institute of Technology (NMIT)",
        type: "Polytechnic",
        website: "https://www.nmit.ac.nz/",
      },
      { name: "Manukau Institute of Technology (MIT)", type: "Polytechnic", website: "https://www.manukau.ac.nz/" },
      { name: "Universal College of Learning (UCOL)", type: "Polytechnic", website: "https://www.ucol.ac.nz/" },
      {
        name: "Wellington Institute of Technology (WelTec)",
        type: "Polytechnic",
        website: "https://www.whitireiaweltec.ac.nz/",
      },
      { name: "Eastern Institute of Technology (EIT)", type: "Polytechnic", website: "https://www.eit.ac.nz/" },
      {
        name: "Western Institute of Technology at Taranaki (WITT)",
        type: "Polytechnic",
        website: "https://www.witt.ac.nz/",
      },
    ],
  },
  {
    id: "australia",
    name: "Australia",
    slug: "australia",
    whyChoose: [
      {
        title: "World-Class Education",
        description: "Study at top-ranked universities offering a wide range of academic programs.",
      },
      {
        title: "Vibrant Job Market",
        description: "Australia's growing economy provides excellent career opportunities for international students.",
      },
      {
        title: "Post-Study Work Opportunities",
        description: "Gain work experience in Australia with post-study work visas for up to 4 years.",
      },
      {
        title: "Cultural Diversity",
        description: "Experience a welcoming, multicultural society that embraces students from all around the world.",
      },
      {
        title: "High Quality of Life",
        description: "Australia is known for its excellent healthcare, low crime rates, and high living standards.",
      },
    ],
    topReasons: [
      {
        title: "World-Class Education",
        description:
          "Australia is home to top-ranked universities offering diverse and high-quality academic programs.",
      },
      {
        title: "Post-Study Work Opportunities",
        description:
          "Take advantage of work visas for up to 4 years after graduation to gain valuable career experience.",
      },
      {
        title: "Cultural Diversity",
        description:
          "Study in a multicultural environment with students from all over the world, enriching your global perspective.",
      },
      {
        title: "High Quality of Life",
        description:
          "Australia offers a great balance of excellent healthcare, safety, and a relaxed lifestyle. academic excellence.",
      },
      {
        title: "Research Excellence",
        description:
          "Australia is a leader in research and innovation, offering students cutting-edge opportunities in various fields.",
      },
      {
        title: "Beautiful Natural Environment",
        description: "Enjoy Australia's stunning landscapes, beaches, and outdoor activities while studying.",
      },
      {
        title: "Supportive Student Services",
        description:
          "Benefit from extensive support services designed to help international students thrive academically and socially.",
      },
    ],
    popularPrograms: [
      "Business & Management",
      "Engineering & Built Environment",
      "Computer Science & Information Technology",
      "Health & Nursing",
    ],
    institutions: [
      { name: "University of Sydney", website: "https://www.sydney.edu.au/" },
      { name: "University of Melbourne", website: "https://www.unimelb.edu.au/" },
      { name: "Australian National University", website: "https://www.anu.edu.au/" },
      { name: "University of Queensland", website: "https://www.uq.edu.au/" },
      { name: "Monash University", website: "https://www.monash.edu/study" },
      { name: "University of New South Wales", website: "https://www.unsw.edu.au/study" },
      { name: "University of Western Australia", website: "https://www.uwa.edu.au/" },
      { name: "University of Adelaide", website: "https://www.adelaide.edu.au/" },
      { name: "University of Technology Sydney", website: "https://www.uts.edu.au/" },
      { name: "Macquarie University", website: "https://www.mq.edu.au/" },
      { name: "RMIT University", website: "https://www.rmit.edu.au/" },
      { name: "Curtin University", website: "https://www.curtin.edu.au/" },
    ],
  },
  {
    id: "uk",
    name: "United Kingdom",
    slug: "united-kingdom",
    whyChoose: [
      {
        title: "Academic Excellence",
        description:
          "Known globally for both research and practical skill development, UK universities provide an education that's highly respected and industry-relevant.",
      },
      {
        title: "World-Class Education",
        description:
          "The UK is home to prestigious institutions like the University of Oxford, University of Cambridge, and the London School of Economics, offering top-notch programs across various fields.",
      },
      {
        title: "Strong Career Prospects",
        description:
          "Graduating from a UK institution can open doors to promising career opportunities worldwide, making it an ideal choice for a transformative study abroad journey.",
      },
      {
        title: "Student Life & Leisure",
        description:
          "Enjoy a lively student experience surrounded by historic landmarks, scenic countryside, and dynamic cityscapes that offer a blend of study and recreation.",
      },
    ],
    topReasons: [
      {
        title: "Academic Excellence",
        description:
          "UK universities are renowned for maintaining the highest academic standards globally, with institutions like Oxford, Cambridge, and Imperial College consistently ranked among the world's best.",
      },
      {
        title: "Quality of Education",
        description:
          "With rigorous programs and experienced faculty, the UK's education system provides students with both theoretical knowledge and practical skills, ensuring they are well-prepared for the global job market.",
      },
      {
        title: "Shorter Duration of Courses",
        description:
          "UK courses are often shorter than in other countries, allowing you to complete an undergraduate degree in 3 years and a master's degree in just 1 year, saving both time and money.",
      },
      {
        title: "Work While You Learn",
        description:
          "International students can work up to 20 hours per week during term time, offering valuable opportunities to gain work experience and support their studies.",
      },
      {
        title: "Diverse Cultural Experience",
        description:
          "Studying in the UK offers a rich multicultural environment where students from around the world come together. This exposure to diverse perspectives and cultures enriches the learning experience and fosters global understanding and collaboration.",
      },
      {
        title: "Explore Europe While Studying",
        description:
          "The UK's proximity to mainland Europe provides students with easy access to travel and explore countries like France, Italy, and Spain, adding to the cultural richness of their study experience.",
      },
      {
        title: "Strong Alumni Network",
        description:
          "UK universities boast extensive and influential alumni networks, including leaders and innovators in various fields. This network can provide valuable connections, mentorship, and career opportunities, helping students build a strong professional foundation.",
      },
    ],
    popularPrograms: [
      "Engineering & Technology",
      "Business & Finance",
      "Law & Humanities",
      "Medicine & Health Sciences",
    ],
    institutions: [
      { name: "University of Oxford", website: "https://www.ox.ac.uk/" },
      { name: "University of Cambridge", website: "https://www.cam.ac.uk/" },
      { name: "Imperial College London", website: "https://www.imperial.ac.uk/" },
      { name: "University College London", website: "https://www.ucl.ac.uk/" },
      { name: "London School of Economics", website: "https://onlinecourses.london.ac.uk/" },
      { name: "University of Edinburgh", website: "https://www.ed.ac.uk/" },
      { name: "King's College London", website: "https://www.kcl.ac.uk/study/home" },
      { name: "University of Manchester", website: "https://www.manchester.ac.uk/" },
      { name: "University of Bristol", website: "https://www.bristol.ac.uk/" },
      { name: "University of Warwick", website: "https://warwick.ac.uk/" },
      { name: "University of Glasgow", website: "https://www.gla.ac.uk/" },
      { name: "Durham University", website: "https://www.durham.ac.uk/" },
    ],
  },
  {
    id: "usa",
    name: "USA",
    slug: "united-states",
    whyChoose: [
      {
        title: "World-Class Education",
        description:
          "The USA is home to prestigious institutions like Harvard, MIT, Stanford, and Yale. These universities offer cutting-edge academic programs, known for their rigor and excellence, across diverse fields.",
      },
      {
        title: "Research and Innovation",
        description:
          "American universities lead in research and innovation, providing opportunities for hands-on learning and groundbreaking discoveries.",
      },
      {
        title: "Vibrant Campus Life",
        description:
          "With a dynamic cultural landscape, cities like New York, Los Angeles, and Chicago offer vibrant, multicultural environments. Campuses are diverse and welcoming, fostering both academic and social growth.",
      },
      {
        title: "Global Career Opportunities",
        description:
          "Studying in the USA opens doors to global networks and strong career prospects, making it a transformative destination for international students.",
      },
    ],
    topReasons: [
      {
        title: "World-Class Universities",
        description:
          "The USA is home to many of the world's leading universities, such as Harvard, Stanford, and MIT, known for their cutting-edge research and academic excellence.",
      },
      {
        title: "Diverse Study Options",
        description:
          "From liberal arts to STEM, the USA offers an extensive range of programs catering to various academic and professional interests.",
      },
      {
        title: "Cultural Diversity",
        description:
          "With students from all corners of the world, American universities foster a culturally enriching and inclusive environment.",
      },
      {
        title: "Internship and Work Opportunities",
        description:
          "Students can gain valuable industry experience through internships and work opportunities during and after their studies.",
      },
      {
        title: "Global Recognition",
        description:
          "A degree from a top U.S. university is highly respected worldwide, opening doors to exciting career opportunities.",
      },
      {
        title: "Explore North America",
        description:
          "While studying, students can explore the vast cultural and natural diversity that the U.S. has to offer, from bustling cities to stunning landscapes.",
      },
      {
        title: "Strong Alumni Network",
        description:
          "US universities boast extensive and influential alumni networks, including leaders and innovators in various fields. This network can provide valuable connections, mentorship, and career opportunities, helping students build a strong professional foundation.",
      },
    ],
    popularPrograms: [
      "Engineering & Technology",
      "Business & Management",
      "Law & Social Sciences",
      "Health & Life Sciences",
    ],
    institutions: [
      { name: "Harvard University", website: "https://www.harvard.edu/" },
      { name: "Stanford University", website: "https://www.stanford.edu/" },
      { name: "Massachusetts Institute of Technology", website: "https://www.mit.edu/" },
      { name: "California Institute of Technology", website: "https://www.caltech.edu/" },
      { name: "Princeton University", website: "https://www.princeton.edu/" },
      { name: "Yale University", website: "https://www.yale.edu/" },
      { name: "Columbia University", website: "https://www.columbia.edu/" },
      { name: "University of Chicago", website: "https://www.uchicago.edu/en" },
      { name: "University of Pennsylvania", website: "https://www.upenn.edu/" },
      { name: "Johns Hopkins University", website: "https://www.jhu.edu/" },
      { name: "Northwestern University", website: "https://www.northwestern.edu/" },
      { name: "Duke University", website: "https://duke.edu/" },
    ],
  },
  {
    id: "canada",
    name: "Canada",
    slug: "canada",
    whyChoose: [
      {
        title: "World-Class Education",
        description:
          "Canada's universities are globally recognized for their high academic standards and diverse programs.",
      },
      {
        title: "Post-Study Work Opportunities",
        description: "Benefit from work permits that allow you to gain valuable experience after graduation.",
      },
      {
        title: "Cultural Diversity",
        description:
          "Canada is known for its welcoming, multicultural society, making it easy for international students to adapt.",
      },
      {
        title: "Safe and Peaceful Environment",
        description: "Canada consistently ranks as one of the safest and most peaceful countries in the world.",
      },
    ],
    topReasons: [
      {
        title: "Globally Recognized Education",
        description:
          "Canadian universities are renowned for offering world-class education and research opportunities.",
      },
      {
        title: "Post-Graduation Work Permits",
        description: "You can gain up to three years of work experience after completing your studies in Canada.",
      },
      {
        title: "Cultural Diversity",
        description:
          "Canada's multicultural society provides a unique opportunity to interact with people from all around the world.",
      },
      {
        title: "Affordable Education",
        description:
          "Canada offers high-quality education at a relatively lower cost compared to other countries like the USA or the UK.",
      },
      {
        title: "Safe and Peaceful",
        description:
          "Ranked as one of the safest countries to live in, Canada offers a secure environment for students.",
      },
      {
        title: "Access to Natural Beauty",
        description:
          "From mountains to coastlines, Canada provides students with access to some of the world's most stunning natural landscapes.",
      },
      {
        title: "Pathway to Permanent Residency",
        description:
          "Canada offers several immigration pathways for international students, allowing them to transition to permanent residency.",
      },
    ],
    popularPrograms: [
      "Allied Health & Social Services",
      "Business & Management",
      "Computer Science & IT",
      "Construction & Engineering",
    ],
    institutions: [
      { name: "University of Toronto", website: "https://www.utoronto.ca/" },
      { name: "University of British Columbia", website: "https://www.ubc.ca/" },
      { name: "McGill University", website: "https://www.mcgill.ca/" },
      { name: "University of Alberta", website: "https://www.ualberta.ca/en/index.html" },
      { name: "University of Montreal", website: "https://www.umontreal.ca/en/" },
      { name: "University of Calgary", website: "https://www.ucalgary.ca/" },
      { name: "University of Waterloo", website: "https://uwaterloo.ca/" },
      { name: "Western University", website: "https://www.uwo.ca/" },
      { name: "Queen's University", website: "https://www.queensu.ca/" },
      { name: "University of Ottawa", website: "https://www.uottawa.ca/en" },
      { name: "Simon Fraser University", website: "https://www.sfu.ca/" },
      { name: "Dalhousie University", website: "https://www.dal.ca/" },
    ],
  },
  {
    id: "ireland",
    name: "Ireland",
    slug: "ireland",
    whyChoose: [
      {
        title: "Europe's Fastest-Growing Economy",
        description: "Ireland is leading the way in economic growth across Europe.",
      },
      {
        title: "Top 10 for Scientific Research",
        description: "Ranked among the top 10 globally for high-quality scientific research.",
      },
      {
        title: "Post-Study Work Visa (Up to 2 Years)",
        description: "Gain work experience in Ireland with a post-study visa for up to 2 years.",
      },
      {
        title: "Top-Ranked Universities",
        description: "All universities in Ireland are ranked in the top 5% globally.",
      },
      {
        title: "Accredited Qualifications",
        description: "Qualifications are assured by Quality & Qualifications Ireland (QQI), a state agency.",
      },
    ],
    topReasons: [
      {
        title: "World-Class Education",
        description:
          "Ireland's universities rank in the top 5% globally, providing top-tier academic programs and exceptional learning experiences.",
      },
      {
        title: "Growing Job Market",
        description:
          "With Europe's fastest-growing economy, Ireland offers diverse career opportunities in various industries for international students.",
      },
      {
        title: "Post-Study Work Visa",
        description: "Graduate with the opportunity to work in Ireland for up to 2 years, gaining valuable experience.",
      },
      {
        title: "High-Quality Research",
        description:
          "Ranked among the top 10 globally, Ireland excels in scientific and technological research, offering excellent opportunities.",
      },
      {
        title: "Safe and Peaceful Environment",
        description:
          "Ireland is ranked the 13th most peaceful country globally, providing a secure, welcoming environment for students.",
      },
      {
        title: "Accredited Qualifications",
        description:
          "Ireland's education system ensures that qualifications are recognized and accredited by the Quality & Qualifications Ireland (QQI) agency.",
      },
      {
        title: "Top 20 Education System",
        description:
          "Ireland is ranked among the world's top 20 education systems, offering high academic standards and diverse programs.",
      },
      {
        title: "Innovation Hub",
        description:
          "Ireland ranks 11th globally in innovation, fostering cutting-edge industries and research opportunities for students in various fields.",
      },
    ],
    popularPrograms: [
      "Computer & Data Science",
      "Data & Business Analytics",
      "Investment Banking & Finance",
      "Pharmaceutical Sciences",
    ],
    institutions: [
      { name: "Trinity College Dublin", website: "https://www.tcd.ie/" },
      { name: "University College Dublin", website: "https://www.ucd.ie/" },
      { name: "National University of Ireland, Galway", website: "https://www.universityofgalway.ie/" },
      { name: "University College Cork", website: "https://www.ucc.ie/en/" },
      { name: "Dublin City University", website: "https://www.dcu.ie/" },
      { name: "University of Limerick", website: "https://www.ul.ie/" },
      { name: "Maynooth University", website: "https://www.maynoothuniversity.ie/" },
      { name: "Technological University Dublin", website: "https://www.tudublin.ie/" },
      { name: "Royal College of Surgeons in Ireland", website: "https://www.rcsi.com/dublin/" },
      { name: "National College of Ireland", website: "https://www.ncirl.ie/" },
      { name: "Griffith College", website: "https://www.griffith.ie/" },
      { name: "Dublin Business School", website: "https://www.dbs.ie/" },
    ],
  },
]

export function getCountryData(slug: string): Country | undefined {
  return countries.find((country) => country.slug === slug || country.id === slug)
}

export function getAllCountries(): Country[] {
  return countries
}
