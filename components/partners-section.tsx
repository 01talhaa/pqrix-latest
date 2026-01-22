"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Award, TrendingUp, Users, Shield } from "lucide-react"

export default function PartnersSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })



  // Duplicate partners for seamless infinite scroll
  

  return (
    <section className="bg-card/60 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 mb-6 border border-border/50 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-[#2b0071]/20 to-[#2b0071]/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div 
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        ></motion.div>
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 space-y-6 sm:space-y-8"
      >
        {/* Section Header */}
        <div className="flex flex-col items-center gap-3 sm:gap-4 text-center mx-auto">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-3 sm:px-5 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-[#2b0071]/10 to-[#2b0071]/10 border border-[#2b0071]/20 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              animate={{
                boxShadow: [
                  '0 0 0 0 rgba(245,166,35,0)',
                  '0 0 0 8px rgba(245,166,35,0.1)',
                  '0 0 0 0 rgba(245,166,35,0)',
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2b0071]" />
              </motion.div>
              <span className="text-xs sm:text-sm font-semibold bg-gradient-to-br from-[#2b0071] to-[#5E14E4] bg-clip-text text-transparent">
                Trusted Worldwide
              </span>
            </motion.div>
          </motion.div>
          
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.1 }}
          >
            <motion.span 
              className="text-foreground"
              // whileHover={{ letterSpacing: '0.05em' }}
              // transition={{ duration: 0.3 }}
            >
              {" "}
            </motion.span>
            <motion.span 
              className="bg-gradient-to-br from-[#2b0071] to-[#5E14E4] bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: '200% 200%' }}
            >
             Powering Innovation
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-foreground/70 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
          >
            Join industry leaders who trust our enterprise solutions to transform their business operations
          </motion.p>
        </div>

        {/* Infinite Scroll Container */}


        {/* Stats Section */}

      </motion.div>
    </section>
  )
}
