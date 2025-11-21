"use client"
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Check, Home, Shield, Users, ArrowRight, ChevronDown } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Script from 'next/script'

// export const metadata = {
//   title: 'Student Accommodation Services | Transpacific Immigration',
//   description: 'Find quality student accommodation with Transpacific\'s trusted housing partners. Browse verified properties in UK and global destinations with expert support.',
// }

export default function AccommodationPage() {
  const router = useRouter()
  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      {/* <nav className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#2E3556] rounded" />
              <span className="text-xl font-semibold text-[#2E3556]">TRANSPACIFIC</span>
              <span className="text-xs text-muted-foreground">IMMIGRATION SERVICES</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-sm font-medium text-foreground hover:text-[#4DB8E8] transition-colors">Home</a>
              <a href="#" className="text-sm font-medium text-foreground hover:text-[#4DB8E8] transition-colors">New Zealand</a>
              <div className="relative group">
                <button className="text-sm font-medium text-foreground hover:text-[#4DB8E8] transition-colors flex items-center gap-1">
                  Study Destinations
                  <ChevronDown className="h-4 w-4" />
                </button>
              </div>
              <div className="relative group">
                <button className="text-sm font-medium text-foreground hover:text-[#4DB8E8] transition-colors flex items-center gap-1">
                  Services
                  <ChevronDown className="h-4 w-4" />
                </button>
              </div>
              <a href="#" className="text-sm font-medium text-foreground hover:text-[#4DB8E8] transition-colors">About Us</a>
              <a href="#" className="text-sm font-medium text-foreground hover:text-[#4DB8E8] transition-colors">Contact</a>
            </div>
            
            <Button className="bg-[#2E3556] hover:bg-[#3D4A7A] text-white">
              Free Consultation
            </Button>
          </div>
        </div>
      </nav> */}

      {/* Hero Section */}
      <section className="relative bg-primary py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/abstract-geometric-flow.png')] opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
              <p className="text-sm text-white/90">Home &gt; Services &gt; <span className="font-semibold">Accommodation</span></p>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">
              Student Accommodation Services
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed stats-intro-text">
              Find your perfect home away from home with our trusted accommodation partners. Secure comfortable, safe, and affordable housing options worldwide.
            </p>
          </div>
        </div>
        {/* <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" /> */}
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Choose Our Accommodation Services?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto stats-intro-text">
              We partner with trusted providers to make your housing search simple and stress-free
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-[#4DB8E8] transition-all duration-300 hover:shadow-lg">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="w-16 h-16 bg-[#4DB8E8]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-[#4DB8E8]" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Verified Properties</h3>
                <p className="text-muted-foreground leading-relaxed">
                  All accommodation options are pre-verified for safety, quality, and student-friendly environments.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-[#4DB8E8] transition-all duration-300 hover:shadow-lg">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="w-16 h-16 bg-[#4DB8E8]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Home className="h-8 w-8 text-[#4DB8E8]" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Hassle-Free Process</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We simplify your housing search with expert guidance and direct connections to reliable providers.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-[#4DB8E8] transition-all duration-300 hover:shadow-lg">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="w-16 h-16 bg-[#4DB8E8]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-[#4DB8E8]" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">24/7 Support</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our team is here to assist you throughout your accommodation journey, from search to settlement.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* HousingHand Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6 stats-intro-text">
              HousingHand - UK Accommodation Finder
            </h2>
            <p className="stats-intro-text mx-auto text-lg text-muted-foreground leading-relaxed max-w-3xl mb-8">
              HousingHand offers a comprehensive free house finder service specifically designed for students and professionals moving to the UK. Browse thousands of verified properties and find your ideal home with expert support.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {[
                'Free property search service',
                'Verified UK landlords and properties',
                'Student-friendly accommodations',
                'Flexible rental options'
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3 bg-background p-4 rounded-lg border border-border">
                  <Check className="h-5 w-5 text-[#4DB8E8] shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            {/* <Button className="bg-[#4DB8E8] hover:bg-[#3DA5D9] text-white">
              Find Your UK Home
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button> */}
          </div>

          <div className="bg-background rounded-xl border border-border shadow-lg overflow-hidden">
            {/* <iframe
              src="https://housinghand.co.uk/free-house-finder-service/"
              className="w-full h-[800px] md:h-[900px]"
              title="HousingHand Accommodation Finder"
              loading="lazy"
            /> */}

          <div
          id="root-ul"
          data-widgetId="6904aee0ed9b4c06637b5124"
          data-city="london"
          data-primaryColor="#111"
          data-fontColor="#333"
          data-iconColor="#111"
        /> 
        {/* <script src="https://d3hk5c2fo9op52.cloudfront.net/widget.js"></script> */}
         <Script src="https://d3hk5c2fo9op52.cloudfront.net/widget.js" /> 
          </div>
        </div>
      </section>

      {/* StudiesIn Section */}
      {/* <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              StudiesIn - Global Student Accommodation
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-8">
              StudiesIn connects international students with quality accommodation options across multiple study destinations worldwide. From shared apartments to private studios, find housing that fits your budget and lifestyle.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {[
                'Global accommodation network',
                'Budget-friendly options',
                'Easy booking process',
                'Student community support'
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3 bg-muted/50 p-4 rounded-lg border border-border">
                  <Check className="h-5 w-5 text-[#4DB8E8] shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Button className="bg-[#4DB8E8] hover:bg-[#3DA5D9] text-white">
              Explore Global Housing
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* <div className="bg-background rounded-xl border border-border shadow-lg overflow-hidden">
            <iframe
              src="https://studiesin.com/services/accommodation"
              className="w-full h-[800px] md:h-[900px]"
              title="StudiesIn Global Accommodation"
              loading="lazy"
            />
          </div> 
        </div>
      </section> */}

      {/* How It Works Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/abstract-geometric-pattern.png')] opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              How Our Accommodation Service Works
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto stats-intro-text">
              Four simple steps to secure your perfect home abroad
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: '01',
                title: 'Consultation',
                description: 'Discuss your preferences, budget, and requirements with our accommodation specialists.'
              },
              {
                number: '02',
                title: 'Browse Options',
                description: 'Access our partner platforms to explore verified accommodation listings in your destination.'
              },
              {
                number: '03',
                title: 'Book & Secure',
                description: 'Complete your booking with our guidance and secure your home before arrival.'
              },
              {
                number: '04',
                title: 'Move In Support',
                description: 'Receive ongoing support during move-in and throughout your stay.'
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="text-6xl font-bold text-[#4DB8E8] mb-4 opacity-50">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-white/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground stats-intro-text">
              Everything you need to know about our accommodation services
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: 'When should I start looking for accommodation?',
                answer: 'We recommend starting your accommodation search 2-3 months before your intended move-in date to ensure the best selection of properties.'
              },
              {
                question: 'Are there any fees for using your accommodation services?',
                answer: 'Our consultation and guidance services are complimentary. Any booking fees are handled directly by our partner accommodation providers.'
              },
              {
                question: 'What types of accommodation are available?',
                answer: 'Options include student halls, shared apartments, private studios, homestays, and purpose-built student accommodations (PBSA).'
              },
              {
                question: 'Can I view properties before booking?',
                answer: 'Yes, many properties offer virtual tours, and our partners can arrange in-person viewings where possible.'
              },
              {
                question: 'What if I need to change my accommodation?',
                answer: 'Our team will assist you with any accommodation changes or concerns throughout your stay.'
              }
            ].map((faq, index) => (
              <Card key={index} className="border-2 hover:border-[#4DB8E8] transition-colors">
                <CardContent className="pt-6 pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/wave-pattern.png')] opacity-10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
            Ready to Find Your Perfect Home?
          </h2>
          <p className="text-xl text-white/95 mb-10 leading-relaxed stats-intro-text">
            Connect with our accommodation experts today and take the first step towards securing comfortable housing in your dream destination.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <Button size="lg" className="bg-white text-[#4DB8E8] hover:bg-white/90 font-semibold">
              Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button> */}
            <Button onClick={()=>router.push("/contact")} size="lg" variant="outline" className="border-2 border-white text-primary hover:bg-white hover:text-[#4DB8E8] font-semibold">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-[#2E3556] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white rounded" />
              <span className="text-lg font-semibold">TRANSPACIFIC</span>
            </div>
            <p className="text-white/70 text-sm">
              © 2025 Transpacific Immigration Services. All rights reserved.
            </p>
          </div>
        </div>
      </footer> */}
    </div>
  )
}
