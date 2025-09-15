import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";
import Image from "next/image";

export function BusinessVisaHero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                Turn your business dreams into{" "}
                <span className="text-blue-400">reality</span>
              </h1>
              <p className="text-xl text-slate-300">
                Entrepreneur and investor visa solutions for growth.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed">
                Stable economy, innovation-driven market, and global trade
                opportunities. But immigration requires a convincing business
                plan and investment strategy.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">$500K+</div>
                <div className="text-sm text-slate-400">Investment Secured</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">150+</div>
                <div className="text-sm text-slate-400">
                  Businesses Launched
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">12</div>
                <div className="text-sm text-slate-400">Years Experience</div>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Book a Business Visa Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="relative">
            <Image
              src="/business-meeting.png"
              alt="Business professionals in meeting discussing investment opportunities"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-6 w-6" />
                <div>
                  <div className="font-semibold">Growing Market</div>
                  <div className="text-sm opacity-90">Innovation Hub</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
