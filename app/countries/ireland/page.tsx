import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  GraduationCap,
  Clock,
  Award,
  BookOpen,
  Users,
  TrendingUp,
  Microscope,
  ExternalLink,
  Code,
  BarChart,
  Pill,
  LineChart,
  Code2,
  Phone,
  School,
  Globe,
  Shield,
  Leaf,
  Lightbulb,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import TestimonialCard from "@/components/testimonial-card";
import ProcessStep from "@/components/process-step";
import StatsCounter from "@/components/stats-counter";
import Paragraph from "@/components/paragraph";
import IrelandLogoCarousel from "@/components/ireland-logo-carousel";
import CountryTestimonials from "@/components/country-testimonials";

const emeraldGreen = "#007848";

import { cannonicalUrls } from "@/lib/cannonical";
import { Metadata } from "next";
import { baseUrl } from "@/lib/baseUrl";

export const metadata: Metadata = {
  title:
    " Study in Ireland from India | Tech-Focused Degrees & 2-Year Stay Back",
  description:
    " Apply to Ireland’s top universities with Transpacific. Enjoy globally recognized education, booming tech careers, and stay-back visa options.",
  alternates: {
    canonical: cannonicalUrls.ireland,
  },
  keywords: ["study abroad", "visa", "immigration"],
  openGraph: {
    title:
      " Study in Ireland from India | Tech-Focused Degrees & 2-Year Stay Back",
    description:
      "Ireland offers future-ready education, stay-back visas, and booming tech careers — start your journey with Transpacific.",
    url: cannonicalUrls.ireland,
    type: "website",
    images: [{
              url: `${baseUrl}/bluelogo.png`,
              width: 800,
              height: 600,
              alt: "ireland page"
            }]
  },
  twitter: {
    title: "Study Abroad",
    description: "Expert visa guidance",
  },
};

export default function IrelandPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#007848]/5 via-background to-background dark:from-[#007848]/10 dark:via-background dark:to-background section-padding">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6">
              <Badge
                variant="outline"
                className="px-3 py-1 text-sm bg-background dark:bg-muted"
              >
                Study in Ireland
              </Badge>
              <h1 className="font-galano text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                Where <span>Innovation</span> Meets Heritage
              </h1>
              <p className="text-xl text-muted-foreground">
                Ranked among the world's safest and most future-ready countries,
                Ireland offers globally recognized education, vibrant career
                opportunities, and a warm, welcoming culture.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button size="lg" asChild>
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
            <div className="relative lg:h-[500px]">
              <div className="relative h-full w-full rounded-2xl overflow-hidden">
                <img
                  // src="/countries_hero/Ireland.jpeg"
                  src="/compressed/countries_hero/ire.png"
                  alt="Indian student at an Irish university campus"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* University Logos Section */}
      <section className="py-12 border-y bg-muted/30 dark:bg-muted/10">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="font-galano text-2xl md:text-3xl font-bold">
              Our Partner Universities in Ireland
            </h2>
            <p className="text-muted-foreground mt-2 stats-intro-text">
              We collaborate with Ireland's top universities to provide quality
              education
            </p>
          </div>
          <IrelandLogoCarousel />
        </div>
      </section>

      {/* Featured Universities Section */}
      {/*  <section className="section-padding bg-muted/30 dark:bg-muted/10 border-y">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Badge variant="outline" className="px-3 py-1 text-sm bg-background dark:bg-muted">
              Featured Universities
            </Badge>
            <h2 className="font-galano text-3xl md:text-4xl font-bold">Top Irish Universities</h2>
            <p className="text-xl text-muted-foreground">
              Discover Ireland's leading institutions for international students
            </p>
          </div> */}

      {/* DCU Featured Card */}
      {/*  <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center mb-16">
            <div>
              <div className="aspect-video w-full overflow-hidden rounded-xl border shadow-sm">
                <img
                  src="https://blob.v0.dev/dcu-campus-final.png"
                  alt="Dublin City University campus"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-16 w-32 flex items-center justify-center bg-muted/20 rounded p-2 border">
                  <img
                    src="https://blob.v0.dev/dcu-logo-final.png"
                    alt="Dublin City University logo"
                    className="max-h-12 max-w-28 object-contain"
                  />
                </div>
                <h3 className="font-galano text-2xl font-bold">Dublin City University</h3>
              </div>

              <p className="text-lg">
                Dublin City University (DCU) is a young, dynamic and ambitious university with a distinctive mission to
                transform lives and societies through education, research, innovation and engagement.
              </p>

              <p>
                Known for excellence in business, computing, engineering and humanities programs, DCU has strong
                industry connections and a focus on innovation and entrepreneurship.
              </p>

              <div className="pt-4">
                <Button size="lg" asChild style={{ backgroundColor: emeraldGreen, borderColor: emeraldGreen }}>
                  <Link href="/dublin-city-university" className="gap-2">
                    Learn More About DCU
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div> */}

      {/* NCI Featured Card */}
      {/*  <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="order-1 lg:order-2">
              <div className="aspect-video w-full overflow-hidden rounded-xl border shadow-sm">
                <img
                  src="/images/nci-campus-new.png"
                  alt="National College of Ireland campus"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-6 order-2 lg:order-1">
              <div className="flex items-center gap-4">
                <div className="h-16 w-32 flex items-center justify-center bg-muted/20 rounded p-2 border">
                  <img
                    src="/images/logos/nci-logo-new.png"
                    alt="National College of Ireland logo"
                    className="max-h-12 max-w-28 object-contain"
                  />
                </div>
                <h3 className="font-galano text-2xl font-bold">National College of Ireland</h3>
              </div>

              <p className="text-lg">
                The National College of Ireland (NCI) is a third-level education college in Dublin with a reputation for
                excellence in business, computing, and psychology programs.
              </p>

              <p>
                Located in Dublin's International Financial Services Centre, NCI offers students unparalleled access to
                potential employers and real-world industry experience. The college is known for its strong industry
                connections and practical, career-focused education.
              </p>

              <div className="pt-4">
                <Button size="lg" asChild style={{ backgroundColor: emeraldGreen, borderColor: emeraldGreen }}>
                  <Link href="#" className="gap-2">
                    Learn More About NCI
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Why Study in Ireland */}
      {/*  <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Badge variant="outline" className="px-3 py-1 text-sm bg-background dark:bg-muted">
              Why Choose Ireland
            </Badge>
            <h2 className="font-galano text-3xl md:text-4xl font-bold">Why Choose Ireland?</h2>
            <p className="text-xl text-muted-foreground">
              Discover why Ireland is becoming a top choice for international students
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-background border-border/50 hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="bg-[#007848]/10 p-3 rounded-full w-fit">
                  <Award className="h-6 w-6" style={{ color: emeraldGreen }} />
                </div>
                <h3 className="font-galano text-xl font-semibold">Top-Ranked Global Universities</h3>
                <p className="text-muted-foreground">
                  Irish universities consistently rank among the top 5% globally, offering world-class education across
                  disciplines.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border/50 hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="bg-[#007848]/10 p-3 rounded-full w-fit">
                  <GraduationCap className="h-6 w-6" style={{ color: emeraldGreen }} />
                </div>
                <h3 className="font-galano text-xl font-semibold">2-Year Post-Study Work Visa</h3>
                <p className="text-muted-foreground">
                  Graduates can stay and work in Ireland for up to 2 years after completing their studies, with pathways
                  to permanent residency.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border/50 hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="bg-[#007848]/10 p-3 rounded-full w-fit">
                  <Users className="h-6 w-6" style={{ color: emeraldGreen }} />
                </div>
                <h3 className="font-galano text-xl font-semibold">200,000+ International Students</h3>
                <p className="text-muted-foreground">
                  Join a thriving community of international students in Ireland, with numbers growing by over 30%
                  annually in recent years.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border/50 hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="bg-[#007848]/10 p-3 rounded-full w-fit">
                  <Microscope className="h-6 w-6" style={{ color: emeraldGreen }} />
                </div>
                <h3 className="font-galano text-xl font-semibold">Top 10 Worldwide for Scientific Research</h3>
                <p className="text-muted-foreground">
                  Ireland ranks in the top 10 globally for scientific research, with strong industry-academia
                  partnerships.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border/50 hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="bg-[#007848]/10 p-3 rounded-full w-fit">
                  <Leaf className="h-6 w-6" style={{ color: emeraldGreen }} />
                </div>
                <h3 className="font-galano text-xl font-semibold">13th Most Peaceful Country Globally</h3>
                <p className="text-muted-foreground">
                  Ireland offers a safe, peaceful environment for international students to live and study with
                  confidence.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground">
              🟢 Ireland combines world-class education with one of Europe's most dynamic economies.
            </p>
          </div>
        </div>
      </section> */}

      {/* Stats Section */}
      <section className="section-padding bg-muted/30 dark:bg-muted/10 border-y">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Badge
              variant="outline"
              className="px-3 py-1 text-sm bg-background dark:bg-muted"
            >
              Key Facts
            </Badge>
            <h2 className="font-galano text-3xl md:text-4xl font-bold">
              Ireland at a Glance
            </h2>
            <p className="text-xl text-muted-foreground stats-intro-text">
              Essential statistics about studying in Ireland
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatsCounter
              value={31}
              suffix="+"
              label="Public Universities & Institutes"
              icon={
                <School className="h-6 w-6" style={{ color: emeraldGreen }} />
              }
            />
            <StatsCounter
              value={1094}
              suffix="+"
              label="Accredited Study Programs"
              icon={
                <BookOpen className="h-6 w-6" style={{ color: emeraldGreen }} />
              }
            />
            <StatsCounter
              value={25}
              label="Days Avg. Visa Approval Time"
              icon={
                <Clock className="h-6 w-6" style={{ color: emeraldGreen }} />
              }
            />
            <StatsCounter
              value={20}
              prefix="Top "
              label="Global Education System"
              icon={
                <Award className="h-6 w-6" style={{ color: emeraldGreen }} />
              }
            />
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground stats-intro-text">
              ✅ Perfect for tech, research, finance, and healthcare students
              seeking a smooth path to global careers.
            </p>
          </div>
        </div>
      </section>

      {/* Universities Section */}
      <section id="universities" className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Badge
              variant="outline"
              className="px-3 py-1 text-sm bg-background dark:bg-muted"
            >
              Education Institutions
            </Badge>
            <h2 className="font-galano text-3xl md:text-4xl font-bold">
              Leading Universities in Ireland
            </h2>
            <p className="text-xl text-muted-foreground stats-intro-text">
              Explore Ireland's prestigious universities and colleges
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Trinity College Dublin",
                // image: "/ireland_universities/1.png",
                image: "/compressed/ireland/1-min.png",
                logo: "/images/logos/trinity-college-dublin-logo.png",
                link: "https://www.tcd.ie/",
                description:
                  "Ireland's oldest university, founded in 1592, renowned for research and innovation.",
              },
              {
                name: "University College Dublin",
                image: "/compressed/ireland/2-min.png",
                logo: "/images/logos/ucd-logo.png",
                link: "https://www.ucd.ie/",
                description:
                  "Ireland's largest university with strengths in research, innovation and teaching.",
              },
              {
                name: "National University of Ireland, Galway",
                image: "/compressed/ireland/3-min.png",
                logo: "/images/logos/nui-galway-logo.png",
                link: "https://www.universityofgalway.ie/",
                description:
                  "Known for medical sciences, engineering, and arts programs.",
              },
              {
                name: "University College Cork",
                image: "/compressed/ireland/4-min.png",
                logo: "/images/logos/ucc-logo.png",
                link: "https://www.ucc.ie/en/",
                description:
                  "Excellent programs in medicine, business, and environmental sciences.",
              },
              {
                name: "University of Limerick",
                image: "/compressed/ireland/5-min.png",
                logo: "/images/logos/ul-logo.png",
                link: "https://www.ul.ie/",
                description:
                  "Strong in technology, business, and health sciences with co-op programs.",
              },
              {
                name: "Maynooth University",
                image: "/compressed/ireland/6-min.png",
                logo: "/images/logos/maynooth-logo.png",
                link: "https://www.maynoothuniversity.ie/",
                description:
                  "Ireland's fastest growing university with strengths in arts and sciences.",
              },
              {
                name: "Technological University Dublin",
                image: "/compressed/ireland/7-min.png",
                logo: "/tu-dublin-logo.png",
                link: "https://www.tudublin.ie/",
                description:
                  "Ireland's first technological university with strong industry connections.",
              },
              {
                name: "Royal College of Surgeons in Ireland",
                image: "/compressed/ireland/8-min.png",
                logo: "/rcsi-logo.png",
                link: "https://www.rcsi.com/",
                description:
                  "Specialized in medical education and research with a global reputation.",
              },
              {
                name: "Griffith College",
                image: "/compressed/ireland/9-min.png",
                logo: "/griffith-college-logo.png",
                link: "https://www.griffith.ie/",
                description:
                  "Ireland's largest independent third-level institution with campuses in Dublin, Cork and Limerick.",
              },
              {
                name: "Dublin Business School",
                image: "/compressed/ireland/10-min.png",
                logo: "/dublin-business-school-logo.png",
                link: "https://www.dbs.ie/",
                description:
                  "Ireland's largest independent college offering business, law, arts and psychology programs.",
              },
            ].map((university, i) => (
              <Card
                key={i}
                className="overflow-hidden bg-background border-border/50 hover:shadow-md transition-shadow"
              >
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={university.image || "/placeholder.svg"}
                    alt={university.name}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="p-6 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-galano text-xl font-semibold">
                      {university.name}
                    </h3>
                    <div className="h-10 w-10 flex-shrink-0 bg-muted/20 rounded flex items-center justify-center p-1">
                      <img
                        src={university.logo || "/placeholder.svg"}
                        alt={`${university.name} logo`}
                        className="max-h-8 max-w-8 object-contain"
                      />
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    {university.description}
                  </p>
                  <div className="pt-4">
                    <Button size="sm" asChild>
                      <a
                        href={university.link}
                        className="gap-2"
                        target="_blank"
                      >
                        Visit Website
                        {/* <ExternalLink className="h-4 w-4" /> */}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground mb-6">
              📘 We'll help you choose the best-fit university based on your course, budget, and goals.
            </p>
            <Button size="lg" asChild style={{ backgroundColor: emeraldGreen, borderColor: emeraldGreen }}>
              <Link href="/consultation" className="gap-2">
                Get Expert Guidance
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div> */}
        </div>
      </section>

      {/* What Makes Ireland a Top Choice */}
      {/*  <section className="section-padding bg-muted/30 dark:bg-muted/10 border-y">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Badge variant="outline" className="px-3 py-1 text-sm bg-background dark:bg-muted">
              Key Benefits
            </Badge>
            <h2 className="font-galano text-3xl md:text-4xl font-bold">What Makes Ireland a Top Choice?</h2>
            <p className="text-xl text-muted-foreground">Compelling reasons to choose Ireland for your education</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-background border-border/50 hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="bg-[#007848]/10 p-3 rounded-full w-fit">
                  <Award className="h-6 w-6" style={{ color: emeraldGreen }} />
                </div>
                <h3 className="font-galano text-xl font-semibold">World-Class Education</h3>
                <p className="text-muted-foreground">
                  All Irish universities rank in the top 5% globally, offering rigorous academics and modern learning
                  environments.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border/50 hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="bg-[#007848]/10 p-3 rounded-full w-fit">
                  <TrendingUp className="h-6 w-6" style={{ color: emeraldGreen }} />
                </div>
                <h3 className="font-galano text-xl font-semibold">Booming Job Market</h3>
                <p className="text-muted-foreground">
                  Ireland is Europe's fastest-growing economy, attracting major tech, finance, and pharmaceutical
                  companies.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border/50 hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="bg-[#007848]/10 p-3 rounded-full w-fit">
                  <GraduationCap className="h-6 w-6" style={{ color: emeraldGreen }} />
                </div>
                <h3 className="font-galano text-xl font-semibold">Post-Study Visa Advantage</h3>
                <p className="text-muted-foreground">
                  Eligible students receive up to 2 years of work rights after graduation.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border/50 hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="bg-[#007848]/10 p-3 rounded-full w-fit">
                  <Microscope className="h-6 w-6" style={{ color: emeraldGreen }} />
                </div>
                <h3 className="font-galano text-xl font-semibold">High-Impact Research</h3>
                <p className="text-muted-foreground">
                  Ireland ranks in the world's top 10 for scientific and tech research — ideal for STEM students.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border/50 hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="bg-[#007848]/10 p-3 rounded-full w-fit">
                  <Shield className="h-6 w-6" style={{ color: emeraldGreen }} />
                </div>
                <h3 className="font-galano text-xl font-semibold">Safe, Peaceful Living</h3>
                <p className="text-muted-foreground">
                  Ranked 13th globally for peace, Ireland offers a secure and friendly environment for international
                  students.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border/50 hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="bg-[#007848]/10 p-3 rounded-full w-fit">
                  <Globe className="h-6 w-6" style={{ color: emeraldGreen }} />
                </div>
                <h3 className="font-galano text-xl font-semibold">Globally Accredited Degrees</h3>
                <p className="text-muted-foreground">
                  Recognized by Quality & Qualifications Ireland (QQI), your education is trusted worldwide.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border/50 hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="bg-[#007848]/10 p-3 rounded-full w-fit">
                  <Lightbulb className="h-6 w-6" style={{ color: emeraldGreen }} />
                </div>
                <h3 className="font-galano text-xl font-semibold">Innovation & Entrepreneurship</h3>
                <p className="text-muted-foreground">
                  Ireland ranks 11th globally for innovation — making it a launchpad for future-focused careers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Popular Courses Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Badge
              variant="outline"
              className="px-3 py-1 text-sm bg-background dark:bg-muted"
            >
              Academic Programs
            </Badge>
            <h2 className="font-galano text-3xl md:text-4xl font-bold">
              Most Popular Programs in Ireland
            </h2>
            <p className="text-xl text-muted-foreground stats-intro-text">
              Discover in-demand programs with excellent career prospects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-background border-border/50 hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="bg-[#007848]/10 p-3 rounded-full w-fit">
                  <Code className="h-6 w-6" style={{ color: emeraldGreen }} />
                </div>
                <h3 className="font-galano text-xl font-semibold">
                  Computer Science & AI
                </h3>
                <p className="text-muted-foreground">
                  Programs in AI, machine learning, data analytics, and software
                  development with strong industry connections to tech giants
                  based in Dublin.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border/50 hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="bg-[#007848]/10 p-3 rounded-full w-fit">
                  <BarChart
                    className="h-6 w-6"
                    style={{ color: emeraldGreen }}
                  />
                </div>
                <h3 className="font-galano text-xl font-semibold">
                  Business Analytics & Finance
                </h3>
                <p className="text-muted-foreground">
                  Cutting-edge programs in business analytics, financial
                  technology, and international business with internship
                  opportunities.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border/50 hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="bg-[#007848]/10 p-3 rounded-full w-fit">
                  <Pill className="h-6 w-6" style={{ color: emeraldGreen }} />
                </div>
                <h3 className="font-galano text-xl font-semibold">
                  Pharmaceutical & Biomedical Sciences
                </h3>
                <p className="text-muted-foreground">
                  World-class programs in pharmaceutical science, biotechnology,
                  and medical research with connections to Ireland's thriving
                  pharma industry.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border/50 hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="bg-[#007848]/10 p-3 rounded-full w-fit">
                  <LineChart
                    className="h-6 w-6"
                    style={{ color: emeraldGreen }}
                  />
                </div>
                <h3 className="font-galano text-xl font-semibold">
                  Data Science & Machine Learning
                </h3>
                <p className="text-muted-foreground">
                  Specialized programs in data science, machine learning, and
                  artificial intelligence with strong links to Dublin's tech
                  hub.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border/50 hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="bg-[#007848]/10 p-3 rounded-full w-fit">
                  <Code2 className="h-6 w-6" style={{ color: emeraldGreen }} />
                </div>
                <h3 className="font-galano text-xl font-semibold">
                  Investment Banking & Corporate Finance
                </h3>
                <p className="text-muted-foreground">
                  Practical programs in investment banking, corporate finance,
                  and financial analysis with project-based learning and
                  industry placements.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground stats-intro-text">
              💡 Courses with co-op/internship options available for real-world
              experience.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-muted/30 dark:bg-muted/10 border-y">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Badge
              variant="outline"
              className="px-3 py-1 text-sm bg-background dark:bg-muted"
            >
              Application Process
            </Badge>
            <h2 className="font-galano text-3xl md:text-4xl font-bold">
              How We Help You Get There — Step-by-Step
            </h2>
            <p className="text-xl text-muted-foreground stats-intro-text">
              We guide you through every step of your study abroad journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <ProcessStep
              number={1}
              title="Free Counselling Session"
              description="We assess your profile, understand your goals, and create a personalized study plan."
            />
            <ProcessStep
              number={2}
              title="University & Program Selection"
              description="We help you select the best programs and universities based on your profile and career goals."
            />
            <ProcessStep
              number={3}
              title="Application + SOP Support"
              description="We assist with applications, statement of purpose, and recommendation letters."
            />
            <ProcessStep
              number={4}
              title="Visa Filing & Documentation"
              description="We provide comprehensive visa guidance and documentation support."
            />
            <ProcessStep
              number={5}
              title="Pre-Departure Training + Arrival Support"
              description="We help you prepare for life in Ireland and provide support upon arrival."
            />
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground mb-6 stats-intro-text">
              🛡️ We're with you at every stage — from your first consultation to
              settling abroad.
            </p>
            <Button size="lg" asChild>
              <Link href="/consultation" className="gap-2">
                Start Your Journey Today
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="section-padding">
        <div className="">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Badge
              variant="outline"
              className="px-3 py-1 text-sm bg-background dark:bg-muted"
            >
              Student Voices
            </Badge>
            <h2 className="font-galano text-3xl md:text-4xl font-bold">
              Student Story
            </h2>
            <p className="text-xl text-muted-foreground stats-intro-text">
              Success stories from students who chose Ireland
            </p>
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
              countryColor={emeraldGreen}
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
            <Badge
              variant="outline"
              className="px-3 py-1 text-sm bg-background dark:bg-muted"
            >
              Common Questions
            </Badge>
            <h2 className="font-galano text-3xl md:text-4xl font-bold">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground stats-intro-text">
              Find answers to frequently asked questions about studying in
              Ireland
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-medium">
                  Can I work during studies in Ireland?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <Paragraph>
                    Yes — 20 hours/week during term and 40 hours/week during
                    breaks. This allows you to gain valuable work experience and
                    supplement your income while studying.
                  </Paragraph>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-medium">
                  What is the cost of living?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <Paragraph>
                    Approx. €7,000–€12,000/year depending on city and lifestyle.
                    Dublin tends to be more expensive than other Irish cities.
                    Our counselors can help you find programs that match your
                    budget.
                  </Paragraph>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-medium">
                  Do Irish universities offer scholarships?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <Paragraph>
                    Yes, both university and government-funded options are
                    available. Many Irish universities offer scholarships for
                    international students based on academic merit, specific
                    country of origin, or field of study. The Government of
                    Ireland also offers scholarships through programs like the
                    Government of Ireland International Education Scholarships.
                  </Paragraph>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg font-medium">
                  Is the Irish degree globally recognized?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <Paragraph>
                    Yes. Degrees are accredited under QQI (Quality and
                    Qualifications Ireland) and widely respected by employers
                    worldwide, including in India.
                  </Paragraph>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg font-medium">
                  How long can I stay after graduation?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <Paragraph>
                    Most graduates receive a 1–2 year post-study work visa. The
                    exact duration depends on your level of study - typically 12
                    months for Bachelor's graduates and 24 months for Master's
                    and PhD graduates.
                  </Paragraph>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground mb-6 stats-intro-text">
              Still have questions?
            </p>
            <Button size="lg" asChild>
              <Link href="/consultation" className="gap-2">
                Talk to Our Counsellors
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-galano text-3xl md:text-4xl font-bold text-white">Ready to Start Your Ireland Journey?</h2>
              <p className="text-xl opacity-90 text-white">
                From course mapping to visa success, Transpacific helps Indian students confidently begin a new chapter
                in Ireland.
              </p>
              <ul className="space-y-3 text-white">
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
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/consultation" className="gap-2">
                    Apply Now
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" className="border-white-2 text-white hover:bg-white/10" asChild>
                  <Link href="/consultation" className="gap-2 border">
                    Get Free Guidance
                    <Phone className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8">
              <div className="aspect-video w-full rounded-lg overflow-hidden">
                <img
                  src="/images/irish-university-classroom.png"
                  alt="Indian students in a classroom at an Irish university"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-galano text-3xl md:text-4xl font-bold">
              Ready to Study in Ireland?
            </h2>
            <p className="text-xl opacity-90 stats-intro-text">
              Thousands of students trust Transpacific to make their Ireland
              education dream come true — from start to finish.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="px-8 py-6 text-lg"
              >
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
                      <Link href="/apply">Apply to Study in Ireland</Link>
                    </Button> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
