"use client"

import { Globe, Zap, Cpu, Rocket, Award, TrendingUp, Users, Shield } from "lucide-react"
import { StatCard } from "@/components/stat-card"
import { MagneticButton } from "@/components/magnetic-button"
import { FadeSlideReveal } from "@/components/fade-slide-reveal"
import { CascadeStagger } from "@/components/cascade-stagger"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const partners = [
  { name: "ShilpoMarket", logo: "https://www.shilpomarket.com/logo.png", color: "#00A4EF" },
  { name: "ShilpoMarket", logo: "https://www.shilpomarket.com/logo.png", color: "#00A4EF" },
  { name: "ShilpoMarket", logo: "https://www.shilpomarket.com/logo.png", color: "#00A4EF" },
  { name: "ShilpoMarket", logo: "https://www.shilpomarket.com/logo.png", color: "#00A4EF" },
  { name: "ShilpoMarket", logo: "https://www.shilpomarket.com/logo.png", color: "#00A4EF" },
  { name: "ShilpoMarket", logo: "https://www.shilpomarket.com/logo.png", color: "#00A4EF" },
  { name: "ShilpoMarket", logo: "https://www.shilpomarket.com/logo.png", color: "#00A4EF" },
  { name: "ShilpoMarket", logo: "https://www.shilpomarket.com/logo.png", color: "#00A4EF" },
  { name: "ShilpoMarket", logo: "https://www.shilpomarket.com/logo.png", color: "#00A4EF" },

  // { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", color: "#4285F4" },
  // { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", color: "#FF9900" },
  // { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg", color: "#0081FB" },
  // { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg", color: "#A2AAAD" },
  // { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg", color: "#E50914" },
  // { name: "Tesla", logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg", color: "#CC0000" },
  // { name: "Spotify", logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg", color: "#1DB954" },
  // { name: "Adobe", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.svg", color: "#FF0000" },
  // { name: "Salesforce", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg", color: "#00A1E0" },
  // { name: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg", color: "#F80000" },
  // { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg", color: "#006699" },
  { name: "Trusted By", logo: "https://trustedcompanylist.com/wp-content/uploads/2026/01/Trusted-Company-List.png", color: "#006699" },
]

const duplicatedPartners = [...partners, ...partners, ...partners]

export function HeroSection() {
  const ref = useRef(null)
  // Attached the ref to the container below to make this trigger
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section className="bg-[#FBFFFF]  p-6 md:p-8 lg:p-10  overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 lg:gap-8 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-5 sm:space-y-6 text-center lg:text-left">
          {/* Main Heading */}
          <FadeSlideReveal delay={0} duration={0.8}>
            <div>
              <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 mb-3 sm:mb-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-[#2b0071] to-[#2b0071] flex items-center justify-center"
                >
                  <Cpu className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </motion.div>
                <span className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-gradient-to-br from-[#2b0071] to-[#2b0071] text-white text-xs sm:text-sm font-semibold border border-primary/20">
                  AI-Powered Innovation
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-none tracking-tight mb-2 sm:mb-3 text-foreground">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-none tracking-tight mb-2 sm:mb-3">
                Building the {" "}
                <span className="bg-gradient-to-br from-[#2b0071] to-[#2b0071] bg-clip-text text-transparent animate-gradient-x">
                  Future
                </span>
              </h1>
              </h1>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-none tracking-tight text-foreground/80">
                of Technology
              </h1>
            </div>
          </FadeSlideReveal>


          {/* Subtitle */}
          <FadeSlideReveal delay={0.1} duration={0.8}>
            <p className="text-sm sm:text-base md:text-lg text-foreground/70 max-w-2xl leading-relaxed">
              Empowering businesses with cutting-edge AI solutions, intelligent automation, and next-generation digital
              experiences that transform possibilities into reality.
            </p>
          </FadeSlideReveal>

          {/* Feature Pills */}
          <FadeSlideReveal delay={0.15} duration={0.8}>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/30">
                <Zap className="w-4 h-4" />
                <span className="text-sm font-medium">Lightning Fast</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/30">
                <Cpu className="w-4 h-4" />
                <span className="text-sm font-medium">AI-Native</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/30">
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">Global Scale</span>
              </div>
            </div>
          </FadeSlideReveal>

          {/* CTA Section with Magnetic Button */}
          <FadeSlideReveal delay={0.2} duration={0.8}>
            <div className="flex flex-wrap gap-3 sm:gap-4 items-center justify-center lg:justify-start">
              <MagneticButton variant="primary" className="bg-gradient-to-br from-[#2b0071] to-[#2b0071] text-white text-sm sm:text-base">
                <Rocket className="w-4 h-4" />
                Start Your Journey
              </MagneticButton>
              <button className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full border-2 border-border/30 font-medium text-sm sm:text-base hover:border-primary/50 hover:bg-gradient-to-br from-[#2b0071] to-[#2b0071] transition-all duration-300 group">
                Watch Demo
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  className="w-2 h-2 rounded-full bg-primary"
                ></motion.div>
              </button>
            </div>
          </FadeSlideReveal>

          {/* Stats Section - Below CTA on Left Side */}
          <motion.div 
            className="grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4 pt-4 sm:pt-6 max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {[
              { 
                icon: Users, 
                value: "500+", 
                label: "Enterprise Clients"
              },
              { 
                icon: TrendingUp, 
                value: "99.9%", 
                label: "Uptime SLA"
              },
              { 
                icon: Award, 
                value: "50M+", 
                label: "Active Users"
              },
              { 
                icon: Shield, 
                value: "24/7", 
                label: "Expert Support"
              },
            ].map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative"
                >
                  <div className="relative h-full p-2 sm:p-2 rounded-xl sm:rounded-2xl border border-border/30 backdrop-blur-sm overflow-hidden transition-all duration-300 group-hover:border-[#2b0071] group-hover:bg-[#2b0071] group-hover:shadow-lg group-hover:shadow-[#2b0071]/30">
                    {/* Icon */}
                    <motion.div 
                      className="absolute top-2 right-2 sm:top-3 sm:right-3 opacity-20 group-hover:opacity-30 transition-opacity"
                      animate={{
                        y: [0, -5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <Icon className="w-5 h-5 sm:w-7 sm:h-7 group-hover:text-white transition-colors" />
                    </motion.div>
                    
                    {/* Content */}
                    <div className="relative flex flex-col items-start">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 bg-gradient-to-br from-[#2b0071] to-[#2b0071] bg-clip-text text-transparent group-hover:text-white transition-all">
                        {stat.value}
                      </h3>
                      <p className="text-[10px] sm:text-xs text-foreground/70 font-medium group-hover:text-white/90 transition-colors">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Right Content - Orange Card */}
        <FadeSlideReveal delay={0.4} duration={0.8}>
          <div className="relative">
            <div className="relative bg-gradient-to-br from-[#2b0071] to-[#2b0071] rounded-[2.5rem] p-6 sm:p-8 w-full lg:w-[400px] xl:w-[500px] aspect-[3/4] overflow-hidden">
              {/* Globe Icon */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-full flex items-center justify-center">
                <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>

              {/* Signature Text */}
              <div className="absolute top-6 left-6 right-16 sm:top-8 sm:left-8 sm:right-20">
                <svg viewBox="0 0 300 80" className="w-full max-w-[180px] sm:max-w-[220px]">
                  <text
                    x="10"
                    y="50"
                    fill="white"
                    fontSize="42"
                    fontFamily="'Brush Script MT', cursive"
                    style={{ fontStyle: "italic" }}
                  >
                    Innovation
                  </text>
                </svg>
              </div>

              {/* Main Image */}
              <div className="absolute inset-0 flex items-end justify-end">
                <img
                  src="/hero-photographer.png"
                  alt="Tech professional"
                  className="h-full w-auto object-contain object-bottom"
                />
              </div>

              {/* Side Icons */}
              <div className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#FFB84D] flex items-center justify-center overflow-hidden border-2 border-white/20">
                  <Cpu className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#FFB84D] overflow-hidden border-2 border-white/20">
                  <img src="/diverse-group.png" alt="Profile" className="w-full h-full object-cover" />
                </div>
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black flex items-center justify-center">
                  <Rocket className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </FadeSlideReveal>
      </div>

      {/* Partners Section - FIXED REF ATTACHED HERE */}
      <div className="mt-10">
        <motion.div
          ref={ref}
          className="w-full overflow-hidden relative py-3 sm:py-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 md:w-28 bg-gradient-to-r from-card/60 via-card/60 to-transparent z-10 pointer-events-none backdrop-blur-sm"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 md:w-28 bg-gradient-to-l from-card/60 via-card/60 to-transparent z-10 pointer-events-none backdrop-blur-sm"></div>

          {/* Scrolling Partners */}
          <motion.div
            className="flex gap-3 sm:gap-5 md:gap-6"
            animate={{
              x: [0, -2400],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {duplicatedPartners.map((partner, index) => (
              <motion.div
                key={`${partner.name}-${index}`}
                className="shrink-0 group cursor-pointer"
                whileHover={{ scale: 1.15, y: -8 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="relative w-32 h-16 sm:w-44 sm:h-20 md:w-52 md:h-24 flex flex-col items-center justify-center px-4 sm:px-6 py-3 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 group-hover:border-[#2b0071]/60 transition-all duration-500 overflow-hidden group-hover:shadow-2xl group-hover:shadow-[#2b0071]/30">
                  
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  />

                  {/* Logo Container */}
                  <motion.div 
                    className="relative w-full h-8 sm:h-10 md:h-10 mb-1 flex items-center justify-center"
                    initial={{ opacity: 0.9 }}
                    whileHover={{ opacity: 1, scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="h-full w-auto object-contain"
                      loading="lazy"
                    />
                  </motion.div>

                  {/* Company Name */}
                  <motion.span 
                    className="relative text-[10px] sm:text-xs font-semibold text-foreground/50 group-hover:text-foreground transition-colors duration-300 z-10"
                    initial={{ opacity: 0.6 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {partner.name}
                  </motion.span>

                  {/* Border glow */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                    style={{
                      boxShadow: `inset 0 0 20px ${partner.color}30, 0 0 30px ${partner.color}20`
                    }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Bottom progress bar */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#2b0071] via-[#2b0071] to-[#2b0071] origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}