"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ShoppingBag, Users, Shield, ArrowRight, CheckCircle, Globe } from "lucide-react"

export function ProductSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const features = [
    { icon: Users, text: "Direct Manufacturer Connection" },
    { icon: Shield, text: "Trusted B2B Platform" },
    { icon: Globe, text: "Tech-Driven Solutions" },
  ]

  const benefits = [
    "Real-time inventory tracking",
    "Secure payment gateway",
    "Automated order processing",
    "Advanced analytics dashboard",
  ]

  return (
    <section ref={ref} className="py-20 px-6 sm:px-10 bg-white overflow-hidden relative">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-40 left-10 w-72 h-72 bg-gradient-to-br from-[#2b0071]/5 to-[#5E14E4]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-gradient-to-tr from-[#5E14E4]/5 to-[#2b0071]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#2b0071]/10 to-[#5E14E4]/10 rounded-full border border-[#5E14E4]/20"
            >
              <ShoppingBag className="w-4 h-4 text-[#5E14E4]" />
              <span className="text-sm font-semibold ">
                Our Flagship Product
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                ShilpoMarket
              </h2>
              <p className="text-xl sm:text-2xl mt-3 text-gray-600 font-medium">
                Revolutionizing Industrial Trade
              </p>
            </motion.div>

            {/* Main Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4 }}
              className="p-6 bg-gradient-to-br from-[#2b0071]/5 to-[#5E14E4]/5 rounded-2xl border border-[#5E14E4]/20"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                ShilpoMarket simplifies industrial trade by directly connecting manufacturers and buyers 
                through a trusted, tech-driven B2B platform.
              </p>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex flex-col items-center text-center p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
                >
                  <div className="p-3 rounded-lg bg-gradient-to-br from-[#2b0071]/10 to-[#5E14E4]/10 mb-3">
                    <feature.icon className="w-6 h-6 text-[#5E14E4]" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Benefits List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.7 }}
              className="space-y-3"
            >
              <h3 className="text-lg font-semibold text-gray-900">Key Features:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 1 }}
            >
              <button className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#2b0071] to-[#5E14E4] text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300">
                Explore ShilpoMarket
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>

          {/* Right Side - Animated Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative group">
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#2b0071] to-[#5E14E4] p-1">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-[#2b0071]/90 to-[#5E14E4]/90">
                  {/* Mockup Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2b0071] via-[#5E14E4] to-[#2b0071]" />
                  
                  {/* Browser Mockup */}
                  <div className="absolute inset-8 bg-white rounded-2xl shadow-2xl overflow-hidden">
                    {/* Browser Header */}
                    <div className="h-8 bg-gray-100 border-b border-gray-200 flex items-center px-4 gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-400" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                        <div className="w-3 h-3 rounded-full bg-green-400" />
                      </div>
                      <div className="flex-1 mx-4 h-5 bg-gray-200 rounded" />
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 space-y-4">
                      {/* Logo area */}
                      <motion.div
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#2b0071] to-[#5E14E4]" />
                        <div className="h-6 w-32 bg-gradient-to-r from-[#2b0071] to-[#5E14E4] rounded" />
                      </motion.div>
                      
                      {/* Stats cards */}
                      <div className="grid grid-cols-2 gap-3">
                        {[1, 2, 3, 4].map((i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: 1 + i * 0.1 }}
                            className="p-3 bg-gradient-to-br from-[#2b0071]/5 to-[#5E14E4]/5 rounded-lg"
                          >
                            <div className="h-3 w-full bg-[#5E14E4]/30 rounded mb-2" />
                            <div className="h-6 w-3/4 bg-[#5E14E4]/50 rounded" />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 -left-4 bg-white rounded-2xl px-4 py-2 shadow-2xl border border-gray-100"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-sm font-semibold text-gray-800">Live</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -right-4 bg-white rounded-2xl px-6 py-3 shadow-2xl border border-gray-100"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#5E14E4]">1000+</div>
                  <div className="text-xs text-gray-600">Active Buyers</div>
                </div>
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-32 h-32 border-4 border-[#5E14E4]/30 rounded-3xl"
                animate={{ rotate: [0, -360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
