'use client'
import { useEffect, useState, useCallback } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [cursorText, setCursorText] = useState('')
  const [cursorVariant, setCursorVariant] = useState('default')
  const [isVisible, setIsVisible] = useState(true)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 30, stiffness: 400, mass: 0.5 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  const moveCursor = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement
    
    // Hide cursor on input fields and textareas
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
      // Input fields - hide custom cursor
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

    window.addEventListener('mousemove', moveCursor)
    
    // Add listeners with delay
    const timeoutId = setTimeout(addCursorListeners, 500)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      clearTimeout(timeoutId)
    }
  }, [moveCursor])

  const variants = {
    default: {
      width: 20,
      height: 20,
      backgroundColor: 'rgba(107, 140, 184, 0.9)',
      border: 'none',
      scale: 1,
    },
    link: {
      width: 60,
      height: 60,
      backgroundColor: 'rgba(107, 140, 184, 0.2)',
      border: '2px solid rgba(107, 140, 184, 0.8)',
      scale: 1,
    },
    project: {
      width: 80,
      height: 80,
      backgroundColor: 'rgba(107, 140, 184, 0.1)',
      border: '2px solid rgba(107, 140, 184, 0.6)',
      scale: 1,
    },
    text: {
      width: 40,
      height: 40,
      backgroundColor: 'rgba(107, 140, 184, 0.3)',
      border: '1px solid rgba(107, 140, 184, 0.7)',
      scale: 1,
    }
  }

  if (!isVisible) return null

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none rounded-full mix-blend-difference"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          zIndex: 9999,
        }}
        variants={variants}
        animate={cursorVariant}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25
        }}
      />
      {cursorText && (
        <motion.div
          className="fixed pointer-events-none text-xs font-mono text-white bg-accent px-3 py-1 rounded-full"
          style={{
            left: cursorXSpring,
            top: cursorYSpring,
            x: 50,
            y: -10,
            zIndex: 9999,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
        >
          {cursorText}
        </motion.div>
      )}
    </>
  )
}