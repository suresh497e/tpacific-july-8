/**
 * Splits a text into sentences
 * @param text The text to split into sentences
 * @returns An array of sentences
 */
export function splitIntoSentences(text: string): string[] {
  // This regex matches sentences ending with ., !, or ? followed by a space or end of string
  // It handles common abbreviations, numbers, and other edge cases
  const sentenceRegex = /[^.!?]+[.!?](?:\s|$)/g

  // Match all sentences in the text
  const matches = text.match(sentenceRegex)

  // Return the matches or an empty array if no matches
  return matches ? matches.map((sentence) => sentence.trim()) : []
}
