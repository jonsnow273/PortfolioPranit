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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
    >
      {/* Desktop Navigation */}
      <motion.div 
        className="hidden sm:flex nav-pill rounded-full px-6 py-3 backdrop-blur-md mx-auto w-fit justify-center items-center"
        whileHover={{ 
          scale: 1.02,
          boxShadow: "0 8px 32px rgba(107, 140, 184, 0.15)"
        }}
        transition={{ duration: 0.2 }}
        style={{ maxWidth: 'fit-content' }}
      >
        <ul className="flex items-center space-x-0">
          {navItems.map((item, index) => (
            <li key={item.name} className="flex items-center">
              <motion.button
                onClick={() => handleNavClick(item.href)}
                className={`text-xs lg:text-sm font-medium transition-all duration-300 relative px-3 lg:px-4 py-2 rounded-full ${
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
              {index < navItems.length - 1 && (
                <div className="nav-divider w-px h-4 mx-1" />
              )}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Mobile Navigation - Hamburger Menu */}
      <motion.div 
        className="sm:hidden nav-pill rounded-2xl p-4 backdrop-blur-md w-full"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs font-bold text-text-primary">MENU</span>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-6 h-6 flex flex-col justify-center space-y-1 cursor-pointer"
          >
            <motion.div 
              className="w-5 h-0.5 bg-text-primary rounded"
              animate={{ 
                rotate: isMobileMenuOpen ? 45 : 0,
                y: isMobileMenuOpen ? 8 : 0
              }}
            />
            <motion.div 
              className="w-5 h-0.5 bg-text-primary rounded"
              animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
            />
            <motion.div 
              className="w-5 h-0.5 bg-text-primary rounded"
              animate={{ 
                rotate: isMobileMenuOpen ? -45 : 0,
                y: isMobileMenuOpen ? -8 : 0
              }}
            />
          </button>
        </div>

        {/* Mobile menu dropdown */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMobileMenuOpen ? 1 : 0, 
            height: isMobileMenuOpen ? "auto" : 0
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <ul className="flex flex-col space-y-3 mt-4 pt-4 border-t border-dark-border">
            {navItems.map((item) => (
              <li key={item.name}>
                <motion.button
                  onClick={() => {
                    handleNavClick(item.href)
                    setIsMobileMenuOpen(false)
                  }}
                  className={`w-full text-left text-sm font-medium transition-all duration-300 px-3 py-2 rounded-lg ${
                    activeSection === item.href.substring(1)
                      ? 'text-accent bg-accent/10'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.name}
                </motion.button>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </motion.nav>
  )
}