import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

export function WorkVisaHero() {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full border border-primary-foreground/20"></div>
        <div className="absolute top-40 right-32 w-24 h-24 rounded-full border border-primary-foreground/20"></div>
        <div className="absolute bottom-32 left-1/3 w-40 h-40 rounded-full border border-primary-foreground/20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-primary-foreground/10 rounded-full px-4 py-2 text-sm">
                <CheckCircle className="h-4 w-4" />
                <span>New Zealand Work Visa Specialists</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Navigate Your Work Visa Journey with{" "}
                <span className="text-accent">Confidence</span>
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Secure your New Zealand work visa with expert guidance. Our
                certified immigration advisers help you navigate complex
                requirements and maximize your chances of success.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                Download Visa Guide
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold">98%</div>
                <div className="text-sm text-primary-foreground/80">
                  Success Rate
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-primary-foreground/80">
                  Visas Approved
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm text-primary-foreground/80">
                  Years Experience
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="/diverse-office-team.png"
                alt="Professionals working in New Zealand office"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold">2-4 weeks</div>
              <div className="text-sm">Average Processing</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
