"use client"

import React, { useEffect, useState } from "react"

interface ScrambleHoverProps {
  text: string
  scrambleSpeed?: number
  maxIterations?: number
  useOriginalCharsOnly?: boolean
  className?: string
  isHovering?: boolean
  setIsHovering?: (hovering: boolean) => void
  characters?: string
}

export default function ScrambleHover({
  text,
  scrambleSpeed = 50,
  maxIterations = 10,
  useOriginalCharsOnly = true,
  className = "",
  isHovering = false,
  setIsHovering,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()",
}: ScrambleHoverProps) {
  const [displayText, setDisplayText] = useState(text)

  useEffect(() => {
    if (!isHovering) {
      setDisplayText(text)
      return
    }

    let iteration = 0
    const interval = setInterval(() => {
      setDisplayText((prev) =>
        prev
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return text[index]
            }

            if (useOriginalCharsOnly) {
              return text[Math.floor(Math.random() * text.length)]
            }

            return characters[Math.floor(Math.random() * characters.length)]
          })
          .join(""),
      )

      if (iteration >= text.length) {
        clearInterval(interval)
      }

      iteration += 1 / maxIterations
    }, scrambleSpeed)

    return () => clearInterval(interval)
  }, [isHovering, text, scrambleSpeed, maxIterations, useOriginalCharsOnly, characters])

  return (
    <span
      className={className}
      onMouseEnter={() => setIsHovering?.(true)}
      onMouseLeave={() => setIsHovering?.(false)}
    >
      {displayText}
    </span>
  )
}
