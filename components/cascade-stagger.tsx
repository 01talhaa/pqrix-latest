"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface CascadeStaggerProps {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
}

export function CascadeStagger({ children, delay = 0, duration = 0.7, className = "" }: CascadeStaggerProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && ref.current) {
          ref.current.classList.add("cascade-stagger")
          observer.unobserve(ref.current)
        }
      },
      { threshold: 0.15 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`opacity-0 ${className}`}
      style={{
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    >
      {children}
    </div>
  )
}
