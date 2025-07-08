import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { QuoteIcon } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  name: string
  title: string
  image?: string
}

export default function TestimonialCard({ quote, name, title, image }: TestimonialCardProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()

  return (
    <Card className="h-full transition-all hover:shadow-md">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex-1 space-y-4">
          <QuoteIcon className="h-8 w-8 text-primary/20" />
          <p className="italic text-muted-foreground">{quote}</p>
        </div>
        <div className="flex items-center gap-4 pt-6 mt-auto">
          <Avatar className="h-12 w-12 border-2 border-primary/10">
            <AvatarImage src={image || "/placeholder.svg"} alt={name} />
            <AvatarFallback className="bg-primary/10 text-primary">{initials}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-galano font-semibold">{name}</p>
            <p className="text-sm text-muted-foreground">{title}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
