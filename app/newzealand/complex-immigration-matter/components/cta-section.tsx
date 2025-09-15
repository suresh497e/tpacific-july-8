import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to Start Your New Zealand Visa Journey?
            </h2>
            <p className="stats-intro-text text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Don't let complex immigration processes hold you back. Get expert
              guidance and maximize your chances of success with our proven
              approach.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-primary-foreground/10 border-primary-foreground/20">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto">
                  <Calendar className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white">Free Consultation</h3>
                  <p className="text-primary-foreground/80 text-sm">
                    30-minute assessment of your visa options
                  </p>
                </div>
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
              
                  Book Now
                 
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-primary-foreground/10 border-primary-foreground/20">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto">
                  <Phone className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white">Call Us Today</h3>
                  <p className="text-primary-foreground/80 text-sm">
                    Speak directly with our immigration experts
                  </p>
                </div>
                <Button
                  variant="outline"
                  className="w-full border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                >
                +91 9397100200
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-primary-foreground/10 border-primary-foreground/20">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto">
                  <Mail className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white">Email Inquiry</h3>
                  <p className="text-primary-foreground/80 text-sm">
                    Get detailed information about your case
                  </p>
                </div>
                <Button
                  variant="outline"
                  className="w-full border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                >
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="pt-8">
            <p className="text-primary-foreground/80 text-sm stats-intro-text">
              Licensed Immigration Advisers • 98% Success Rate • 500+ Visas
              Approved
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
