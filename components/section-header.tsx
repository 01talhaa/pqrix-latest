import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  description?: string
  centered?: boolean
  className?: string
}

export function SectionHeader({ title, subtitle, description, centered = true, className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-12 md:mb-16", centered && "text-center", className)}>
      {subtitle && (
        <p className="text-sm md:text-base font-semibold text-primary mb-2 uppercase tracking-wider"></p>
      )}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight bg-gradient-to-br from-[#2b0071] to-[#5E14E4] bg-clip-text text-transparent">{title}</h2>
      {description && (
        <p className="text-base md:text-lg text-foreground/70 max-w-2xl leading-relaxed mx-auto">{description}</p>
      )}
    </div>
  )
}
