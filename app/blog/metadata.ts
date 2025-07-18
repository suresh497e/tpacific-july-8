// import type { Metadata } from "next";
// import { withMetadataValidation } from "@/lib/metadata-utils";
// import { generateBlogSchema, addSchemaToMetadata } from "@/lib/schema-utils";

// // Create Blog schema
// const blogSchema = generateBlogSchema({
//   name: "Transpacific Immigration Blog",
//   description: "Latest updates, news, and insights about immigration and studying abroad.",
//   url: "https://transpacificimmigration.com/blog",
//   publisher: {
//     name: "Transpacific Immigration",
//     logo: "https://transpacificimmigration.com/images/logo.png"
//   }
// });

// // Add schema to metadata
// export const metadata: Metadata = withMetadataValidation(addSchemaToMetadata({
//   title: "Blog & News",
//   description: "Latest updates",
//   keywords: ['blog', 'news', 'updates', 'visa'],
//   openGraph: {
//     title: "Blog & News",
//     description: "Latest updates",
//     type: 'website',
//     images: [
//       {
//         url: '/images/blog-hero.png',
//         width: 1200,
//         height: 630,
//         alt: 'Transpacific Immigration Blog & News',
//       }
//     ],
//   },
//   twitter: {
//     title: "Blog & News",
//     description: "Latest updates",
//     card: 'summary_large_image',
//     images: [
//       '/images/blog-hero.png',
//     ],
//   }
// }, [blogSchema]));