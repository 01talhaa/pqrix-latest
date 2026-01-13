"use client"

import type React from "react"

import { useRef, useState } from "react"

interface Card3DProps {
  children: React.ReactNode
  className?: string
}

export function Card3D({ children, className = "" }: Card3DProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [style, setStyle] = useState({ rotateX: 0, rotateY: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const rotateY = ((mouseX - centerX) / centerX) * 10
    const rotateX = -((mouseY - centerY) / centerY) * 10

    setStyle({ rotateX, rotateY })
  }

  const handleMouseLeave = () => {
    setStyle({ rotateX: 0, rotateY: 0 })
  }

  return (
    <div
      ref={ref}
      className={`transition-transform duration-300 ${className}`}
      style={{
        perspective: "1000px",
        transform: `rotateX(${style.rotateX}deg) rotateY(${style.rotateY}deg)`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  )
}
