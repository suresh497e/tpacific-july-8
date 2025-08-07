// import blogs from '../blogs.json';
// import { notFound } from 'next/navigation';
// import Image from 'next/image';

// type Props = {
//   params: {
//     slug: string;
//   };
// };

// export default function BlogPost({ params }: Props) {
//   const { slug } = params;
//   const blog = blogs.find((b) => b.slug === slug);

//   if (!blog) notFound();

//   return (
//     <div className="max-w-4xl mx-auto px-4 py-16">
//       <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight tracking-tight">
//         {blog.title}
//       </h1>

//       <div className="relative w-full h-[220px] md:h-[360px] mb-8 overflow-hidden rounded-lg shadow-md">
//         <Image
//           src={blog.image}
//           alt={blog.title}
//           fill
//           className="object-cover object-center"
//           priority
//         />
//       </div>

//       <article className="prose prose-lg max-w-none prose-p:text-gray-700 prose-headings:text-gray-900">
//         <p>{blog.content}</p>
//       </article>
//     </div>
//   );
// }

import blogs from "../blogs.json";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Metadata } from "next";
import { format } from "date-fns";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const {slug} = await params
   const blog = blogs.find((b) => b.slug === slug);
 // const blog = blogs.find((b) => b.slug === params.slug);
  if (!blog) return {};
  return {
    title: blog.title,
    description: blog.content.substring(0, 150),
    openGraph: {
      images: [blog.image],
    },
  };
}

export default async function BlogPost({ params }: Props) {
  //const blog = blogs.find((b) => b.slug === params.slug);
   const {slug} = await params
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) notFound();

  const shareUrl = `https://tpacific.co.nz/blogs/${blog.slug}`;

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2">{blog.title}</h1>
      <div className="text-sm text-gray-500 mb-4">
        {format(new Date(blog.date), "MMMM d, yyyy")}
      </div>

       <Image
        src={blog.image}
        alt={blog.title}
        width={720}
        height={500}
        className="rounded-lg mb-6 w-full object-cover"
      />

      {/* <Image
        src={blog.image}
        alt={blog.title}
        width={720}
        height={400}
        className="rounded-lg mb-6 object-cover"
      /> */}

      <div className="text-lg text-gray-800 leading-8 mb-6 whitespace-pre-line">
        {blog.content}
      </div>

      {/* Tags */}
      <div className="mb-6 flex flex-wrap gap-2">
        {blog.tags.map((tag) => (
          <span
            key={tag}
            className="bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Share Buttons */}
      <div className="flex items-center gap-4 mt-8 border-t pt-6">
        <span className="font-semibold text-gray-700">Share:</span>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline text-sm"
        >
          Facebook
        </a>
        <a
          href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${encodeURIComponent(
            blog.title
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline text-sm"
        >
          Twitter
        </a>
        <a
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:underline text-sm"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}
