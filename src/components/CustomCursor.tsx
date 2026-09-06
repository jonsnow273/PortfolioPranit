'use client'
import { useEffect, useState, useCallback, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [cursorText, setCursorText] = useState('')
  const [cursorVariant, setCursorVariant] = useState('default')
  const [isVisible, setIsVisible] = useState(true)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  // Ultra-smooth spring config for instant response
  const springConfig = { damping: 8, stiffness: 800, mass: 0.1 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)
  
  const lastUpdateRef = useRef(0)
  const lastEventRef = useRef({ x: 0, y: 0 })

  const moveCursor = useCallback((e: MouseEvent) => {
    // Ultra-high frequency updates (240fps equivalent)
    lastEventRef.current = { x: e.clientX, y: e.clientY }
    
    const now = Date.now()
    if (now - lastUpdateRef.current < 4) return
    lastUpdateRef.current = now

    const target = e.target as HTMLElement
    
    // Hide cursor on input fields
    if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')) {
      setIsVisible(false)
      return
    } else {
      setIsVisible(true)
    }

    cursorX.set(e.clientX - 16)
    cursorY.set(e.clientY - 16)
  }, [cursorX, cursorY])

  useEffect(() => {
    const addCursorListeners = () => {
      // Input fields
      const inputs = document.querySelectorAll('input, textarea')
      inputs.forEach((input) => {
        input.addEventListener('mouseenter', () => setIsVisible(false))
        input.addEventListener('mouseleave', () => setIsVisible(true))
      })

      // Links and buttons
      const interactives = document.querySelectorAll('a, button, [data-cursor]')
      interactives.forEach((element) => {
        element.addEventListener('mouseenter', () => {
          setCursorVariant('link')
          const text = element.getAttribute('data-cursor') || ''
          setCursorText(text)
        })
        element.addEventListener('mouseleave', () => {
          setCursorVariant('default')
          setCursorText('')
        })
      })

      // Project cards
      const projectCards = document.querySelectorAll('[data-cursor-project]')
      projectCards.forEach((card) => {
        card.addEventListener('mouseenter', () => {
          setCursorVariant('project')
          setCursorText('Click to expand')
        })
        card.addEventListener('mouseleave', () => {
          setCursorVariant('default')
          setCursorText('')
        })
      })

      // Text elements
      const textElements = document.querySelectorAll('h1, h2, h3')
      textElements.forEach((element) => {
        element.addEventListener('mouseenter', () => setCursorVariant('text'))
        element.addEventListener('mouseleave', () => setCursorVariant('default'))
      })
    }

    window.addEventListener('mousemove', moveCursor, { passive: true })
    
    const timeoutId = setTimeout(addCursorListeners, 500)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      clearTimeout(timeoutId)
    }
  }, [moveCursor])

  const variants = {
    default: {
      width: 16,
      height: 16,
      backgroundColor: 'rgba(139, 115, 85, 0.8)',
      border: 'none',
      scale: 1,
    },
    link: {
      width: 50,
      height: 50,
      backgroundColor: 'rgba(139, 115, 85, 0.15)',
      border: '1.5px solid rgba(139, 115, 85, 0.7)',
      scale: 1,
    },
    project: {
      width: 60,
      height: 60,
      backgroundColor: 'rgba(212, 165, 116, 0.15)',
      border: '1.5px solid rgba(139, 115, 85, 0.6)',
      scale: 1,
    },
    text: {
      width: 32,
      height: 32,
      backgroundColor: 'rgba(139, 115, 85, 0.2)',
      border: '1px solid rgba(139, 115, 85, 0.5)',
      scale: 1,
    }
  }

  if (!isVisible) return null

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none rounded-full"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          zIndex: 9999,
          boxShadow: '0 0 15px rgba(139, 115, 85, 0.3)',
        }}
        variants={variants}
        animate={cursorVariant}
        transition={{
          type: "spring",
          stiffness: 800,
          damping: 8,
          mass: 0.1
        }}
      />
      {cursorText && (
        <motion.div
          className="fixed pointer-events-none text-xs font-mono text-text-primary bg-dark-card px-3 py-1 rounded-full border border-dark-border"
          style={{
            left: cursorXSpring,
            top: cursorYSpring,
            x: 40,
            y: -10,
            zIndex: 9999,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.15 }}
        >
          {cursorText}
        </motion.div>
      )}
    </>
  )
}