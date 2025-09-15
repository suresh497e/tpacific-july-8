import { Button } from "@/components/ui/button";

export function FamilyVisaHero() {
  return (
    <section className="relative bg-gradient-to-br from-primary via-slate-800 to-slate-900 text-white py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-blue-400 font-medium">Family Visas</p>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                Reunite With <span className="text-blue-400">Loved Ones</span>
              </h1>
              <p className="text-xl text-gray-200">
                Partner, parent, and child visas made easy.
              </p>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed">
              New Zealand supports family unity. Whether you are sponsoring a
              spouse, bringing your children, or reuniting with parents, proving
              your relationship is key. Many applications fail due to
              insufficient evidence—we make sure yours succeeds.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8"
              >
                Talk to Us About Family Visas
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary px-8 bg-transparent"
              >
                View Success Stories
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">95%</div>
                <div className="text-sm text-gray-300">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">500+</div>
                <div className="text-sm text-gray-300">Families Reunited</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">15+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="/family-reunion.png"
                alt="Happy family reunited in New Zealand"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-full h-full bg-primary/20 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
