import { Card, CardContent } from "@/components/ui/card"

interface ProcessStepProps {
  number: number
  title: string
  description: string
}

export default function ProcessStep({ number, title, description }: ProcessStepProps) {
  return (
    <Card className="bg-background border-border/50 relative h-full transition-all hover:shadow-md">
      <CardContent className="p-6 pt-12">
        <div className="absolute -top-6 left-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-galano text-xl font-bold">
            {number}
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="font-galano text-xl font-semibold">{title}</h3>
          <p className="text-muted-foreground text-left whitespace-normal break-words no-word-gaps process">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}
