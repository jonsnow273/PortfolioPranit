'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const stats = [
  { value: 4, label: 'PROJECTS SHIPPED', suffix: '+' },
  { value: 2, label: 'YEARS LEARNING AI/ML', suffix: '' },
  { value: 10, label: 'TECHNOLOGIES USED', suffix: '+' },
  { value: 1, label: 'INTERNSHIP COMPLETED', suffix: '' },
]

function AnimatedCounter({ value, suffix = '', duration = 1500 }: { value: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const end = value
      const increment = end / (duration / 16.67) // 60fps
      
      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16.67)

      return () => clearInterval(timer)
    }
  }, [isInView, value, duration])

  return (
    <span ref={ref} className="font-heading font-black text-4xl lg:text-5xl text-text-primary">
      {count}{suffix}
    </span>
  )
}

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <section id="about" className="py-20 px-6 lg:px-16 bg-dark-bg">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto"
      >
        {/* Section eyebrow */}
        <motion.p 
          variants={itemVariants}
          className="font-mono text-xs uppercase tracking-wider text-text-secondary mb-12"
        >
          [ WHO I AM & WHAT I DO ]
        </motion.p>

        {/* Stats row */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mb-12 sm:mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center lg:text-left">
              <div className="mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="font-mono text-xs uppercase tracking-wider text-text-secondary">
                {stat.label}
              </p>
              {index < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-0 h-16 w-px bg-dark-border" />
              )}
            </div>
          ))}
        </motion.div>

        {/* Main content - two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left column - Main text */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="space-y-4">
              <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-text-primary leading-tight">
                Building AI systems that actually work,
              </h2>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-text-secondary leading-tight">
                not just tutorials that run once.
              </h2>
            </div>
            
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                I'm an 18-year-old AI/ML diploma student at Rajarambapu Institute of Technology (RIT), 
                Pune, currently in my 3rd year. While many students stop at completing coursework, 
                I'm drawn to building full-stack applications that combine machine learning with 
                real working software.
              </p>
              <p>
                My projects range from RAG systems and LLM tools to prediction models and code reviewers. 
                I focus on end-to-end implementations — not isolated notebooks, but complete products 
                with proper backends, user interfaces, and deployment pipelines that solve actual problems.
              </p>
            </div>
          </motion.div>

          {/* Right column - Cards */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Education Card */}
            <div className="bg-dark-card border border-dark-border rounded-lg p-6">
              <p className="font-mono text-xs uppercase tracking-wider text-text-secondary mb-4">
                EDUCATION
              </p>
              <h3 className="font-heading font-bold text-xl text-text-primary mb-2">
                Diploma in AI & Machine Learning
              </h3>
              <p className="text-text-secondary mb-3">
                Rajarambapu Institute of Technology, Pune
              </p>
              <p className="text-accent font-medium">
                2024 — 2027
              </p>
            </div>

            {/* Currently Focused Card */}
            <div className="bg-dark-card border border-dark-border rounded-lg p-6">
              <p className="font-mono text-xs uppercase tracking-wider text-text-secondary mb-4">
                CURRENTLY FOCUSED ON
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  'Retrieval-Augmented Generation',
                  'Full-Stack AI Products', 
                  'Deep Learning Fundamentals'
                ].map((tag, index) => (
                  <span 
                    key={index}
                    className="bg-dark-bg border border-dark-border rounded-full px-3 py-1 text-sm text-text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Activities Card */}
            <div className="bg-dark-card border border-dark-border rounded-lg p-6">
              <p className="font-mono text-xs uppercase tracking-wider text-text-secondary mb-4">
                FAVORITE ACTIVITIES
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-text-primary text-sm">
                    <strong>Football</strong> - Huge Messi fan, love playing and watching matches
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-text-primary text-sm">
                    <strong>Writing Code</strong> - Building things that actually work end-to-end
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-text-primary text-sm">
                    <strong>Training MMA</strong> - Discipline, focus, and physical conditioning
                  </span>
                </div>
              </div>
            </div>

            {/* Hobbies Card */}
            <div className="bg-dark-card border border-dark-border rounded-lg p-6">
              <p className="font-mono text-xs uppercase tracking-wider text-text-secondary mb-4">
                HOBBIES
              </p>
              <div className="space-y-2">
                <p className="text-text-secondary text-sm">
                  Love watching films and series. Favorite movies: <span className="text-accent">Shiki-Jitsu</span> and <span className="text-accent">Oslo, August 31st</span> - both explore human psychology in fascinating ways.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}