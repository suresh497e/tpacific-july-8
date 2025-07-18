import { Briefcase, Code, FlaskRoundIcon as Flask, GraduationCap, HeartPulse, Scale } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, ArrowRight, ExternalLink } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TestimonialCard from "@/components/testimonial-card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { AustraliaLogoCarousel } from "@/components/australia-logo-carousel"
import { UniversityLogo } from "@/components/university-logo"
import CountryTestimonials from "@/components/country-testimonials"

// import { metadata } from "./metadata"


import { cannonicalUrls } from "@/lib/cannonical"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Study in Australia from India | World-Class Universities & Visa Support",
  description: "Apply to top Australian universities with expert visa guidance, co-op options, and PR opportunities. Start your career-focused education journey today.",
  alternates: {
    canonical: cannonicalUrls.australia,
  },
  keywords: ['study abroad', 'visa', 'immigration'],
  openGraph: {
   title: "Study in Australia from India | World-Class Universities & Visa Support",
    description: "Get career-ready degrees with global recognition and flexible work-study options in Australia.",
    url: cannonicalUrls.australia,
    type: "website",
  },
  twitter: {
    title: "Study Abroad",
    description: "Expert visa guidance",
  }
}

export default function AustraliaPage() {
  const australianUniversities = [
    {
      name: "University of Melbourne",
      logo: "/images/logos/university-of-melbourne.png",
     // image: "/australia_universities/one.png",
     image: "/compressed/australia/1-min.png",
      description:
        "Australia's second-oldest university and the oldest in Victoria, consistently ranked among the leading universities in the world. Known for research excellence and outstanding teaching quality.",
      link: "https://www.unimelb.edu.au/",
      ranking: 1,
      location: "Melbourne, Victoria",
    },
    {
      name: "Australian National University",
      logo: "/images/logos/australian-national-university.png",
     image: "/compressed/australia/2-min.png",
      description:
        "Australia's national university and a world-leading centre for education and research. Located in the nation's capital, ANU is renowned for its intensive research culture.",
      link: "https://www.anu.edu.au/",
      ranking: 2,
      location: "Canberra, ACT",
    },
    {
      name: "University of Sydney",
      logo: "/images/logos/university-of-sydney.png",
     image: "/compressed/australia/3-min.png",
      description:
        "Australia's first university, founded in 1850. A member of the prestigious Group of Eight, it's known for its beautiful campus, progressive values, and world-class research facilities.",
      link: "https://www.sydney.edu.au/",
      ranking: 3,
      location: "Sydney, NSW",
    },
    {
      name: "University of Queensland",
      logo: "/images/logos/university-of-queensland.png",
     image: "/compressed/australia/4-min.png",
      description:
        "One of Australia's leading research and teaching institutions. UQ is renowned for its vibrant campus culture, world-class facilities, and exceptional graduate outcomes.",
      link: "https://www.uq.edu.au/",
      ranking: 4,
      location: "Brisbane, Queensland",
    },
    {
      name: "University of New South Wales",
      logo: "/images/logos/unsw-sydney.png",
     image: "/compressed/australia/5-min.png",
      description:
        "A leading Australian university with a focus on cutting-edge research, innovative teaching and learning, and community engagement. Known for its strong industry connections.",
      link: "https://www.unsw.edu.au/",
      ranking: 5,
      location: "Sydney, NSW",
    },
    {
      name: "Monash University",
      logo: "/images/logos/monash-university.png",
     image: "/compressed/australia/6-min.png",
      description:
        "Australia's largest university, known for its international presence and research excellence. Monash offers a wide range of courses and has campuses in Australia, Malaysia, and more.",
      link: "https://www.monash.edu/",
      ranking: 6,
      location: "Melbourne, Victoria",
    },
    {
      name: "University of Western Australia",
      logo: "/images/logos/university-of-western-australia.png",
     image: "/compressed/australia/7-min.png",
      description:
        "Western Australia's oldest university, known for its picturesque campus and research strengths. UWA is a member of the prestigious Group of Eight and offers a comprehensive range of courses.",
      link: "https://www.uwa.edu.au/",
      ranking: 7,
      location: "Perth, WA",
    },
    {
      name: "University of Adelaide",
      logo: "/images/logos/university-of-adelaide.png",
      image: "/compressed/australia/8-min.png",
      description:
        "One of Australia's oldest and most prestigious universities, known for its research excellence and beautiful campus. Adelaide offers a wide range of undergraduate and postgraduate programs.",
      link: "https://www.adelaide.edu.au/",
      ranking: 8,
      location: "Adelaide, SA",
    },
    {
      name: "Queensland University of Technology",
      logo: "/images/logos/qut-logo.png",
    image: "/compressed/australia/9-min.png",
      description:
        "A highly successful Australian university with an applied emphasis in courses and research. QUT has been named one of the fastest-rising universities in the world.",
      link: "https://www.qut.edu.au/",
      ranking: 9,
      location: "Brisbane, Queensland",
    },
    {
      name: "University of Technology Sydney",
      logo: "/images/logos/university-of-technology-sydney.png",
     image: "/compressed/australia/10-min.png",
      description:
        "A dynamic and innovative university, known for its practice-oriented teaching and strong industry connections. UTS is ranked as one of Australia's top young universities.",
      link: "https://www.uts.edu.au/",
      ranking: 10,
      location: "Sydney, NSW",
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
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#00843D]/10 via-background to-background dark:from-[#00843D]/20 dark:via-background dark:to-background section-padding">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge variant="outline" className="px-3 py-1 text-sm bg-background dark:bg-muted">
                Study in Australia
              </Badge>
              <h1 className="font-galano text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                Your Pathway to <span className="">World-Class Education</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl">
                Safe. Welcoming. Future-focused. Australia offers more than a degree — it offers a career-ready
                education and a life you'll love.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button size="lg" asChild className="">
                  <Link href="/consultation" className="gap-2">
                    Book Free Consultation
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#universities">Explore Universities</Link>
                </Button>
              </div>
            </div>
            <div className="relative lg:h-[600px] animate-fade-in">
              <div className="relative h-full w-full rounded-2xl overflow-hidden">
                <img
                  //src="/countries_hero/AUS.jpeg"
                  src="/compressed/countries_hero/aus.png"
                  alt="Student at an Australian university campus"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 md:bottom-6 md:left-6 bg-background dark:bg-card p-4 rounded-xl shadow-lg max-w-xs">
                <div className="flex items-start gap-3">
                  <div className="bg-[#00843D]/10 p-2 rounded-full">
                    <GraduationCap className="h-6 w-6 text-[#00843D]" />
                  </div>
                  <div>
                    <h3 className="font-galano font-semibold">Top-Ranked Education</h3>
                    <p className="text-sm text-muted-foreground">World-class universities and programs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Universities Section */}
      <section className="section-padding bg-muted/30 dark:bg-muted/10 border-y">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <Badge variant="outline" className="px-3 py-1 text-sm bg-background dark:bg-muted">
              Our Partners
            </Badge>
            <h2 className="font-galano text-3xl md:text-4xl font-bold">Our Partner Universities in Australia</h2>
            <p className="text-xl text-muted-foreground stats-intro-text">
              We work with Australia's leading institutions to provide you with the best education opportunities
            </p>
          </div>

          <div className="bg-background rounded-lg p-6 shadow-sm">
            <h3 className="sr-only">Australian University Partners</h3>
            <div className="mb-8">
              <AustraliaLogoCarousel speed={40} />
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline" size="sm" asChild>
              <Link href="#universities" className="gap-2">
                View All Universities
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Top Universities Section */}
      <section id="universities" className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-8 space-y-4">
            <Badge variant="outline" className="px-3 py-1 text-sm bg-background dark:bg-muted">
              All Universities
            </Badge>
            <h2 className="font-galano text-3xl md:text-4xl font-bold">Browse All Australian Universities</h2>
            <p className="text-xl text-muted-foreground stats-intro-text">
              Discover the full range of institutions offering innovative programs and exceptional student experiences
            </p>
          </div>

          <div className="mb-8">
            <Tabs defaultValue="all" className="w-full">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <TabsList className="bg-muted/50">
                  <TabsTrigger value="all">All Universities</TabsTrigger>
                  <TabsTrigger value="top-ranked">Top Ranked</TabsTrigger>
                  <TabsTrigger value="affordable">Affordable</TabsTrigger>
                </TabsList>

                <div className="flex items-center w-full sm:w-auto max-w-xs">
                  <div className="relative w-full">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input type="search" placeholder="Search universities..." className="pl-9 w-full" />
                  </div>
                </div>
              </div>

              <TabsContent value="all" className="mt-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {australianUniversities.slice(0, 10).map((university, index) => (
                    <Card
                      key={index}
                      className="overflow-hidden bg-background border-border/50 hover:shadow-md transition-shadow"
                    >
                      <div className="aspect-video w-full overflow-hidden">
                        <img
                          src={university.image || "/placeholder.svg"}
                          alt={`${university.name} campus`}
                          className="h-full w-full object-cover transition-transform hover:scale-105"
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="font-galano text-xl font-semibold">{university.name}</h3>
                          <div className="h-8 w-16 flex items-center justify-end">
                            <UniversityLogo
                              src={university.logo}
                              alt={`${university.name} logo`}
                              name={university.name}
                              maxWidth="64px"
                              maxHeight="24px"
                            />
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-4 line-clamp-3">{university.description}</p>
                        <Button  size="sm" asChild>
                          <Link href={university.link} className="gap-2" target="_blank" rel="noopener noreferrer">
                            Visit Website
                            {/* <ExternalLink className="h-4 w-4" /> */}
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="top-ranked" className="mt-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {australianUniversities.slice(0, 5).map((university, index) => (
                    <Card
                      key={index}
                      className="overflow-hidden bg-background border-border/50 hover:shadow-md transition-shadow"
                    >
                      <div className="aspect-video w-full overflow-hidden">
                        <img
                          src={university.image || "/placeholder.svg"}
                          alt={`${university.name} campus`}
                          className="h-full w-full object-cover transition-transform hover:scale-105"
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="font-galano text-xl font-semibold">{university.name}</h3>
                          <div className="h-8 w-16 flex items-center justify-end">
                            <UniversityLogo
                              src={university.logo}
                              alt={`${university.name} logo`}
                              name={university.name}
                              maxWidth="64px"
                              maxHeight="24px"
                            />
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-4 line-clamp-3">{university.description}</p>
                        <Button variant="outline" size="sm" asChild>
                          <Link href={university.link} className="gap-2" target="_blank" rel="noopener noreferrer">
                            Visit Website
                            <ExternalLink className="h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="affordable" className="mt-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {australianUniversities.slice(5, 10).map((university, index) => (
                    <Card
                      key={index}
                      className="overflow-hidden bg-background border-border/50 hover:shadow-md transition-shadow"
                    >
                      <div className="aspect-video w-full overflow-hidden">
                        <img
                          src={university.image || "/placeholder.svg"}
                          alt={`${university.name} campus`}
                          className="h-full w-full object-cover transition-transform hover:scale-105"
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="font-galano text-xl font-semibold">{university.name}</h3>
                          <div className="h-8 w-16 flex items-center justify-end">
                            <UniversityLogo
                              src={university.logo}
                              alt={`${university.name} logo`}
                              name={university.name}
                              maxWidth="64px"
                              maxHeight="24px"
                            />
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-4 line-clamp-3">{university.description}</p>
                        <Button variant="outline" size="sm" asChild>
                          <Link href={university.link} className="gap-2" target="_blank" rel="noopener noreferrer">
                            Visit Website
                            <ExternalLink className="h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/consultation" className="gap-2">
                Not sure which university is right for you? Talk to our experts.
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Popular Programs Section */}
      <section className="section-padding bg-muted/30 dark:bg-muted/10 border-y">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Badge variant="outline" className="px-3 py-1 text-sm bg-background dark:bg-muted">
              Popular Programs
            </Badge>
            <h2 className="font-galano text-3xl md:text-4xl font-bold">Popular Programs in Australia</h2>
            <p className="text-xl text-muted-foreground stats-intro-text">Career-focused courses & programs available</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {australiaPrograms.map((program, index) => (
              <Card key={index} className="bg-background border-border/50 hover:shadow-md transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="bg-[#00843D]/10 p-3 rounded-full w-fit">{program.icon}</div>
                  <h3 className="font-galano text-xl font-semibold">{program.title}</h3>
                  <p className="text-muted-foreground">{program.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" asChild>
              <Link href="/consultation" className="gap-2">
                Explore Programs
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      {/* <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Badge variant="outline" className="px-3 py-1 text-sm bg-background dark:bg-muted">
              Success Stories
            </Badge>
            <h2 className="font-galano text-3xl md:text-4xl font-bold">Hear From Our Students</h2>
            <p className="text-xl text-muted-foreground">
              Real experiences from students who are living their dreams in Australia
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <TestimonialCard
              quote="Studying in Australia has been the best decision of my life. The quality of education, multicultural environment, and work opportunities have given me skills that are recognized globally. Transpacific made the entire process smooth from application to arrival."
              name="Rahul Sharma"
              title="Master of Data Science, University of Melbourne"
              image="/indian-male-student.png"
            />
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/testimonials" className="gap-2">
                Read More Student Stories
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section> */}

       <section className="section-padding">
              <div className="">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                  <Badge variant="outline" className="px-3 py-1 text-sm bg-background dark:bg-muted">
                    Student Voices
                  </Badge>
                  {/* <h2 className="font-galano text-3xl md:text-4xl font-bold">Student Story</h2> */}
                  <p className="text-xl text-muted-foreground stats-intro-text">Success stories from students who chose Ireland</p>
                </div>
      
                <div className="mx-auto w-full">
                  <CountryTestimonials
                    testimonials={[
                      {
                        quote:
                          "Ireland gave me more than a degree. It gave me direction, confidence, and my first international job. Transpacific made every step smooth and stress-free.",
                        name: "Kavya R.",
                        title: "MSc in Data Analytics, Trinity College Dublin",
                        image: "/images/indian-student-testimonial.png",
                      },
                      {
                        quote:
                          "The cultural experience in Ireland was incredible. I made friends from all over the world while studying at UCD. Transpacific's guidance on accommodation and part-time work opportunities was invaluable.",
                        name: "Arjun P.",
                        title: "MBA, University College Dublin",
                        image: "/images/male-student-testimonial.png",
                      },
                      {
                        quote:
                          "As a tech student, Ireland's Silicon Docks provided amazing networking opportunities. I secured an internship at a major tech company during my studies, which led to a full-time role after graduation.",
                        name: "Meera S.",
                        title: "MSc Computer Science, Dublin City University",
                        image: "/images/female-student-testimonial.png",
                      },
                    ]}
                   // countryColor={emeraldGreen}
                  />
                </div>
      
                <div className="mt-12 text-center">
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/testimonials" className="gap-2">
                      Explore More Student Experiences
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </section>

      {/* FAQ Section */}
      <section className="section-padding bg-muted/30 dark:bg-muted/10 border-y">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Badge variant="outline" className="px-3 py-1 text-sm bg-background dark:bg-muted">
              FAQs
            </Badge>
            <h2 className="font-galano text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground stats-intro-text">
              Find answers to common questions about studying in Australia
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {australiaFAQs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-galano text-lg">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact" className="gap-2">
                Have more questions? Chat with Us Now
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-galano text-3xl md:text-4xl font-bold">Ready to Study in Australia?</h2>
            <p className="text-xl opacity-90 stats-intro-text">
              Thousands of students trust Transpacific to make their Australian education dream come true — from start
              to finish.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" variant="secondary" asChild className="px-8 py-6 text-lg">
                <Link href="/consultation" className="gap-2">
                  Book Your Free Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              {/* <Button
                size="lg"
                variant="outline"
                className="bg-primary-foreground/10 border-primary-foreground/20 hover:bg-primary-foreground/20 px-8 py-6 text-lg"
                asChild
              >
                <Link href="/apply">Apply to Study in Australia</Link>
              </Button> */}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
