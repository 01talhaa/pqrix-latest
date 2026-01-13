import type React from "react"
import { cn } from "@/lib/utils"

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  id?: string
  bgGradient?: string
}

export function SectionWrapper({ children, className, id, bgGradient }: SectionWrapperProps) {
  return (
    <section id={id} className={cn("relative w-full py-12 md:py-16 lg:py-20 overflow-hidden", className)}>
      {bgGradient && <div className={cn("absolute inset-0 -z-10", bgGradient)} aria-hidden="true" />}
      <div className="relative z-10 container max-w-7xl mx-auto px-4 md:px-6 lg:px-8">{children}</div>
    </section>
  )
}
