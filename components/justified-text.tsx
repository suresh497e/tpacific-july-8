interface JustifiedTextProps {
  text: string
  className?: string
}

export function JustifiedText({ text, className = "" }: JustifiedTextProps) {
  // Function to split text into sentences
  function splitIntoSentences(text: string): string[] {
    if (!text) return []

    // This regex looks for sentence endings (., !, ?) followed by a space or end of string
    const sentenceRegex = /[^.!?]+[.!?]+(\s|$)/g
    const matches = text.match(sentenceRegex)

    if (!matches) return [text]

    return matches.map((s) => s.trim()).filter((s) => s.length > 0)
  }

  const sentences = splitIntoSentences(text)

  return (
    <div className={`justified-text ${className}`}>
      {sentences.map((sentence, index) => (
        <div
          key={index}
          className="sentence text-justify w-full block"
          style={{
            textAlign: "justify",
            textJustify: "inter-word",
            display: "block",
            width: "100%",
            marginBottom: "0.5rem",
          }}
        >
          {sentence}
        </div>
      ))}
    </div>
  )
}
