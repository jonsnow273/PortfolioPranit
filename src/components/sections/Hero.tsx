'use client'
import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import MagneticText from '@/components/MagneticText'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="min-h-screen flex items-center justify-between px-8 lg:px-16 relative dot-pattern overflow-hidden"
    >
      {/* Background decorative elements with parallax */}
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -50]) }}
        className="absolute right-16 top-1/2 transform -translate-y-1/2 opacity-10 hidden lg:block"
      >
        <svg width="400" height="300" viewBox="0 0 400 300" className="text-accent">
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          {/* More elaborate contour lines */}
          <path d="M50 120 Q150 80 250 120 Q350 160 380 120" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6" />
          <path d="M30 140 Q130 180 230 140 Q330 100 370 140" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4" />
          <path d="M70 160 Q170 120 270 160 Q370 200 390 160" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.3" />
          <path d="M40 180 Q140 220 240 180 Q340 140 380 180" stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.2" />
          {/* Animated floating circles */}
          <motion.circle 
            cx="120" 
            cy="80" 
            r="4" 
            fill="currentColor" 
            opacity="0.8" 
            filter="url(#glow)"
            animate={{
              cy: [80, 60, 80],
              opacity: [0.8, 0.4, 0.8]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.circle 
            cx="280" 
            cy="200" 
            r="3" 
            fill="currentColor" 
            opacity="0.6"
            animate={{
              cx: [280, 300, 280],
              cy: [200, 180, 200]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.circle 
            cx="200" 
            cy="250" 
            r="2" 
            fill="currentColor" 
            opacity="0.4"
            animate={{
              cy: [250, 230, 250],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </svg>
      </motion.div>

      {/* Main content with improved animations */}
      <motion.div 
        style={{ y, opacity }}
        className="flex-1 max-w-5xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1.2, 
            delay: 0.2,
            ease: [0.25, 0.1, 0.25, 1]
          }}
        >
          <motion.p 
            className="font-mono text-sm uppercase tracking-[0.2em] text-text-secondary mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            FULL-STACK & AI/ML DEVELOPER
          </motion.p>
          
          {/* Enhanced name animation */}
          <div className="font-heading font-black text-6xl lg:text-8xl xl:text-9xl leading-[0.9] mb-8">
            <motion.div 
              className="text-text-primary mb-4 overflow-hidden"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                duration: 1,
                delay: 0.8,
                ease: [0.25, 0.1, 0.25, 1]
              }}
            >
              <MagneticText text="PRANIT" className="magnetic-name" strength={25} />
            </motion.div>
            <motion.div 
              className="text-accent overflow-hidden"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                duration: 1,
                delay: 1.2,
                ease: [0.25, 0.1, 0.25, 1]
              }}
            >
              <MagneticText text="MORE." className="magnetic-name" strength={25} />
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="flex items-center space-x-6 mt-16"
        >
          <motion.div 
            className="w-16 h-px bg-accent"
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{ duration: 1, delay: 2.2 }}
          />
          <motion.p 
            className="font-mono text-xs uppercase tracking-[0.15em] text-text-secondary"
            animate={{ 
              y: [0, -4, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            SCROLL TO EXPLORE
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Enhanced decorative vertical lines with animation */}
      <div className="absolute right-0 top-0 h-full w-64 opacity-5 hidden xl:block">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-full w-px bg-accent"
            style={{ left: `${i * 24}px` }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ 
              duration: 1.5,
              delay: 2.5 + (i * 0.1),
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent rounded-full opacity-20"
            style={{
              left: `${20 + (i * 15)}%`,
              top: `${30 + (i * 10)}%`
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
      </div>
    </section>
  )
}