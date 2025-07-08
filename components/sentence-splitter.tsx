import { splitIntoSentences } from "@/lib/text-utils"

interface SentenceSplitterProps {
  text: string
  className?: string
}

/**
 * Component that splits text into sentences and renders each on a new line
 */
export default function SentenceSplitter({ text, className = "" }: SentenceSplitterProps) {
  const sentences = splitIntoSentences(text)

  if (sentences.length === 0) {
    return <span className={className}>{text}</span>
  }

  return (
    <>
      {sentences.map((sentence, index) => (
        <span key={index} className={`sentence ${className}`}>
          {sentence}
        </span>
      ))}
    </>
  )
}
