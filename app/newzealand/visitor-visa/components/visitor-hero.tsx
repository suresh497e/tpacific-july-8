import { Button } from "@/components/ui/button";

export function VisitorVisaHero() {
  return (
    <section className="relative bg-primary text-primary-foreground py-20 px-4 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 border border-white/20 rounded-full"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block bg-white/10 text-sm px-4 py-2 rounded-full">
              Your Gateway to New Zealand
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Visit New Zealand with{" "}
              <span className="text-secondary">peace of mind</span>
            </h1>

            <p className="text-lg text-white/90 leading-relaxed">
              Whether for tourism, family visits, or short stays, we make your
              visitor visa application simple.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Apply for Your Visitor Visa Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary bg-transparent"
              >
                Free Consultation
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm text-white/80">
                  Compliant Applications
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-white/80">Successful Visas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm text-white/80">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="/bluelogo.png"
              alt="Tourists exploring New Zealand"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
