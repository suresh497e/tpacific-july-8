"use client"

import { useState } from "react"

interface UniversityLogoProps {
  src: string
  alt: string
  name?: string
  className?: string
  maxWidth?: string
  maxHeight?: string
}

export function UniversityLogo({
  src,
  alt,
  name,
  className = "max-h-16 w-auto object-contain",
  maxWidth = "64px",
  maxHeight = "64px",
}: UniversityLogoProps) {
  const [error, setError] = useState(false)

  const handleError = () => {
    setError(true)
  }

  return (
    <img
      src={error ? `/placeholder.svg?height=60&width=120&text=${encodeURIComponent(name || alt)}` : src}
      alt={alt}
      className={`${className} ${error ? "border border-dashed border-gray-300 p-2" : ""}`}
      style={{ maxWidth: maxWidth, maxHeight: maxHeight }}
      onError={handleError}
    />
  )
}
