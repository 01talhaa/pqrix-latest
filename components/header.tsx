"use client"

import { useState } from "react"
import { Search, Menu, X } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import Link from "next/link"

interface HeaderProps {
  searchQuery?: string
  onSearchChange?: (query: string) => void
}

export function Header({ searchQuery = "", onSearchChange }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <>
      <header className="fade-slide-reveal bg-card/80 backdrop-blur-sm rounded-2xl p-4 mb-4 md:mb-6 border border-border/50 hover:shadow-lg transition-all duration-300">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-10 w-10 ambient-motion">
              <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Profile" />
              <AvatarFallback>FM</AvatarFallback>
            </Avatar>
            <button
              className="md:hidden hover-lift"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium hover:text-primary transition-all duration-300 hover-lift cascade-stagger stagger-${index + 1}`}
              >
                {link.name}
              </Link>
            ))}
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              <Input
                type="search"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => onSearchChange?.(e.target.value)}
                className="pl-9 w-64 bg-input/50 border-border/50 focus:border-primary/50 focus:shadow-lg focus:shadow-primary/20 transition-all duration-300"
              />
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden fade-slide-reveal bg-card/80 backdrop-blur-sm rounded-2xl p-4 mb-4 border border-border/50 hover:shadow-lg transition-all duration-300">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium hover:text-primary transition-all duration-300 text-left hover-lift cascade-stagger stagger-${index + 1}`}
              >
                {link.name}
              </Link>
            ))}
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              <Input
                type="search"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => onSearchChange?.(e.target.value)}
                className="pl-9 w-full bg-input/50 border-border/50 focus:border-primary/50 focus:shadow-lg focus:shadow-primary/20 transition-all duration-300"
              />
            </div>
          </nav>
        </div>
      )}
    </>
  )
}
