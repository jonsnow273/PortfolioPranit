'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    const element = document.getElementById(href.substring(1))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50"
    >
      <motion.div 
        className="nav-pill rounded-full px-6 py-3 backdrop-blur-md"
        whileHover={{ 
          scale: 1.02,
          boxShadow: "0 8px 32px rgba(107, 140, 184, 0.15)"
        }}
        transition={{ duration: 0.2 }}
      >
        <ul className="flex space-x-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <motion.button
                onClick={() => handleNavClick(item.href)}
                className={`text-sm font-medium transition-all duration-300 relative px-3 py-2 rounded-full ${
                  activeSection === item.href.substring(1)
                    ? 'text-accent bg-accent/10'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
                whileHover={{ 
                  y: -2,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                data-cursor="Navigate"
              >
                {item.name}
                {activeSection === item.href.substring(1) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-accent rounded-full"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.nav>
  )
}