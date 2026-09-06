'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skillCategories = [
  {
    category: "Languages",
    skills: ["Python", "Java", "C", "C++", "JavaScript", "HTML", "CSS", "SQL"]
  },
  {
    category: "Frontend",
    skills: ["React", "Streamlit", "Tailwind CSS", "HTML", "CSS"]
  },
  {
    category: "Backend",
    skills: ["FastAPI", "Uvicorn", "REST APIs"]
  },
  {
    category: "AI / ML",
    skills: ["scikit-learn", "NumPy", "Pandas", "Matplotlib", "Seaborn", "RAG Engines", "NLI / Hallucination Detection", "Transformers", "LLM APIs (Groq)"]
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Jupyter Notebook"]
  }
]

function MarqueeRow({ skills, direction = 'left' }: { skills: string[]; direction?: 'left' | 'right' }) {
  // Triple the skills for seamless loop
  const tripleSkills = [...skills, ...skills, ...skills]
  
  return (
    <div className="marquee-container overflow-hidden py-3 relative">
      <motion.div
        className="marquee-content flex space-x-6 whitespace-nowrap"
        animate={{
          x: direction === 'left' ? ['0%', '-33.33%'] : ['-33.33%', '0%']
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
        style={{ width: 'max-content' }}
      >
        {tripleSkills.map((skill, index) => (
          <motion.span
            key={`${skill}-${index}`}
            className="inline-block bg-dark-card border border-dark-border rounded-full px-6 py-3 text-sm text-text-primary font-medium whitespace-nowrap hover:bg-accent/10 hover:border-accent/50 hover:text-accent transition-all duration-300 cursor-none"
            whileHover={{ 
              scale: 1.05,
              y: -2,
              boxShadow: "0 4px 20px rgba(107, 140, 184, 0.1)"
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.02 }}
            data-cursor="Skill"
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
      
      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-dark-bg to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-dark-bg to-transparent pointer-events-none z-10" />
    </div>
  )
}

export default function Skills() {
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
    <section id="skills" className="py-20 px-8 lg:px-16 gradient-mesh">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto"
      >
        {/* Section header with enhanced animation */}
        <motion.div variants={itemVariants} className="mb-16">
          <motion.p 
            className="font-mono text-xs uppercase tracking-wider text-text-secondary mb-4 text-shimmer"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            [ TECHNICAL PROFICIENCY ]
          </motion.p>
          <motion.h2 
            className="font-heading font-bold text-4xl lg:text-5xl text-text-primary"
            whileInView={{ 
              opacity: [0, 1],
              y: [20, 0]
            }}
            transition={{ duration: 0.8 }}
          >
            Skills
          </motion.h2>
        </motion.div>

        {/* Skills marquee rows */}
        <div className="space-y-2">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.category}
              variants={itemVariants}
              className="relative"
            >
              <MarqueeRow 
                skills={category.skills} 
                direction={index % 2 === 0 ? 'left' : 'right'} 
              />
            </motion.div>
          ))}
        </div>

        {/* Gradient overlays for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-dark-bg to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-dark-bg to-transparent pointer-events-none"></div>
      </motion.div>
    </section>
  )
}