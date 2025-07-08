import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

interface UniversityCardProps {
  name: string
  logo: string
  link: string
  ranking?: number
  location?: string
}

export default function UniversityCard({ name, logo, link, ranking, location }: UniversityCardProps) {
  return (
    <Card className="bg-background border-border/50 hover:shadow-md transition-all group">
      <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
        {/* Applying Aesthetic-Usability Effect - clean logo display */}
        <div className="h-16 flex items-center justify-center relative">
          <div className="absolute inset-0 bg-gray-50 dark:bg-gray-900 rounded-full opacity-0 group-hover:opacity-10 transition-opacity"></div>
          <img
            src={logo || "/placeholder.svg?height=80&width=200&query=university%20logo"}
            alt={`${name} logo`}
            className="max-h-12 w-auto object-contain grayscale group-hover:grayscale-0 transition-all"
            style={{ maxWidth: "120px" }}
          />
        </div>

        {/* Applying Hierarchy - clear information structure */}
        <div className="space-y-2">
          <h3 className="font-galano text-lg font-semibold">{name}</h3>

          {/* Applying Law of Proximity - related info grouped together */}
          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
            {ranking && <span>#{ranking} Ranked</span>}
            {ranking && location && <span>•</span>}
            {location && <span>{location}</span>}
          </div>
        </div>

        {/* Applying Fitts's Law - clear call to action */}
        <Button variant="outline" size="sm" className="mt-auto group-hover:bg-primary/5" asChild>
          <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
            <span>Visit Site</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </Button>
      </CardContent>
    </Card>
  )
}
