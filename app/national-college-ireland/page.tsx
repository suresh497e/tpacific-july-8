import Link from "next/link"
import {
  ArrowRight,
  Award,
  BookOpen,
  Building,
  Calendar,
  CheckCircle,
  ExternalLink,
  GraduationCap,
  MapPin,
  Phone,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import TestimonialCard from "@/components/testimonial-card"

export default function NationalCollegeIrelandPage() {
  // Custom emerald green color for Ireland
  const emeraldGreen = "#007848"

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#007848]/5 via-background to-background dark:from-[#007848]/10 dark:via-background dark:to-background section-padding">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="outline" className="px-3 py-1 text-sm bg-background dark:bg-muted">
                Study in Ireland
              </Badge>
              <h1 className="font-galano text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                National College of <span style={{ color: emeraldGreen }}>Ireland</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Located in Dublin's International Financial Services Centre, NCI offers excellence in business,
                computing, and psychology with strong industry connections.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button size="lg" asChild style={{ backgroundColor: emeraldGreen, borderColor: emeraldGreen }}>
                  <Link href="/consultation" className="gap-2">
                    Book Free Consultation
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="https://www.ncirl.ie/" target="_blank" rel="noopener noreferrer" className="gap-2">
                    Visit Official Website
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative lg:h-[500px]">
              <div className="relative h-full w-full rounded-2xl overflow-hidden">
                <img
                  src="/images/nci-campus-new.png"
                  alt="National College of Ireland campus"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* University Overview */}
      <section className="section-padding bg-muted/30 dark:bg-muted/10 border-y">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Badge variant="outline" className="px-3 py-1 text-sm bg-background dark:bg-muted">
              University Overview
            </Badge>
            <h2 className="font-galano text-3xl md:text-4xl font-bold">About National College of Ireland</h2>
            <p className="text-xl text-muted-foreground">
              A leading institution for business, computing, and psychology education
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="aspect-square w-full overflow-hidden rounded-xl border shadow-sm">
                <img
                  src="/images/logos/nci-logo-new.png"
                  alt="National College of Ireland logo"
                  className="h-full w-full object-contain p-8"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-background rounded-lg p-4 border">
                  <div className="text-sm text-muted-foreground">Founded</div>
                  <div className="text-xl font-semibold">1951</div>
                </div>
                <div className="bg-background rounded-lg p-4 border">
                  <div className="text-sm text-muted-foreground">Students</div>
                  <div className="text-xl font-semibold">6,000+</div>
                </div>
                <div className="bg-background rounded-lg p-4 border">
                  <div className="text-sm text-muted-foreground">Location</div>
                  <div className="text-xl font-semibold">Dublin</div>
                </div>
                <div className="bg-background rounded-lg p-4 border">
                  <div className="text-sm text-muted-foreground">Int'l Students</div>
                  <div className="text-xl font-semibold">1,200+</div>
                </div>
              </div>

              <p className="text-lg">
                The National College of Ireland (NCI) is a third-level education institution located in Dublin's
                International Financial Services Centre. The college specializes in business, computing, psychology, and
                education courses that are career-focused and industry-aligned.
              </p>

              <p>
                With a strong emphasis on practical learning and industry connections, NCI provides students with the
                skills and knowledge needed to succeed in today's competitive job market. The college's location in
                Dublin's financial district offers unparalleled access to potential employers and real-world industry
                experience.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <Card className="bg-background border-border/50 hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="bg-[#007848]/10 p-3 rounded-full w-fit">
                  <MapPin className="h-6 w-6" style={{ color: emeraldGreen }} />
                </div>
                <h3 className="font-galano text-xl font-semibold">Prime Location</h3>
                <p className="text-muted-foreground">
                  Located in Dublin's International Financial Services Centre, offering direct access to major
                  employers.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border/50 hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="bg-[#007848]/10 p-3 rounded-full w-fit">
                  <Building className="h-6 w-6" style={{ color: emeraldGreen }} />
                </div>
                <h3 className="font-galano text-xl font-semibold">Modern Campus</h3>
                <p className="text-muted-foreground">
                  State-of-the-art facilities including a modern library, computing labs, and student accommodation.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border/50 hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="bg-[#007848]/10 p-3 rounded-full w-fit">
                  <Users className="h-6 w-6" style={{ color: emeraldGreen }} />
                </div>
                <h3 className="font-galano text-xl font-semibold">Small Class Sizes</h3>
                <p className="text-muted-foreground">
                  Personalized learning experience with small class sizes and direct access to lecturers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Programs */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Badge variant="outline" className="px-3 py-1 text-sm bg-background dark:bg-muted">
              Academic Programs
            </Badge>
            <h2 className="font-galano text-3xl md:text-4xl font-bold">Popular Programs at NCI</h2>
            <p className="text-xl text-muted-foreground">
              Discover NCI's most sought-after programs for international students
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-background border-border/50 hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="bg-[#007848]/10 p-3 rounded-full w-fit">
                    <BookOpen className="h-6 w-6" style={{ color: emeraldGreen }} />
                  </div>
                  <Badge variant="outline">MSc</Badge>
                </div>
                <h3 className="font-galano text-xl font-semibold">Data Analytics</h3>
                <p className="text-muted-foreground">
                  Develop expertise in data mining, machine learning, and statistical analysis with hands-on projects
                  using real-world datasets.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>1 year full-time</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background border-border/50 hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="bg-[#007848]/10 p-3 rounded-full w-fit">
                    <BookOpen className="h-6 w-6" style={{ color: emeraldGreen }} />
                  </div>
                  <Badge variant="outline">MSc</Badge>
                </div>
                <h3 className="font-galano text-xl font-semibold">Cloud Computing</h3>
                <p className="text-muted-foreground">
                  Master cloud technologies, architecture, and security with practical experience in AWS, Azure, and
                  Google Cloud platforms.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>1 year full-time</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background border-border/50 hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="bg-[#007848]/10 p-3 rounded-full w-fit">
                    <BookOpen className="h-6 w-6" style={{ color: emeraldGreen }} />
                  </div>
                  <Badge variant="outline">MSc</Badge>
                </div>
                <h3 className="font-galano text-xl font-semibold">Fintech</h3>
                <p className="text-muted-foreground">
                  Explore blockchain, digital currencies, and financial innovation with direct exposure to Dublin's
                  thriving fintech ecosystem.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>1 year full-time</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background border-border/50 hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="bg-[#007848]/10 p-3 rounded-full w-fit">
                    <BookOpen className="h-6 w-6" style={{ color: emeraldGreen }} />
                  </div>
                  <Badge variant="outline">MSc</Badge>
                </div>
                <h3 className="font-galano text-xl font-semibold">International Business</h3>
                <p className="text-muted-foreground">
                  Develop global business acumen with focus on strategy, marketing, and cross-cultural management in
                  international contexts.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>1 year full-time</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background border-border/50 hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="bg-[#007848]/10 p-3 rounded-full w-fit">
                    <BookOpen className="h-6 w-6" style={{ color: emeraldGreen }} />
                  </div>
                  <Badge variant="outline">MSc</Badge>
                </div>
                <h3 className="font-galano text-xl font-semibold">Cybersecurity</h3>
                <p className="text-muted-foreground">
                  Learn advanced security techniques, ethical hacking, and digital forensics with industry-standard
                  tools and certifications.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>1 year full-time</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background border-border/50 hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="bg-[#007848]/10 p-3 rounded-full w-fit">
                    <BookOpen className="h-6 w-6" style={{ color: emeraldGreen }} />
                  </div>
                  <Badge variant="outline">MSc</Badge>
                </div>
                <h3 className="font-galano text-xl font-semibold">Human Resource Management</h3>
                <p className="text-muted-foreground">
                  Develop strategic HR skills with focus on talent management, organizational development, and
                  employment law.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>1 year full-time</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" variant="outline" asChild>
              <a href="https://www.ncirl.ie/Courses" target="_blank" rel="noopener noreferrer" className="gap-2">
                View All Programs
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose NCI */}
      <section className="section-padding bg-muted/30 dark:bg-muted/10 border-y">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Badge variant="outline" className="px-3 py-1 text-sm bg-background dark:bg-muted">
              Key Benefits
            </Badge>
            <h2 className="font-galano text-3xl md:text-4xl font-bold">Why Choose NCI?</h2>
            <p className="text-xl text-muted-foreground">
              Compelling reasons to choose National College of Ireland for your education
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-background border-border/50 hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="bg-[#007848]/10 p-3 rounded-full w-fit">
                  <Award className="h-6 w-6" style={{ color: emeraldGreen }} />
                </div>
                <h3 className="font-galano text-xl font-semibold">Industry-Focused Education</h3>
                <p className="text-muted-foreground">
                  Programs designed with input from industry leaders to ensure graduates have the skills employers need.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border/50 hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="bg-[#007848]/10 p-3 rounded-full w-fit">
                  <GraduationCap className="h-6 w-6" style={{ color: emeraldGreen }} />
                </div>
                <h3 className="font-galano text-xl font-semibold">High Graduate Employment Rate</h3>
                <p className="text-muted-foreground">
                  Over 90% of NCI graduates secure employment within six months of graduation.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border/50 hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="bg-[#007848]/10 p-3 rounded-full w-fit">
                  <MapPin className="h-6 w-6" style={{ color: emeraldGreen }} />
                </div>
                <h3 className="font-galano text-xl font-semibold">Strategic Location</h3>
                <p className="text-muted-foreground">
                  Located in Dublin's financial district with easy access to major tech companies and financial
                  institutions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border/50 hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="bg-[#007848]/10 p-3 rounded-full w-fit">
                  <Users className="h-6 w-6" style={{ color: emeraldGreen }} />
                </div>
                <h3 className="font-galano text-xl font-semibold">Diverse Student Community</h3>
                <p className="text-muted-foreground">
                  Students from over 50 countries creating a rich, multicultural learning environment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Badge variant="outline" className="px-3 py-1 text-sm bg-background dark:bg-muted">
              Student Voices
            </Badge>
            <h2 className="font-galano text-3xl md:text-4xl font-bold">Student Testimonials</h2>
            <p className="text-xl text-muted-foreground">Hear from international students at NCI</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <TestimonialCard
              quote="Studying at NCI gave me direct access to Dublin's tech industry. The practical focus of my Cloud Computing program and the industry connections helped me secure a job at a leading tech company before graduation."
              name="Rahul S."
              title="MSc in Cloud Computing, National College of Ireland"
              image="/images/indian-student-testimonial.png"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-muted/30 dark:bg-muted/10 border-y">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Badge variant="outline" className="px-3 py-1 text-sm bg-background dark:bg-muted">
              Common Questions
            </Badge>
            <h2 className="font-galano text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">Find answers to common questions about studying at NCI</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-medium">
                  What are the entry requirements for international students?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <p>
                    For postgraduate programs, you typically need a bachelor's degree with a minimum of second-class
                    honors (or equivalent) in a relevant field. English language requirements include an IELTS score of
                    6.5 overall with no band less than 6.0, or equivalent.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-medium">
                  Are scholarships available for international students?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <p>
                    Yes, NCI offers several scholarship opportunities for international students based on academic
                    merit. These include the International Student Scholarship, which can provide up to 50% reduction in
                    tuition fees for exceptional candidates. Additionally, there are specific scholarships for students
                    from certain countries and for particular programs of study.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-medium">
                  Does NCI provide accommodation for international students?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <p>
                    NCI has partnerships with several student accommodation providers near the campus. The college's
                    accommodation office can assist international students in finding suitable housing options,
                    including purpose-built student residences and private rentals. It's recommended to apply for
                    accommodation as early as possible, especially for the fall intake.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg font-medium">
                  What career support services does NCI offer?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <p>
                    NCI has a dedicated Careers and Employability Service that provides comprehensive support including
                    career counseling, CV workshops, interview preparation, job search strategies, and networking
                    events. The college also hosts regular career fairs where students can connect with potential
                    employers. Many programs include work placements or industry projects to enhance employability.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground mb-6">Still have questions?</p>
            <Button size="lg" asChild style={{ backgroundColor: emeraldGreen, borderColor: emeraldGreen }}>
              <Link href="/consultation" className="gap-2">
                Talk to Our Counsellors
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding" style={{ backgroundColor: emeraldGreen, color: "white" }}>
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-galano text-3xl md:text-4xl font-bold">Ready to Study at NCI?</h2>
              <p className="text-xl opacity-90">
                Let Transpacific guide you through the application process and help you secure your place at the
                National College of Ireland.
              </p>
              <ul className="space-y-3">
                {[
                  "Free personalized consultation",
                  "Expert guidance on program selection",
                  "Complete application assistance",
                  "Visa and accommodation support",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/consultation" className="gap-2">
                    Apply Now
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                  <Link href="/consultation" className="gap-2">
                    Get Free Guidance
                    <Phone className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8">
              <div className="aspect-video w-full rounded-lg overflow-hidden">
                <img
                  src="/images/nci-campus-new.png"
                  alt="National College of Ireland campus"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
