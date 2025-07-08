'use client'

import { SafeImage } from "@/components/safe-image"
import { ReliableImage } from "@/components/reliable-image"
import { Card, CardContent } from "@/components/ui/card"

export default function TestSEOImagesPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8">SEO-Optimized Image Alt Text Test</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Country Image Test */}
        <Card>
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold">Country Image</h2>
            <div className="aspect-video overflow-hidden rounded-md">
              <SafeImage
                src="/countries_hero/australia.png"
                alt="Australia landscape"
                className="w-full h-full object-cover"
                imageType="country"
                seoParams={{
                  country: "Australia"
                }}
              />
            </div>
            <p className="text-sm text-muted-foreground">Hover over image to see SEO alt text</p>
          </CardContent>
        </Card>

        {/* University Image Test */}
        <Card>
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold">University Image</h2>
            <div className="aspect-video overflow-hidden rounded-md">
              <ReliableImage
                src="/australia_universities/one.png"
                alt="University of Sydney campus"
                className="w-full h-full object-cover"
                imageType="university"
                seoParams={{
                  name: "University of Sydney",
                  country: "Australia"
                }}
              />
            </div>
            <p className="text-sm text-muted-foreground">Hover over image to see SEO alt text</p>
          </CardContent>
        </Card>

        {/* Logo Image Test */}
        <Card>
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold">Logo Image</h2>
            <div className="aspect-video overflow-hidden rounded-md flex items-center justify-center">
              <ReliableImage
                src="/images/logos/university-of-melbourne.png"
                alt="University of Melbourne logo"
                className="w-48 h-auto object-contain"
                imageType="logo"
                seoParams={{
                  name: "University of Melbourne",
                  country: "Australia"
                }}
              />
            </div>
            <p className="text-sm text-muted-foreground">Hover over image to see SEO alt text</p>
          </CardContent>
        </Card>

        {/* Student Image Test */}
        <Card>
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold">Student Image</h2>
            <div className="aspect-video overflow-hidden rounded-md">
              <SafeImage
                src="/indian-students-ucd.png"
                alt="Indian students at UCD"
                className="w-full h-full object-cover"
                imageType="student"
                seoParams={{
                  university: "University College Dublin",
                  country: "Ireland"
                }}
              />
            </div>
            <p className="text-sm text-muted-foreground">Hover over image to see SEO alt text</p>
          </CardContent>
        </Card>

        {/* Hero Image Test */}
        <Card>
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold">Hero Image</h2>
            <div className="aspect-video overflow-hidden rounded-md">
              <SafeImage
                src="/countries_hero/canada.png"
                alt="Canada hero image"
                className="w-full h-full object-cover"
                imageType="hero"
                seoParams={{
                  country: "Canada"
                }}
              />
            </div>
            <p className="text-sm text-muted-foreground">Hover over image to see SEO alt text</p>
          </CardContent>
        </Card>

        {/* Blog Image Test */}
        <Card>
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold">Blog Image</h2>
            <div className="aspect-video overflow-hidden rounded-md">
              <SafeImage
                src="/placeholder.svg?height=400&width=600&text=Visa+Application+Process"
                alt="Visa application process"
                className="w-full h-full object-cover"
                imageType="blog"
                seoParams={{
                  topic: "Visa application process",
                  country: "Australia"
                }}
              />
            </div>
            <p className="text-sm text-muted-foreground">Hover over image to see SEO alt text</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}