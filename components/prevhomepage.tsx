import Link from "next/link"
import { ArrowRight, CheckCircle, GraduationCap, MapPin, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CountryCard from "@/components/country-card"
import TestimonialCard from "@/components/testimonial-card"
import ProcessStep from "@/components/process-step"
import ConsultationForm from "@/components/consultation-form"
import FeaturedBlogPosts from "@/components/featured-blog-posts"
import StatsCounter from "@/components/stats-counter"
import { Badge } from "@/components/ui/badge"
import { LogoCarousel } from "@/components/logo-carousel"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background dark:from-primary/10 dark:via-background dark:to-background py-8 md:py-12">
        <div className="container-custom px-4">
          <div className="grid gap-4 lg:grid-cols-2 lg:gap-8 items-center">
            <div className="space-y-4 animate-fade-in">
              <Badge variant="outline" className="px-3 py-1 text-sm bg-background/80 backdrop-blur-sm dark:bg-muted">
                Licensed Education Consultants
              </Badge>
              <h1 className="font-galano text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                Your Gateway to a <span className="text-primary">Global Education</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl">
                Personalized guidance for students who dream big. From choosing the right country to getting your visa
                approved.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <Button size="lg" asChild>
                  <Link href="/contact" className="gap-2">
                    Start Your Free Consultation
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="relative lg:h-[550px] animate-fade-in mt-4 lg:mt-0">
              <div className="relative h-full w-full rounded-2xl overflow-hidden border border-primary/20">
                <img
                  src="/images/hero-image-precise.png"
                  alt="Indian student at international airport with global landmarks in background"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Carousel Section */}
      <section className="py-8 bg-muted/30">
        <div className="container">
          <h2 className="text-2xl font-semibold text-center mb-6">Our Global University Partners</h2>
          <p className="text-center text-muted-foreground mb-8">
            We work with top universities across Canada, UK, Australia, USA, New Zealand, and Ireland
          </p>
          <LogoCarousel speed={60} />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 md:py-12 bg-muted/30 dark:bg-muted/10 border-y">
        <div className="container-custom px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatsCounter value={6} label="Countries" icon={<MapPin className="h-6 w-6 text-primary" />} />
            <StatsCounter value={5} label="Global Offices" icon={<MapPin className="h-6 w-6 text-primary" />} />
            <StatsCounter
              value={1000}
              suffix="+"
              label="Happy Students"
              icon={<Users className="h-6 w-6 text-primary" />}
            />
            <StatsCounter
              value={50}
              suffix="+"
              label="University Partners"
              icon={<GraduationCap className="h-6 w-6 text-primary" />}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Badge variant="outline" className="px-3 py-1 text-sm bg-background dark:bg-muted">
              Why Choose Transpacific
            </Badge>
            <h2 className="font-galano text-3xl md:text-4xl font-bold">Studying Abroad Shouldn't Be Confusing</h2>
            <p className="text-xl text-muted-foreground">
              We make the complex process of studying abroad simple and stress-free
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-background border-border/50 hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="bg-primary/10 p-3 rounded-full w-fit">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-galano text-xl font-semibold">Licensed Experts</h3>
                <p className="text-muted-foreground">
                  Our team consists of certified education consultants with 10+ years of experience in international
                  education.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border/50 hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="bg-primary/10 p-3 rounded-full w-fit">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-galano text-xl font-semibold">Personalized Guidance</h3>
                <p className="text-muted-foreground">
                  We provide 1:1 counseling to understand your goals and create a customized plan for your education
                  journey.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border/50 hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="bg-primary/10 p-3 rounded-full w-fit">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-galano text-xl font-semibold">End-to-End Support</h3>
                <p className="text-muted-foreground">
                  From university selection to visa approval and post-arrival assistance, we handle everything for you.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border/50 hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="bg-primary/10 p-3 rounded-full w-fit">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-galano text-xl font-semibold">Global Presence</h3>
                <p className="text-muted-foreground">
                  With offices in 5 locations across India and New Zealand, we provide local support with global
                  expertise.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border/50 hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="bg-primary/10 p-3 rounded-full w-fit">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-galano text-xl font-semibold">High Success Rate</h3>
                <p className="text-muted-foreground">
                  We maintain a 98% visa approval rate for our students, ensuring your dreams become reality.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border/50 hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="bg-primary/10 p-3 rounded-full w-fit">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-galano text-xl font-semibold">No Hidden Fees</h3>
                <p className="text-muted-foreground">
                  Our consultation is free, and we're transparent about all costs involved in your education journey.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-muted/30 dark:bg-muted/10 border-y">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Badge variant="outline" className="px-3 py-1 text-sm bg-background dark:bg-muted">
              Our Process
            </Badge>
            <h2 className="font-galano text-3xl md:text-4xl font-bold">The Transpacific Journey</h2>
            <p className="text-xl text-muted-foreground">
              A simple, streamlined process to make your study abroad dreams come true
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProcessStep
              number={1}
              title="Free Consultation"
              description="We understand your goals, academic background, and career aspirations to create a personalized plan."
            />
            <ProcessStep
              number={2}
              title="University & Course Selection"
              description="Based on your profile, we recommend the best universities and courses that align with your goals."
            />
            <ProcessStep
              number={3}
              title="Application & Documentation"
              description="We handle the entire application process, including SOPs, recommendation letters, and visa documentation."
            />
            <ProcessStep
              number={4}
              title="Pre-Departure & Settlement"
              description="From visa approval to accommodation and airport pickup, we ensure a smooth transition to your new life."
            />
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" asChild>
              <Link href="/contact" className="gap-2">
                Book Your Free Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Study Destinations */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Badge variant="outline" className="px-3 py-1 text-sm bg-background dark:bg-muted">
              Study Destinations
            </Badge>
            <h2 className="font-galano text-3xl md:text-4xl font-bold">Where Do You Dream of Studying?</h2>
            <p className="text-xl text-muted-foreground">
              Explore top education destinations with world-class universities and quality of life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CountryCard
              country="New Zealand"
              description="Affordable tuition with excellent quality of life and post-study work opportunities."
              image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NZ%20pic-AuxRMspeBVOaiPpzrSKydWExPBGFCu.png"
            />
            <CountryCard
              country="Australia"
              description="World-class universities with flexible work rights and diverse study options."
              image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Auspic-68M9D1xzjBdtVCfaJrk5YkblGAtllB.png"
            />
            <CountryCard
              country="Canada"
              description="Pathway to permanent residency with affordable education in a safe environment."
              image="/images/canada-landscape.png"
            />
            <CountryCard
              country="United Kingdom"
              description="Prestigious education with 2-3 year post-study work visas and global recognition."
              image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/UKPic-N6rQIzTKUaAh2FofhUhkHaRw9Je8Hr.png"
            />
            <CountryCard
              country="United States"
              description="World-renowned universities with cutting-edge research and diverse campus experiences."
              image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/USA%20pic-W8mRpqGaT2JxHFnq0pfxTPmt7iRCSn.png"
            />
            <CountryCard
              country="Ireland"
              description="English-speaking EU destination with growing tech opportunities and a 2-year stay-back option."
              image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/irelandpic-cM8CxgXkTNIDyeyyAs7OOMaupKjXor.png"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-muted/30 dark:bg-muted/10 border-y">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Badge variant="outline" className="px-3 py-1 text-sm bg-background dark:bg-muted">
              Success Stories
            </Badge>
            <h2 className="font-galano text-3xl md:text-4xl font-bold">What Our Students Say</h2>
            <p className="text-xl text-muted-foreground">
              Hear from students who achieved their dreams with Transpacific
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Transpacific made the whole process stress-free. I got my visa to New Zealand without any hassle. Highly recommended!"
              name="Sangeetha R."
              title="BCom Graduate, University of Auckland"
              image="/placeholder.svg?height=100&width=100&text=SR"
            />
            <TestimonialCard
              quote="What I loved was the personal attention. I felt like they actually cared about my future and helped me find the perfect university."
              name="Ankit M."
              title="Engineering Student, University of Melbourne"
              image="/placeholder.svg?height=100&width=100&text=AM"
            />
            <TestimonialCard
              quote="From application to accommodation, they guided me through every step. Now I'm living my dream in Canada!"
              name="Priya S."
              title="MBA Student, University of Toronto"
              image="/placeholder.svg?height=100&width=100&text=PS"
            />
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/testimonials" className="gap-2">
                Read More Success Stories
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
              Common Questions
            </Badge>
            <h2 className="font-galano text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">Find answers to common questions about studying abroad</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Tabs defaultValue="general" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="visa">Visa Process</TabsTrigger>
                <TabsTrigger value="costs">Costs & Funding</TabsTrigger>
              </TabsList>
              <TabsContent value="general" className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-galano text-xl font-semibold">How do I start the process of studying abroad?</h3>
                  <p className="text-muted-foreground">
                    The first step is to book a free consultation with our education experts. We'll assess your academic
                    background, career goals, and preferences to create a personalized plan for your study abroad
                    journey.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="font-galano text-xl font-semibold">How long does the entire process take?</h3>
                  <p className="text-muted-foreground">
                    The timeline varies depending on the country and university, but typically it takes 3-6 months from
                    consultation to visa approval. We recommend starting the process at least 6-8 months before your
                    intended start date.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="font-galano text-xl font-semibold">
                    Do I need to have IELTS/TOEFL scores before contacting you?
                  </h3>
                  <p className="text-muted-foreground">
                    No, you can start the process without language test scores. We can guide you on when to take the
                    tests and help you prepare for them as part of our comprehensive service.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="visa" className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-galano text-xl font-semibold">What is your visa success rate?</h3>
                  <p className="text-muted-foreground">
                    We maintain a 98% visa approval rate across all destinations. Our expertise in documentation and
                    preparation ensures that your application meets all requirements.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="font-galano text-xl font-semibold">What documents do I need for a student visa?</h3>
                  <p className="text-muted-foreground">
                    Requirements vary by country, but generally include acceptance letter, financial proof, passport,
                    academic transcripts, language proficiency scores, and medical insurance. We provide a detailed
                    checklist and help you prepare each document.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="font-galano text-xl font-semibold">Can I work while studying abroad?</h3>
                  <p className="text-muted-foreground">
                    Most countries allow international students to work part-time during studies and full-time during
                    breaks. The specific hours vary: New Zealand (20 hrs/week), Australia (40 hrs/fortnight), Canada (20
                    hrs/week), UK (20 hrs/week), and USA (20 hrs/week on-campus).
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="costs" className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-galano text-xl font-semibold">How much does it cost to study abroad?</h3>
                  <p className="text-muted-foreground">
                    Costs vary by country, university, and program. On average, tuition ranges from $15,000-$40,000 USD
                    per year, with living expenses of $10,000-$20,000 USD annually. We help you find options that match
                    your budget.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="font-galano text-xl font-semibold">
                    Are scholarships available for international students?
                  </h3>
                  <p className="text-muted-foreground">
                    Yes, many universities offer scholarships specifically for international students. We help you
                    identify and apply for scholarships that match your profile and increase your chances of receiving
                    financial aid.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="font-galano text-xl font-semibold">Do you charge for your services?</h3>
                  <p className="text-muted-foreground">
                    Our initial consultation is completely free. For most services, we receive compensation from partner
                    universities and do not charge students. For specific services like SOP writing or specialized
                    assistance, nominal fees may apply.
                  </p>
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-12 text-center">
              <Button variant="outline" size="lg" asChild>
                <Link href="/faqs" className="gap-2">
                  View All FAQs
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Badge variant="outline" className="px-3 py-1 text-sm bg-background dark:bg-muted">
              Latest Updates
            </Badge>
            <h2 className="font-galano text-3xl md:text-4xl font-bold">News & Resources</h2>
            <p className="text-xl text-muted-foreground">
              Stay informed with the latest news on education, visas, and student life
            </p>
          </div>

          <FeaturedBlogPosts />

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/blog" className="gap-2">
                Read More Articles
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-muted/30 dark:bg-muted/10 border-y">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <Badge variant="outline" className="px-3 py-1 text-sm bg-background dark:bg-muted">
              About Us
            </Badge>
            <h2 className="font-galano text-3xl md:text-4xl font-bold">About Transpacific</h2>
            <h3 className="text-2xl font-semibold text-primary">Your Gateway to Global Opportunities</h3>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="prose prose-lg dark:prose-invert mx-auto">
              <p>
                At Transpacific, we transform your dream of studying, working, or settling abroad into a clear and
                confident journey. With over a decade of experience in international education and immigration services,
                we guide students and professionals through every step of global relocation — from India to the world.
              </p>
              <p>
                Whether you're aiming for a top university in New Zealand, the UK, Australia, Europe, the USA, or
                Canada, or exploring permanent residency pathways, we bring you the expertise, clarity, and support you
                need.
              </p>
              <p className="text-xl font-semibold text-center my-8">
                We don't just file applications.
                <br />
                We mentor futures.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-galano font-bold flex items-center gap-2">
                  <span className="text-primary">💼</span> Why Choose Transpacific?
                </h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✅</span>
                    <div>
                      <p className="font-semibold">Expertise You Can Trust</p>
                      <p className="text-muted-foreground">
                        With a strong presence in New Zealand and India, our licensed advisers and trained counsellors
                        navigate global immigration systems with ease.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✅</span>
                    <div>
                      <p className="font-semibold">Tailored Guidance</p>
                      <p className="text-muted-foreground">
                        We understand that no two journeys are the same. Your goals, your budget, your background —
                        everything is considered in our advice.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✅</span>
                    <div>
                      <p className="font-semibold">End-to-End Support</p>
                      <p className="text-muted-foreground">
                        From your first consultation to your first job abroad, we're with you — offering everything from
                        visa filing to post-arrival support.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✅</span>
                    <div>
                      <p className="font-semibold">Proven Results</p>
                      <p className="text-muted-foreground">
                        With thousands of visas approved and a 98% satisfaction rate, Transpacific is a name students
                        trust across borders.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✅</span>
                    <div>
                      <p className="font-semibold">Transparent & Responsive</p>
                      <p className="text-muted-foreground">
                        We believe in clear communication, zero guesswork, and proactive updates — so you always feel in
                        control.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-galano font-bold flex items-center gap-2">
                  <span className="text-primary">🎯</span> What We Do
                </h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✈️</span>
                    <div>
                      <p className="font-semibold">Visa Assistance</p>
                      <p className="text-muted-foreground">
                        From SOPs to embassy appointments — we make the visa process smooth, strategic, and stress-free.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">🎓</span>
                    <div>
                      <p className="font-semibold">University & Course Selection</p>
                      <p className="text-muted-foreground">
                        We help you shortlist institutions and programs based on your career goals and PR potential.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">🗣️</span>
                    <div>
                      <p className="font-semibold">IELTS Coaching</p>
                      <p className="text-muted-foreground">
                        Access expert language training and resources to clear your admission and visa requirements
                        confidently.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">💰</span>
                    <div>
                      <p className="font-semibold">Financial Documentation Support</p>
                      <p className="text-muted-foreground">
                        We guide you in preparing all necessary financial documents for visa approval and university
                        admission.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">🧳</span>
                    <div>
                      <p className="font-semibold">Pre-Departure & Cultural Briefing</p>
                      <p className="text-muted-foreground">
                        Get prepared for life abroad — from housing and healthcare to weather, transport, and local
                        etiquette.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">🛬</span>
                    <div>
                      <p className="font-semibold">Post-Arrival Services</p>
                      <p className="text-muted-foreground">
                        Need airport pickup, city orientation, or help with local registrations? We've got you covered
                        after you land too.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 space-y-8">
              <h3 className="text-2xl font-galano font-bold text-center flex items-center justify-center gap-2">
                <span className="text-primary">🔥</span> What Drives Us
              </h3>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-background p-6 rounded-lg border border-border/50 shadow-sm">
                  <h4 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <span className="text-primary">🧭</span> Our Mission
                  </h4>
                  <p className="text-muted-foreground">
                    To empower aspiring global citizens with accurate guidance, ethical support, and practical tools to
                    study and succeed abroad.
                  </p>
                </div>

                <div className="bg-background p-6 rounded-lg border border-border/50 shadow-sm">
                  <h4 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <span className="text-primary">🌍</span> Our Vision
                  </h4>
                  <p className="text-muted-foreground">
                    To become the most trusted international education and migration consultancy across the Indo-Pacific
                    region and beyond.
                  </p>
                </div>

                <div className="bg-background p-6 rounded-lg border border-border/50 shadow-sm">
                  <h4 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <span className="text-primary">💡</span> Our Values
                  </h4>
                  <p className="text-muted-foreground">
                    Integrity. Empathy. Excellence. Accountability. Innovation.
                    <br />
                    These aren't just words — they define how we serve every student, every day.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button size="lg" asChild>
                <Link href="/contact" className="gap-2">
                  Book Your Free Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-galano text-3xl md:text-4xl font-bold">
                Ready to Begin Your Global Education Journey?
              </h2>
              <p className="text-xl opacity-90">
                Take the first step towards your dream education. Our experts are ready to guide you every step of the
                way.
              </p>
              <ul className="space-y-3">
                {[
                  "Free personalized consultation",
                  "Expert guidance on course and university selection",
                  "Complete visa application assistance",
                  "Pre-departure and settlement support",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact" className="gap-2">
                    Book Your Free Consultation
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-6 md:p-8">
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
