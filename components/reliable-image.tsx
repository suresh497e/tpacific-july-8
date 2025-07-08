"use client"

import { useState } from "react"
import { generateSeoAltText } from "@/lib/image-utils"

interface ReliableImageProps {
  src: string
  alt: string
  className?: string
  fallbackSrc?: string
  imageType?: 'country' | 'university' | 'logo' | 'student' | 'hero' | 'blog' | 'flag'
  seoParams?: {
    name?: string
    country?: string
    location?: string
    topic?: string
    university?: string
  }
}

export function ReliableImage({
  src,
  alt,
  className = "",
  fallbackSrc = "/bustling-university-campus.png",
  imageType,
  seoParams,
}: ReliableImageProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    if (!hasError) {
      setImgSrc(fallbackSrc)
      setHasError(true)
    }
  }

  // Generate SEO-optimized alt text if imageType and seoParams are provided
  const optimizedAlt = imageType && seoParams ? generateSeoAltText(imageType, seoParams) : alt

  return (
    <img
      src={imgSrc || "/placeholder.svg"}
      alt={optimizedAlt}
      className={className}
      onError={handleError}
      // style={{ minHeight: "200px", objectFit: "cover" }}
    />
  )
}

// Keep the default export for backward compatibility
export default ReliableImage
