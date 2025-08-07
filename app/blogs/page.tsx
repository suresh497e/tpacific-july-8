
import blogs from './blogs.json';
import Link from 'next/link';
import Image from 'next/image';

export default function BlogPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Blogs</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div key={blog.slug} className="bg-white shadow rounded overflow-hidden">
            <Image
              src={blog.image}
              alt={blog.title}
              width={400}
              height={250}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-600 mb-4">{blog.excerpt}</p>
              <Link
                href={`/blogs/${blog.slug}`}
                className="text-blue-600 hover:underline font-medium"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

