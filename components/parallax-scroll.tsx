"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface ParallaxScrollProps {
  offset?: number
  className?: string
  children: React.ReactNode
}

export function ParallaxScroll({ offset = 0.5, className = "", children }: ParallaxScrollProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [transformValue, setTransformValue] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return

      const { top } = ref.current.getBoundingClientRect()
      const scrolled = window.scrollY
      const elementOffset = ref.current.offsetTop

      setTransformValue((scrolled - elementOffset) * offset)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [offset])

  return (
    <div ref={ref} className={`parallax ${className}`} style={{ transform: `translateY(${transformValue}px)` }}>
      {children}
    </div>
  )
}
