'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import MagneticText from '@/components/MagneticText'
import InteractiveStrings from '@/components/InteractiveStrings'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section id="home" 
      ref={containerRef}
      className="min-h-screen flex items-center justify-between px-4 sm:px-6 lg:px-16 relative overflow-hidden bg-dark-bg"
    >
      {/* Interactive string mesh background */}
      <div className="absolute inset-0 w-full h-3/5">
        <InteractiveStrings />
      </div>

      {/* Main content */}
      <motion.div 
        style={{ y, opacity }}
        className="flex-1 max-w-5xl relative z-10 px-4 md:px-0"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1, 
            delay: 0.2,
            ease: [0.25, 0.1, 0.25, 1]
          }}
        >
          <motion.p 
            className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-text-secondary mb-6 sm:mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            FULL-STACK & AI/ML DEVELOPER
          </motion.p>
          
          {/* Enhanced name animation */}
          <div className="font-heading font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.9] mb-6 sm:mb-8">
            <motion.div 
              className="text-text-primary mb-4 overflow-hidden"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                duration: 1,
                delay: 0.6,
                ease: [0.25, 0.1, 0.25, 1]
              }}
            >
              <MagneticText text="PRANIT" className="magnetic-name" strength={20} />
            </motion.div>
            <motion.div 
              className="text-accent overflow-hidden"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                duration: 1,
                delay: 0.9,
                ease: [0.25, 0.1, 0.25, 1]
              }}
            >
              <MagneticText text="MORE." className="magnetic-name" strength={20} />
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-12 sm:mt-16"
        >
          <motion.div 
            className="w-16 h-px scroll-line"
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{ duration: 1, delay: 1.6 }}
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
    </section>
  )
}