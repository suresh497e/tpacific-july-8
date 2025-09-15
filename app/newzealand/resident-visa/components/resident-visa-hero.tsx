import { Button } from "@/components/ui/button";

export function ResidentVisaHero() {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold leading-tight">
                Your future, your home,{" "}
                <span className="text-blue-400">New Zealand</span>
              </h1>
              <p className="text-xl text-slate-300">
                Secure residency and enjoy stability for life.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-slate-200 leading-relaxed">
                Permanent residency means freedom: live, work, and study without
                limits. But residency is competitive, requiring clear
                eligibility and documentation.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 py-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">98%</div>
                <div className="text-sm text-slate-400">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">1000+</div>
                <div className="text-sm text-slate-400">Residents Approved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">15+</div>
                <div className="text-sm text-slate-400">Years Experience</div>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
            >
              Check Your Residency Eligibility
            </Button>
          </div>

          <div className="relative">
            <img
              src="/new-zealand-landscape.png"
              alt="Beautiful New Zealand landscape representing permanent residency"
              className="rounded-lg shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
