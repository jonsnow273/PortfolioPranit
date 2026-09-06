'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Github, Linkedin, Download } from 'lucide-react'
import ContactModal from '../ContactModal'

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/jonsnow273',
    icon: Github
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/pranit-more-358b02375',
    icon: Linkedin
  },
  {
    name: 'Download Resume',
    url: '/resume.pdf',
    icon: Download
  }
]

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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
    <section id="contact" className="py-20 px-8 lg:px-16 gradient-mesh">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto text-center"
      >
        {/* Section header with enhanced animation */}
        <motion.div variants={itemVariants} className="mb-16">
          <motion.h2 
            className="font-heading font-bold text-4xl lg:text-6xl text-text-primary mb-8"
            whileInView={{ 
              backgroundPosition: ["0% 50%", "100% 50%"],
              color: ["#e8e8ea", "#6b8cb8", "#e8e8ea"]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            style={{
              background: "linear-gradient(90deg, #e8e8ea 0%, #6b8cb8 50%, #e8e8ea 100%)",
              backgroundSize: "200% auto",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            Ready to build something?
          </motion.h2>
          
          {/* Main CTA button with advanced animations */}
          <motion.button
            onClick={() => setIsModalOpen(true)}
            className="bg-accent hover:bg-accent-hover text-white font-medium text-lg px-12 py-4 rounded-xl transition-all duration-300 relative overflow-hidden group inline-block"
            whileHover={{ 
              scale: 1.08,
              boxShadow: "0 20px 60px rgba(107, 140, 184, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            data-cursor="Contact"
          >
            <span className="relative z-10">Let's Talk</span>
            
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{
                x: [-100, 500]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                width: "100px"
              }}
            />
          </motion.button>
        </motion.div>

        {/* Social links with stagger animation */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target={link.name !== 'Download Resume' ? '_blank' : '_self'}
              rel={link.name !== 'Download Resume' ? 'noopener noreferrer' : undefined}
              className="flex items-center space-x-3 text-text-secondary hover:text-accent transition-colors duration-300 group"
              whileHover={{ scale: 1.1, x: 4 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + (index * 0.1) }}
              data-cursor="Visit"
            >
              <motion.div 
                className="w-10 h-10 bg-dark-card border border-dark-border rounded-lg flex items-center justify-center group-hover:border-accent/50 group-hover:bg-accent/10 transition-all duration-300"
                whileHover={{ 
                  rotate: 12,
                  scale: 1.1
                }}
              >
                <link.icon size={18} />
              </motion.div>
              <span className="font-medium">{link.name}</span>
            </motion.a>
          ))}
        </motion.div>

        {/* Footer with animated line */}
        <motion.div 
          variants={itemVariants} 
          className="mt-16 pt-8 border-t border-dark-border"
        >
          <motion.p 
            className="text-text-secondary text-sm"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            © 2024 Pranit Bharat More. Built with Next.js & Tailwind CSS.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  )
}