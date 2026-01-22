"use client"

import { Globe, Zap, Cpu, Rocket, Award, TrendingUp, Users, Shield } from "lucide-react"
import { StatCard } from "@/components/stat-card"
import { MagneticButton } from "@/components/magnetic-button"
import { FadeSlideReveal } from "@/components/fade-slide-reveal"
import { CascadeStagger } from "@/components/cascade-stagger"
import AnimatedJourneyButton from "@/components/animated-journey-button"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import AnimatedExpertButton from "./animated-expert-button"
import { ScrollVelocityContainer, ScrollVelocityRow } from "@/components/ui/scroll-based-velocity"

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
    <section className="bg-[#FBFFFF] p-10 overflow-hidden relative">

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 lg:gap-8 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-4 sm:space-y-4 text-center lg:text-left">
          {/* Main Heading */}
          <FadeSlideReveal delay={0} duration={0.8}>
            <div>
              <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 mb-3 sm:mb-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-[#2b0071] to-[#5E14E4] flex items-center justify-center"
                >
                  <Cpu className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </motion.div>
                <span className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-gradient-to-br from-[#2b0071] to-[#5E14E4] text-white text-xs sm:text-sm font-semibold border border-primary/20">
                  AI-Powered Innovation
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-none tracking-tight mb-2 sm:mb-3 text-foreground">
                Building the {" "}
                <span className="bg-gradient-to-br from-[#2b0071] to-[#5E14E4] bg-clip-text text-transparent animate-gradient-x">
                  Future
                </span>
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
          {/* <FadeSlideReveal delay={0.15} duration={0.8}>
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
          </FadeSlideReveal> */}

          {/* CTA Section with Magnetic Button */}
          <FadeSlideReveal delay={0.2} duration={0.8}>
            <div className="flex flex-wrap gap-3 sm:gap-4 items-center justify-center lg:justify-start">
              <AnimatedJourneyButton />
              {/* <button className="flex items-center gap-2 px-4 sm:px-6 py-3 sm:py-4 rounded-full border-2 border-border/30 font-medium text-sm sm:text-base hover:border-primary/50 hover:bg-gradient-to-br from-[#2b0071] to-[#5E14E4] transition-all hover:text-white duration-300 group">
                talk to an expert 
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  className="w-2 h-2 rounded-full bg-primary"
                ></motion.div>
              </button> */}
              
              {/* <AnimatedExpertButton /> */}
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
                  <div className="relative h-full p-2 sm:p-2 rounded-xl sm:rounded-2xl border border-border/30 backdrop-blur-sm overflow-hidden transition-all duration-300 group-hover:border-[#2b0071] group-hover:bg-gradient-to-br group-hover:from-[#2b0071] group-hover:to-[#5E14E4] group-hover:shadow-lg group-hover:shadow-[#2b0071]/30">
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
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 bg-gradient-to-br from-[#2b0071] to-[#5E14E4] bg-clip-text text-transparent group-hover:text-white transition-all">
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
        <FadeSlideReveal delay={0.2} duration={0.8}>
          <div className="relative">
            <div className="relative bg-gradient-to-br from-[#2b0071] to-[#5E14E4] rounded-[2.5rem] p-6 sm:p-8 w-full lg:w-[400px] xl:w-[500px] aspect-[6/4] overflow-hidden">
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
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#2b0071] flex items-center justify-center overflow-hidden border-2 border-white/20">
                  <Cpu className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#2b0071] overflow-hidden border-2 border-white/20">
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

      {/* Partners Section - ScrollVelocity Animation */}
      <div className="mt-10 pt-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <ScrollVelocityContainer className="w-full">
            <ScrollVelocityRow baseVelocity={1} direction={1} className="py-4">
              {partners.map((partner, idx) => (
                <div
                  key={`row1-${idx}`}
                  className="mx-4 inline-flex group cursor-pointer"
                >
                  <div className="relative w-48 h-30 flex items-center justify-center px-6 py-4 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#2b0071]/40 transition-all duration-200 overflow-hidden mr-2 sm:mr-10 ml-2 sm:ml-10">
                    {/* Gradient Background on Hover */}
                    {/* <div className="absolute inset-0 bg-gradient-to-br from-[#2b0071]/5 to-[#5E14E4]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" /> */}
                    
                    {/* Logo */}
                    <div className="flex flex-col items-center gap-0">
                      <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="relative z-10 h-20 w-auto object-contain  group-hover:grayscale-0 transition-all duration-300"
                      loading="lazy"
                    />
                    <p className="text-gray-600 font-bold">
                      {partner.name}
                    </p>
                    </div>
                    
                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                  </div>
                </div>
              ))}
            </ScrollVelocityRow>
            

          </ScrollVelocityContainer>
          
          {/* Gradient Overlays */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#FBFFFF] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#FBFFFF] to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}