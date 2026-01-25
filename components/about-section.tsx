"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Sparkles, Target, Zap, TrendingUp } from "lucide-react"


export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const stats = [
    { value: "500+", label: "Projects Delivered" },
    { value: "50+", label: "Countries Served" },
    { value: "98%", label: "Client Satisfaction" },
  ]

  return (
    <section ref={ref} className="py-20 px-6 sm:px-10 bg-gradient-to-b from-[#FBFFFF] to-white overflow-hidden relative">
      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-[#2b0071]/5 to-[#5E14E4]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-gradient-to-tr from-[#5E14E4]/5 to-[#2b0071]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Animated Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative group">
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#2b0071] to-[#5E14E4] p-1">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-[#2b0071]/90 to-[#5E14E4]/90">
                  <img
                    src="/hero-photographer.png"
                    alt="PQRIX Team"
                    className="w-full h-full object-cover mix-blend-overlay opacity-80"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2b0071] via-transparent to-transparent" />
                  
                  {/* Floating elements */}
                  <motion.div
                    className="absolute top-8 right-8 bg-white rounded-2xl p-4 shadow-2xl"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Sparkles className="w-8 h-8 text-[#5E14E4]" />
                  </motion.div>
                  
                  <motion.div
                    className="absolute bottom-8 left-8 bg-white rounded-2xl px-4 py-3 shadow-2xl"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-sm font-semibold text-gray-800">Innovation Active</span>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Decorative elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-32 h-32 border-4 border-[#5E14E4]/30 rounded-3xl"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-[#2b0071] to-[#5E14E4] rounded-full opacity-20 blur-xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
            className="order-1 lg:order-2 space-y-6"
          >
            {/* Badge */}
            <div className="flex justify-center lg:justify-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#2b0071]/10 to-[#5E14E4]/10 rounded-full border border-[#5E14E4]/20"
              >
                <Target className="w-4 h-4 text-[#5E14E4]" />
                <span className="text-sm font-semibold bg-gradient-to-r from-[#2b0071] to-[#5E14E4] bg-clip-text text-transparent">
                  About PQRIX
                </span>
              </motion.div>
            </div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
              className="text-center lg:text-left"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Transforming Ideas Into
                <span className="block bg-gradient-to-r from-[#2b0071] to-[#5E14E4] bg-clip-text text-transparent">
                  Digital Reality
                </span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              PQRIX is a leading technology company specializing in AI-powered solutions, 
              intelligent automation, and cutting-edge digital experiences. We empower businesses 
              to transform their operations through innovative technology and strategic digital solutions.
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              {[
  { icon: Zap, title: "AI-Driven Solutions", desc: "Leverage cutting-edge artificial intelligence" },
  { icon: TrendingUp, title: "Scalable Systems", desc: "Built to grow seamlessly with your business" },
  { icon: Sparkles, title: "Innovation-Led Development", desc: "Always staying ahead of technology trends" },
  { icon: Target, title: "Product-Focused Execution", desc: "Focused on impactful, future-ready solutions" },
  { icon: Zap, title: "Fast & Efficient Delivery", desc: "Rapid execution using modern technologies" },
  { icon: TrendingUp, title: "Growth-Driven Engineering", desc: "Engineering solutions designed for long-term growth" },
  { icon: Sparkles, title: "Creative Problem Solving", desc: "Creative thinking at the core of everything we build" },
].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="mt-1 p-2 rounded-lg bg-gradient-to-br from-[#2b0071]/10 to-[#5E14E4]/10 group-hover:from-[#2b0071]/20 group-hover:to-[#5E14E4]/20 transition-all duration-300">
                    <feature.icon className="w-5 h-5 text-[#5E14E4]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 1 }}
              className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#2b0071] to-[#5E14E4] bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
