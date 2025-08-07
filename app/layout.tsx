// import type React from "react"
// import type { Metadata } from "next"
// import { withMetadataValidation } from "@/lib/metadata-utils"
// import { Inter } from "next/font/google"
// import "./globals.css"
// import { ThemeProvider } from "@/components/theme-provider"
// import Navigation from "@/components/navigation"
// import Footer from "@/components/footer"
// import { withSentenceSplitting } from "@/lib/with-sentence-splitting"
// import SentenceFormatter from "@/components/sentence-formatter"
// import { generateOrganizationSchema, generateWebsiteSchema, addSchemaToMetadata } from "@/lib/schema-utils"
// import WhatsAppButton from "@/components/whatsapp-button"
// import Script from "next/script"

// const inter = Inter({ subsets: ["latin"] })

// // Create organization schema
// // const organizationSchema = generateOrganizationSchema({
// //   name: "Transpacific Immigration",
// //   url: "https://transpacificimmigration.com",
// //   logo: "https://transpacificimmigration.com/images/logo.png",
// //   address: {
// //     streetAddress: "123 Immigration Street",
// //     addressLocality: "Auckland",
// //     addressRegion: "Auckland",
// //     postalCode: "1010",
// //     addressCountry: "New Zealand"
// //   },
// //   contactPoint: {
// //     telephone: "+64-9-123-4567",
// //     email: "info@transpacificimmigration.com",
// //     contactType: "customer service"
// //   },
// //   sameAs: [
// //     "https://www.facebook.com/transpacificimmigration",
// //     "https://www.instagram.com/transpacificimmigration",
// //     "https://www.linkedin.com/company/transpacificimmigration"
// //   ]
// // });

// // Create website schema
// // const websiteSchema = generateWebsiteSchema({
// //   name: "Transpacific Immigration",
// //   url: "https://transpacificimmigration.com",
// //   description: "Study abroad experts",
// //   inLanguage: "en-US"
// // });

// // Add schema to metadata
// // export const metadata: Metadata = withMetadataValidation(addSchemaToMetadata({
// //   title: "Transpacific",
// //   description: "Study abroad experts",
// //   generator: 'v0.dev',
// //   keywords: ['visa', 'study abroad', 'immigration'],
// //   openGraph: {
// //     title: "Transpacific",
// //     description: "Study abroad experts",
// //     type: 'website',
// //     images: [
// //       {
// //         url: '/images/hero-image-full.png',
// //         width: 1200,
// //         height: 630,
// //         alt: 'Transpacific Immigration - Study Abroad Experts',
// //       }
// //     ],
// //   },
// //   twitter: {
// //     title: "Transpacific",
// //     description: "Study abroad experts",
// //     card: 'summary_large_image',
// //     images: [
// //       '/images/hero-image-full.png',
// //     ],
// //   }
// // }, [organizationSchema, websiteSchema]))

// function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <head>
//         <link rel="stylesheet" href="https://use.typekit.net/xxxxxxx.css" />
//          <link rel="icon" href="/bluelogo.png" />
//       </head>
//       <body className={inter.className}>
//         <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
//           <SentenceFormatter />
//           <div className="flex min-h-screen flex-col">
//             <Navigation />
//             <main className="flex-1">{children}</main>
//              <WhatsAppButton />
//             <Footer />
//           </div>
//         </ThemeProvider>
//         {/* scripts */}
//         {/* google analytics */}
//         <script async src="https://www.googletagmanager.com/gtag/js?id=G-T58CV5PLNM"></script>
// <Script>
// window.dataLayer = window.dataLayer || [];
// function gtag(){dataLayer.push(arguments);}
// gtag('js', new Date());

// gtag('config', 'G-T58CV5PLNM');
// </Script>

//  {/* microsoft clarity code */}
// <script type="text/javascript">
// (function(c,l,a,r,i,t,y){
// c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
// t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
// y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
// })(window, document, "clarity", "script", "sqwkoqsi8s");
// </script>

// {/* meta pixel */}
// <script>
// function(f,b,e,v,n,t,s)
// {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
// n.callMethod.apply(n,arguments):n.queue.push(arguments)};
// if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
// n.queue=[];t=b.createElement(e);t.async=!0;
// t.src=v;s=b.getElementsByTagName(e)[0];
// s.parentNode.insertBefore(t,s)}(window, document,'script',
// 'https://connect.facebook.net/en_US/fbevents.js');
// fbq('init', '1155757299728227');
// fbq('track', 'PageView');
// </script>
// <noscript><img height="1" width="1" style="display:none"
// src="https://www.facebook.com/tr?id=1155757299728227&ev=PageView&noscript=1"
// /></noscript>
//       </body>
//     </html>
//   )
// }

// export default withSentenceSplitting(RootLayout)

"use client";

import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { withSentenceSplitting } from "@/lib/with-sentence-splitting";
import SentenceFormatter from "@/components/sentence-formatter";
import WhatsAppButton from "@/components/whatsapp-button";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/xxxxxxx.css" />
        <link rel="icon" href="/bluelogo.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <SentenceFormatter />
          <div className="flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1">{children}</main>
            <WhatsAppButton />
            <Footer />
          </div>
        </ThemeProvider>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-T58CV5PLNM"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-T58CV5PLNM');
          `}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "sqwkoqsi8s");
          `}
        </Script>

        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1155757299728227');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1155757299728227&ev=PageView&noscript=1"
          />
        </noscript>
      </body>
    </html>
  );
}

export default withSentenceSplitting(RootLayout);
