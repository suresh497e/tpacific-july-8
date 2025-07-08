"use client"

import { useState, useEffect } from "react"

interface DebugImageProps {
  src: string
  alt: string
  className?: string
}

export function DebugImage({ src, alt, className }: DebugImageProps) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.src = src
    img.onload = () => setLoaded(true)
    img.onerror = () => setError(true)
  }, [src])

  return (
    <div className={`relative ${className}`}>
      <img
        src={src || "/placeholder.svg"}
        alt={alt}
        className={`max-h-16 w-auto grayscale hover:grayscale-0 transition-all ${error ? "border-2 border-red-500" : ""}`}
      />
      {error && (
        <div className="absolute top-0 left-0 bg-red-100 text-red-800 text-xs p-1 rounded">Failed to load: {src}</div>
      )}
    </div>
  )
}
