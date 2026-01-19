"use client"

import type React from "react"

import { useTheme } from "next-themes"
import Earth from "./ui/globe"
import ScrambleHover from "./ui/scramble"
import { FollowerPointerCard } from "./ui/following-pointer"
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
  const [inputValue, setInputValue] = useState("")

  const [baseColor, setBaseColor] = useState<[number, number, number]>([0.906, 0.541, 0.325]) // #e78a53 in RGB normalized
  const [glowColor, setGlowColor] = useState<[number, number, number]>([0.906, 0.541, 0.325]) // #e78a53 in RGB normalized

  const [dark, setDark] = useState<number>(theme === "dark" ? 1 : 0)

  useEffect(() => {
    setBaseColor([0.906, 0.541, 0.325]) // #e78a53
    setGlowColor([0.906, 0.541, 0.325]) // #e78a53
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
    <section id="features" className="text-foreground relative overflow-hidden py-12 sm:py-24 md:py-32">
      <div className="bg-primary absolute -top-10 left-1/2 h-16 w-44 -translate-x-1/2 rounded-full opacity-40 blur-3xl select-none"></div>
      <div className="via-primary/50 absolute top-0 left-1/2 h-px w-3/5 -translate-x-1/2 bg-gradient-to-r from-transparent to-transparent transition-all ease-in-out"></div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: isMobile ? 0 : 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: isMobile ? 0 : 50 }}
        transition={{ duration: isMobile ? 0.2 : 0.5, delay: 0 }}
        className="container mx-auto flex flex-col items-center gap-6 sm:gap-12"
      >
                  <div className="flex justify-center">
            <button
              type="button"
              className="group relative z-[60] mx-auto rounded-full border border-white/20 bg-white/5 px-6 py-1 text-xs backdrop-blur transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-100 md:text-sm"
            >
              <div className="absolute inset-x-0 -top-px mx-auto h-0.5 w-1/2 bg-gradient-to-br from-[#F5A623] to-[#FF8C00] shadow-2xl transition-all duration-500 group-hover:w-3/4"></div>
              <div className="absolute inset-x-0 -bottom-px mx-auto h-0.5 w-1/2 bg-gradient-to-br from-[#F5A623] to-[#FF8C00] shadow-2xl transition-all duration-500 group-hover:h-px"></div>
              <span className="relative text-foreground font-medium">Features</span>
            </button>
          </div>
        <FollowerPointerCard
          title={
            <div className="flex items-center gap-2">
              <span>✨</span>
              <span>Interactive Features</span>
            </div>
          }
        >
          <div className="cursor-none">
            <div className="grid grid-cols-12 gap-4 justify-center">
              {/* CLI */}
              <motion.div
                className="group border-secondary/40 text-card-foreground relative col-span-12 flex flex-col overflow-hidden rounded-xl border-2 p-6 shadow-xl transition-all ease-in-out md:col-span-6 xl:col-span-6 xl:col-start-2"
                onMouseEnter={() => setIsCliHovering(true)}
                onMouseLeave={() => setIsCliHovering(false)}
                ref={ref}
                initial={{ opacity: 0, y: isMobile ? 0 : 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: isMobile ? 0 : 50 }}
                transition={{ duration: isMobile ? 0.2 : 0.5, delay: isMobile ? 0 : 0.5 }}
                whileHover={{
                  scale: 1.02,
                  borderColor: "rgba(231, 138, 83, 0.6)",
                  boxShadow: "0 0 30px rgba(231, 138, 83, 0.2)",
                }}
                style={{ transition: "all 0s ease-in-out" }}
              >
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl leading-none font-semibold tracking-tight">Seamless Integration</h3>
                  <div className="text-md text-muted-foreground flex flex-col gap-2 text-sm">
                    <p className="max-w-[460px]">
                      Integrate effortlessly with your existing tools and workflows. CLI support and manual configuration for maximum flexibility.
                    </p>
                  </div>
                </div>
                <div className="pointer-events-none flex grow items-center justify-center select-none relative min-h-[300px]">
                  <div
                    className="relative w-full h-[400px] rounded-xl overflow-hidden"
                    style={{ borderRadius: "20px" }}
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <img
                        src="https://framerusercontent.com/images/UjqUIiBHmIcSH9vos9HlG2BF4bo.png"
                        alt="Arrow-CoreExchange"
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>

                    {/* Animated SVG Connecting Lines */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={isCliHovering ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <svg width="100%" height="100%" viewBox="0 0 121 94" className="absolute">
                        <motion.path
                          d="M 60.688 1.59 L 60.688 92.449 M 60.688 92.449 L 119.368 92.449 M 60.688 92.449 L 1.414 92.449"
                          stroke="rgb(255,222,213)"
                          fill="transparent"
                          strokeDasharray="2 2"
                          initial={{ pathLength: 0 }}
                          animate={isCliHovering ? { pathLength: 1 } : { pathLength: 0 }}
                          transition={{
                            duration: 2,
                            ease: "easeInOut",
                          }}
                        />
                      </svg>
                      <svg width="100%" height="100%" viewBox="0 0 121 94" className="absolute">
                        <motion.path
                          d="M 60.688 92.449 L 60.688 1.59 M 60.688 1.59 L 119.368 1.59 M 60.688 1.59 L 1.414 1.59"
                          stroke="rgb(255,222,213)"
                          fill="transparent"
                          strokeDasharray="2 2"
                          initial={{ pathLength: 0 }}
                          animate={isCliHovering ? { pathLength: 1 } : { pathLength: 0 }}
                          transition={{
                            duration: 2,
                            delay: 0.5,
                            ease: "easeInOut",
                          }}
                        />
                      </svg>
                    </motion.div>

                    {/* Animated Purple Blur Effect */}
                    <motion.div
                      className="absolute top-1/2 left-1/2 w-16 h-16 bg-purple-500 rounded-full blur-[74px] opacity-65 transform -translate-x-1/2 -translate-y-1/2"
                      initial={{ scale: 1 }}
                      animate={isCliHovering ? { scale: [1, 1.342, 1, 1.342] } : { scale: 1 }}
                      transition={{
                        duration: 3,
                        ease: "easeInOut",
                        repeat: isCliHovering ? Number.POSITIVE_INFINITY : 0,
                        repeatType: "loop",
                      }}
                    />

                    {/* Main Content Container with Staggered Animations */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex items-center gap-4 sm:gap-8">
                        {/* Left Column */}
                        <div className="flex flex-col gap-2 sm:gap-3">
                          {["Analytics", "Payments", "Enterprise"].map((item, index) => (
                            <motion.div
                              key={`left-${index}`}
                              className="bg-white rounded px-2 sm:px-3 py-1.5 sm:py-2 flex items-center gap-1.5 sm:gap-2 text-black text-xs sm:text-sm font-medium shadow-sm"
                              initial={{ opacity: 1, x: 0 }}
                              animate={isCliHovering ? { x: [-20, 0] } : { x: 0 }}
                              transition={{
                                duration: 0.5,
                                delay: index * 0.1,
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
                          className="w-12 h-12 sm:w-16 sm:h-16 border border-gray-300 rounded-lg overflow-hidden shadow-lg"
                          initial={{ opacity: 1, scale: 1 }}
                          animate={isCliHovering ? { scale: [1, 1.1, 1] } : { scale: 1 }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                          whileHover={{ scale: 1.1, rotate: 5 }}
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
                              className="bg-white rounded px-2 sm:px-3 py-1.5 sm:py-2 flex items-center gap-1.5 sm:gap-2 text-black text-xs sm:text-sm font-medium shadow-sm"
                              initial={{ opacity: 1, x: 0 }}
                              animate={isCliHovering ? { x: [20, 0] } : { x: 0 }}
                              transition={{
                                duration: 0.5,
                                delay: index * 0.1,
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
                      animate={isCliHovering ? { opacity: 1 } : { opacity: 0 }}
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
                          animate={isCliHovering ? { pathLength: 1, rotate: 360 } : { pathLength: 0, rotate: 0 }}
                          transition={{
                            pathLength: { duration: 3, ease: "easeInOut" },
                            rotate: {
                              duration: 20,
                              repeat: isCliHovering ? Number.POSITIVE_INFINITY : 0,
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
                className="group border-secondary/40 text-card-foreground relative col-span-12 flex flex-col overflow-hidden rounded-xl border-2 p-6 shadow-xl transition-all ease-in-out md:col-span-6 xl:col-span-6 xl:col-start-8"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                ref={ref}
                initial={{ opacity: 0, y: isMobile ? 0 : 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: isMobile ? 0 : 50 }}
                transition={{ duration: isMobile ? 0.2 : 0.5, delay: isMobile ? 0 : 0.5 }}
                whileHover={{
                  scale: 1.02,
                  borderColor: "rgba(231, 138, 83, 0.6)",
                  boxShadow: "0 0 30px rgba(231, 138, 83, 0.2)",
                }}
                style={{ transition: "all 0s ease-in-out" }}
              >
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl leading-none font-semibold tracking-tight">Global Accessibility</h3>
                  <div className="text-md text-muted-foreground flex flex-col gap-2 text-sm">
                    <p className="max-w-[460px]">
                      Deploy globally and reach customers worldwide with multi-region support and CDN integration.
                    </p>
                  </div>
                </div>
                <div className="flex min-h-[300px] grow items-center justify-center select-none overflow-hidden relative">
                  {/* Mobile: Sleek animations instead of 3D globe */}
                  <div className="md:hidden relative w-full h-full flex items-center justify-center">
                    {/* Central "Deploy Globally" text */}
                    <div className="relative z-20">
                      <h1 className="text-center text-3xl sm:text-4xl leading-[100%] font-semibold">
                        <span className='bg-background relative inline-block w-fit rounded-md border px-3 py-1.5 before:absolute before:top-0 before:left-0 before:z-10 before:h-full before:w-full before:bg-[url("/noise.gif")] before:opacity-[0.09] before:content-[""]'>
                          <span className="bg-gradient-to-br from-[#e78a53] to-[#f97316] bg-clip-text text-transparent">
                            Deploy
                            <br />
                            Globally
                          </span>
                        </span>
                      </h1>
                    </div>
                    
                    {/* Orbiting location markers */}
                    {[
                      { icon: '🌏', label: 'Asia', angle: 0, color: 'from-blue-500 to-cyan-500' },
                      { icon: '🌍', label: 'Europe', angle: 72, color: 'from-green-500 to-emerald-500' },
                      { icon: '🌎', label: 'Americas', angle: 144, color: 'from-orange-500 to-red-500' },
                      { icon: '🌍', label: 'Africa', angle: 216, color: 'from-yellow-500 to-orange-500' },
                      { icon: '🌏', label: 'Oceania', angle: 288, color: 'from-purple-500 to-pink-500' },
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
                              : {
                                  x: -28,
                                  y: -28,
                                  opacity: 0,
                                  scale: 0.5,
                                }
                          }
                          transition={{
                            duration: 0.6,
                            delay: index * 0.1,
                            ease: "easeOut",
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
                              stroke="rgba(231, 138, 83, 0.4)"
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
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-[#e78a53]/30 rounded-full"
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
                      className="absolute -top-10 -left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-20"
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
                      className="absolute -bottom-10 -right-10 w-32 h-32 bg-orange-500 rounded-full blur-3xl opacity-20"
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
                  <div className="hidden md:flex md:flex-col md:items-start md:justify-start w-full h-full">
                    <h1 className="mt-4 sm:mt-8 text-center text-3xl sm:text-5xl leading-[100%] font-semibold sm:leading-normal lg:mt-12 lg:text-6xl z-20 w-full">
                      <span className='bg-background relative mt-3 inline-block w-fit rounded-md border px-1.5 py-0.5 before:absolute before:top-0 before:left-0 before:z-10 before:h-full before:w-full before:bg-[url("/noise.gif")] before:opacity-[0.09] before:content-[""]'>
                        <ScrambleHover
                          text="Global"
                          scrambleSpeed={70}
                          maxIterations={20}
                          useOriginalCharsOnly={false}
                          className="cursor-pointer bg-gradient-to-t from-[#e78a53] to-[#e78a53] bg-clip-text text-transparent"
                          isHovering={isHovering}
                          setIsHovering={setIsHovering}
                          characters="abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]{}|;':\,./<>?"
                        />
                      </span>
                    </h1>
                    <div className="absolute top-48 sm:top-64 z-10 flex items-center justify-center w-full">
                      <div className="w-[280px] h-[280px] sm:w-[400px] sm:h-[400px]">
                        <Suspense
                          fallback={
                            <div className="bg-secondary/20 h-full w-full animate-pulse rounded-full"></div>
                          }
                        >
                          <Earth baseColor={baseColor} markerColor={[0, 0, 0]} glowColor={glowColor} dark={dark} />
                        </Suspense>
                      </div>
                    </div>
                    <div className="absolute top-1/2 w-full translate-y-20 scale-x-[1.2] opacity-70 transition-all duration-1000 group-hover:translate-y-8 group-hover:opacity-100">
                      <div className="from-primary/50 to-primary/0 absolute left-1/2 h-[256px] w-[60%] -translate-x-1/2 scale-[2.5] rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-[512px] dark:opacity-100"></div>
                      <div className="from-primary/30 to-primary/0 absolute left-1/2 h-[128px] w-[40%] -translate-x-1/2 scale-200 rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-[256px] dark:opacity-100"></div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Smooth & Sleek Design */}
              <motion.div
                className="group border-secondary/40 text-card-foreground relative col-span-12 flex flex-col overflow-hidden rounded-xl border-2 p-6 shadow-xl transition-all ease-in-out md:col-span-6 xl:col-span-6 xl:col-start-2"
                onMouseEnter={() => setIsSleekDesignHovering(true)}
                onMouseLeave={() => setIsSleekDesignHovering(false)}
                initial={{ opacity: 0, y: isMobile ? 0 : 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: isMobile ? 0 : 50 }}
                transition={{ duration: isMobile ? 0.2 : 0.5, delay: isMobile ? 0 : 1.0 }}
                whileHover={{
                  scale: 1.02,
                  borderColor: "rgba(231, 138, 83, 0.5)",
                  boxShadow: "0 0 30px rgba(231, 138, 83, 0.2)",
                }}
                style={{ transition: "all 0s ease-in-out" }}
              >
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl leading-none font-semibold tracking-tight">Smooth & Sleek Design</h3>
                  <div className="text-md text-muted-foreground flex flex-col gap-2 text-sm">
                    <p className="max-w-[460px]">
                      Beautiful, modern interfaces with fluid animations and transitions that delight users.
                    </p>
                  </div>
                </div>
                <div className="flex grow items-center justify-center select-none relative min-h-[300px] p-4">
                  <div className="relative w-full max-w-md">
                    {/* Animated floating cards */}
                    <div className="relative h-[280px] flex items-center justify-center">
                      {[0, 1, 2].map((index) => (
                        <motion.div
                          key={index}
                          className="absolute w-32 h-40 sm:w-40 sm:h-48 rounded-2xl shadow-2xl"
                          style={{
                            background: `linear-gradient(135deg, ${
                              index === 0 ? '#e78a53' : index === 1 ? '#a855f7' : '#3b82f6'
                            } 0%, ${
                              index === 0 ? '#f97316' : index === 1 ? '#8b5cf6' : '#2563eb'
                            } 100%)`,
                            zIndex: 3 - index,
                          }}
                          initial={{ x: 0, y: 0, rotate: 0 }}
                          animate={
                            isSleekDesignHovering
                              ? {
                                  x: [0, (index - 1) * 80, (index - 1) * 80],
                                  y: [0, -20, -20],
                                  rotate: [0, (index - 1) * 15, (index - 1) * 15],
                                }
                              : { x: 0, y: 0, rotate: 0 }
                          }
                          transition={{
                            duration: 0.6,
                            ease: "easeOut",
                            delay: index * 0.1,
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
                      className="absolute -top-10 -left-10 w-32 h-32 sm:w-40 sm:h-40 bg-purple-500 rounded-full blur-3xl opacity-30"
                      animate={{
                        scale: isSleekDesignHovering ? [1, 1.2, 1] : 1,
                        x: isSleekDesignHovering ? [0, 20, 0] : 0,
                        y: isSleekDesignHovering ? [0, -20, 0] : 0,
                      }}
                      transition={{
                        duration: 3,
                        repeat: isSleekDesignHovering ? Number.POSITIVE_INFINITY : 0,
                        ease: "easeInOut",
                      }}
                    />
                    <motion.div
                      className="absolute -bottom-10 -right-10 w-32 h-32 sm:w-40 sm:h-40 bg-orange-500 rounded-full blur-3xl opacity-30"
                      animate={{
                        scale: isSleekDesignHovering ? [1, 1.3, 1] : 1,
                        x: isSleekDesignHovering ? [0, -20, 0] : 0,
                        y: isSleekDesignHovering ? [0, 20, 0] : 0,
                      }}
                      transition={{
                        duration: 4,
                        repeat: isSleekDesignHovering ? Number.POSITIVE_INFINITY : 0,
                        ease: "easeInOut",
                      }}
                    />
                  </div>
                </div>
              </motion.div>

              {/* Enterprise Level Software */}
              <motion.div
                className="group border-secondary/40 text-card-foreground relative col-span-12 flex flex-col overflow-hidden rounded-xl border-2 p-6 shadow-xl transition-all ease-in-out md:col-span-6 xl:col-span-6 xl:col-start-8"
                onMouseEnter={() => setIsEnterpriseHovering(true)}
                onMouseLeave={() => setIsEnterpriseHovering(false)}
                initial={{ opacity: 0, y: isMobile ? 0 : 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: isMobile ? 0 : 50 }}
                transition={{ duration: isMobile ? 0.2 : 0.5, delay: isMobile ? 0 : 1.0 }}
                whileHover={{
                  scale: 1.02,
                  borderColor: "rgba(231, 138, 83, 0.6)",
                  boxShadow: "0 0 30px rgba(231, 138, 83, 0.2)",
                }}
                style={{ transition: "all 0s ease-in-out" }}
              >
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl leading-none font-semibold tracking-tight">Enterprise Level Software</h3>
                  <div className="text-md text-muted-foreground flex flex-col gap-2 text-sm">
                    <p className="max-w-[460px]">
                      Built for scale with advanced security, compliance, and enterprise-grade performance.
                    </p>
                  </div>
                </div>
                <div className="flex grow items-center justify-center select-none relative min-h-[300px] p-4">
                  <div className="relative w-full max-w-lg h-[280px]">
                    {/* Central Hub */}
                    <motion.div
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-[#e78a53] to-[#f97316] shadow-2xl flex items-center justify-center border-4 border-white/20"
                      animate={
                        isEnterpriseHovering
                          ? {
                              scale: [1, 1.1, 1],
                              rotate: [0, 180, 360],
                            }
                          : {}
                      }
                      transition={{
                        duration: 3,
                        repeat: isEnterpriseHovering ? Number.POSITIVE_INFINITY : 0,
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
                              : {
                                  x: -24,
                                  y: -24,
                                  opacity: 0,
                                }
                          }
                          transition={{
                            duration: 0.6,
                            delay: index * 0.1,
                            ease: "easeOut",
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
                              stroke="rgba(231, 138, 83, 0.3)"
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
            </div>
          </div>
        </FollowerPointerCard>
      </motion.div>
    </section>
  )
}
