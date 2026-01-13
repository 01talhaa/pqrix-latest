"use client"

import type React from "react"
import { cn } from "@/lib/utils"

interface AnimatedCardProps {
  children: React.ReactNode
  className?: string
  hoverEffect?: "lift" | "glow" | "scale" | "none"
}

export function AnimatedCard({ children, className, hoverEffect = "lift" }: AnimatedCardProps) {
  const effectClasses = {
    lift: "hover:-translate-y-2 hover:shadow-2xl",
    glow: "hover:shadow-lg hover:shadow-primary/20",
    scale: "hover:scale-105",
    none: "",
  }

  return (
    <div
      className={cn(
        "bg-card/60 backdrop-blur-sm rounded-2xl p-6 border border-border/50 transition-all duration-300 ease-out",
        effectClasses[hoverEffect],
        className,
      )}
    >
      {children}
    </div>
  )
}
