"use client"

import Link from "next/link"
import { footerLinks } from "@/data/footer"
import { SocialLinks } from "@/components/social-links"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card/60 backdrop-blur-sm border-t border-border/50 mt-12 md:mt-16 lg:mt-20">
      <div className="container max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Branding */}
          <div className="col-span-1">
            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-[#F5A623] to-[#FF8C00] bg-clip-text text-transparent">
                  Fons Mans
                </h3>
                <p className="text-sm text-muted-foreground mt-1">Designer based in Rotterdam, The Netherlands</p>
              </div>
              <SocialLinks size="md" />
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-foreground/70 hover:text-[#F5A623] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-foreground/70 hover:text-[#F5A623] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Stats - Using #FF8C00 for highlights */}
          <div>
            <h4 className="font-semibold mb-4">Quick Stats</h4>
            <ul className="space-y-3 text-sm">
              <li className="text-foreground/70">
                <span className="font-semibold text-[#FF8C00]">250K+</span> Videos
              </li>
              <li className="text-foreground/70">
                <span className="font-semibold text-[#FF8C00]">800K+</span> Hours Watched
              </li>
              <li className="text-foreground/70">
                <span className="font-semibold text-[#FF8C00]">50+</span> Projects
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/30 pt-8 mt-8">
          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">© {currentYear} Fons Mans. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-sm text-foreground/70 hover:text-[#F5A623] transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-foreground/70 hover:text-[#F5A623] transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm text-foreground/70 hover:text-[#F5A623] transition-colors">
                Cookie Settings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}