"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"

interface StatsCounterProps {
  value: number
  label: string
  suffix?: string
  icon?: React.ReactNode
}

export default function StatsCounter({ value, label, suffix = "", icon }: StatsCounterProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  useEffect(() => {
    if (inView) {
      countRef.current = 0
      const duration = 2000 // ms
      const frameDuration = 1000 / 60 // 60fps
      const totalFrames = Math.round(duration / frameDuration)
      const increment = value / totalFrames

      let frame = 0
      const counter = setInterval(() => {
        frame++
        const progress = frame / totalFrames
        // Use easeOutQuad for smoother animation
        const easedProgress = -progress * (progress - 2)
        countRef.current = Math.min(Math.ceil(easedProgress * value), value)
        setCount(countRef.current)

        if (frame === totalFrames) {
          clearInterval(counter)
        }
      }, frameDuration)

      return () => clearInterval(counter)
    }
  }, [inView, value])

  return (
    <Card className="bg-background border-border/50" ref={ref}>
      <CardContent className="p-6 text-center">
        <div className="flex justify-center mb-4">{icon}</div>
        <div className="font-galano text-4xl font-bold">
          {count}
          {suffix}
        </div>
        <p className="text-muted-foreground mt-2">{label}</p>
      </CardContent>
    </Card>
  )
}
