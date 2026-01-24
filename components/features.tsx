"use client"

import type React from "react"

import { useTheme } from "next-themes"
import Earth from "./ui/globe"
import ScrambleHover from "./ui/scramble"
import { motion, useInView } from "framer-motion"
import { Suspense, useEffect, useRef, useState } from "react"
import { geist } from "@/lib/fonts"
import { cn } from "@/lib/utils"

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const { theme } = useTheme()
  const [isHovering, setIsHovering] = useState(false)
  const [isCliHovering, setIsCliHovering] = useState(false)
  const [isSleekDesignHovering, setIsSleekDesignHovering] = useState(false)
  const [isEnterpriseHovering, setIsEnterpriseHovering] = useState(false)
  const [isAiIntegrationHovering, setIsAiIntegrationHovering] = useState(false)
  const [isAutomationHovering, setIsAutomationHovering] = useState(false)
  const [inputValue, setInputValue] = useState("")

  const [baseColor, setBaseColor] = useState<[number, number, number]>([0.169, 0, 0.443]) // #2b0071 in RGB normalized
  const [glowColor, setGlowColor] = useState<[number, number, number]>([0.169, 0, 0.443]) // #2b0071 in RGB normalized

  const [dark, setDark] = useState<number>(theme === "dark" ? 1 : 0)

  useEffect(() => {
    setBaseColor([0.169, 0, 0.443]) // #2b0071
    setGlowColor([0.169, 0, 0.443]) // #2b0071
    setDark(theme === "dark" ? 1 : 0)
  }, [theme])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      e.preventDefault()
      setInputValue("")
    }
  }

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <section id="features" className="text-foreground relative overflow-hidden py-12 sm:py-12 md:py-12 bg-[#FBFFFF] p-20 sm:p-10 md:p-20 lg:p-46">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: isMobile ? 0 : 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: isMobile ? 0 : 50 }}
        transition={{ duration: isMobile ? 0.8 : 0.5, delay: 0 }}
        className="container mx-auto flex flex-col items-center gap-6 sm:gap-12"
      >
                  <div className="flex justify-center">
            <button
              type="button"
              className="group relative z-[60] mx-auto rounded-full border border-white/20 bg-white/5 px-6 py-1 text-xs backdrop-blur transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-100 md:text-sm"
            >
              <div className="absolute inset-x-0 -top-px mx-auto h-0.5 w-1/2 bg-gradient-to-br from-[#2b0071] to-[#5E14E4] shadow-2xl transition-all duration-500 group-hover:w-3/4"></div>
              <div className="absolute inset-x-0 -bottom-px mx-auto h-0.5 w-1/2 bg-gradient-to-br from-[#2b0071] to-[#5E14E4] shadow-2xl transition-all duration-500 group-hover:h-px"></div>
              <span className="relative text-foreground font-medium">Features</span>
            </button>
          </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
              {/* CLI */}
              <motion.div
                className="group border-[#2b0071]/40 text-card-foreground relative flex flex-col overflow-hidden rounded-xl border-2 p-2 shadow-xl transition-all ease-in-out"
                onMouseEnter={() => setIsCliHovering(true)}
                onMouseLeave={() => setIsCliHovering(false)}
                ref={ref}
                initial={{ opacity: 0, y: isMobile ? 0 : 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: isMobile ? 0 : 50 }}
                transition={{ duration: isMobile ? 0.8 : 0.5, delay: isMobile ? 0 : 0.5 }}
                whileHover={{
                  scale: 1.02,
                  borderColor: "rgba(43, 0, 113, 0.6)",
                  boxShadow: "0 0 30px rgba(43, 0, 113, 0.2)",
                }}
                style={{ transition: "all 0s ease-in-out" }}
              >
                <div className="flex flex-col gap-3">
                  <h3 className="text-lg leading-none font-semibold tracking-tight">Seamless Integration</h3>
                  <div className="text-muted-foreground flex flex-col gap-2 text-xs">
                    <p>
                      Integrate effortlessly with your existing tools and workflows. CLI support and manual configuration for maximum flexibility.
                    </p>
                  </div>
                </div>
                <div className="pointer-events-none flex grow items-center justify-center select-none relative min-h-[200px]">
                  <div
                    className="relative w-full h-[200px] rounded-xl overflow-hidden"
                    style={{ borderRadius: "20px" }}
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl3Ul3KNqwlu7EebnsQtAtWd43ygONy39j9w&s"
                        alt="Arrow-CoreExchange"
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>

                    {/* Animated SVG Connecting Lines */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={(isCliHovering || isMobile) ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <svg width="100%" height="100%" viewBox="0 0 121 94" className="absolute">
                        <motion.path
                          d="M 60.688 1.59 L 60.688 92.449 M 60.688 92.449 L 119.368 92.449 M 60.688 92.449 L 1.414 92.449"
                          stroke="rgba(43, 0, 113, 0.6)"
                          fill="transparent"
                          strokeDasharray="2 2"
                          initial={{ pathLength: 0 }}
                          animate={isCliHovering ? { pathLength: 1 } : isMobile ? { pathLength: 1 } : { pathLength: 0 }}
                          transition={{
                            duration: 2,
                            ease: "easeInOut",
                            repeat: isMobile ? Infinity : 0,
                            repeatType: "reverse",
                          }}
                        />
                      </svg>
                      <svg width="100%" height="100%" viewBox="0 0 121 94" className="absolute">
                        <motion.path
                          d="M 60.688 92.449 L 60.688 1.59 M 60.688 1.59 L 119.368 1.59 M 60.688 1.59 L 1.414 1.59"
                          stroke="rgba(43, 0, 113, 0.6)"
                          fill="transparent"
                          strokeDasharray="2 2"
                          initial={{ pathLength: 0 }}
                          animate={isCliHovering ? { pathLength: 1 } : isMobile ? { pathLength: 1 } : { pathLength: 0 }}
                          transition={{
                            duration: 2,
                            delay: 0.5,
                            ease: "easeInOut",
                            repeat: isMobile ? Infinity : 0,
                            repeatType: "reverse",
                          }}
                        />
                      </svg>
                    </motion.div>

                    {/* Animated Purple Blur Effect */}
                    <motion.div
                      className="absolute top-1/2 left-1/2 w-16 h-16 bg-[#2b0071] rounded-full blur-[74px] opacity-65 transform -translate-x-1/2 -translate-y-1/2"
                      initial={{ scale: 1 }}
                      animate={isCliHovering ? { scale: [1, 1.342, 1, 1.342] } : isMobile ? { scale: [1, 1.342, 1, 1.342] } : { scale: 1 }}
                      transition={{
                        duration: 3,
                        ease: "easeInOut",
                        repeat: isCliHovering ? Number.POSITIVE_INFINITY : isMobile ? Number.POSITIVE_INFINITY : 0,
                        repeatType: "loop",
                      }}
                    />

                    {/* Main Content Container with Staggered Animations */}
                    <div className="absolute inset-0 flex items-center justify-center p-6">
                      <div className="flex items-center gap-4 sm:gap-8">
                        {/* Left Column */}
                        <div className="flex flex-col gap-2 sm:gap-3">
                          {["Analytics", "Payments", "Enterprise"].map((item, index) => (
                            <motion.div
                              key={`left-${index}`}
                              className="bg-white rounded px-1 sm:px-1 py-1 sm:py-1 flex items-center gap-1.5 sm:gap-2 text-black text-xs sm:text-sm font-medium shadow-sm ml-8"
                              initial={{ opacity: 1, x: 0 }}
                              animate={isCliHovering ? { x: [-20, 0] } : isMobile ? { x: [-20, 0, -20] } : { x: 0 }}
                              transition={{
                                duration: isMobile ? 4 : 0.5,
                                delay: index * 0.2,
                                repeat: isMobile ? Infinity : 0,
                                ease: "easeInOut",
                              }}
                              whileHover={{ scale: 1.05 }}
                            >
                              <div className="w-3 h-3 sm:w-4 sm:h-4 flex items-center justify-center">
                                {index === 0 && <span className="text-xs">📊</span>}
                                {index === 1 && <span className="text-xs">💰</span>}
                                {index === 2 && <span className="text-xs">🏢</span>}
                              </div>
                              {item}
                            </motion.div>
                          ))}
                        </div>

                        {/* Center Logo */}
                        <motion.div
                          className="w-6 h-6 sm:w-6 sm:h-6 border border-gray-300 rounded-lg overflow-hidden shadow-lg"
                          initial={{ opacity: 1, scale: 1, rotate: 0 }}
                          animate={{ 
                            scale: isCliHovering ? [1, 1.1, 1] : isMobile ? [1, 1.1, 1] : 1,
                            rotate: 360
                          }}
                          transition={{ 
                            scale: { 
                              duration: isMobile ? 2 : 0.6, 
                              ease: "easeInOut",
                              repeat: isCliHovering ? Infinity : isMobile ? Infinity : 0
                            },
                            rotate: { duration: 3, ease: "linear", repeat: Infinity }
                          }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <img
                            src="https://framerusercontent.com/images/q43ivjLz67lXhWf6TKfLIh0FY.png"
                            alt="Logo"
                            className="w-full h-full object-cover"
                          />
                        </motion.div>

                        {/* Right Column */}
                        <div className="flex flex-col gap-2 sm:gap-3">
                          {["Users", "Security", "Reports"].map((item, index) => (
                            <motion.div
                              key={`right-${index}`}
                              className="bg-white rounded px-1 sm:px-1 py-1 sm:py-1 flex items-center gap-1.5 sm:gap-2 text-black text-xs sm:text-sm font-medium shadow-sm mr-8"
                              initial={{ opacity: 1, x: 0 }}
                              animate={isCliHovering ? { x: [20, 0] } : isMobile ? { x: [20, 0, 20] } : { x: 0 }}
                              transition={{
                                duration: isMobile ? 4 : 0.5,
                                delay: index * 0.2,
                                repeat: isMobile ? Infinity : 0,
                                ease: "easeInOut",
                              }}
                              whileHover={{ scale: 1.05 }}
                            >
                              <div className="w-3 h-3 sm:w-4 sm:h-4 flex items-center justify-center">
                                {index === 0 && <span className="text-xs">👥</span>}
                                {index === 1 && <span className="text-xs">🔒</span>}
                                {index === 2 && <span className="text-xs">📈</span>}
                              </div>
                              {item}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Animated Circular Border */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={(isCliHovering || isMobile) ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <svg width="350" height="350" viewBox="0 0 350 350" className="opacity-40">
                        <motion.path
                          d="M 175 1.159 C 271.01 1.159 348.841 78.99 348.841 175 C 348.841 271.01 271.01 348.841 175 348.841 C 78.99 348.841 1.159 271.01 1.159 175 C 1.159 78.99 78.99 1.159 175 1.159 Z"
                          stroke="rgba(255, 255, 255, 0.38)"
                          strokeWidth="1.16"
                          fill="transparent"
                          strokeDasharray="4 4"
                          initial={{ pathLength: 0, rotate: 0 }}
                          animate={isCliHovering ? { pathLength: 1, rotate: 360 } : isMobile ? { pathLength: 1, rotate: 360 } : { pathLength: 0, rotate: 0 }}
                          transition={{
                            pathLength: { 
                              duration: 3, 
                              ease: "easeInOut",
                              repeat: isMobile ? Infinity : 0,
                              repeatType: "reverse"
                            },
                            rotate: {
                              duration: 20,
                              repeat: isCliHovering ? Number.POSITIVE_INFINITY : isMobile ? Number.POSITIVE_INFINITY : 0,
                              ease: "linear",
                            },
                          }}
                        />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Global */}
              <motion.div
                className="group border-[#2b0071]/40 text-card-foreground relative flex flex-col overflow-hidden rounded-xl border-2 p-4 shadow-xl transition-all ease-in-out"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                ref={ref}
                initial={{ opacity: 0, y: isMobile ? 0 : 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: isMobile ? 0 : 50 }}
                transition={{ duration: isMobile ? 0.8 : 0.5, delay: isMobile ? 0 : 0.5 }}
                whileHover={{
                  scale: 1.02,
                  borderColor: "rgba(43, 0, 113, 0.6)",
                  boxShadow: "0 0 30px rgba(43, 0, 113, 0.2)",
                }}
                style={{ transition: "all 0s ease-in-out" }}
              >
                <div className="flex flex-col gap-3">
                  <h3 className="text-lg leading-none font-semibold tracking-tight">Global Accessibility</h3>
                  <div className="text-muted-foreground flex flex-col gap-2 text-xs mb-4">
                    <p>
                      Deploy globally and reach customers worldwide with multi-region support and CDN integration.
                    </p>
                  </div>
                </div>
                <div className="flex min-h-[200px] grow items-center justify-center select-none overflow-hidden relative">
                  {/* Mobile: Sleek animations instead of 3D globe */}
                  <div className="md:hidden relative w-full h-full flex items-center justify-center">
                    {/* Central "Deploy Globally" text */}
                    <div className="relative z-20">
                      <h1 className="text-center text-3xl sm:text-4xl leading-[100%] font-semibold">
                        <span className='bg-background relative inline-block w-fit rounded-md border px-3 py-1.5 before:absolute before:top-0 before:left-0 before:z-10 before:h-full before:w-full before:bg-[url("/noise.gif")] before:opacity-[0.09] before:content-[""]'>
                          <span className="bg-gradient-to-br from-[#2b0071] to-[#5b21b6] bg-clip-text text-transparent">
                            Deploy
                            <br />
                            Globally
                          </span>
                        </span>
                      </h1>
                    </div>
                    
                    {/* Orbiting location markers */}
                    {[
                      { icon: '🌏', label: 'Asia', angle: 0, color: 'from-[#2b0071] to-[#5b21b6]' },
                      { icon: '🌍', label: 'Europe', angle: 72, color: 'from-[#5b21b6] to-[#7c3aed]' },
                      { icon: '🌎', label: 'Americas', angle: 144, color: 'from-[#7c3aed] to-[#a855f7]' },
                      { icon: '🌍', label: 'Africa', angle: 216, color: 'from-[#a855f7] to-[#c084fc]' },
                      { icon: '🌏', label: 'Oceania', angle: 288, color: 'from-[#c084fc] to-[#e9d5ff]' },
                    ].map((item, index) => {
                      const angle = (item.angle * Math.PI) / 180
                      const radius = 100
                      return (
                        <motion.div
                          key={index}
                          className={`absolute top-1/2 left-1/2 w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} shadow-lg flex flex-col items-center justify-center border-2 border-white/20 backdrop-blur-sm`}
                          style={{
                            x: -28,
                            y: -28,
                          }}
                          animate={
                            isHovering
                              ? {
                                  x: [
                                    -28,
                                    Math.cos(angle) * radius - 28,
                                    Math.cos(angle) * radius - 28,
                                  ],
                                  y: [
                                    -28,
                                    Math.sin(angle) * radius - 28,
                                    Math.sin(angle) * radius - 28,
                                  ],
                                  opacity: [0, 1, 1],
                                  scale: [0.5, 1, 1],
                                }
                              : isMobile
                              ? {
                                  x: [
                                    -28,
                                    Math.cos(angle) * radius - 28,
                                    -28,
                                  ],
                                  y: [
                                    -28,
                                    Math.sin(angle) * radius - 28,
                                    -28,
                                  ],
                                  opacity: [0, 1, 0],
                                  scale: [0.5, 1, 0.5],
                                }
                              : {
                                  x: -28,
                                  y: -28,
                                  opacity: 0,
                                  scale: 0.5,
                                }
                          }
                          transition={{
                            duration: isMobile ? 4.5 : 0.6,
                            delay: index * 0.2,
                            ease: "easeInOut",
                            repeat: isMobile ? Infinity : 0,
                            repeatType: "loop",
                          }}
                        >
                          <span className="text-2xl">{item.icon}</span>
                          <span className="text-[8px] font-medium mt-0.5">{item.label}</span>
                        </motion.div>
                      )
                    })}

                    {/* Connecting Lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                      {isHovering &&
                        [0, 72, 144, 216, 288].map((angle, index) => {
                          const rad = (angle * Math.PI) / 180
                          const radius = 100
                          return (
                            <motion.line
                              key={index}
                              x1="50%"
                              y1="50%"
                              x2={`calc(50% + ${Math.cos(rad) * radius}px)`}
                              y2={`calc(50% + ${Math.sin(rad) * radius}px)`}
                              stroke="rgba(43, 0, 113, 0.4)"
                              strokeWidth="2"
                              strokeDasharray="4 4"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ duration: 0.6, delay: index * 0.1 }}
                            />
                          )
                        })}
                    </svg>

                    {/* Pulsing rings for global coverage effect */}
                    {[0, 1, 2].map((index) => (
                      <motion.div
                        key={`ring-${index}`}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-[#2b0071]/30 rounded-full"
                        style={{
                          width: 80 + index * 50,
                          height: 80 + index * 50,
                        }}
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                          duration: 3,
                          delay: index * 0.4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    ))}

                    {/* Animated gradient orbs */}
                    <motion.div
                      className="absolute -top-10 -left-10 w-32 h-32 bg-[#2b0071] rounded-full blur-3xl opacity-20"
                      animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 20, 0],
                        y: [0, -20, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <motion.div
                      className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#5b21b6] rounded-full blur-3xl opacity-20"
                      animate={{
                        scale: [1, 1.3, 1],
                        x: [0, -20, 0],
                        y: [0, 20, 0],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </div>
                  
                  {/* Desktop: Original 3D globe */}
                  <div className="hidden md:flex md:flex-col md:items-center md:justify-center w-full h-full relative">
                    <h1 className="absolute top-2 text-center text-2xl leading-[100%] font-semibold z-20 w-full">
                      <span className='bg-background relative mt-3 inline-block w-fit rounded-md border px-1.5 py-0.5 before:absolute before:top-0 before:left-0 before:z-10 before:h-full before:w-full before:bg-[url("/noise.gif")] before:opacity-[0.09] before:content-[""]'>
                        <ScrambleHover
                          text="Global"
                          scrambleSpeed={70}
                          maxIterations={20}
                          useOriginalCharsOnly={false}
                          className="cursor-pointer bg-gradient-to-t from-[#2b0071] to-[#5b21b6] bg-clip-text text-transparent"
                          isHovering={isHovering}
                          setIsHovering={setIsHovering}
                          characters="abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]{}|;':\,./<>?"
                        />
                      </span>
                    </h1>
                    <div className="z-10  w-full h-full">
                      <div className="w-[120px] h-[120px]">
                        <Suspense
                          fallback={
                            <div className="bg-secondary/20 h-full w-full animate-pulse rounded-full"></div>
                          }
                        >
                          <Earth baseColor={baseColor} markerColor={[0, 0, 0]} glowColor={glowColor} dark={dark} />
                        </Suspense>
                      </div>
                    </div>
                    <div className="absolute bottom-0 w-full opacity-70 transition-all duration-1000 group-hover:opacity-100">
                      <div className="from-primary/50 to-primary/0 absolute left-1/2 h-[80px] w-[45%] -translate-x-1/2 scale-[1] rounded-[50%] bg-radial from-10% to-60% opacity-20 dark:opacity-100"></div>
                      <div className="from-primary/30 to-primary/0 absolute left-1/2 h-[40px] w-[25%] -translate-x-1/2 scale-[0.8] rounded-[50%] bg-radial from-10% to-60% opacity-20 dark:opacity-100"></div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Smooth & Sleek Design */}
              <motion.div
                className="group border-[#2b0071]/40 text-card-foreground relative flex flex-col overflow-hidden rounded-xl border-2 p-4 shadow-xl transition-all ease-in-out"
                onMouseEnter={() => setIsSleekDesignHovering(true)}
                onMouseLeave={() => setIsSleekDesignHovering(false)}
                initial={{ opacity: 0, y: isMobile ? 0 : 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: isMobile ? 0 : 50 }}
                transition={{ duration: isMobile ? 0.8 : 0.5, delay: isMobile ? 0 : 1.0 }}
                whileHover={{
                  scale: 1.02,
                  borderColor: "rgba(43, 0, 113, 0.5)",
                  boxShadow: "0 0 30px rgba(43, 0, 113, 0.2)",
                }}
                style={{ transition: "all 0s ease-in-out" }}
              >
                <div className="flex flex-col gap-3">
                  <h3 className="text-lg leading-none font-semibold tracking-tight">Smooth & Sleek Design</h3>
                  <div className="text-muted-foreground flex flex-col gap-2 text-xs">
                    <p>
                      Beautiful, modern interfaces with fluid animations and transitions that delight users.
                    </p>
                  </div>
                </div>
                <div className="flex grow items-center justify-center select-none relative min-h-[200px] p-4">
                  <div className="relative w-full max-w-xs">
                    {/* Animated floating cards */}
                    <div className="relative h-[220px] flex items-center justify-center">
                      {[0, 1, 2].map((index) => (
                        <motion.div
                          key={index}
                          className="absolute w-24 h-32 sm:w-32 sm:h-40 rounded-2xl shadow-2xl"
                          style={{
                            background: `linear-gradient(135deg, ${
                              index === 0 ? '#2b0071' : index === 1 ? '#5b21b6' : '#7c3aed'
                            } 0%, ${
                              index === 0 ? '#5b21b6' : index === 1 ? '#7c3aed' : '#a855f7'
                            } 100%)`,
                            zIndex: 3 - index,
                          }}
                          initial={{ x: 0, y: 0, rotate: 0 }}
                          animate={
                            isSleekDesignHovering
                              ? {
                                  x: [0, (index - 1) * 60, (index - 1) * 60],
                                  y: [0, -20, -20],
                                  rotate: [0, (index - 1) * 15, (index - 1) * 15],
                                }
                              : isMobile
                              ? {
                                  x: [0, (index - 1) * 60, 0],
                                  y: [0, -20, 0],
                                  rotate: [0, (index - 1) * 15, 0],
                                }
                              : { x: 0, y: 0, rotate: 0 }
                          }
                          transition={{
                            duration: isMobile ? 4 : 0.6,
                            ease: "easeInOut",
                            delay: index * 0.2,
                            repeat: isMobile ? Infinity : 0,
                            repeatType: "loop",
                          }}
                          whileHover={{ y: -10 }}
                        >
                          <div className="absolute inset-0 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex flex-col p-4 sm:p-6">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 mb-3 sm:mb-4"></div>
                            <div className="space-y-1.5 sm:space-y-2">
                              <div className="h-2 sm:h-3 bg-white/30 rounded w-3/4"></div>
                              <div className="h-2 sm:h-3 bg-white/20 rounded w-1/2"></div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Animated gradient orbs */}
                    <motion.div
                      className="absolute -top-10 -left-10 w-32 h-32 sm:w-40 sm:h-40 bg-[#2b0071] rounded-full blur-3xl opacity-30"
                      animate={{
                        scale: isSleekDesignHovering ? [1, 1.2, 1] : isMobile ? [1, 1.2, 1] : 1,
                        x: isSleekDesignHovering ? [0, 20, 0] : isMobile ? [0, 20, 0] : 0,
                        y: isSleekDesignHovering ? [0, -20, 0] : isMobile ? [0, -20, 0] : 0,
                      }}
                      transition={{
                        duration: 3,
                        repeat: isSleekDesignHovering ? Number.POSITIVE_INFINITY : isMobile ? Number.POSITIVE_INFINITY : 0,
                        ease: "easeInOut",
                      }}
                    />
                    <motion.div
                      className="absolute -bottom-10 -right-10 w-32 h-32 sm:w-40 sm:h-40 bg-[#5b21b6] rounded-full blur-3xl opacity-30"
                      animate={{
                        scale: isSleekDesignHovering ? [1, 1.3, 1] : isMobile ? [1, 1.3, 1] : 1,
                        x: isSleekDesignHovering ? [0, -20, 0] : isMobile ? [0, -20, 0] : 0,
                        y: isSleekDesignHovering ? [0, 20, 0] : isMobile ? [0, 20, 0] : 0,
                      }}
                      transition={{
                        duration: 4,
                        repeat: isSleekDesignHovering ? Number.POSITIVE_INFINITY : isMobile ? Number.POSITIVE_INFINITY : 0,
                        ease: "easeInOut",
                      }}
                    />
                  </div>
                </div>
              </motion.div>

              {/* Enterprise Level Software */}
              <motion.div
                className="group border-[#2b0071]/40 text-card-foreground relative flex flex-col overflow-hidden rounded-xl border-2 p-4 shadow-xl transition-all ease-in-out"
                onMouseEnter={() => setIsEnterpriseHovering(true)}
                onMouseLeave={() => setIsEnterpriseHovering(false)}
                initial={{ opacity: 0, y: isMobile ? 0 : 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: isMobile ? 0 : 50 }}
                transition={{ duration: isMobile ? 0.8 : 0.5, delay: isMobile ? 0 : 1.0 }}
                whileHover={{
                  scale: 1.02,
                  borderColor: "rgba(43, 0, 113, 0.6)",
                  boxShadow: "0 0 30px rgba(43, 0, 113, 0.2)",
                }}
                style={{ transition: "all 0s ease-in-out" }}
              >
                <div className="flex flex-col gap-3">
                  <h3 className="text-lg leading-none font-semibold tracking-tight">Enterprise Level Software</h3>
                  <div className="text-muted-foreground flex flex-col gap-2 text-xs">
                    <p>
                      Built for scale with advanced security, compliance, and enterprise-grade performance.
                    </p>
                  </div>
                </div>
                <div className="flex grow items-center justify-center select-none relative min-h-[200px] p-4">
                  <div className="relative w-full max-w-lg h-[280px]">
                    {/* Central Hub */}
                    <motion.div
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-[#2b0071] to-[#5b21b6] shadow-2xl flex items-center justify-center border-4 border-white/20"
                      animate={
                        isEnterpriseHovering
                          ? {
                              scale: [1, 1.1, 1],
                              rotate: [0, 180, 360],
                            }
                          : isMobile
                          ? {
                              scale: [1, 1.1, 1],
                              rotate: [0, 180, 360],
                            }
                          : {}
                      }
                      transition={{
                        duration: 3,
                        repeat: isEnterpriseHovering ? Number.POSITIVE_INFINITY : isMobile ? Number.POSITIVE_INFINITY : 0,
                        ease: "linear",
                      }}
                    >
                      <span className="text-3xl sm:text-4xl">🏢</span>
                    </motion.div>

                    {/* Orbiting Elements */}
                    {[
                      { icon: '🔒', label: 'Security', angle: 0 },
                      { icon: '⚡', label: 'Speed', angle: 72 },
                      { icon: '📊', label: 'Analytics', angle: 144 },
                      { icon: '🛡️', label: 'Reliable', angle: 216 },
                      { icon: '🚀', label: 'Scalable', angle: 288 },
                    ].map((item, index) => {
                      const angle = (item.angle * Math.PI) / 180
                      const radius = 90
                      return (
                        <motion.div
                          key={index}
                          className="absolute top-1/2 left-1/2 w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-white dark:bg-gray-800 shadow-lg flex flex-col items-center justify-center border border-gray-200 dark:border-gray-700"
                          style={{
                            x: -24,
                            y: -24,
                          }}
                          animate={
                            isEnterpriseHovering
                              ? {
                                  x: [
                                    -24,
                                    Math.cos(angle) * radius - 24,
                                    Math.cos(angle) * radius - 24,
                                  ],
                                  y: [
                                    -24,
                                    Math.sin(angle) * radius - 24,
                                    Math.sin(angle) * radius - 24,
                                  ],
                                  opacity: [0, 1, 1],
                                }
                              : isMobile
                              ? {
                                  x: [
                                    -24,
                                    Math.cos(angle) * radius - 24,
                                    -24,
                                  ],
                                  y: [
                                    -24,
                                    Math.sin(angle) * radius - 24,
                                    -24,
                                  ],
                                  opacity: [0, 1, 0],
                                }
                              : {
                                  x: -24,
                                  y: -24,
                                  opacity: 0,
                                }
                          }
                          transition={{
                            duration: isMobile ? 4.5 : 0.6,
                            delay: index * 0.2,
                            ease: "easeInOut",
                            repeat: isMobile ? Infinity : 0,
                            repeatType: "loop",
                          }}
                        >
                          <span className="text-xl sm:text-2xl">{item.icon}</span>
                          <span className="text-[8px] sm:text-xs font-medium mt-0.5 sm:mt-1">{item.label}</span>
                        </motion.div>
                      )
                    })}

                    {/* Connecting Lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                      {isEnterpriseHovering &&
                        [0, 72, 144, 216, 288].map((angle, index) => {
                          const rad = (angle * Math.PI) / 180
                          const radius = 90
                          return (
                            <motion.line
                              key={index}
                              x1="50%"
                              y1="50%"
                              x2={`calc(50% + ${Math.cos(rad) * radius}px)`}
                              y2={`calc(50% + ${Math.sin(rad) * radius}px)`}
                              stroke="rgba(43, 0, 113, 0.3)"
                              strokeWidth="2"
                              strokeDasharray="4 4"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ duration: 0.6, delay: index * 0.1 }}
                            />
                          )
                        })}
                    </svg>
                  </div>
                </div>
              </motion.div>

              {/* AI Integration */}
              <motion.div
                className="group border-[#2b0071]/40 text-card-foreground relative flex flex-col overflow-hidden rounded-xl border-2 p-4 shadow-xl transition-all ease-in-out"
                onMouseEnter={() => setIsAiIntegrationHovering(true)}
                onMouseLeave={() => setIsAiIntegrationHovering(false)}
                initial={{ opacity: 0, y: isMobile ? 0 : 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: isMobile ? 0 : 50 }}
                transition={{ duration: isMobile ? 0.8 : 0.5, delay: isMobile ? 0 : 1.5 }}
                whileHover={{
                  scale: 1.02,
                  borderColor: "rgba(43, 0, 113, 0.6)",
                  boxShadow: "0 0 30px rgba(43, 0, 113, 0.2)",
                }}
                style={{ transition: "all 0s ease-in-out" }}
              >
                <div className="flex flex-col gap-3">
                  <h3 className="text-lg leading-none font-semibold tracking-tight">AI Integration</h3>
                  <div className="text-muted-foreground flex flex-col gap-2 text-xs">
                    <p>
                      Seamlessly integrate advanced AI capabilities to automate tasks, enhance decision-making, and unlock intelligent insights.
                    </p>
                  </div>
                </div>
                <div className="flex grow items-center justify-center select-none relative min-h-[200px] p-4">
                  <div className="relative w-full max-w-xs">
                    {/* Central AI Hub */}
                    <motion.div
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-[#2b0071] to-[#5b21b6] shadow-2xl flex items-center justify-center border-4 border-white/20"
                      animate={
                        isAiIntegrationHovering
                          ? {
                              scale: [1, 1.15, 1],
                              rotate: [0, 360],
                            }
                          : isMobile
                          ? {
                              scale: [1, 1.15, 1],
                              rotate: [0, 360],
                            }
                          : {}
                      }
                      transition={{
                        duration: 3,
                        repeat: isAiIntegrationHovering ? Number.POSITIVE_INFINITY : isMobile ? Number.POSITIVE_INFINITY : 0,
                        ease: "linear",
                      }}
                    >
                      <span className="text-3xl sm:text-4xl">🤖</span>
                    </motion.div>

                    {/* Orbiting AI Icons */}
                    {[
                      { icon: '💡', label: 'Smart', angle: 0 },
                      { icon: '🧠', label: 'Learn', angle: 72 },
                      { icon: '⚙️', label: 'Adapt', angle: 144 },
                      { icon: '🎯', label: 'Predict', angle: 216 },
                      { icon: '🔮', label: 'Optimize', angle: 288 },
                    ].map((item, index) => {
                      const angle = (item.angle * Math.PI) / 180
                      const radius = 90
                      return (
                        <motion.div
                          key={index}
                          className="absolute top-1/2 left-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white dark:bg-gray-800 shadow-lg flex flex-col items-center justify-center border border-gray-200 dark:border-gray-700"
                          style={{
                            x: -24,
                            y: -24,
                          }}
                          animate={
                            isAiIntegrationHovering
                              ? {
                                  x: [
                                    -24,
                                    Math.cos(angle) * radius - 24,
                                    Math.cos(angle) * radius - 24,
                                  ],
                                  y: [
                                    -24,
                                    Math.sin(angle) * radius - 24,
                                    Math.sin(angle) * radius - 24,
                                  ],
                                  opacity: [0, 1, 1],
                                }
                              : isMobile
                              ? {
                                  x: [
                                    -24,
                                    Math.cos(angle) * radius - 24,
                                    -24,
                                  ],
                                  y: [
                                    -24,
                                    Math.sin(angle) * radius - 24,
                                    -24,
                                  ],
                                  opacity: [0, 1, 0],
                                }
                              : {
                                  x: -24,
                                  y: -24,
                                  opacity: 0,
                                }
                          }
                          transition={{
                            duration: isMobile ? 4.5 : 0.6,
                            delay: index * 0.2,
                            ease: "easeInOut",
                            repeat: isMobile ? Infinity : 0,
                            repeatType: "loop",
                          }}
                        >
                          <span className="text-xl sm:text-2xl">{item.icon}</span>
                          <span className="text-[8px] sm:text-xs font-medium mt-0.5 sm:mt-1">{item.label}</span>
                        </motion.div>
                      )
                    })}

                    {/* Connecting Lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                      {isAiIntegrationHovering &&
                        [0, 72, 144, 216, 288].map((angle, index) => {
                          const rad = (angle * Math.PI) / 180
                          const radius = 90
                          return (
                            <motion.line
                              key={index}
                              x1="50%"
                              y1="50%"
                              x2={`calc(50% + ${Math.cos(rad) * radius}px)`}
                              y2={`calc(50% + ${Math.sin(rad) * radius}px)`}
                              stroke="rgba(43, 0, 113, 0.4)"
                              strokeWidth="2"
                              strokeDasharray="4 4"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ duration: 0.6, delay: index * 0.1 }}
                            />
                          )
                        })}
                    </svg>

                    {/* Pulsing rings */}
                    {[0, 1, 2].map((index) => (
                      <motion.div
                        key={`ai-ring-${index}`}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-[#2b0071]/30 rounded-full"
                        style={{
                          width: 80 + index * 50,
                          height: 80 + index * 50,
                        }}
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                          duration: 3,
                          delay: index * 0.4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    ))}

                    {/* Gradient orbs */}
                    <motion.div
                      className="absolute -top-10 -left-10 w-32 h-32 bg-[#2b0071] rounded-full blur-3xl opacity-20"
                      animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 20, 0],
                        y: [0, -20, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <motion.div
                      className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#5b21b6] rounded-full blur-3xl opacity-20"
                      animate={{
                        scale: [1, 1.3, 1],
                        x: [0, -20, 0],
                        y: [0, 20, 0],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </div>
                </div>
              </motion.div>

              {/* Automation */}
              <motion.div
                className="group border-[#2b0071]/40 text-card-foreground relative flex flex-col overflow-hidden rounded-xl border-2 p-4 shadow-xl transition-all ease-in-out"
                onMouseEnter={() => setIsAutomationHovering(true)}
                onMouseLeave={() => setIsAutomationHovering(false)}
                initial={{ opacity: 0, y: isMobile ? 0 : 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: isMobile ? 0 : 50 }}
                transition={{ duration: isMobile ? 0.8 : 0.5, delay: isMobile ? 0 : 1.5 }}
                whileHover={{
                  scale: 1.02,
                  borderColor: "rgba(43, 0, 113, 0.6)",
                  boxShadow: "0 0 30px rgba(43, 0, 113, 0.2)",
                }}
                style={{ transition: "all 0s ease-in-out" }}
              >
                <div className="flex flex-col gap-3">
                  <h3 className="text-lg leading-none font-semibold tracking-tight">Automation</h3>
                  <div className="text-muted-foreground flex flex-col gap-2 text-xs">
                    <p>
                      Automate repetitive workflows and streamline processes to save time, reduce errors, and boost productivity.
                    </p>
                  </div>
                </div>
                <div className="flex grow items-center justify-center select-none relative min-h-[200px] p-4">
                  <div className="relative w-full max-w-xs h-[220px] flex items-center justify-center">
                    {/* Animated workflow cards */}
                    <div className="relative h-full w-full flex items-center justify-center">
                      {[0, 1, 2].map((index) => (
                        <motion.div
                          key={index}
                          className="absolute flex items-center justify-center"
                          style={{
                            zIndex: index,
                          }}
                          initial={{ opacity: 1, x: index * 5, y: index * -3 }}
                          animate={
                            isAutomationHovering
                              ? {
                                  x: (index - 1) * 80,
                                  y: 0,
                                  opacity: 1,
                                }
                              : isMobile
                              ? {
                                  x: [index * 5, (index - 1) * 80, index * 5],
                                  y: [index * -3, 0, index * -3],
                                  opacity: [1, 1, 1],
                                }
                              : { x: index * 5, y: index * -3, opacity: 1 }
                          }
                          transition={{
                            duration: isMobile ? 4.5 : 0.7,
                            ease: "easeInOut",
                            delay: index * 0.15,
                            repeat: isMobile ? Infinity : 0,
                            repeatType: "loop",
                          }}
                        >
                          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-[#2b0071] to-[#5b21b6] shadow-2xl flex flex-col items-center justify-center border-2 border-white/20">
                            <span className="text-3xl sm:text-4xl mb-1">
                              {index === 0 && '📥'}
                              {index === 1 && '⚙️'}
                              {index === 2 && '📤'}
                            </span>
                            <span className="text-[8px] sm:text-xs font-bold text-white text-center">
                              {index === 0 && 'Input'}
                              {index === 1 && 'Process'}
                              {index === 2 && 'Output'}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Animated flow arrows */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 300 200">
                      {isAutomationHovering &&
                        [0, 80, 160].map((offset, index) => (
                          <motion.g key={index}>
                            <motion.path
                              d={`M ${50 + offset} 100 L ${110 + offset} 100`}
                              stroke="rgba(43, 0, 113, 0.4)"
                              strokeWidth="2"
                              fill="none"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ duration: 0.8, delay: index * 0.2 }}
                              markerEnd="url(#arrowhead)"
                            />
                          </motion.g>
                        ))}
                      <defs>
                        <marker
                          id="arrowhead"
                          markerWidth="10"
                          markerHeight="10"
                          refX="9"
                          refY="3"
                          orient="auto"
                        >
                          <polygon points="0 0, 10 3, 0 6" fill="rgba(43, 0, 113, 0.4)" />
                        </marker>
                      </defs>
                    </svg>

                    {/* Animated gradient orbs */}
                    <motion.div
                      className="absolute -top-10 -left-10 w-32 h-32 sm:w-40 sm:h-40 bg-[#2b0071] rounded-full blur-3xl opacity-30"
                      animate={{
                        scale: isAutomationHovering ? [1, 1.2, 1] : isMobile ? [1, 1.2, 1] : 1,
                        x: isAutomationHovering ? [0, 20, 0] : isMobile ? [0, 20, 0] : 0,
                        y: isAutomationHovering ? [0, -20, 0] : isMobile ? [0, -20, 0] : 0,
                      }}
                      transition={{
                        duration: 3,
                        repeat: isAutomationHovering ? Number.POSITIVE_INFINITY : isMobile ? Number.POSITIVE_INFINITY : 0,
                        ease: "easeInOut",
                      }}
                    />
                    <motion.div
                      className="absolute -bottom-10 -right-10 w-32 h-32 sm:w-40 sm:h-40 bg-[#5b21b6] rounded-full blur-3xl opacity-30"
                      animate={{
                        scale: isAutomationHovering ? [1, 1.3, 1] : isMobile ? [1, 1.3, 1] : 1,
                        x: isAutomationHovering ? [0, -20, 0] : isMobile ? [0, -20, 0] : 0,
                        y: isAutomationHovering ? [0, 20, 0] : isMobile ? [0, 20, 0] : 0,
                      }}
                      transition={{
                        duration: 4,
                        repeat: isAutomationHovering ? Number.POSITIVE_INFINITY : isMobile ? Number.POSITIVE_INFINITY : 0,
                        ease: "easeInOut",
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
      </motion.div>
    </section>
  )
}