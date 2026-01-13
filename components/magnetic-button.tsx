"use client"

import { useRef, useEffect, useState } from "react"
import type { ReactNode } from "react"

interface MagneticButtonProps {
  children: ReactNode
  onClick?: () => void
  className?: string
  variant?: "primary" | "secondary"
}

export function MagneticButton({ children, onClick, className = "", variant = "primary" }: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const button = buttonRef.current
    if (!button) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const distX = Math.max(-6, Math.min(6, (e.clientX - centerX) * 0.15))
      const distY = Math.max(-6, Math.min(6, (e.clientY - centerY) * 0.15))

      setMousePos({ x: distX, y: distY })
      button.style.transform = `translate(${distX}px, ${distY}px)`
    }

    const handleMouseLeave = () => {
      setMousePos({ x: 0, y: 0 })
      button.style.transform = "translate(0, 0)"
    }

    button.addEventListener("mousemove", handleMouseMove)
    button.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      button.removeEventListener("mousemove", handleMouseMove)
      button.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  const baseStyles =
    "relative px-8 py-3 rounded-lg font-semibold text-sm transition-all duration-300 overflow-hidden group"
  const variants = {
    primary: "bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/50 micro-glow",
    secondary: "bg-secondary text-secondary-foreground hover:shadow-lg hover:shadow-secondary/50",
  }

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} magnetic-btn ${className}`}
      style={{ transition: "transform 0.15s ease-out" }}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
    </button>
  )
}
