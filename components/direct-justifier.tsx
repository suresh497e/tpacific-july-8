"use client"

import { useEffect } from "react"

export function DirectJustifier() {
  useEffect(() => {
    // Function to split text into sentences
    function splitIntoSentences(text) {
      if (!text || typeof text !== "string") return []

      // This regex looks for sentence endings (., !, ?) followed by a space or end of string
      const sentenceRegex = /[^.!?]+[.!?]+(\s|$)/g
      const matches = text.match(sentenceRegex)

      if (!matches) return [text]

      return matches.map((s) => s.trim()).filter((s) => s.length > 0)
    }

    // Function to process a paragraph
    function processParagraph(paragraph) {
      // Skip if already processed or excluded
      if (
        paragraph.classList.contains("processed") ||
        paragraph.classList.contains("no-justify") ||
        paragraph.closest(".no-justify")
      ) {
        return
      }

      // Get text content
      const text = paragraph.textContent || ""

      // Split into sentences
      const sentences = splitIntoSentences(text)

      // Only process if there are sentences
      if (sentences.length > 0) {
        // Clear paragraph
        paragraph.innerHTML = ""
        paragraph.classList.add("processed")

        // Add each sentence
        sentences.forEach((sentence) => {
          const span = document.createElement("span")
          span.textContent = sentence
          span.className = "sentence"
          paragraph.appendChild(span)
        })
      }
    }

    // Process all paragraphs
    function processAllParagraphs() {
      const paragraphs = document.querySelectorAll("p")
      paragraphs.forEach((paragraph) => {
        processParagraph(paragraph)
      })
    }

    // Initial processing
    processAllParagraphs()

    // Set up observer for dynamic content
    const observer = new MutationObserver((mutations) => {
      let shouldProcess = false

      mutations.forEach((mutation) => {
        if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
          shouldProcess = true
        }
      })

      if (shouldProcess) {
        processAllParagraphs()
      }
    })

    // Start observing
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    })

    // Clean up
    return () => {
      observer.disconnect()
    }
  }, [])

  return null
}
