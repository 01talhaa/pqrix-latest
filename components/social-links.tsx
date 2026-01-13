import { Youtube, Instagram, Facebook, Twitter } from "lucide-react"

interface SocialLinksProps {
  size?: "sm" | "md" | "lg"
  className?: string
}

const iconSizes = {
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-6 h-6",
}

const containerSizes = {
  sm: "w-10 h-10",
  md: "w-12 h-12",
  lg: "w-14 h-14",
}

export function SocialLinks({ size = "md", className }: SocialLinksProps) {
  const links = [
    { icon: Youtube, label: "YouTube", href: "#" },
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Facebook, label: "Facebook", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
  ]

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className={`${containerSizes[size]} rounded-full border-2 border-foreground/20 flex items-center justify-center hover:border-foreground/40 hover:bg-muted/50 transition-all`}
          aria-label={link.label}
        >
          <link.icon className={iconSizes[size]} />
        </a>
      ))}
    </div>
  )
}
