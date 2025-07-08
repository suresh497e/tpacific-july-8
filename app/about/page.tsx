// import type { Metadata } from "next"
// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { CheckCircle, Briefcase, GraduationCap, Globe, FileText, Plane, Home, HeartHandshake } from "lucide-react"
// import { withMetadataValidation } from "@/lib/metadata-utils"

// export const metadata: Metadata = withMetadataValidation({
//   title: "About Us",
//   description: "Our story & mission",
//   keywords: ['about', 'team', 'experience'],
//   openGraph: {
//     title: "About Us",
//     description: "Our story & mission",
//   },
//   twitter: {
//     title: "About Us",
//     description: "Our story & mission",
//   }
// })

// export default function AboutPage() {
//   return (
//     <main className="flex flex-col min-h-screen">
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
//         <div className="container mx-auto px-4 max-w-6xl">
//           <div className="text-center mb-12">
//             <h1 className="text-4xl md:text-5xl font-bold mb-6">About Transpacific</h1>
//             <p className="text-xl md:text-2xl font-medium text-primary">Your Gateway to Global Opportunities</p>
//           </div>

//           <div className="max-w-3xl mx-auto">
//             <p className="text-lg mb-6">
//               At Transpacific, we transform your dream of studying, working, or settling abroad into a clear and
//               confident journey. With over a decade of experience in international education and immigration services,
//               we guide students and professionals through every step of global relocation — from India to the world.
//             </p>

//             <p className="text-lg mb-6">
//               Whether you're aiming for a top university in New Zealand, the UK, Australia, Europe, the USA, or Canada,
//               or exploring permanent residency pathways, we bring you the expertise, clarity, and support you need.
//             </p>

//             <div className="bg-primary/10 p-6 rounded-lg my-8">
//               <p className="text-xl font-semibold mb-2">We don't just file applications.</p>
//               <p className="text-2xl font-bold text-primary">We mentor futures.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Transpacific */}
//       <section className="py-16 bg-background">
//         <div className="container mx-auto px-4 max-w-6xl">
//           <div className="mb-12">
//             <div className="flex items-center gap-3 mb-4">
//               <Briefcase className="h-6 w-6 text-primary" />
//               <h2 className="text-3xl font-bold">Why Choose Transpacific?</h2>
//             </div>

//             <div className="grid md:grid-cols-2 gap-6 mt-8">
//               <Card>
//                 <CardContent className="p-6">
//                   <div className="flex gap-4">
//                     <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
//                     <div>
//                       <h3 className="font-semibold text-lg mb-2">Expertise You Can Trust</h3>
//                       <p>
//                         With a strong presence in New Zealand and India, our licensed advisers and trained counsellors
//                         navigate global immigration systems with ease.
//                       </p>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>

//               <Card>
//                 <CardContent className="p-6">
//                   <div className="flex gap-4">
//                     <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
//                     <div>
//                       <h3 className="font-semibold text-lg mb-2">Tailored Guidance</h3>
//                       <p>
//                         We understand that no two journeys are the same. Your goals, your budget, your background —
//                         everything is considered in our advice.
//                       </p>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>

//               <Card>
//                 <CardContent className="p-6">
//                   <div className="flex gap-4">
//                     <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
//                     <div>
//                       <h3 className="font-semibold text-lg mb-2">End-to-End Support</h3>
//                       <p>
//                         From your first consultation to your first job abroad, we're with you — offering everything from
//                         visa filing to post-arrival support.
//                       </p>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>

//               <Card>
//                 <CardContent className="p-6">
//                   <div className="flex gap-4">
//                     <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
//                     <div>
//                       <h3 className="font-semibold text-lg mb-2">Proven Results</h3>
//                       <p>
//                         With thousands of visas approved and a 98% satisfaction rate, Transpacific is a name students
//                         trust across borders.
//                       </p>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>

//               <Card className="md:col-span-2">
//                 <CardContent className="p-6">
//                   <div className="flex gap-4">
//                     <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
//                     <div>
//                       <h3 className="font-semibold text-lg mb-2">Transparent & Responsive</h3>
//                       <p>
//                         We believe in clear communication, zero guesswork, and proactive updates — so you always feel in
//                         control.
//                       </p>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* What We Do */}
//       <section className="py-16 bg-muted/50">
//         <div className="container mx-auto px-4 max-w-6xl">
//           <div className="mb-12">
//             <div className="flex items-center gap-3 mb-8">
//               <GraduationCap className="h-6 w-6 text-primary" />
//               <h2 className="text-3xl font-bold">What We Do</h2>
//             </div>

//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//               <Card>
//                 <CardContent className="p-6">
//                   <div className="flex flex-col gap-4">
//                     <Plane className="h-8 w-8 text-primary" />
//                     <h3 className="font-semibold text-lg">Visa Assistance</h3>
//                     <p>
//                       From SOPs to embassy appointments — we make the visa process smooth, strategic, and stress-free.
//                     </p>
//                   </div>
//                 </CardContent>
//               </Card>

//               <Card>
//                 <CardContent className="p-6">
//                   <div className="flex flex-col gap-4">
//                     <GraduationCap className="h-8 w-8 text-primary" />
//                     <h3 className="font-semibold text-lg">University & Course Selection</h3>
//                     <p>We help you shortlist institutions and programs based on your career goals and PR potential.</p>
//                   </div>
//                 </CardContent>
//               </Card>

//               <Card>
//                 <CardContent className="p-6">
//                   <div className="flex flex-col gap-4">
//                     <Globe className="h-8 w-8 text-primary" />
//                     <h3 className="font-semibold text-lg">IELTS Coaching</h3>
//                     <p>
//                       Access expert language training and resources to clear your admission and visa requirements
//                       confidently.
//                     </p>
//                   </div>
//                 </CardContent>
//               </Card>

//               <Card>
//                 <CardContent className="p-6">
//                   <div className="flex flex-col gap-4">
//                     <FileText className="h-8 w-8 text-primary" />
//                     <h3 className="font-semibold text-lg">Financial Documentation Support</h3>
//                     <p>
//                       We guide you in preparing all necessary financial documents for visa approval and university
//                       admission.
//                     </p>
//                   </div>
//                 </CardContent>
//               </Card>

//               <Card>
//                 <CardContent className="p-6">
//                   <div className="flex flex-col gap-4">
//                     <Plane className="h-8 w-8 text-primary" />
//                     <h3 className="font-semibold text-lg">Pre-Departure & Cultural Briefing</h3>
//                     <p>
//                       Get prepared for life abroad — from housing and healthcare to weather, transport, and local
//                       etiquette.
//                     </p>
//                   </div>
//                 </CardContent>
//               </Card>

//               <Card>
//                 <CardContent className="p-6">
//                   <div className="flex flex-col gap-4">
//                     <Home className="h-8 w-8 text-primary" />
//                     <h3 className="font-semibold text-lg">Post-Arrival Services</h3>
//                     <p>
//                       Need airport pickup, city orientation, or help with local registrations? We've got you covered
//                       after you land too.
//                     </p>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* What Drives Us */}
//       <section className="py-16 bg-background">
//         <div className="container mx-auto px-4 max-w-6xl">
//           <div className="mb-12">
//             <div className="flex items-center gap-3 mb-8">
//               <HeartHandshake className="h-6 w-6 text-primary" />
//               <h2 className="text-3xl font-bold">What Drives Us</h2>
//             </div>

//             <div className="grid md:grid-cols-3 gap-8">
//               <Card>
//                 <CardContent className="p-6">
//                   <h3 className="font-semibold text-lg mb-3">Our Mission</h3>
//                   <p>
//                     To empower aspiring global citizens with accurate guidance, ethical support, and practical tools to
//                     study and succeed abroad.
//                   </p>
//                 </CardContent>
//               </Card>

//               <Card>
//                 <CardContent className="p-6">
//                   <h3 className="font-semibold text-lg mb-3">Our Vision</h3>
//                   <p>
//                     To become the most trusted international education and migration consultancy across the Indo-Pacific
//                     region and beyond.
//                   </p>
//                 </CardContent>
//               </Card>

//               <Card>
//                 <CardContent className="p-6">
//                   <h3 className="font-semibold text-lg mb-3">Our Values</h3>
//                   <p className="mb-2">Integrity. Empathy. Excellence. Accountability. Innovation.</p>
//                   <p className="italic">These aren't just words — they define how we serve every student, every day.</p>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 bg-primary/10">
//         <div className="container mx-auto px-4 max-w-6xl text-center">
//           <h2 className="text-3xl font-bold mb-6">Ready to Start Your Global Journey?</h2>
//           <p className="text-lg mb-8 max-w-2xl mx-auto">
//             Book a free consultation with our experts and take the first step toward your international education and
//             career goals.
//           </p>
//           <Button asChild size="lg" className="px-8">
//             <Link href="/contact">Get Free Consultation</Link>
//           </Button>
//         </div>
//       </section>
//     </main>
//   )
// }

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  Briefcase,
  GraduationCap,
  Globe,
  FileText,
  Plane,
  Home,
  HeartHandshake,
  //Link,
  ArrowRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Transpacific | Your Gateway to Global Opportunities",
  description:
    "Learn about Transpacific Immigration Services - your trusted partner for international education and immigration services with over a decade of experience.",
};

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-800 to-slate-900 py-4 md:py-4">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About us
            </h1>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Our Story</h2>
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  Transpacific Immigration Services was founded with a vision to bridge the gap between ambitious
                  students in India and world-class educational opportunities abroad. Starting as a dedicated team
                  serving students across major Indian cities, we have grown to become a trusted name in international
                  education consulting.
                </p>
                <p>
                  From our humble beginnings, Transpacific has expanded to{" "}
                  <strong>multiple offices across India and New Zealand</strong>, including major cities like Mumbai,
                  Delhi, Bangalore, Pune, and Auckland. Our growth reflects our commitment to providing genuine guidance
                  and tailored solutions for students aspiring to study abroad.
                </p>
                <p>
                  <strong>With a team of 50+ professionals</strong>, we proudly support ambitious students in achieving
                  their global education dreams across New Zealand, Australia, Canada, the UK, USA, and Ireland.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="rounded-lg overflow-hidden shadow-xl w-full">
                <Image
                  src="/images/about-hero-image.png"
                  alt="Students collaborating and studying together"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* Left side - Text content */}
            <div className="flex flex-col justify-center h-full">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
                Our Story
              </h2>
              <div className="space-y-6 text-lg leading-relaxed flex-grow">
                <p>
                  Transpacific Immigration Services was founded with a vision to
                  bridge the gap between ambitious students in India and
                  world-class educational opportunities abroad. Starting as a
                  dedicated team serving students across major Indian cities, we
                  have grown to become a trusted name in international education
                  consulting.
                </p>
                <p>
                  From our humble beginnings, Transpacific has expanded to{" "}
                  <strong>multiple offices across India and New Zealand</strong>
                  , including major cities like Mumbai, Delhi, Bangalore, Pune,
                  and Auckland. Our growth reflects our commitment to providing
                  genuine guidance and tailored solutions for students aspiring
                  to study abroad.
                </p>
                <p>
                  <strong>With a team of 50+ professionals</strong>, we proudly
                  support ambitious students in achieving their global education
                  dreams across New Zealand, Australia, Canada, the UK, USA, and
                  Ireland.
                </p>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="flex items-center h-full">
              <div className="rounded-lg overflow-hidden shadow-xl w-full h-full">
                <div
                  className="relative w-full h-full"
                  style={{ minHeight: "400px" }}
                >
                  <Image
                    src="/about_hero.png"
                    alt="Students collaborating and studying together"
                    fill
                    style={{ objectFit: "cover" }}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Mission & Vision
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6 text-slate-800">
                Our Mission
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 stats-intro-text">
                To be the most trusted and customer-focused international
                education consultancy, providing comprehensive guidance and
                support to students across India and beyond. We are committed to
                making global education accessible, transparent, and successful
                for every student we serve.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6 text-slate-800">
                Our Vision
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 stats-intro-text">
                To help as many students as possible with genuine information
                and expert advice to realize their dream of studying abroad and
                to join the global community of successful international
                graduates who make a positive impact worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Leadership
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto stats-intro-text">
              Meet the experienced professionals who guide Transpacific's
              mission to transform students' global education dreams into
              reality.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-lg">
                  <Image
                    src="team_1.jpg"
                    alt="CEO and Founder"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-800">
                Rajesh Kumar
              </h3>
              <p className="text-primary font-semibold mb-3 stats-intro-text">
                CEO & Founder
              </p>
              <p className="text-gray-600 text-sm leading-relaxed stats-intro-text">
                With over 15 years of experience in international education
                consulting, Rajesh founded Transpacific with a vision to make
                global education accessible to every deserving student. His
                expertise in immigration law and university partnerships has
                helped thousands of students achieve their dreams.
              </p>
            </div>

            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-lg">
                  <Image
                    src="/team_2.jpg"
                    alt="Director of Operations"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-800">
                Priya Sharma
              </h3>
              <p className="text-primary font-semibold mb-3 stats-intro-text">
                Director of Operations
              </p>
              <p className="text-gray-600 text-sm leading-relaxed stats-intro-text">
                Priya brings 12+ years of operational excellence to
                Transpacific. She oversees our multi-country operations and
                ensures seamless service delivery across all our offices. Her
                attention to detail and student-first approach has earned her
                recognition in the industry.
              </p>
            </div>

            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-lg">
                  <Image
                    src="/team_3.jpg"
                    alt="Head of Student Services"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-800">
                Amit Patel
              </h3>
              <p className="text-primary font-semibold mb-3 stats-intro-text">
                Head of Student Services
              </p>
              <p className="text-gray-600 text-sm leading-relaxed stats-intro-text">
                Amit leads our student counseling and support services with 10+
                years of experience in international education. His personalized
                approach and deep understanding of global education systems have
                helped students secure admissions to top universities worldwide.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Why Choose Transpacific */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Choose Transpacific?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto stats-intro-text">
              We don't just file applications. We mentor futures and guide you
              through every step of your international education journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <CheckCircle className="h-12 w-12 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-3">
                  Expertise You Can Trust
                </h3>
                <p className="text-gray-600">
                  With a strong presence in New Zealand and India, our licensed
                  advisers and trained counsellors navigate global immigration
                  systems with ease.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <GraduationCap className="h-12 w-12 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-3">
                  Tailored Guidance
                </h3>
                <p className="text-gray-600">
                  We understand that no two journeys are the same. Your goals,
                  your budget, your background — everything is considered in our
                  advice.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <Globe className="h-12 w-12 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-3">
                  End-to-End Support
                </h3>
                <p className="text-gray-600">
                  From your first consultation to your first job abroad, we're
                  with you — offering everything from visa filing to
                  post-arrival support.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <FileText className="h-12 w-12 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-3">Proven Results</h3>
                <p className="text-gray-600">
                  With thousands of visas approved and a 98% satisfaction rate,
                  Transpacific is a name students trust across borders.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <HeartHandshake className="h-12 w-12 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-3">
                  Transparent & Responsive
                </h3>
                <p className="text-gray-600">
                  We believe in clear communication, zero guesswork, and
                  proactive updates — so you always feel in control.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <Plane className="h-12 w-12 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-3">Global Network</h3>
                <p className="text-gray-600">
                  Our extensive network across multiple countries ensures you
                  get local insights and support wherever you go.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 stats-intro-text">
              What We Do
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto stats-intro-text">
              Comprehensive services to support your entire study abroad journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Plane className="h-8 w-8 text-primary flex-shrink-0" />
                  <h3 className="font-semibold text-lg">Visa Assistance</h3>
                </div>
                <p className="text-gray-600">
                  From SOPs to embassy appointments — we make the visa process
                  smooth, strategic, and stress-free.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <GraduationCap className="h-8 w-8 text-primary flex-shrink-0" />
                  <h3 className="font-semibold text-lg">
                    University Selection
                  </h3>
                </div>
                <p className="text-gray-600">
                  We help you shortlist institutions and programs based on your
                  career goals and PR potential.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Globe className="h-8 w-8 text-primary flex-shrink-0" />
                  <h3 className="font-semibold text-lg">IELTS Coaching</h3>
                </div>
                <p className="text-gray-600">
                  Access expert language training and resources to clear your
                  admission and visa requirements confidently.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <FileText className="h-8 w-8 text-primary flex-shrink-0" />
                  <h3 className="font-semibold text-lg">
                    Documentation Support
                  </h3>
                </div>
                <p className="text-gray-600">
                  We guide you in preparing all necessary financial documents
                  for visa approval and university admission.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Briefcase className="h-8 w-8 text-primary flex-shrink-0" />
                  <h3 className="font-semibold text-lg">
                    Pre-Departure Briefing
                  </h3>
                </div>
                <p className="text-gray-600">
                  Get prepared for life abroad — from housing and healthcare to
                  weather, transport, and local etiquette.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Home className="h-8 w-8 text-primary flex-shrink-0" />
                  <h3 className="font-semibold text-lg">
                    Post-Arrival Services
                  </h3>
                </div>
                <p className="text-gray-600">
                  Need airport pickup, city orientation, or help with local
                  registrations? We've got you covered after you land too.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Global Journey?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-700">
            Book a free consultation with our experts and take the first step
            toward your international education and career goals.
          </p>
          <Button asChild size="lg" className="px-8 py-3 text-lg">
            <Link href="/contact">Get Free Consultation</Link>
          </Button>
        </div>
      </section> */}

      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-galano text-3xl md:text-4xl font-bold">
              Ready to Start Your Global Journey?
            </h2>
            <p className="text-xl opacity-90 stats-intro-text">
              Book a free consultation with our experts and take the first step
              toward your international education and career goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="px-8 py-6 text-lg"
              >
                <Link href="/consultation" className="gap-2">
                  Get Free Consultation
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
    </main>
  );
}
