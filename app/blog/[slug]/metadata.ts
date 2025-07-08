import type { Metadata } from "next";
import { withMetadataValidation } from "@/lib/metadata-utils";
import { generateBlogPostingSchema, addSchemaToMetadata } from "@/lib/schema-utils";

// This is a placeholder function that would typically fetch data based on the slug
// In a real implementation, you would fetch the blog post data from your database or CMS
const getBlogPostData = async (slug: string) => {
  // Placeholder data - in a real app, this would come from a database or API
  const posts = {
    'new-zealand-national-occupation-list': {
      title: 'NZ Occupation List',
      description: 'ANZSCO replacement',
      keywords: ['New Zealand', 'visa', 'occupation'],
      image: '/countries_hero/NZ.jpeg',
    },
    'study-in-australia': {
      title: 'Study in Australia',
      description: 'University guide',
      keywords: ['Australia', 'study', 'university'],
      image: '/countries_hero/AUS.jpeg',
    },
    'canada-express-entry': {
      title: 'Canada Express Entry',
      description: 'Immigration pathway',
      keywords: ['Canada', 'immigration', 'express entry'],
      image: '/countries_hero/Canada.jpeg',
    },
    // Add more posts as needed
  };
  
  return posts[slug as keyof typeof posts] || {
    title: 'Blog Post',
    description: 'Transpacific blog',
    keywords: ['blog', 'immigration', 'visa'],
    image: '/images/blog-hero.png',
  };
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params;
  const post = await getBlogPostData(slug);
  
  // Create BlogPosting schema
  const blogPostingSchema = generateBlogPostingSchema({
    headline: post.title,
    description: post.description,
    image: `https://transpacificimmigration.com${post.image}`,
    datePublished: new Date().toISOString(), // In a real app, this would be the actual publication date
    dateModified: new Date().toISOString(), // In a real app, this would be the actual modification date
    author: {
      name: "Transpacific Immigration",
      url: "https://transpacificimmigration.com/about"
    },
    publisher: {
      name: "Transpacific Immigration",
      logo: "https://transpacificimmigration.com/images/logo.png"
    },
    url: `https://transpacificimmigration.com/blog/${slug}`,
    keywords: post.keywords.join(", ")
  });
  
  return withMetadataValidation(addSchemaToMetadata({
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: `${post.title} - Transpacific Immigration`,
        }
      ],
    },
    twitter: {
      title: post.title,
      description: post.description,
      card: 'summary_large_image',
      images: [
        post.image,
      ],
    }
  }, [blogPostingSchema]));
}