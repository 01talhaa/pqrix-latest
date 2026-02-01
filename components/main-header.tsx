"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

export function MainHeader() {
  const [scrolled, setScrolled] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "https://app.pqrix.com/projects", label: "Projects" },
    { href: "https://app.pqrix.com/services", label: "Services" },
    { href: "https://app.pqrix.com/careers", label: "Careers" },
    { href: "https://app.pqrix.com/insights", label: "Insights" },
  ]

  // Reusable PQRIX Icon Component
  const PQRIXIcon = ({ size = 40, gradientId = "pqrix-grad" }) => (
    <svg width={size} height={size} viewBox="0 0 100 100" className="drop-shadow-lg">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2b0071" stopOpacity={0.9} />
          <stop offset="50%" stopColor="#5E14E4" stopOpacity={0.85} />
          <stop offset="100%" stopColor="#2b0071" stopOpacity={0.9} />
        </linearGradient>
      </defs>
      <rect x="10" y="10" width="80" height="80" rx="12" fill={`url(#${gradientId})`}/>
      <path d="M 30 30 L 30 70 L 40 70 L 40 55 L 57 55 C 65 55 70 50 70 42.5 C 70 35 65 30 57 30 Z M 40 38 L 55 38 C 60 38 62 40 62 42.5 C 62 45 60 47 55 47 L 40 47 Z" fill="white" />
    </svg>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 pb-4 transition-all duration-700">
      <div className="container mx-auto max-w-7xl">
        {/* Mobile/Tablet: Simple Header with Icon Logo + Menu (below 1100px) */}
        <div className="xl:hidden px-4 flex items-center justify-between min-h-[60px]">
          {/* Icon Logo Only */}
          <Link href="/" className="flex items-center gap-2">
            <PQRIXIcon size={40} gradientId="grad-mobile" />
            <span className="text-xl font-black tracking-tight bg-gradient-to-br from-[#2b0071] to-[#5E14E4] bg-clip-text text-transparent">
              PQRIX
            </span>
          </Link>
          
          {/* Menu Button */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="border-[#5E14E4]/30 bg-white text-black hover:bg-gray-100 hover:border-[#5E14E4]/50 rounded-full transition-all duration-300 shadow-lg shadow-[#5E14E4]/10"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="border-[#5E14E4]/20 p-0 w-80 flex flex-col bg-gradient-to-b from-white via-gray-50 to-white backdrop-blur-xl"
            >
              {/* Brand Header */}
              <div className="flex items-center gap-2 px-6 py-6 border-b border-[#5E14E4]/20">
                <PQRIXIcon size={40} gradientId="grad-menu" />
                <span className="text-xl font-black tracking-tight bg-gradient-to-br from-[#2b0071] to-[#5E14E4] bg-clip-text text-transparent">
                  PQRIX
                </span>
              </div>

              {/* Nav Links */}
              <nav className="flex flex-col gap-1 mt-4 px-3 text-gray-700">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="flex items-center gap-3 px-4 py-3.5 rounded-xl hover:bg-[#5E14E4]/10 hover:text-black transition-all duration-300 group"
                  >
                    <span className="text-sm font-semibold">{l.label}</span>
                    <div className="ml-auto w-0 h-0.5 bg-[#5E14E4] group-hover:w-6 transition-all duration-300 shadow-[0_0_8px_rgba(94,20,228,0.5)]" />
                  </a>
                ))}
              </nav>

              {/* CTA at Bottom */}
              <div className="mt-auto border-t border-[#5E14E4]/20 p-6">
                <Link href="/contact">
                  <Button
                    className="w-full bg-gradient-to-r from-[#2b0071] to-[#5E14E4] hover:from-[#3a0095] hover:to-[#7118ff] text-white font-bold rounded-full py-6 shadow-[0_8px_24px_rgba(94,20,228,0.4)] hover:shadow-[0_12px_32px_rgba(94,20,228,0.6)] transition-all duration-500 hover:scale-105 border border-[#5E14E4]/20"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop/Laptop: Full Header with Animations (1100px and above) */}
        <div className="hidden xl:block relative min-h-[60px]">
          {/* Background Pill - Morphs smoothly with responsive positioning */}
          <div 
            className="absolute inset-0 rounded-full transition-all duration-700 ease-out"
            style={{
              background: scrolled 
                ? 'rgba(0, 0, 0, 0)' 
                : 'rgba(0, 0, 0, 0)',
              backdropFilter: scrolled ? 'blur(32px) saturate(180%)' : 'blur(20px) saturate(150%)',
              WebkitBackdropFilter: scrolled ? 'blur(32px) saturate(180%)' : 'blur(20px) saturate(150%)',
              border: scrolled 
                ? '1px solid rgba(94, 20, 228, 0.3)' 
                : '1px solid rgba(94, 20, 228, 0.15)',
              boxShadow: scrolled 
                ? '0 8px 32px rgba(94, 20, 228, 0.2)' 
                : '0 4px 16px rgba(94, 20, 228, 0.08)',
              left: scrolled ? 'clamp(10%, 16%, 18%)' : 'clamp(12%, 20%, 22%)',
              right: scrolled ? 'clamp(8%, 12%, 14%)' : 'clamp(12%, 20%, 22%)',
            }}
          />

          {/* Logo - Slides from outside left to inside with responsive scaling */}
          <div 
            className="absolute z-10 flex items-center gap-1 transition-all duration-700 ease-out"
            style={{
              transform: scrolled 
                ? 'translateX(clamp(120%, 180%, 200%)) scale(1)' 
                : 'translateX(-40%) scale(1.3)',
              paddingLeft: scrolled ? '1rem' : '0',
              top: '50%',
              marginTop: '-15px',
              left: '1rem',
            }}
          >
            <Link href="/" className="flex items-center gap-2">
              <PQRIXIcon size={32} gradientId="grad-desktop" />
              <span className="text-xl font-black tracking-tight bg-gradient-to-br from-[#2b0071] to-[#5E14E4] bg-clip-text text-transparent whitespace-nowrap">
                PQRIX
              </span>
            </Link>
          </div>

          {/* Desktop Nav - Always visible with enhanced styling and responsive gap */}
          <nav 
            className="absolute inset-y-0 left-1/2 flex items-center xl:gap-6 2xl:gap-8 text-sm font-semibold transition-all duration-700 ease-out"
            style={{
              opacity: scrolled ? 1 : 0.85,
              transform: scrolled 
                ? 'translateX(-50%) scale(1.0)' 
                : 'translateX(-50%) scale(1.0)',
            }}
          >
            {links.map((l) => (
              <a 
                key={l.href} 
                href={l.href} 
                className="relative text-gray-700 hover:text-black transition-all duration-300 group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#2b0071] to-[#5E14E4] group-hover:w-full transition-all duration-300 shadow-[0_0_8px_rgba(94,20,228,0.5)]" />
              </a>
            ))}
          </nav>

          {/* CTA Button - Slides from outside right to inside with responsive sizing */}
          <div 
            className="absolute z-10 flex items-center gap-3 transition-all duration-700 ease-out"
            style={{
              transform: scrolled 
                ? 'translateX(clamp(-90%, -100%, -110%)) scale(1)'
                : 'translateX(40%) scale(1.05)',
              paddingRight: scrolled ? '1.2rem' : '0',
              top: '50%',
              marginTop: '-20px',
              right: '1rem',
            }}
          >
            <Link href="/contact"> 
              <Button
                className="relative overflow-hidden bg-gradient-to-r from-[#2b0071] to-[#5E14E4] hover:from-[#3a0095] hover:to-[#7118ff] text-white font-bold px-8 py-5 rounded-full text-sm shadow-[0_8px_24px_rgba(94,20,228,0.4)] hover:shadow-[0_12px_32px_rgba(94,20,228,0.6)] transition-all duration-500 hover:scale-105 border border-[#5E14E4]/20"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Contact Us
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#5E14E4]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}