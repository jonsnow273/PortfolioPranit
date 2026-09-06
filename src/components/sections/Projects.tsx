'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, Database, Code, Brain, BarChart3 } from 'lucide-react'
import ProjectModal from '../ProjectModal'

const projects = [
  {
    title: "TrustRAG",
    tags: "RAG · LLM · NLP · Python",
    description: "A portfolio-grade Retrieval-Augmented Generation system that doesn't just answer questions — it picks the best retrieval strategy per question and checks its own answers for hallucinations before showing them.",
    longDescription: "TrustRAG is a comprehensive RAG pipeline that goes beyond simple question-answering. It features intelligent retrieval strategy selection, advanced hallucination detection using NLI models, and end-to-end verification of generated responses.",
    techStack: ["Python", "FastAPI", "React", "Tailwind CSS", "RAG", "NLI", "Transformers"],
    github: "https://github.com/jonsnow273/TrustRAG",
    icon: Database,
    features: [
      "Adaptive retrieval strategy selection",
      "NLI-based hallucination detection",
      "Claim-splitting and evidence verification",
      "Full-stack React frontend",
      "FastAPI backend with async handling"
    ],
    challenges: [
      "Implementing reliable hallucination detection",
      "Optimizing retrieval strategies",
      "Balancing speed and accuracy",
      "Managing memory usage"
    ]
  },
  {
    title: "AI Code Reviewer",
    tags: "AI Tool · Full-Stack",
    description: "A full-stack code review tool that uses Groq's Llama 3.3 70B to catch bugs and rewrite broken code — with a real VS Code-style editor built into the browser.",
    longDescription: "An intelligent code review platform that leverages Groq's ultra-fast LLM inference to provide instant, detailed code analysis with Monaco Editor integration.",
    techStack: ["React", "Monaco Editor", "FastAPI", "Python", "Groq API"],
    github: "https://github.com/jonsnow273/CodeReviewer",
    icon: Code,
    features: [
      "Real-time code analysis",
      "Monaco Editor integration",
      "Multi-language support",
      "Bug detection and explanation",
      "Code correction suggestions"
    ],
    challenges: [
      "Integrating Monaco with React",
      "Optimizing API calls",
      "Handling large codebases",
      "Context-aware suggestions"
    ]
  },
  {
    title: "Football Prediction System",
    tags: "ML · Sports Analytics · Full-Stack",
    description: "A football score prediction system that uses Poisson regression trained on international match data, with a full API backend and animated web frontend.",
    longDescription: "A sophisticated sports analytics platform using Poisson regression analysis of international football data for probabilistic score predictions.",
    techStack: ["Python", "Poisson Regression", "FastAPI", "JavaScript", "HTML/CSS"],
    github: "https://github.com/jonsnow273/FootballPredictionSystem",
    icon: BarChart3,
    features: [
      "Poisson regression model",
      "Match data analysis",
      "Real-time statistics API",
      "Head-to-head comparison",
      "Interactive interface"
    ],
    challenges: [
      "Cleaning large datasets",
      "Poisson modeling accuracy",
      "Team strength variations",
      "Responsive UI design"
    ]
  },
  {
    title: "Grokking Repro",
    tags: "Deep Learning · Research · PyTorch",
    description: "A from-scratch reproduction of 'grokking' — the strange phenomenon where a neural network memorizes its training data almost instantly, then suddenly and unexpectedly generalizes thousands of steps later.",
    longDescription: "A detailed reproduction of the grokking phenomenon with transformer architecture from scratch to study delayed generalization in neural networks.",
    techStack: ["Python", "PyTorch", "Transformers", "Deep Learning", "Jupyter"],
    github: "https://github.com/jonsnow273/GrokkingRepro",
    icon: Brain,
    features: [
      "Transformer architecture",
      "Modular arithmetic tasks",
      "Ablation studies",
      "Weight decay analysis",
      "Visualization tools"
    ],
    challenges: [
      "Stable transformer training",
      "Reproducing research conditions",
      "Mathematical understanding",
      "Training dynamics visualization"
    ]
  }
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: "-100px" })
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (project: any) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

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
    <section id="projects" className="py-20 px-6 lg:px-16 bg-dark-bg">
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
            SELECTED WORK
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-text-primary mb-4">
            Featured Projects
          </h2>
          <p className="text-text-secondary text-lg">
            Click any project to explore full details and technical challenges.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-dark-card border border-dark-border/50 rounded-xl overflow-hidden hover-lift transition-all duration-500 cursor-pointer"
              data-cursor-project="true"
              whileHover={{ 
                y: -12,
                borderColor: "rgba(139, 115, 85, 0.8)",
                transition: { duration: 0.3 }
              }}
              onClick={() => openModal(project)}
            >
              {/* Browser header mockup */}
              <div className="flex items-center justify-between bg-dark-bg border-b border-dark-border/50 px-4 py-3">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  </div>
                  <span className="text-xs text-text-secondary ml-3 font-mono">
                    {project.title.toLowerCase().replace(/\s+/g, '-')}
                  </span>
                </div>
              </div>

              {/* Project preview area */}
              <div className="h-40 lg:h-48 bg-gradient-to-br from-dark-bg to-dark-card flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 dot-pattern"></div>
                
                <motion.div
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 10,
                    transition: { duration: 0.4 }
                  }}
                  className="relative z-10"
                >
                  <project.icon 
                    size={56} 
                    className="text-accent opacity-70 group-hover:opacity-100 transition-all duration-500"
                  />
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-5 lg:p-6">
                <div className="mb-4">
                  <h3 className="font-heading font-bold text-lg lg:text-xl text-text-primary mb-2">
                    {project.title}
                  </h3>
                  <span className="inline-block bg-dark-bg border border-accent/30 rounded-full px-3 py-1 text-xs text-accent font-mono">
                    {project.tags}
                  </span>
                </div>

                <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 4).map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-dark-bg/60 border border-dark-border/70 rounded px-2 py-1 text-xs text-text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="text-xs text-text-muted px-2 py-1">+{project.techStack.length - 4}</span>
                  )}
                </div>

                {/* CTA */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-accent hover:text-accent-hover transition-colors duration-300 font-medium"
                  data-cursor="View Code"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className="text-sm">GitHub</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  )
}