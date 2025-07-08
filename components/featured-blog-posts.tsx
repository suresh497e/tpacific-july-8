import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function FeaturedBlogPosts() {
  const posts = [
    {
      title: "2025 Visa Changes for International Students in New Zealand",
      excerpt:
        "Learn about the latest visa policy changes and how they affect international students planning to study in New Zealand.",
      date: "May 10, 2025",
      category: "Visa Updates",
      slug: "visa-changes-nz-2025",
    },
    {
      title: "Top 10 Scholarships for Indian Students in 2025",
      excerpt:
        "Discover the best scholarship opportunities available for Indian students looking to study abroad this year.",
      date: "April 28, 2025",
      category: "Scholarships",
      slug: "scholarships-indian-students-2025",
    },
    {
      title: "Student Life in Australia: What to Expect",
      excerpt:
        "A comprehensive guide to student life in Australia, including accommodation, part-time work, and cultural adaptation.",
      date: "April 15, 2025",
      category: "Student Life",
      slug: "student-life-australia",
    },
  ]

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <Card key={post.slug} className="border-border/50 hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="space-y-4">
              <Badge variant="outline" className="bg-background dark:bg-muted">
                {post.category}
              </Badge>
              <div className="space-y-2">
                <h3 className="font-galano text-xl font-semibold line-clamp-2">{post.title}</h3>
                <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="mr-1 h-3 w-3" />
                {post.date}
              </div>
              <Button variant="link" className="p-0 h-auto font-medium" asChild>
                <Link href={`/blog/${post.slug}`} className="flex items-center">
                  Read More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
