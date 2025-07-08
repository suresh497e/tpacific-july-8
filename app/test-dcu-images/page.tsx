import { Card, CardContent } from "@/components/ui/card"

export default function TestDCUImages() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8">Test Dublin City University Images</h1>

      <div className="grid gap-8">
        <Card className="overflow-hidden">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">Dublin City University</h2>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Campus Image:</h3>
              <div className="aspect-video relative overflow-hidden rounded-md border">
                <img
                  src="/images/dcu-campus-new.png"
                  alt="Dublin City University campus"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">Path: /images/dcu-campus-new.png</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Logo:</h3>
              <div className="h-20 w-40 relative bg-muted/20 rounded-md border p-2 flex items-center justify-center">
                <img
                  src="/images/logos/dcu-logo-new.png"
                  alt="Dublin City University logo"
                  className="max-h-16 max-w-32 object-contain"
                />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">Path: /images/logos/dcu-logo-new.png</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
