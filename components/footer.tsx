"use client"

import Link from "next/link"
import { footerLinks } from "@/data/footer"
import { SocialLinks } from "@/components/social-links"
import { motion } from "framer-motion"

export function Footer() {
  const currentYear = new Date().getFullYear()

  // Reusable PQRIX Icon Component
  const PQRIXIcon = ({ size = 48, gradientId = "pqrix-grad-footer" }) => (
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
    <footer className="bg-card/60 backdrop-blur-sm border-t border-border/50 mt-12 md:mt-16 lg:mt-20 relative overflow-hidden">
      {/* Animated background */}
      <motion.div 
        className="absolute inset-0 opacity-30 pointer-events-none"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(245,166,35,0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(255,140,0,0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(245,166,35,0.1) 0%, transparent 50%)'
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      
      <div className="container max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Branding */}
          <motion.div 
            className="col-span-1 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="flex items-center gap-2 justify-center md:justify-start"
              >
                <PQRIXIcon size={48} gradientId="grad-footer" />
                <motion.h3 
                  className="text-2xl font-bold bg-gradient-to-r from-[#2b0071] to-[#5E14E4] bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  style={{ backgroundSize: '200% 200%' }}
                >
                  pqrix
                </motion.h3>
              </motion.div>
              <motion.div>
              </motion.div>
              <motion.p 
                className="text-sm text-muted-foreground mt-1 text-center md:text-left"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Leading tech company delivering innovative solutions
              </motion.p>
              <div className="flex justify-center md:justify-start">
                <SocialLinks size="md" />
              </div>
            </div>
          </motion.div>

          {/* Product Links */}
          <motion.div 
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  whileHover={{ x: 5 }}
                >
                  <Link 
                    href={link.href} 
                    className="text-sm text-foreground/70 hover:text-[#2b0071] transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div 
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  whileHover={{ x: 5 }}
                >
                  <Link 
                    href={link.href} 
                    className="text-sm text-foreground/70 hover:text-[#2b0071] transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Stats - Using #2b0071 for highlights */}
          <motion.div 
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-semibold mb-4">Quick Stats</h4>
            <ul className="space-y-3 text-sm">
              <motion.li 
                className="text-foreground/70"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.span 
                  className="font-semibold text-[#2b0071]"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >250K+</motion.span> Videos
              </motion.li>
              <motion.li 
                className="text-foreground/70"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.span 
                  className="font-semibold text-[#2b0071]"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >800K+</motion.span> Hours Watched
              </motion.li>
              <motion.li 
                className="text-foreground/70"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.span 
                  className="font-semibold text-[#2b0071]"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >50+</motion.span> Projects
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div 
          className="border-t border-border/30 pt-8 mt-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.p 
              className="text-sm text-muted-foreground text-center md:text-left"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              © {currentYear} pqrix. All rights reserved.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                <Link href="#" className="text-sm text-foreground/70 hover:text-[#2b0071] transition-colors">
                  Privacy Policy
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                <Link href="#" className="text-sm text-foreground/70 hover:text-[#2b0071] transition-colors">
                  Terms of Service
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                <Link href="#" className="text-sm text-foreground/70 hover:text-[#2b0071] transition-colors">
                  Cookie Settings
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}