// import type { Metadata } from "next";
// import { withMetadataValidation } from "@/lib/metadata-utils";
// import { generateEducationalOrganizationSchema, addSchemaToMetadata } from "@/lib/schema-utils";

// // Create EducationalOrganization schema for Dublin City University
// const dcuSchema = generateEducationalOrganizationSchema({
//   name: "Dublin City University",
//   description: "One of Ireland's leading universities for business, computing, engineering and humanities",
//   url: "https://transpacificimmigration.com/dublin-city-university",
//   image: "https://blob.v0.dev/dcu-campus-final.png",
//   logo: "https://blob.v0.dev/dcu-logo-final.png",
//   address: {
//     streetAddress: "Glasnevin",
//     addressLocality: "Dublin",
//     addressRegion: "Dublin",
//     postalCode: "D09 V209",
//     addressCountry: "Ireland"
//   },
//   telephone: "+353 1 700 5000",
//   email: "registry@dcu.ie",
//   sameAs: [
//     "https://www.dcu.ie/",
//     "https://www.facebook.com/DCU",
//     "https://twitter.com/DCU",
//     "https://www.instagram.com/dublincityuniversity/",
//     "https://www.linkedin.com/school/dublin-city-university/"
//   ]
// });

// // Add schema to metadata
// export const metadata: Metadata = withMetadataValidation(addSchemaToMetadata({
//   title: "Dublin City University | Transpacific Immigration",
//   description: "Explore Dublin City University - one of Ireland's leading universities for business, computing, engineering and humanities",
//   keywords: ['Dublin City University', 'DCU', 'Ireland', 'university', 'study abroad', 'education'],
//   openGraph: {
//     title: "Dublin City University | Transpacific Immigration",
//     description: "Explore Dublin City University - one of Ireland's leading universities for business, computing, engineering and humanities",
//     type: 'website',
//     images: [
//       {
//         url: 'https://blob.v0.dev/dcu-campus-final.png',
//         width: 1200,
//         height: 630,
//         alt: 'Dublin City University campus',
//       }
//     ],
//   },
//   twitter: {
//     title: "Dublin City University | Transpacific Immigration",
//     description: "Explore Dublin City University - one of Ireland's leading universities for business, computing, engineering and humanities",
//     card: 'summary_large_image',
//     images: [
//       'https://blob.v0.dev/dcu-campus-final.png',
//     ],
//   }
// }, [dcuSchema]));