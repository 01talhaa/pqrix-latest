"use client"

import type { ReactNode } from "react"

interface InfinityScrollProps {
  children: ReactNode[]
  direction?: "horizontal" | "vertical"
  speed?: number
  className?: string
}

export function InfinityScroll({
  children,
  direction = "horizontal",
  speed = 30,
  className = "",
}: InfinityScrollProps) {
  const isHorizontal = direction === "horizontal"

  return (
    <div className={`overflow-hidden ${className}`} style={{ perspective: "1000px" }}>
      <div
        className={isHorizontal ? "scroll-horizontal flex gap-6" : "scroll-vertical flex flex-col gap-6"}
        style={{
          animationDuration: `${speed}s`,
          width: isHorizontal ? "200%" : "auto",
        }}
      >
        {children}
        {children}
      </div>
    </div>
  )
}
