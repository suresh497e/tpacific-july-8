import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function DublinCityUniversityPage() {
  // Custom emerald green color for Ireland
  const emeraldGreen = "#007848"

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#007848]/5 via-background to-background dark:from-[#007848]/10 dark:via-background dark:to-background section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <Badge variant="outline" className="px-3 py-1 text-sm bg-background dark:bg-muted">
              Featured University
            </Badge>
            <h1 className="font-galano text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              Dublin City University
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore one of Ireland's leading universities for business, computing, engineering and humanities
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-muted/30 dark:bg-muted/10 border-y">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <div className="aspect-video w-full overflow-hidden rounded-xl border shadow-sm">
                <img
                  src="https://blob.v0.dev/dcu-campus-final.png"
                  alt="Dublin City University campus"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="mt-2 text-sm text-muted-foreground text-center">Dublin City University Main Campus</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-16 w-32 flex items-center justify-center bg-muted/20 rounded p-2 border">
                  <img
                    src="https://blob.v0.dev/dcu-logo-final.png"
                    alt="Dublin City University logo"
                    className="max-h-12 max-w-28 object-contain"
                  />
                </div>
                <h2 className="font-galano text-2xl font-bold">Dublin City University</h2>
              </div>

              <div className="space-y-4">
                <p className="text-lg">
                  Dublin City University (DCU) is a young, dynamic and ambitious university with a distinctive mission
                  to transform lives and societies through education, research, innovation and engagement.
                </p>

                <p>
                  Known for excellence in business, computing, engineering and humanities programs, DCU has strong
                  industry connections and a focus on innovation and entrepreneurship.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="bg-background rounded-lg p-4 border">
                    <h3 className="font-semibold mb-2">Founded</h3>
                    <p>1975</p>
                  </div>
                  <div className="bg-background rounded-lg p-4 border">
                    <h3 className="font-semibold mb-2">Students</h3>
                    <p>17,000+</p>
                  </div>
                  <div className="bg-background rounded-lg p-4 border">
                    <h3 className="font-semibold mb-2">International Students</h3>
                    <p>3,000+</p>
                  </div>
                  <div className="bg-background rounded-lg p-4 border">
                    <h3 className="font-semibold mb-2">Location</h3>
                    <p>Dublin, Ireland</p>
                  </div>
                </div>

                <div className="pt-4">
                  <Button size="lg" asChild style={{ backgroundColor: emeraldGreen, borderColor: emeraldGreen }}>
                    <Link href="https://www.dcu.ie/" target="_blank" rel="noopener noreferrer" className="gap-2">
                      Visit Official Website
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Badge variant="outline" className="px-3 py-1 text-sm bg-background dark:bg-muted">
              Academic Programs
            </Badge>
            <h2 className="font-galano text-3xl md:text-4xl font-bold">Popular Programs at DCU</h2>
            <p className="text-xl text-muted-foreground">
              Discover DCU's most sought-after programs with excellent career prospects
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-background border-border/50 hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-4">
                <h3 className="font-galano text-xl font-semibold">Business Studies</h3>
                <p className="text-muted-foreground">
                  DCU Business School offers internationally accredited programs with strong industry connections and
                  internship opportunities.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border/50 hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-4">
                <h3 className="font-galano text-xl font-semibold">Computer Science</h3>
                <p className="text-muted-foreground">
                  Cutting-edge programs in software engineering, data analytics, AI and cloud computing with links to
                  tech giants in Dublin.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border/50 hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-4">
                <h3 className="font-galano text-xl font-semibold">Engineering</h3>
                <p className="text-muted-foreground">
                  Innovative engineering programs with state-of-the-art facilities and strong emphasis on practical,
                  hands-on learning.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-muted/30 dark:bg-muted/10 border-y">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="font-galano text-3xl md:text-4xl font-bold">Ready to Study at DCU?</h2>
            <p className="text-xl text-muted-foreground">
              Let us help you with your application to Dublin City University
            </p>
            <div className="pt-4">
              <Button size="lg" asChild style={{ backgroundColor: emeraldGreen, borderColor: emeraldGreen }}>
                <Link href="/consultation" className="gap-2">
                  Get Free Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
