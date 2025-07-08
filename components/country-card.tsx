import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SafeImage } from "@/components/safe-image"

interface CountryCardProps {
  flag?: string
  country: string
  description: string
  image: string
  color?: string
}

export default function CountryCard({ flag, country, description, image, color = "#2563eb" }: CountryCardProps) {
  // Applying Law of Similarity - consistent styling with unique color per country
  const cardStyles = {
    borderTop: `4px solid ${color}`,
  }

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md" style={cardStyles}>
      <div className="aspect-[4/3] w-full overflow-hidden relative">
        {/* Applying Aesthetic-Usability Effect - beautiful imagery */}
        <SafeImage
          src={image || "/placeholder.svg"}
          alt={`${country} landscape`}
          className="h-full w-full object-cover transition-transform hover:scale-105 duration-500"
          imageType="country"
          seoParams={{
            country: country
          }}
        />

        {/* Adding flag for better visual recognition */}
        {flag && (
          <div className="absolute top-4 right-4 h-8 w-12 overflow-hidden rounded shadow-md">
            <SafeImage 
              src={flag || "/placeholder.svg"} 
              alt={`${country} flag`} 
              className="h-full w-full object-cover" 
              imageType="flag"
              seoParams={{
                country: country
              }}
            />
          </div>
        )}
      </div>
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="space-y-2">
            {/* Applying Hierarchy - clear heading */}
            <h3 className="font-galano text-2xl font-semibold">{country}</h3>
            {/* Applying Miller's Law - concise description */}
            <p className="text-muted-foreground line-clamp-3">{description}</p>
          </div>

          {/* Applying Fitts's Law - large, easy to click button */}
          <Button variant="outline" size="sm" className="w-full justify-between mt-2" asChild>
            <Link href={`/countries/${country.toLowerCase().replace(/\s+/g, "-")}`}>
              <span>Explore Universities</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
