import { Button } from "@/components/ui/button";

interface ServiceHeroProps {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  imageSrc: string;
  imageAlt: string;
}

export function ServiceHero({
  title,
  description,
  ctaText,
  ctaLink,
  imageSrc,
  imageAlt,
}: ServiceHeroProps) {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
              {title}
            </h1>
            <p className="text-xl text-slate-200 mb-8 leading-relaxed">
              {description}
            </p>
            <Button
              size="lg"
              className="bg-primary border border-gray-500 text-white px-8 py-3"
              asChild
            >
              <a href={ctaLink}>{ctaText}</a>
            </Button>
          </div>
          <div className="relative">
            <img
              src={imageSrc || "/placeholder.svg"}
              alt={imageAlt}
              className="rounded-lg shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
