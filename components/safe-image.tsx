import { generateSeoAltText } from "@/lib/image-utils"

export function SafeImage({
  src,
  alt,
  className = "",
  width,
  height,
  imageType,
  seoParams,
}: {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
  imageType?: 'country' | 'university' | 'logo' | 'student' | 'hero' | 'blog' | 'flag'
  seoParams?: {
    name?: string
    country?: string
    location?: string
    topic?: string
    university?: string
  }
}) {
  // Generate SEO-optimized alt text if imageType and seoParams are provided
  const optimizedAlt = imageType && seoParams ? generateSeoAltText(imageType, seoParams) : alt
  
  // No event handlers, just a simple img element
  return <img src={src || "/placeholder.svg"} alt={optimizedAlt} className={className} width={width} height={height} />
}
