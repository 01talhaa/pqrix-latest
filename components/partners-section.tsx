"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Award, TrendingUp, Users, Shield } from "lucide-react"

export default function PartnersSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const partners = [
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", color: "#00A4EF" },
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", color: "#4285F4" },
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", color: "#FF9900" },
    { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg", color: "#0081FB" },
    { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg", color: "#A2AAAD" },
    { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg", color: "#E50914" },
    { name: "Tesla", logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg", color: "#CC0000" },
    { name: "Spotify", logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg", color: "#1DB954" },
    { name: "Adobe", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.svg", color: "#FF0000" },
    { name: "Salesforce", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg", color: "#00A1E0" },
    { name: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg", color: "#F80000" },
    { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg", color: "#006699" },
  ]

  // Duplicate partners for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners, ...partners]

  return (
    <section className="bg-card/60 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 mb-6 border border-border/50 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-[#F5A623]/20 to-[#FF8C00]/20 rounded-full blur-3xl"
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
              className="inline-flex items-center gap-2 px-3 sm:px-5 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-[#F5A623]/10 to-[#FF8C00]/10 border border-[#F5A623]/20 backdrop-blur-sm"
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
                <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F5A623]" />
              </motion.div>
              <span className="text-xs sm:text-sm font-semibold bg-gradient-to-br from-[#F5A623] to-[#FF8C00] bg-clip-text text-transparent">
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
              whileHover={{ letterSpacing: '0.05em' }}
              transition={{ duration: 0.3 }}
            >
              Powering{" "}
            </motion.span>
            <motion.span 
              className="bg-gradient-to-br from-[#F5A623] to-[#FF8C00] bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: '200% 200%' }}
            >
              Innovation
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
        <motion.div 
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
                duration: 50,
                ease: "linear",
              },
            }}
          >
            {duplicatedPartners.map((partner, index) => (
              <motion.div
                key={`${partner.name}-${index}`}
                className="shrink-0 group cursor-pointer"
                whileHover={{ scale: 1.1, y: -8 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="relative w-24 h-12 sm:w-32 sm:h-14 md:w-40 md:h-16 flex flex-col items-center justify-center px-3 sm:px-5 py-2 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 group-hover:border-[#F5A623]/60 transition-all duration-500 overflow-hidden group-hover:shadow-2xl group-hover:shadow-[#F5A623]/30">
                  
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  />

                  {/* Logo Container */}
                  <motion.div 
                    className="relative w-full h-6 sm:h-7 md:h-8 mb-1 flex items-center justify-center"
                    initial={{ opacity: 0.7, filter: "grayscale(100%)" }}
                    whileHover={{ opacity: 1, filter: "grayscale(0%)" }}
                    transition={{ duration: 0.4 }}
                  >
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="h-full w-auto object-contain filter brightness-90 dark:brightness-110 dark:invert"
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

                  {/* Animated gradient overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-[#F5A623]/0 via-[#FF8C00]/0 to-[#F5A623]/0 opacity-0 group-hover:opacity-20"
                    animate={{
                      background: [
                        'linear-gradient(135deg, rgba(245,166,35,0) 0%, rgba(255,140,0,0) 50%, rgba(245,166,35,0) 100%)',
                        'linear-gradient(135deg, rgba(245,166,35,0.2) 0%, rgba(255,140,0,0.2) 50%, rgba(245,166,35,0.2) 100%)',
                        'linear-gradient(135deg, rgba(245,166,35,0) 0%, rgba(255,140,0,0) 50%, rgba(245,166,35,0) 100%)',
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />

                  {/* Particle effect */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 w-1 h-1 rounded-full bg-[#F5A623]"
                    initial={{ opacity: 0, scale: 0, x: '-50%', y: '-50%' }}
                    whileHover={{ 
                      opacity: [0, 1, 0],
                      scale: [0, 3, 0],
                    }}
                    transition={{ 
                      duration: 1,
                      repeat: Infinity,
                      repeatDelay: 0.5
                    }}
                  />

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
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#F5A623] via-[#FF8C00] to-[#F5A623] origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />

                  {/* Corner decorations */}
                  <motion.div
                    className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#F5A623]/0 group-hover:border-[#F5A623]/60 rounded-tl-lg"
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#F5A623]/0 group-hover:border-[#F5A623]/60 rounded-br-lg"
                    transition={{ duration: 0.3, delay: 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-4 sm:pt-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {[
            { 
              icon: Users, 
              value: "500+", 
              label: "Enterprise Clients",
              gradient: "from-blue-500/20 to-cyan-500/20"
            },
            { 
              icon: TrendingUp, 
              value: "99.9%", 
              label: "Uptime SLA",
              gradient: "from-green-500/20 to-emerald-500/20"
            },
            { 
              icon: Award, 
              value: "50M+", 
              label: "Active Users",
              gradient: "from-[#F5A623]/20 to-[#FF8C00]/20"
            },
            { 
              icon: Shield, 
              value: "24/7", 
              label: "Expert Support",
              gradient: "from-purple-500/20 to-pink-500/20"
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
                <div className={`relative h-full p-3 sm:p-5 rounded-xl sm:rounded-2xl border border-border/30 bg-gradient-to-br ${stat.gradient} backdrop-blur-sm overflow-hidden transition-all duration-300 group-hover:border-[#F5A623]/50 group-hover:shadow-lg group-hover:shadow-[#F5A623]/10`}>
                  {/* Animated mesh gradient background */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    animate={{
                      background: [
                        'radial-gradient(circle at 20% 50%, rgba(245,166,35,0.1) 0%, transparent 50%)',
                        'radial-gradient(circle at 80% 50%, rgba(255,140,0,0.1) 0%, transparent 50%)',
                        'radial-gradient(circle at 20% 50%, rgba(245,166,35,0.1) 0%, transparent 50%)',
                      ]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />

                  {/* Icon with float animation */}
                  <motion.div 
                    className="absolute top-2 right-2 sm:top-3 sm:right-3 opacity-20 group-hover:opacity-40 transition-opacity"
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    whileHover={{ 
                      rotate: [0, -10, 10, -10, 0],
                      scale: 1.3
                    }}
                  >
                    <Icon className="w-5 h-5 sm:w-7 sm:h-7" />
                  </motion.div>
                  
                  {/* Content */}
                  <div className="relative flex flex-col items-start">
                    <motion.h3 
                      className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 bg-gradient-to-br from-[#F5A623] to-[#FF8C00] bg-clip-text text-transparent"
                      whileInView={{ 
                        scale: [1, 1.15, 1],
                        rotate: [0, 2, -2, 0]
                      }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {stat.value}
                    </motion.h3>
                    <motion.p 
                      className="text-[10px] sm:text-xs text-foreground/70 font-medium"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {stat.label}
                    </motion.p>
                  </div>

                  {/* Animated wave effect */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1"
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileHover={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#F5A623] via-[#FF8C00] to-[#F5A623]"
                      animate={{
                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                      }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      style={{ backgroundSize: '200% 100%' }}
                    />
                  </motion.div>

                  {/* Particle burst effect */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 rounded-full bg-[#F5A623]"
                      style={{
                        top: '50%',
                        left: '50%',
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      whileHover={{
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                        x: [0, Math.cos((i * 120 * Math.PI) / 180) * 20],
                        y: [0, Math.sin((i * 120 * Math.PI) / 180) * 20],
                      }}
                      transition={{
                        duration: 0.8,
                        delay: i * 0.1,
                        repeat: Infinity,
                        repeatDelay: 1
                      }}
                    />
                  ))}

                  {/* Corner brackets */}
                  <motion.div
                    className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#F5A623]/0 group-hover:border-[#F5A623]/70"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#F5A623]/0 group-hover:border-[#F5A623]/70"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  />
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
    </section>
  )
}
