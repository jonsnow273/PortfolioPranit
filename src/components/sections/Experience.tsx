'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const experiences = [
  {
    period: "2024 — Present",
    title: "Student, AI & Machine Learning",
    company: "Rajarambapu Institute of Technology, Pune",
    description: "Currently in 3rd year of the diploma program. Building self-directed AI/ML and full-stack projects alongside coursework — RAG systems, ML tools, and web apps."
  },
  {
    period: "3 Months",
    title: "AI Intern",
    company: "Acumen AI",
    description: "Contributed to AI-related engineering work during a 3-month internship."
  }
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="experience" className="py-20 px-8 lg:px-16 bg-dark-bg">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto"
      >
        {/* Section header */}
        <motion.div variants={itemVariants} className="mb-16">
          <p className="font-mono text-xs uppercase tracking-wider text-text-secondary mb-4">
            [ BACKGROUND ]
          </p>
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-text-primary">
            Experience
          </h2>
        </motion.div>

        {/* Experience cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-dark-card border border-dark-border rounded-lg p-8 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
            >
              <div className="mb-6">
                <span className="inline-block bg-dark-bg border border-dark-border rounded-full px-3 py-1 text-xs font-mono text-accent mb-4">
                  {experience.period}
                </span>
                <h3 className="font-heading font-bold text-xl text-text-primary mb-2">
                  {experience.title}
                </h3>
                <p className="text-accent font-medium mb-4">
                  {experience.company}
                </p>
              </div>
              
              <p className="text-text-secondary leading-relaxed">
                {experience.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}