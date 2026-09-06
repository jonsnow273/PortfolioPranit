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
    longDescription: "TrustRAG is a comprehensive RAG pipeline that goes beyond simple question-answering. It features intelligent retrieval strategy selection, advanced hallucination detection using NLI models, and end-to-end verification of generated responses. The system automatically adapts its approach based on query complexity and maintains high accuracy through multi-layered validation.",
    techStack: ["Python", "FastAPI", "React", "Tailwind CSS", "RAG", "NLI", "Transformers", "BART", "Sentence Transformers"],
    github: "https://github.com/jonsnow273/TrustRAG",
    icon: Database,
    features: [
      "Adaptive retrieval strategy selection based on query type",
      "NLI-based hallucination detection using facebook/bart-large-mnli",
      "Claim-splitting and evidence verification pipeline",
      "Full-stack React frontend with real-time query processing",
      "FastAPI backend with async request handling",
      "Comprehensive document ingestion and preprocessing",
      "Performance monitoring and accuracy metrics dashboard"
    ],
    challenges: [
      "Implementing reliable hallucination detection without false positives",
      "Optimizing retrieval strategy selection for different query types",
      "Balancing response speed with accuracy verification",
      "Managing memory usage for large document collections",
      "Creating intuitive UI for complex backend processes"
    ]
  },
  {
    title: "AI Code Reviewer",
    tags: "AI Tool · Full-Stack",
    description: "A full-stack code review tool that uses Groq's Llama 3.3 70B to catch bugs and rewrite broken code — with a real VS Code-style editor built into the browser.",
    longDescription: "An intelligent code review platform that leverages Groq's ultra-fast LLM inference to provide instant, detailed code analysis. Features a fully integrated Monaco Editor for a native IDE experience, supporting multiple programming languages with syntax highlighting and intelligent suggestions.",
    techStack: ["React", "Monaco Editor", "FastAPI", "Python", "Groq API", "Llama 3.3 70B", "TypeScript"],
    github: "https://github.com/jonsnow273/CodeReviewer",
    icon: Code,
    features: [
      "Real-time code analysis using Groq's Llama 3.3 70B model",
      "Monaco Editor integration for VS Code-like experience",
      "Multi-language support (Python, JavaScript, Java, C++, C)",
      "Intelligent bug detection and explanation",
      "Automated code correction and optimization suggestions",
      "Syntax highlighting and error detection",
      "Export functionality for reviewed code"
    ],
    challenges: [
      "Integrating Monaco Editor with React and maintaining performance",
      "Optimizing API calls to Groq for fast response times",
      "Handling large codebases without timeout issues",
      "Providing accurate context-aware code suggestions",
      "Managing different language-specific parsing requirements"
    ]
  },
  {
    title: "Football Prediction System",
    tags: "ML · Sports Analytics · Full-Stack",
    description: "A football score prediction system that uses Poisson regression trained on international match data, with a full API backend and animated web frontend.",
    longDescription: "A sophisticated sports analytics platform that predicts football match outcomes using advanced statistical modeling. Built with Poisson regression analysis of historical international football data, providing probabilistic score predictions and detailed match analytics.",
    techStack: ["Python", "Poisson Regression", "FastAPI", "JavaScript", "HTML/CSS", "Pandas", "NumPy", "Scikit-learn"],
    github: "https://github.com/jonsnow273/FootballPredictionSystem",
    icon: BarChart3,
    features: [
      "Poisson regression model for score prediction",
      "Historical international match data analysis",
      "Real-time fixture and team statistics API",
      "Head-to-head comparison functionality",
      "Probability-based outcome predictions",
      "Interactive web interface with smooth animations",
      "Pydantic schemas for robust data validation"
    ],
    challenges: [
      "Collecting and cleaning large datasets of match results",
      "Implementing accurate Poisson distribution modeling",
      "Handling team strength variations over time",
      "Creating responsive UI without heavy frameworks",
      "Optimizing prediction algorithms for real-time use"
    ]
  },
  {
    title: "Grokking Repro",
    tags: "Deep Learning · Research · PyTorch",
    description: "A from-scratch reproduction of 'grokking' — the strange phenomenon where a neural network memorizes its training data almost instantly, then suddenly and unexpectedly generalizes thousands of steps later.",
    longDescription: "A detailed reproduction of the grokking phenomenon discovered in deep learning research. This project implements transformer architecture from scratch to study delayed generalization in neural networks, providing insights into how models transition from memorization to true understanding.",
    techStack: ["Python", "PyTorch", "Transformers", "Deep Learning Research", "Jupyter", "Matplotlib", "NumPy"],
    github: "https://github.com/jonsnow273/GrokkingRepro",
    icon: Brain,
    features: [
      "Transformer architecture built from scratch",
      "Modular arithmetic task implementation (a + b mod p)",
      "Comprehensive ablation study framework",
      "Weight decay mechanism analysis",
      "Training curve visualization and analysis",
      "Reproducible experiment configurations",
      "Detailed documentation of findings"
    ],
    challenges: [
      "Implementing stable transformer training from scratch",
      "Reproducing exact conditions from research papers",
      "Understanding the mathematical underpinnings of grokking",
      "Creating comprehensive ablation studies",
      "Visualizing and interpreting training dynamics"
    ]
  }
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedProject, setSelectedProject] = useState(null)
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
    <section id="projects" className="py-20 px-6 lg:px-16 bg-dark-bg gradient-mesh">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto"
      >
        {/* Section header */}
        <motion.div variants={itemVariants} className="mb-16">
          <p className="font-mono text-xs uppercase tracking-wider text-accent mb-4 neon-text">
            SELECTED WORK
          </p>
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-text-primary mb-4 neon-text">
            Featured Projects
          </h2>
          <p className="text-text-secondary text-lg">
            Click any project to explore the full details and technical challenges.
          </p>
        </motion.div>

        {/* Projects grid - improved responsiveness */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-dark-card border border-dark-border/50 rounded-2xl overflow-hidden hover-lift transition-all duration-500 cursor-pointer neon-border"
              data-cursor-project="true"
              whileHover={{ 
                y: -15,
                borderColor: "rgba(0, 212, 255, 0.8)",
                transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
              }}
              onClick={() => openModal(project)}
            >
              {/* Browser header mockup */}
              <div className="flex items-center justify-between bg-dark-bg border-b border-dark-border/50 px-4 py-3">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-2">
                    <motion.div 
                      className="w-2.5 h-2.5 rounded-full bg-red-500/60"
                      whileHover={{ scale: 1.3, backgroundColor: "rgb(239 68 68)" }}
                    />
                    <motion.div 
                      className="w-2.5 h-2.5 rounded-full bg-yellow-500/60"
                      whileHover={{ scale: 1.3, backgroundColor: "rgb(234 179 8)" }}
                    />
                    <motion.div 
                      className="w-2.5 h-2.5 rounded-full bg-green-500/60"
                      whileHover={{ scale: 1.3, backgroundColor: "rgb(34 197 94)" }}
                    />
                  </div>
                  <span className="text-xs text-text-secondary ml-3 font-mono">
                    {project.title.toLowerCase().replace(/\s+/g, '-')}
                  </span>
                </div>
              </div>

              {/* Project preview area */}
              <div className="h-40 lg:h-48 bg-gradient-to-br from-dark-bg to-dark-card flex items-center justify-center relative overflow-hidden">
                {/* Animated grid background */}
                <div className="absolute inset-0 opacity-10 dot-pattern"></div>
                
                {/* Icon with animation */}
                <motion.div
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 10,
                    transition: { duration: 0.4 }
                  }}
                  className="relative z-10"
                >
                  <div className="relative">
                    <project.icon 
                      size={56} 
                      className="text-accent opacity-70 group-hover:opacity-100 transition-all duration-500 glow-intense"
                    />
                    {/* Glow background */}
                    <div className="absolute inset-0 blur-xl bg-accent/30 group-hover:bg-accent/50 -z-10 transition-all duration-500"></div>
                  </div>
                </motion.div>
                
                {/* Floating particles */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-70"
                      style={{
                        left: `${25 + (i * 18)}%`,
                        top: `${35 + (i * 8)}%`
                      }}
                      animate={{
                        y: [0, -25, 0],
                        opacity: [0, 0.7, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.25
                      }}
                    />
                  ))}
                </div>
                
                {/* Gradient overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5 lg:p-6">
                <div className="mb-4">
                  <motion.h3 
                    className="font-heading font-bold text-lg lg:text-xl text-text-primary mb-2 group-hover:text-accent transition-colors duration-300"
                    whileHover={{ x: 4 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.span 
                    className="inline-block bg-dark-bg border border-accent/30 rounded-full px-3 py-1 text-xs text-accent font-mono group-hover:bg-accent/10 group-hover:border-accent/70 transition-all duration-300 neon-border"
                    whileHover={{ scale: 1.08 }}
                  >
                    {project.tags}
                  </motion.span>
                </div>

                <p className="text-text-secondary text-sm leading-relaxed mb-4 group-hover:text-text-primary/90 transition-colors duration-300 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 5).map((tech, techIndex) => (
                    <motion.span 
                      key={techIndex}
                      className="bg-dark-bg/60 border border-dark-border/70 rounded px-2 py-1 text-xs text-text-secondary hover:text-accent hover:border-accent/50 transition-all duration-300"
                      whileHover={{ scale: 1.08, y: -1 }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + (techIndex * 0.05) }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                  {project.techStack.length > 5 && (
                    <span className="text-xs text-text-muted px-2 py-1">+{project.techStack.length - 5}</span>
                  )}
                </div>

                {/* CTA */}
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-accent hover:text-accent-hover transition-colors duration-300 font-medium relative group/link"
                  whileHover={{ x: 6 }}
                  data-cursor="View Code"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className="text-sm">GitHub</span>
                  <motion.div
                    whileHover={{ x: 2, y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ExternalLink size={14} />
                  </motion.div>
                </motion.a>
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
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-text-primary mb-4">
            Featured Projects
          </h2>
          <p className="text-text-secondary text-lg">
            A few things I've built — full write-ups and code are on GitHub.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-dark-card border border-dark-border rounded-xl overflow-hidden hover-lift transition-all duration-500 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/5 cursor-pointer"
              data-cursor-project="true"
              whileHover={{ 
                y: -12,
                transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
              }}
              onClick={() => openModal(project)}
            >
              {/* Browser header mockup */}
              <div className="flex items-center justify-between bg-dark-bg border-b border-dark-border px-4 py-3">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-2">
                    <motion.div 
                      className="w-3 h-3 rounded-full bg-red-500/60"
                      whileHover={{ scale: 1.2, backgroundColor: "rgb(239 68 68)" }}
                    />
                    <motion.div 
                      className="w-3 h-3 rounded-full bg-yellow-500/60"
                      whileHover={{ scale: 1.2, backgroundColor: "rgb(234 179 8)" }}
                    />
                    <motion.div 
                      className="w-3 h-3 rounded-full bg-green-500/60"
                      whileHover={{ scale: 1.2, backgroundColor: "rgb(34 197 94)" }}
                    />
                  </div>
                  <span className="text-xs text-text-secondary ml-4 font-mono">
                    {project.title.toLowerCase().replace(/\s+/g, '-')}
                  </span>
                </div>
              </div>

              {/* Project preview area with enhanced animation */}
              <div className="h-48 bg-gradient-to-br from-dark-bg to-dark-card flex items-center justify-center relative overflow-hidden">
                {/* Animated background pattern */}
                <motion.div 
                  className="absolute inset-0 opacity-5"
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"]
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(107, 140, 184, 0.3) 1px, transparent 0)`
                  }}
                />
                
                {/* Icon with enhanced hover */}
                <motion.div
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <project.icon 
                    size={64} 
                    className="text-accent opacity-60 group-hover:opacity-100 transition-all duration-500 drop-shadow-lg" 
                  />
                </motion.div>
                
                {/* Floating particles on hover */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-60"
                      style={{
                        left: `${30 + (i * 20)}%`,
                        top: `${40 + (i * 10)}%`
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0, 0.6, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3
                      }}
                    />
                  ))}
                </div>
                
                {/* Gradient overlay that appears on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>

              {/* Content with enhanced animations */}
              <div className="p-6">
                <div className="mb-3">
                  <motion.h3 
                    className="font-heading font-bold text-xl text-text-primary mb-2 group-hover:text-accent transition-colors duration-300"
                    whileHover={{ x: 4 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.span 
                    className="inline-block bg-dark-bg border border-dark-border rounded-full px-3 py-1 text-xs text-accent font-mono group-hover:bg-accent/10 group-hover:border-accent/50 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    {project.tags}
                  </motion.span>
                </div>

                <p className="text-text-secondary leading-relaxed mb-4 text-sm group-hover:text-text-primary/80 transition-colors duration-300">
                  {project.description}
                </p>

                {/* Tech stack with stagger animation */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, techIndex) => (
                    <motion.span 
                      key={techIndex}
                      className="bg-dark-bg border border-dark-border rounded px-2 py-1 text-xs text-text-secondary hover:text-accent hover:border-accent/50 transition-all duration-300"
                      whileHover={{ scale: 1.05, y: -1 }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + (techIndex * 0.05) }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* GitHub link with enhanced styling */}
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-accent hover:text-accent-hover transition-colors duration-300 font-medium relative group/link"
                  whileHover={{ x: 4 }}
                  data-cursor="View Code"
                >
                  <span className="text-sm">GitHub</span>
                  <motion.div
                    whileHover={{ x: 2, y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ExternalLink size={14} />
                  </motion.div>
                  
                  {/* Animated underline */}
                  <motion.div
                    className="absolute -bottom-1 left-0 h-px bg-accent origin-left scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300"
                    style={{ width: '100%' }}
                  />
                </motion.a>
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