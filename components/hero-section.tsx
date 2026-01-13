"use client"

import { Globe, Zap, Cpu, Rocket } from "lucide-react"
import { heroStats } from "@/data/footer"
import { StatCard } from "@/components/stat-card"
import { MagneticButton } from "@/components/magnetic-button"
import { FadeSlideReveal } from "@/components/fade-slide-reveal"
import { CascadeStagger } from "@/components/cascade-stagger"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="bg-card/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 lg:p-16 mb-6 border border-border/50 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-8">
          {/* Main Heading */}
          <FadeSlideReveal delay={0} duration={0.8}>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F5A623] to-[#FF8C00] flex items-center justify-center"
                >
                  <Cpu className="w-6 h-6 text-white" />
                </motion.div>
                <span className="px-4 py-1.5 rounded-full bg-gradient-to-br from-[#F5A623] to-[#FF8C00] text-white text-sm font-semibold border border-primary/20">
                  AI-Powered Innovation
                </span>
              </div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-none tracking-tight mb-4 text-foreground">
                Building the
              </h1>
              <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-none tracking-tight mb-4">
                <span className="bg-gradient-to-br from-[#F5A623] to-[#FF8C00] bg-clip-text text-transparent animate-gradient-x">
                  Future
                </span>
              </h1>
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-none tracking-tight text-foreground/80">
                of Technology
              </h1>
            </div>
          </FadeSlideReveal>

          {/* Subtitle */}
          <FadeSlideReveal delay={0.1} duration={0.8}>
            <p className="text-lg md:text-xl text-foreground/70 max-w-2xl leading-relaxed">
              Empowering businesses with cutting-edge AI solutions, intelligent automation, and next-generation digital
              experiences that transform possibilities into reality.
            </p>
          </FadeSlideReveal>

          {/* Feature Pills */}
          <FadeSlideReveal delay={0.15} duration={0.8}>
            <div className="flex flex-wrap gap-3">
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
            <div className="flex flex-wrap gap-4 items-center ">
              <MagneticButton variant="primary" className="bg-gradient-to-br from-[#F5A623] to-[#FF8C00] text-white">
                <Rocket className="w-4 h-4 " />
                Start Your Journey
              </MagneticButton>
              <button className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-border/30 font-medium hover:border-primary/50 hover:bg-gradient-to-br from-[#F5A623] to-[#FF8C00] transition-all duration-300 group">
                Watch Demo
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  className="w-2 h-2 rounded-full bg-primary"
                ></motion.div>
              </button>
            </div>
          </FadeSlideReveal>

          {/* Statistics */}
          <FadeSlideReveal delay={0.3} duration={0.8}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-border/30">
              <CascadeStagger delay={0} duration={0.7}>
                <StatCard label="Active Users" value=" 50K+" />
              </CascadeStagger>
              <CascadeStagger delay={0.1} duration={0.7}>
                <StatCard label="AI Models" value="100+" />
              </CascadeStagger>
              <CascadeStagger delay={0.2} duration={0.7}>
                <StatCard label="Countries" value="120+" />
              </CascadeStagger>
              <CascadeStagger delay={0.3} duration={0.7}>
                <StatCard label="Uptime" value="99.9%" />
              </CascadeStagger>
            </div>
          </FadeSlideReveal>
        </div>

        {/* Right Content - Orange Card */}
        <FadeSlideReveal delay={0.4} duration={0.8}>
          <div className="relative">
            <div className="relative bg-gradient-to-br from-[#F5A623] to-[#FF8C00] rounded-[3rem] p-8 md:p-12 w-full lg:w-[500px] xl:w-[600px] aspect-[4/5] overflow-hidden">
              {/* Globe Icon */}
              <div className="absolute top-6 right-6 w-14 h-14 bg-black rounded-full flex items-center justify-center">
                <Globe className="w-7 h-7 text-white" />
              </div>

              {/* Signature Text */}
              <div className="absolute top-8 left-8 right-20">
                <svg viewBox="0 0 300 80" className="w-full max-w-[250px]">
                  <text
                    x="10"
                    y="50"
                    fill="white"
                    fontSize="48"
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
              <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4">
                <div className="w-14 h-14 rounded-full bg-[#FFB84D] flex items-center justify-center overflow-hidden border-2 border-white/20">
                  <Cpu className="w-7 h-7 text-white" />
                </div>
                <div className="w-14 h-14 rounded-full bg-[#FFB84D] overflow-hidden border-2 border-white/20">
                  <img src="/diverse-group.png" alt="Profile" className="w-full h-full object-cover" />
                </div>
                <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center">
                  <Rocket className="w-7 h-7 text-white" />
                </div>
              </div>
            </div>
          </div>
        </FadeSlideReveal>
      </div>
    </section>
  )
}
