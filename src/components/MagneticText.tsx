'use client'
import { useRef, useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

interface MagneticTextProps {
  text: string
  className?: string
  strength?: number
}

export default function MagneticText({ text, className = "", strength = 30 }: MagneticTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const letters = text.split('')

  return (
    <div ref={containerRef} className={`inline-block ${className}`}>
      {letters.map((letter, index) => (
        <MagneticLetter 
          key={index} 
          letter={letter} 
          index={index} 
          strength={strength}
        />
      ))}
    </div>
  )
}

function MagneticLetter({ letter, index, strength }: { letter: string; index: number; strength: number }) {
  const letterRef = useRef<HTMLSpanElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  // Faster spring for responsive feel
  const springConfig = { damping: 12, stiffness: 300, mass: 0.2 }
  const xSpring = useSpring(x, springConfig)
  const ySpring = useSpring(y, springConfig)

  useEffect(() => {
    const letter = letterRef.current
    if (!letter) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = letter.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      const distance = Math.sqrt(
        Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
      )
      
      const magneticRadius = 80 // Reduced from 100
      if (distance < magneticRadius) {
        const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX)
        const force = Math.max(0, (magneticRadius - distance) / magneticRadius)
        
        x.set(Math.cos(angle) * force * strength)
        y.set(Math.sin(angle) * force * strength)
      } else {
        x.set(0)
        y.set(0)
      }
    }

    const handleMouseLeave = () => {
      x.set(0)
      y.set(0)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [x, y, strength])

  return (
    <motion.span
      ref={letterRef}
      className="inline-block transition-all duration-200 hover:text-accent-hover"
      style={{
        x: xSpring,
        y: ySpring,
      }}
      whileHover={{ 
        scale: 1.15,
        textShadow: "0 0 25px rgba(0, 212, 255, 0.8), 0 0 40px rgba(255, 0, 110, 0.4)",
        transition: { duration: 0.15 }
      }}
    >
      {letter === ' ' ? '\u00A0' : letter}
    </motion.span>
  )
}