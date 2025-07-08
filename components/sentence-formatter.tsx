"use client"

import { useEffect } from "react"
import { splitIntoSentences } from "@/lib/text-utils"

/**
 * Component that automatically formats all paragraphs on the page
 * to display each sentence on a new line with justified alignment
 */
export default function SentenceFormatter() {
  useEffect(() => {
    // Function to process a paragraph
    const processParagraph = (paragraph: HTMLParagraphElement) => {
      // Skip paragraphs that have already been processed
      if (paragraph.dataset.processed === "true") return

      // Skip paragraphs that have already been processed or have special classes
  if (
    paragraph.dataset.processed === "true" || 
    paragraph.classList.contains("keep-words-together") ||
    paragraph.closest(".keep-words-together")
  ) return;

      // Get the text content
      const text = paragraph.textContent || ""

      // Split into sentences
      const sentences = splitIntoSentences(text)

      // If no sentences, skip
      if (sentences.length === 0) return

      // Clear the paragraph
      paragraph.innerHTML = ""

      // Add each sentence as a span
      sentences.forEach((sentence) => {
        const span = document.createElement("span")
        span.className = "sentence"
        span.textContent = sentence
        paragraph.appendChild(span)
      })

      // Mark as processed
      paragraph.dataset.processed = "true"
    }

    // Process all paragraphs
    const paragraphs = document.querySelectorAll("p")
    paragraphs.forEach(processParagraph)

    // Set up a mutation observer to process new paragraphs
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node as HTMLElement

              // Process the element if it's a paragraph
              if (element.tagName === "P") {
                processParagraph(element as HTMLParagraphElement)
              }

              // Process any paragraphs inside the element
              const paragraphs = element.querySelectorAll("p")
              paragraphs.forEach(processParagraph)
            }
          })
        }
      })
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
