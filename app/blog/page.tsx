
import Link from "next/link"
import { ArrowRight, Calendar, ChevronRight, Clock, FileText, MapPin, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { metadata } from "./metadata"

export default function BlogPage() {
 

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background dark:from-primary/10 dark:via-background dark:to-background section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <Badge variant="outline" className="px-3 py-1 text-sm bg-background dark:bg-muted">
              Blog & News
            </Badge>
            <h1 className="font-galano text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              Latest Updates from <span className="text-primary">Transpacific</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your trusted source for immigration news, student visa updates, and international education insights.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                  FEATURED
                </Badge>
                <Card className="border-border/50 hover:shadow-md transition-shadow">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>January 9, 2025</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>admin@transpacific.co.nz</span>
                      </div>
                    </div>
                    <div>
                      <h2 className="font-galano text-2xl font-bold">
                        New Zealand Replaces ANZSCO with a National Occupation List — Here's What It Means for You
                      </h2>
                      <div className="mt-4 space-y-3 text-muted-foreground">
                        <p>
                          New Zealand is changing the way it classifies jobs for immigration. The government is
                          officially replacing the outdated ANZSCO system with its own National Occupation List,
                          tailored to New Zealand's labor market needs.
                        </p>
                        <h3 className="font-galano font-semibold text-foreground">What This Means:</h3>
                        <ul className="space-y-2 pl-5 list-disc">
                          <li>Better alignment with local job shortages</li>
                          <li>Faster visa processing for in-demand roles</li>
                          <li>Greater opportunities for healthcare, trades, and tech professionals</li>
                        </ul>
                        <div className="bg-primary/5 p-4 rounded-lg border border-primary/10 mt-4">
                          <h4 className="font-galano font-semibold text-foreground">Transpacific Tip:</h4>
                          <p>
                            Don't wait — check if your job is now on the Green List. Book a free consultation to see how
                            these changes affect your eligibility.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-4">
                      <Button asChild>
                        <Link href="/contact" className="gap-2">
                          Schedule Your Assessment
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-8">
                <h2 className="font-galano text-2xl font-bold">More Updates</h2>

                <Card className="border-border/50 hover:shadow-md transition-shadow">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>December 15, 2024</span>
                    </div>
                    <h3 className="font-galano text-xl font-bold">2025 Student Visa Changes: What You Need to Know</h3>
                    <p className="text-muted-foreground">
                      Big news for future students headed to New Zealand! Faster student visa approvals, updated
                      financial requirements, and simplified document checklist.
                    </p>
                    <div className="pt-2">
                      <Button variant="outline" asChild>
                        {/* <Link href="/blog/student-visa-changes-2025" className="gap-2">
                          Read More
                          <ArrowRight className="h-4 w-4" />
                        </Link> */}
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border/50 hover:shadow-md transition-shadow">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>November 28, 2024</span>
                    </div>
                    <h3 className="font-galano text-xl font-bold">UK Extends Graduate Route Visa to 3 Years</h3>
                    <p className="text-muted-foreground">
                      Great news for UK-bound students! The UK Government has extended the Graduate Route visa to 3
                      years for all international graduates — including Bachelor's, Master's, and PhD holders.
                    </p>
                    <div className="pt-2">
                      <Button variant="outline" asChild>
                        {/* <Link href="/blog/uk-graduate-route-extension" className="gap-2">
                          Read More
                          <ArrowRight className="h-4 w-4" />
                        </Link> */}
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border/50 hover:shadow-md transition-shadow">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>April 16, 2025</span>
                    </div>
                    <h3 className="font-galano text-xl font-bold">
                      How to Choose the Right Course & University in New Zealand
                    </h3>
                    <p className="text-muted-foreground">
                      Choosing where to study isn't just about rankings — it's about fit, future, and funding. Learn our
                      expert tips for selecting the perfect program.
                    </p>
                    <div className="pt-2">
                      <Button variant="outline" asChild>
                        {/* <Link href="/blog/choose-right-course-university" className="gap-2">
                          Read More
                          <ArrowRight className="h-4 w-4" />
                        </Link> */}
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border/50 hover:shadow-md transition-shadow">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>April 10, 2025</span>
                    </div>
                    <h3 className="font-galano text-xl font-bold">Top 6 Reasons Indian Students Choose New Zealand</h3>
                    <p className="text-muted-foreground">
                      New Zealand is quickly becoming the go-to choice for Indian students. Discover the key benefits
                      from globally ranked universities to clear PR pathways.
                    </p>
                    <div className="pt-2">
                      <Button variant="outline" asChild>
                        {/* <Link href="/blog/why-indian-students-choose-nz" className="gap-2">
                          Read More
                          <ArrowRight className="h-4 w-4" />
                        </Link> */}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="flex justify-center pt-8">
                {/* <Button  variant="outline" size="lg">
                  Load More Articles
                </Button> */}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* <Card className="border-border/50">
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
              </Card> */}

              <Card className="border-border/50">
                <CardContent className="p-6 space-y-6">
                  <h3 className="font-galano text-xl font-bold">Quick Access</h3>
                  <div className="space-y-3">
                    {/* <Button variant="outline" className="w-full justify-start gap-2" asChild>
                      <Link href="/apply">
                        <FileText className="h-4 w-4" />
                        Start Application
                      </Link>
                    </Button> */}
                    <Button variant="outline" className="w-full justify-start gap-2" asChild>
                      <Link href="/contact">
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
                    {/* <Button variant="outline" className="w-full justify-start gap-2" asChild>
                      <Link href="/resources">
                        <FileText className="h-4 w-4" />
                        Download Visa Checklists
                      </Link>
                    </Button> */}
                  </div>
                </CardContent>
              </Card>

              {/* <Card className="border-border/50 bg-primary/5">
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
              </Card> */}

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

      {/* Categories Section */}
      <section className="section-padding bg-muted/30 dark:bg-muted/10 border-y">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <h2 className="font-galano text-3xl font-bold">Browse by Category</h2>
            <p className="text-muted-foreground">Find articles on topics that matter to you</p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-6 mb-8">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="student-visas">Student Visas</TabsTrigger>
              <TabsTrigger value="work-visas">Work Visas</TabsTrigger>
              <TabsTrigger value="immigration">Immigration</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="lifestyle">Lifestyle</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "How to Prepare for Your Student Visa Interview",
                  date: "March 15, 2025",
                  category: "Student Visas",
                },
                {
                  title: "Top Universities for Computer Science in Australia",
                  date: "March 10, 2025",
                  category: "Education",
                },
                {
                  title: "Cost of Living Comparison: NZ vs Australia vs Canada",
                  date: "March 5, 2025",
                  category: "Lifestyle",
                },
                {
                  title: "How to Find Part-Time Jobs While Studying Abroad",
                  date: "February 28, 2025",
                  category: "Lifestyle",
                },
                {
                  title: "Understanding the Points System for Skilled Migration",
                  date: "February 20, 2025",
                  category: "Immigration",
                },
                {
                  title: "Top 5 Scholarships for Indian Students in 2025",
                  date: "February 15, 2025",
                  category: "Education",
                },
              ].map((article, index) => (
                <Card key={index} className="border-border/50 hover:shadow-md transition-shadow">
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
                      {/* <Link
                        href={`/blog/${article.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                        className="flex items-center"
                      >
                        Read Article
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link> */}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            {/* Other tab contents would be similar but filtered by category */}
            <TabsContent value="student-visas">
              <div className="text-center py-12">
                <p className="text-muted-foreground">Showing articles in Student Visas category</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-primary text-primary-foreground rounded-xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="font-galano text-3xl md:text-4xl font-bold">Have Questions About Your Visa Options?</h2>
              <p className="text-xl opacity-90">
                Our immigration experts can provide personalized advice based on your specific situation.
              </p>
              <div className="pt-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact" className="gap-2">
                    Book Your Free Consultation
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
