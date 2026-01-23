"use client"

import { Globe, Zap, Cpu, Rocket, Award, TrendingUp, Users, Shield, X, Star } from "lucide-react";
import { StatCard } from "@/components/stat-card"
import { MagneticButton } from "@/components/magnetic-button"
import { FadeSlideReveal } from "@/components/fade-slide-reveal"
import { CascadeStagger } from "@/components/cascade-stagger"
import AnimatedJourneyButton from "@/components/animated-journey-button"
import { useRef, useState } from "react"
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
  const [showAnnouncement, setShowAnnouncement] = useState(true)
  // Attached the ref to the container below to make this trigger
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section className="bg-white overflow-hidden relative">
      {/* 3D Perspective Grid Floor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Perspective container */}
        <div 
          className="absolute inset-0"
          style={{
            perspective: '1200px',
            perspectiveOrigin: '50% 50%'
          }}
        >
          {/* 3D Grid Floor */}
          <div 
            className="absolute left-0 right-0 bottom-0 h-full opacity-100"
            style={{
              transform: 'rotateX(20deg) translateZ(200px)',
              transformStyle: 'preserve-3d',
              backgroundImage: `
                linear-gradient(to right, rgba(94, 20, 228, 0.08) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(94, 20, 228, 0.08) 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px',
              backgroundPosition: 'center center'
            }}
          />
          
          {/* Horizontal grid lines with fade */}
          {/* <div 
            className="absolute left-0 right-0 bottom-0 h-full"
            style={{
              transform: 'rotateX(75deg) translateZ(-200px)',
              transformStyle: 'preserve-3d',
              backgroundImage: `
                linear-gradient(to right, rgba(43, 0, 113, 0.12) 2px, transparent 2px),
                linear-gradient(to bottom, rgba(43, 0, 113, 0.12) 2px, transparent 2px)
              `,
              backgroundSize: '160px 160px',
              backgroundPosition: 'center center',
              opacity: 0.3
            }}
          /> */}
        </div>
        
        {/* Gradient fade at horizon */}
        {/* <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.8) 40%, transparent 70%)'
          }}
        /> */}
      </div>

      {/* Radial Gradient Mesh Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        {/* Multiple soft radial gradients */}
        {/* <div 
          className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(94, 20, 228, 0.08) 0%, rgba(43, 0, 113, 0.04) 30%, transparent 70%)',
            filter: 'blur(60px)'
          }}
        /> */}
        {/* <div 
          className="absolute top-[10%] right-[-5%] w-[60%] h-[60%] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(147, 51, 234, 0.06) 0%, rgba(94, 20, 228, 0.03) 40%, transparent 70%)',
            filter: 'blur(50px)'
          }}
        /> */}
        {/* <div 
          className="absolute bottom-[-10%] left-[20%] w-[55%] h-[55%] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.07) 0%, rgba(147, 51, 234, 0.035) 35%, transparent 65%)',
            filter: 'blur(55px)'
          }}
        /> */}
        {/* <div 
          className="absolute top-[40%] left-[40%] w-[65%] h-[65%] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(196, 181, 253, 0.09) 0%, rgba(168, 85, 247, 0.045) 45%, transparent 75%)',
            filter: 'blur(65px)'
          }}
        /> */}
        
        {/* Subtle faint gray grid overlay */}
        {/* <div 
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(43, 0, 113, 0.03) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(43, 0, 113, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        /> */}
      </div>

      {/* Announcement Bar */}
      {showAnnouncement && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative z-20 mx-4 sm:mx-6 lg:mx-10 mt-0 sm:mt-0"
        >
          <div className="relative backdrop-blur-md bg-gradient-to-r from-[#2b0071]/90 via-[#5E14E4]/85 to-[#2b0071]/90 rounded-full py-3 px-6 shadow-lg shadow-[#2b0071]/20 border border-white/10 group hover:shadow-xl hover:shadow-[#5E14E4]/30 transition-all duration-300">
            {/* Subtle glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#5E14E4]/20 via-transparent to-[#5E14E4]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative flex items-center justify-center gap-3">
              {/* Animated dot */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-white"
              />
              
              {/* Text */}
              <p className="text-white text-sm sm:text-base font-medium text-center">
                🚀 New: AI-powered automation features now available – <span className="underline underline-offset-2 cursor-pointer hover:text-white/90">Learn more</span>
              </p>
              
              {/* Close button */}
              <button
                onClick={() => setShowAnnouncement(false)}
                className="ml-2 p-1 rounded-full hover:bg-white/20 transition-colors duration-200 group/close"
                aria-label="Close announcement"
              >
                <X className="w-4 h-4 text-white/80 group-hover/close:text-white transition-colors" />
              </button>
            </div>
          </div>
        </motion.div>
      )}

      <div className="p-16 relative z-10">

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 lg:gap-8 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-4 sm:space-y-4 text-center lg:text-left ml-10">
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
              <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-7xl font-bold leading-none tracking-tight text-foreground">
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
            <p className="text-sm sm:text-base md:text-lg text-foreground/70 max-w-2xl leading-relaxed mt-4">
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
            <div className="flex flex-wrap gap-3 sm:gap-4 items-center justify-center lg:justify-start mt-7">
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
            className="grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4 pt-2 sm:pt-2 max-w-2xl"
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
            <div className="relative bg-gradient-to-br from-[#2b0071] to-[#5E14E4] rounded-[2.5rem] p-4 sm:p-6 w-full lg:w-[450px] xl:w-[600px] aspect-[6/4] overflow-hidden mr-10">
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
                  className="h-full w-auto object-contain object-bottom right-10"
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
      <div className="mt-16 pt-2 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mb-12"
        >
          {/* Section Header */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#2b0071]/10 to-[#5E14E4]/10 border border-[#2b0071]/20 mb-4">
  {/* <motion.div
    animate={{ scale: [1, 1.2, 1] }}
    transition={{ duration: 2, repeat: Infinity }}
    className="w-2 h-2 rounded-full bg-gradient-to-r from-[#2b0071] to-[#5E14E4]"
  /> */}

  <div className="flex items-center gap-1">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={14}
        className="fill-[#5E14E4] text-[#5E14E4]"
      />
    ))}
  </div>
</div>

          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#2b0071] to-[#5E14E4] bg-clip-text text-transparent mb-0">
            Powering innovative startups & enterprises
          </h2>
          {/* <p className="text-foreground/60 text-base sm:text-lg">
            Leading companies around the globe
          </p> */}
        </motion.div>

        {/* 3D Card Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative"
        >
          <ScrollVelocityContainer className="w-full py-0">
            <ScrollVelocityRow baseVelocity={1.5} direction={1} className="py-0">
              {partners.map((partner, idx) => (
                <motion.div
                  key={`row1-${idx}`}
                  className="mx-6 inline-flex group cursor-pointer"
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative w-50 h-30 perspective-1000">
                    {/* Glass morphism card */}
                    <div className="relative h-full px-2 py-4 rounded-2xl">
                      {/* Animated gradient background */}
                      {/* <div className="absolute inset-0 bg-gradient-to-br from-[#2b0071]/5 via-[#5E14E4]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" /> */}
                      
                      {/* Glowing orb effect */}
                      {/* <motion.div
                        className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br from-[#5E14E4]/20 to-[#2b0071]/20 blur-2xl opacity-0 group-hover:opacity-100"
                        animate={{
                          scale: [1, 1.2, 1],
                          rotate: [0, 180, 360],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      /> */}
                      
                      {/* Logo container */}
                      <div className="relative z-10 flex flex-col items-center justify-center h-full gap-3">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <img 
                            src={partner.logo} 
                            alt={partner.name}
                            className="h-16 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 drop-shadow-lg"
                            loading="lazy"
                          />
                        </motion.div>
                        <p className="text-sm font-bold bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent group-hover:from-[#2b0071] group-hover:to-[#5E14E4] transition-all duration-500">
                          {partner.name}
                        </p>
                      </div>
                      
                      {/* Shine Effect */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                        style={{ width: '50%' }}
                      />
                      
                      {/* Corner accent */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#5E14E4]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-[#2b0071]/10 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </ScrollVelocityRow>
          </ScrollVelocityContainer>
          
          {/* Enhanced Gradient Overlays with glow */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />
          
          {/* Subtle glow effect at edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#5E14E4]/5 to-transparent blur-xl" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#2b0071]/5 to-transparent blur-xl" />
        </motion.div>
      </div>

      </div>
    </section>
  )
}