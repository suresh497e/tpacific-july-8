import Link from "next/link"
import { ArrowLeft, ArrowRight, Calendar, ChevronRight, Clock, FileText, MapPin, Share2, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { generateMetadata } from "./metadata"
import { SafeImage } from "@/components/safe-image"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // This is a placeholder. In a real implementation, you would fetch the blog post data based on the slug
  const post = {
    title: "New Zealand Replaces ANZSCO with a National Occupation List — Here's What It Means for You",
    date: "January 9, 2025",
    author: "admin@transpacific.co.nz",
    category: "Immigration",
    content: `
      <p>New Zealand is changing the way it classifies jobs for immigration. The government is officially replacing the outdated ANZSCO system with its own National Occupation List, tailored to New Zealand's labor market needs.</p>
      
      <h3>What This Means:</h3>
      <ul>
        <li>Better alignment with local job shortages</li>
        <li>Faster visa processing for in-demand roles</li>
        <li>Greater opportunities for healthcare, trades, and tech professionals</li>
      </ul>
      
      <p>The Australian and New Zealand Standard Classification of Occupations (ANZSCO) has been used for years to categorize jobs for immigration purposes. However, it hasn't kept pace with emerging roles, especially in technology and specialized fields.</p>
      
      <p>The new National Occupation List will be updated regularly to reflect New Zealand's actual labor market needs, making it easier for employers to bring in workers with the skills they need.</p>
      
      <h3>Key Benefits of the New System:</h3>
      
      <h4>1. More Accurate Job Classifications</h4>
      <p>The new list recognizes modern job roles that didn't exist or weren't properly classified under ANZSCO, particularly in technology, digital media, and specialized healthcare.</p>
      
      <h4>2. Faster Processing</h4>
      <p>With clearer classifications, visa applications can be processed more efficiently, reducing wait times for both employers and applicants.</p>
      
      <h4>3. Better Alignment with Skills Shortages</h4>
      <p>The list will be regularly updated to reflect actual labor market needs, ensuring immigration policies target genuine skills gaps.</p>
      
      <h3>What You Should Do Now:</h3>
      <p>If you're considering applying for a work visa in New Zealand, it's important to check how your occupation is classified under the new system. Some roles may now qualify for streamlined pathways or the Green List that weren't eligible before.</p>
      
      <div class="tip-box">
        <h4>Transpacific Tip:</h4>
        <p>Don't wait — check if your job is now on the Green List. Book a free consultation to see how these changes affect your eligibility.</p>
      </div>
      
      <p>Our immigration experts can help you navigate these changes and determine the best pathway for your specific situation.</p>
    `,
    image: "/placeholder.svg?height=600&width=1200&text=New+Zealand+National+Occupation+List",
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background dark:from-primary/10 dark:via-background dark:to-background py-12">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                Blog
              </Link>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">{post.category}</span>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
              <span className="truncate">{params.slug.replace(/-/g, " ")}</span>
            </div>

            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
              {post.category}
            </Badge>
            <h1 className="font-galano text-3xl md:text-4xl font-bold tracking-tight mb-6">{post.title}</h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>5 min read</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div className="rounded-xl overflow-hidden">
                <SafeImage 
                  src={post.image || "/placeholder.svg"} 
                  alt={post.title} 
                  className="w-full h-auto" 
                  imageType="blog"
                  seoParams={{
                    topic: post.title,
                    country: post.title.includes("New Zealand") ? "New Zealand" : 
                             post.title.includes("Australia") ? "Australia" : 
                             post.title.includes("Canada") ? "Canada" : 
                             post.title.includes("Ireland") ? "Ireland" : 
                             post.title.includes("UK") || post.title.includes("United Kingdom") ? "United Kingdom" : 
                             post.title.includes("USA") || post.title.includes("United States") ? "United States" : ""
                  }}
                />
              </div>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>

              <div className="flex items-center justify-between pt-8 border-t">
                <Button variant="outline" asChild>
                  <Link href="/blog" className="gap-2">
                    <ArrowLeft className="h-4 w-4" />
                    Back to Blog
                  </Link>
                </Button>
                <Button variant="outline" className="gap-2">
                  <Share2 className="h-4 w-4" />
                  Share
                </Button>
              </div>

              <div className="bg-muted/30 dark:bg-muted/10 rounded-xl p-6 space-y-4">
                <h3 className="font-galano text-xl font-bold">Ready to Explore Your Options?</h3>
                <p>
                  Our immigration experts can provide personalized advice based on these recent changes and your
                  specific situation.
                </p>
                <Button asChild>
                  <Link href="/consultation" className="gap-2">
                    Book a Free Consultation
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="space-y-6">
                <h3 className="font-galano text-xl font-bold">Related Articles</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Understanding the Points System for Skilled Migration",
                      date: "February 20, 2025",
                      image: "/placeholder.svg?height=200&width=300&text=Points+System",
                      category: "Immigration",
                    },
                    {
                      title: "How to Find a Job in New Zealand from Overseas",
                      date: "December 5, 2024",
                      image: "/placeholder.svg?height=200&width=300&text=Find+Job+NZ",
                      category: "Immigration",
                    },
                  ].map((article, index) => (
                    <Card key={index} className="overflow-hidden border-border/50 hover:shadow-md transition-shadow">
                      <div className="aspect-video w-full overflow-hidden">
                        <img
                          src={article.image || "/placeholder.svg"}
                          alt={article.title}
                          className="h-full w-full object-cover transition-transform hover:scale-105 duration-500"
                        />
                      </div>
                      <CardContent className="p-4 space-y-3">
                        <Badge variant="outline" className="bg-background dark:bg-muted">
                          {article.category}
                        </Badge>
                        <h3 className="font-galano text-lg font-semibold line-clamp-2">{article.title}</h3>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{article.date}</span>
                        </div>
                        <Button variant="link" className="p-0 h-auto" asChild>
                          <Link
                            href={`/blog/${article.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                            className="flex items-center"
                          >
                            Read Article
                            <ArrowRight className="ml-1 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <Card className="border-border/50">
                <CardContent className="p-6 space-y-6">
                  <h3 className="font-galano text-xl font-bold">Trending Topics</h3>
                  <div className="space-y-4">
                    {[
                      "NZ Green List Explained",
                      "IELTS vs. PTE: Which One to Choose?",
                      "Can You Take Dependents on a Student Visa?",
                      "How to Get Scholarships Abroad",
                    ].map((topic, index) => (
                      <Link
                        key={index}
                        href={`/blog/${topic.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                        className="flex items-center justify-between p-3 rounded-lg border border-border/50 hover:bg-muted/50 transition-colors"
                      >
                        <span>{topic}</span>
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="p-6 space-y-6">
                  <h3 className="font-galano text-xl font-bold">Quick Access</h3>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start gap-2" asChild>
                      <Link href="/apply">
                        <FileText className="h-4 w-4" />
                        Start Application
                      </Link>
                    </Button>
                    <Button variant="outline" className="w-full justify-start gap-2" asChild>
                      <Link href="/consultation">
                        <Calendar className="h-4 w-4" />
                        Book a Consultation
                      </Link>
                    </Button>
                    <Button variant="outline" className="w-full justify-start gap-2" asChild>
                      <Link href="/countries">
                        <MapPin className="h-4 w-4" />
                        See Countries We Serve
                      </Link>
                    </Button>
                    <Button variant="outline" className="w-full justify-start gap-2" asChild>
                      <Link href="/resources">
                        <FileText className="h-4 w-4" />
                        Download Visa Checklists
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-primary/5">
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-galano text-xl font-bold">Free Webinar</h3>
                  <div className="space-y-2">
                    <p className="font-medium">Course Selection Strategies for PR Pathways</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>April 19, 2025</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>7:00 PM IST</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="h-4 w-4" />
                      <span>Nagendar Reddy, Senior Counselor</span>
                    </div>
                  </div>
                  <Button className="w-full" asChild>
                    <Link href="/webinars/course-selection">Reserve Your Spot</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-galano text-xl font-bold">Subscribe to Updates</h3>
                  <p className="text-muted-foreground">
                    Get the latest immigration news and visa updates delivered to your inbox.
                  </p>
                  <form className="space-y-4">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-3 py-2 border border-border rounded-md"
                    />
                    <Button type="submit" className="w-full">
                      Subscribe
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
