import React from 'react'
import { VisitorVisaHero } from './components/visitor-hero'
import { VisitorVisaOptions } from './components/visitor-options'
import { VisitorServices } from './components/visitor-services'
import { Testimonials } from './components/testimonials'
import CTASection from './components/cta-section'

const page = () => {
  return (
    <>
     <VisitorVisaHero />
     <VisitorVisaOptions />
     <VisitorServices />
      <Testimonials />
      <CTASection />
    </>
  )
}

export default page