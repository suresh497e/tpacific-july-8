import type React from "react"
import type { Metadata } from "next"
import { withMetadataValidation } from "@/lib/metadata-utils"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { withSentenceSplitting } from "@/lib/with-sentence-splitting"
import SentenceFormatter from "@/components/sentence-formatter"
import { generateOrganizationSchema, generateWebsiteSchema, addSchemaToMetadata } from "@/lib/schema-utils"

const inter = Inter({ subsets: ["latin"] })

// Create organization schema
const organizationSchema = generateOrganizationSchema({
  name: "Transpacific Immigration",
  url: "https://transpacificimmigration.com",
  logo: "https://transpacificimmigration.com/images/logo.png",
  address: {
    streetAddress: "123 Immigration Street",
    addressLocality: "Auckland",
    addressRegion: "Auckland",
    postalCode: "1010",
    addressCountry: "New Zealand"
  },
  contactPoint: {
    telephone: "+64-9-123-4567",
    email: "info@transpacificimmigration.com",
    contactType: "customer service"
  },
  sameAs: [
    "https://www.facebook.com/transpacificimmigration",
    "https://www.instagram.com/transpacificimmigration",
    "https://www.linkedin.com/company/transpacificimmigration"
  ]
});

// Create website schema
const websiteSchema = generateWebsiteSchema({
  name: "Transpacific Immigration",
  url: "https://transpacificimmigration.com",
  description: "Study abroad experts",
  inLanguage: "en-US"
});

// Add schema to metadata
export const metadata: Metadata = withMetadataValidation(addSchemaToMetadata({
  title: "Transpacific",
  description: "Study abroad experts",
  generator: 'v0.dev',
  keywords: ['visa', 'study abroad', 'immigration'],
  openGraph: {
    title: "Transpacific",
    description: "Study abroad experts",
    type: 'website',
    images: [
      {
        url: '/images/hero-image-full.png',
        width: 1200,
        height: 630,
        alt: 'Transpacific Immigration - Study Abroad Experts',
      }
    ],
  },
  twitter: {
    title: "Transpacific",
    description: "Study abroad experts",
    card: 'summary_large_image',
    images: [
      '/images/hero-image-full.png',
    ],
  }
}, [organizationSchema, websiteSchema]))

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/xxxxxxx.css" />
         <link rel="icon" href="/bluelogo.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <SentenceFormatter />
          <div className="flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

export default withSentenceSplitting(RootLayout)
