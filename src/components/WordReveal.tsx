'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface WordRevealProps {
  text: string
  className?: string
}

export default function WordReveal({ text, className = '' }: WordRevealProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2']
  })

  const words = text.split(' ')

  return (
    <motion.p
      ref={ref}
      className={className}
    >
      {words.map((word, index) => {
        const start = index / words.length
        const end = (index + 1) / words.length

        const opacity = useTransform(scrollYProgress, [start, end], [0.3, 1])
        const y = useTransform(scrollYProgress, [start, end], [20, 0])

        return (
          <motion.span
            key={index}
            style={{ opacity, y }}
            className="inline-block mr-1"
          >
            {word}
          </motion.span>
        )
      })}
    </motion.p>
  )
}
