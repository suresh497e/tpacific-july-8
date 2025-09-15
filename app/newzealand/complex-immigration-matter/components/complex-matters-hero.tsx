import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ComplexMattersHero() {
  return (
    <section className="bg-primary text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                No case is too <span className="text-blue-400">complex</span>
              </h1>
              <p className="text-xl text-slate-300">
                Appeals, refusals, and special cases handled with expertise.
              </p>
            </div>

            <p className="text-lg text-slate-200 leading-relaxed">
              Immigration challenges require specialized expertise. Whether
              you're facing visa refusals, appeals, or complex circumstances,
              our experienced team provides strategic solutions to overcome
              obstacles and achieve your immigration goals.
            </p>

            <div className="grid grid-cols-3 gap-8 py-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">98%</div>
                <div className="text-sm text-slate-300">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">200+</div>
                <div className="text-sm text-slate-300">Complex Cases</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">15+</div>
                <div className="text-sm text-slate-300">Years Experience</div>
              </div>
            </div>

            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Link href="/consultation">
                Get Help With Your Immigration Case
              </Link>
            </Button>
          </div>

          <div className="relative">
            <img
              src="/immigration-lawyer-consultation.png"
              alt="Professional immigration consultation for complex matters"
              className="rounded-lg shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
