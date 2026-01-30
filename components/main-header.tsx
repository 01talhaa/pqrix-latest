"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function MainHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "https://app.pqrix.com/projects" },
    { name: "Services", href: "https://app.pqrix.com/services" },
    { name: "Careers", href: "https://app.pqrix.com/careers" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#FBFFFF]/80 backdrop-blur-md border-b border-border/50 transition-all duration-300">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo with Animation */}
            <Link href="/" className="flex items-center gap-3 group">
              <svg className="loader" width={40} height={40} viewBox="0 0 240 240">
                <circle
                  className="loader-ring loader-ring-a"
                  cx={120}
                  cy={120}
                  r={105}
                  fill="none"
                  stroke="#9708F4"
                  strokeWidth={20}
                  strokeDasharray="0 660"
                  strokeDashoffset={-330}
                  strokeLinecap="round"
                />
                <circle
                  className="loader-ring loader-ring-b"
                  cx={120}
                  cy={120}
                  r={35}
                  fill="none"
                  stroke="#5E14E4"
                  strokeWidth={20}
                  strokeDasharray="0 220"
                  strokeDashoffset={-110}
                  strokeLinecap="round"
                />
                <circle
                  className="loader-ring loader-ring-c"
                  cx={85}
                  cy={120}
                  r={70}
                  fill="none"
                  stroke="#9708F4"
                  strokeWidth={20}
                  strokeDasharray="0 440"
                  strokeLinecap="round"
                />
                <circle
                  className="loader-ring loader-ring-d"
                  cx={155}
                  cy={120}
                  r={70}
                  fill="none"
                  stroke="#5E14E4"
                  strokeWidth={20}
                  strokeDasharray="0 440"
                  strokeLinecap="round"
                />
              </svg>
              <span className="text-2xl font-bold bg-gradient-to-r from-[#2b0071] to-[#5E14E4] bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                PQRIX
              </span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden hover:scale-105 transition-transform duration-300 p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-foreground hover:text-[#2b0071] transition-all duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#2b0071] to-[#5E14E4] group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: mobileMenuOpen ? 1 : 0,
          height: mobileMenuOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden fixed top-[73px] left-0 right-0 z-40 bg-[#FBFFFF]/95 backdrop-blur-md border-b border-border/50 overflow-hidden"
      >
        <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-foreground hover:text-[#9708F4] transition-all duration-300 py-2"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </motion.div>

      <style jsx>{`
        .loader-ring {
          animation: ringA 2s linear infinite;
        }

        .loader-ring-a {
          stroke: #9708F4;
        }

        .loader-ring-b {
          animation-name: ringB;
          stroke: #5E14E4;
        }

        .loader-ring-c {
          animation-name: ringC;
          stroke: #9708F4;
        }

        .loader-ring-d {
          animation-name: ringD;
          stroke: #5E14E4;
        }

        @keyframes ringA {
          from, 4% {
            stroke-dasharray: 0 660;
            stroke-width: 20;
            stroke-dashoffset: -330;
          }
          12% {
            stroke-dasharray: 60 600;
            stroke-width: 30;
            stroke-dashoffset: -335;
          }
          32% {
            stroke-dasharray: 60 600;
            stroke-width: 30;
            stroke-dashoffset: -595;
          }
          40%, 54% {
            stroke-dasharray: 0 660;
            stroke-width: 20;
            stroke-dashoffset: -660;
          }
          62% {
            stroke-dasharray: 60 600;
            stroke-width: 30;
            stroke-dashoffset: -665;
          }
          82% {
            stroke-dasharray: 60 600;
            stroke-width: 30;
            stroke-dashoffset: -925;
          }
          90%, to {
            stroke-dasharray: 0 660;
            stroke-width: 20;
            stroke-dashoffset: -990;
          }
        }

        @keyframes ringB {
          from, 12% {
            stroke-dasharray: 0 220;
            stroke-width: 20;
            stroke-dashoffset: -110;
          }
          20% {
            stroke-dasharray: 20 200;
            stroke-width: 30;
            stroke-dashoffset: -115;
          }
          40% {
            stroke-dasharray: 20 200;
            stroke-width: 30;
            stroke-dashoffset: -195;
          }
          48%, 62% {
            stroke-dasharray: 0 220;
            stroke-width: 20;
            stroke-dashoffset: -220;
          }
          70% {
            stroke-dasharray: 20 200;
            stroke-width: 30;
            stroke-dashoffset: -225;
          }
          90% {
            stroke-dasharray: 20 200;
            stroke-width: 30;
            stroke-dashoffset: -305;
          }
          98%, to {
            stroke-dasharray: 0 220;
            stroke-width: 20;
            stroke-dashoffset: -330;
          }
        }

        @keyframes ringC {
          from {
            stroke-dasharray: 0 440;
            stroke-width: 20;
            stroke-dashoffset: 0;
          }
          8% {
            stroke-dasharray: 40 400;
            stroke-width: 30;
            stroke-dashoffset: -5;
          }
          28% {
            stroke-dasharray: 40 400;
            stroke-width: 30;
            stroke-dashoffset: -175;
          }
          36%, 58% {
            stroke-dasharray: 0 440;
            stroke-width: 20;
            stroke-dashoffset: -220;
          }
          66% {
            stroke-dasharray: 40 400;
            stroke-width: 30;
            stroke-dashoffset: -225;
          }
          86% {
            stroke-dasharray: 40 400;
            stroke-width: 30;
            stroke-dashoffset: -395;
          }
          94%, to {
            stroke-dasharray: 0 440;
            stroke-width: 20;
            stroke-dashoffset: -440;
          }
        }

        @keyframes ringD {
          from, 8% {
            stroke-dasharray: 0 440;
            stroke-width: 20;
            stroke-dashoffset: 0;
          }
          16% {
            stroke-dasharray: 40 400;
            stroke-width: 30;
            stroke-dashoffset: -5;
          }
          36% {
            stroke-dasharray: 40 400;
            stroke-width: 30;
            stroke-dashoffset: -175;
          }
          44%, 50% {
            stroke-dasharray: 0 440;
            stroke-width: 20;
            stroke-dashoffset: -220;
          }
          58% {
            stroke-dasharray: 40 400;
            stroke-width: 30;
            stroke-dashoffset: -225;
          }
          78% {
            stroke-dasharray: 40 400;
            stroke-width: 30;
            stroke-dashoffset: -395;
          }
          86%, to {
            stroke-dasharray: 0 440;
            stroke-width: 20;
            stroke-dashoffset: -440;
          }
        }
      `}</style>
    </>
  )
}
