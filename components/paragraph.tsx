import type React from "react"
import SentenceSplitter from "./sentence-splitter"

interface ParagraphProps {
  children: React.ReactNode
  className?: string
}

/**
 * A paragraph component that automatically splits its text content into sentences
 */
export default function Paragraph({ children, className = "" }: ParagraphProps) {
  // If children is a string, split it into sentences
  if (typeof children === "string") {
    return (
      <p className={className}>
        <SentenceSplitter text={children} />
      </p>
    )
  }

  // Otherwise, just render the children as is
  return <p className={className}>{children}</p>
}
