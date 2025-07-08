import React from "react"
import Paragraph from "@/components/paragraph"

/**
 * Higher-order component that transforms all p elements to use sentence splitting
 */
export function withSentenceSplitting<P extends object>(Component: React.ComponentType<P>): React.FC<P> {
  return (props: P) => {
    return (
      <SentenceSplittingProvider>
        <Component {...props} />
      </SentenceSplittingProvider>
    )
  }
}

/**
 * Context provider that transforms all p elements to use sentence splitting
 */
function SentenceSplittingProvider({ children }: { children: React.ReactNode }) {
  // Clone the children and replace all p elements with our Paragraph component
  const transformChildren = (children: React.ReactNode): React.ReactNode => {
    return React.Children.map(children, (child) => {
      // If the child is not a valid element, return it as is
      if (!React.isValidElement(child)) {
        return child
      }

      // If the child is a p element, replace it with our Paragraph component
      if (child.type === "p") {
        return <Paragraph {...child.props} />
      }

      // If the child has children, transform them recursively
      if (child.props.children) {
        return React.cloneElement(child, {
          ...child.props,
          children: transformChildren(child.props.children),
        })
      }

      // Otherwise, return the child as is
      return child
    })
  }

  return <>{transformChildren(children)}</>
}
