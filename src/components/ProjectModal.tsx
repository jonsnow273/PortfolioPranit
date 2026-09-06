'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Github } from 'lucide-react'

interface Project {
  title: string
  tags: string
  description: string
  longDescription: string
  techStack: string[]
  github: string
  features: string[]
  challenges: string[]
  icon: any
}

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: "spring", duration: 0.6 }}
            className="relative bg-dark-card border border-dark-border rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl"
            style={{
              boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.5), 
                         0 0 40px rgba(107, 140, 184, 0.1)`
            }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 text-text-secondary hover:text-text-primary transition-colors z-10 bg-dark-bg/80 rounded-full"
              data-cursor="Close"
            >
              <X size={20} />
            </button>

            {/* Content */}
            <div className="overflow-y-auto max-h-[90vh] custom-scrollbar">
              {/* Header */}
              <div className="p-8 border-b border-dark-border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-dark-bg rounded-xl flex items-center justify-center">
                    <project.icon size={32} className="text-accent" />
                  </div>
                  <div>
                    <h2 className="font-heading font-bold text-3xl text-text-primary mb-2">
                      {project.title}
                    </h2>
                    <span className="inline-block bg-accent/20 border border-accent/30 rounded-full px-4 py-1 text-sm text-accent font-mono">
                      {project.tags}
                    </span>
                  </div>
                </div>
                
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  {project.longDescription}
                </p>

                {/* Action buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent/25"
                    data-cursor="View Code"
                  >
                    <Github size={18} />
                    View Code
                  </a>
                </div>
              </div>

              <div className="p-8 space-y-8">
                {/* Tech Stack */}
                <div>
                  <h3 className="font-heading font-bold text-xl text-text-primary mb-4">
                    Technology Stack
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {project.techStack.map((tech, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="bg-dark-bg border border-dark-border rounded-lg px-4 py-2 text-text-primary hover:border-accent/50 hover:bg-accent/5 transition-all duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h3 className="font-heading font-bold text-xl text-text-primary mb-4">
                    Key Features
                  </h3>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + (index * 0.1) }}
                        className="flex items-start gap-3 text-text-secondary"
                      >
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Challenges */}
                <div>
                  <h3 className="font-heading font-bold text-xl text-text-primary mb-4">
                    Technical Challenges
                  </h3>
                  <ul className="space-y-2">
                    {project.challenges.map((challenge, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + (index * 0.1) }}
                        className="flex items-start gap-3 text-text-secondary"
                      >
                        <div className="w-2 h-2 bg-accent/60 rounded-full mt-2 flex-shrink-0" />
                        {challenge}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}