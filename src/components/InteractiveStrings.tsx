'use client'
import { useEffect, useRef, useState } from 'react'

interface Point {
  x: number
  y: number
  originalX: number
  originalY: number
  vx: number
  vy: number
}

export default function InteractiveStrings() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const pointsRef = useRef<Point[]>([])
  const animationFrameRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight * 0.6

    // Initialize points in grid pattern
    const spacing = 60
    const points: Point[] = []

    for (let y = -spacing; y < canvas.height + spacing * 2; y += spacing) {
      for (let x = -spacing; x < canvas.width + spacing * 2; x += spacing) {
        points.push({
          x,
          y,
          originalX: x,
          originalY: y,
          vx: 0,
          vy: 0,
        })
      }
    }

    pointsRef.current = points

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    // Animation loop
    const animate = () => {
      ctx.fillStyle = 'rgba(245, 241, 237, 1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const points = pointsRef.current
      const mouse = mouseRef.current
      const influence = 150 // Radius of influence

      // Update points
      for (let i = 0; i < points.length; i++) {
        const point = points[i]
        const dx = mouse.x - point.x
        const dy = mouse.y - point.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < influence) {
          const force = (1 - distance / influence) * 0.5
          const angle = Math.atan2(dy, dx)

          // Push point away from cursor
          point.vx -= Math.cos(angle) * force * 2
          point.vy -= Math.sin(angle) * force * 2
        }

        // Apply damping and spring effect
        point.vx *= 0.92
        point.vy *= 0.92

        point.x += point.vx
        point.y += point.vy

        // Spring back to original position
        const springX = (point.originalX - point.x) * 0.08
        const springY = (point.originalY - point.y) * 0.08

        point.vx += springX
        point.vy += springY

        point.x += springX
        point.y += springY
      }

      // Draw lines
      ctx.strokeStyle = 'rgba(139, 115, 85, 0.4)'
      ctx.lineWidth = 1.5

      for (let i = 0; i < points.length; i++) {
        const point = points[i]
        const spacing = 60

        // Draw horizontal lines
        const nextX = point.x + spacing
        const nextY = point.y

        // Find corresponding point
        for (let j = i + 1; j < points.length; j++) {
          const otherPoint = points[j]
          if (
            Math.abs(otherPoint.originalX - point.originalX - spacing) < 5 &&
            Math.abs(otherPoint.originalY - point.originalY) < 5
          ) {
            ctx.beginPath()
            ctx.moveTo(point.x, point.y)
            ctx.lineTo(otherPoint.x, otherPoint.y)
            ctx.stroke()
            break
          }
        }

        // Draw vertical lines
        for (let j = i + 1; j < points.length; j++) {
          const otherPoint = points[j]
          if (
            Math.abs(otherPoint.originalX - point.originalX) < 5 &&
            Math.abs(otherPoint.originalY - point.originalY - spacing) < 5
          ) {
            ctx.beginPath()
            ctx.moveTo(point.x, point.y)
            ctx.lineTo(otherPoint.x, otherPoint.y)
            ctx.stroke()
            break
          }
        }
      }

      // Draw points
      ctx.fillStyle = 'rgba(139, 115, 85, 0.6)'
      for (const point of points) {
        ctx.beginPath()
        ctx.arc(point.x, point.y, 2.5, 0, Math.PI * 2)
        ctx.fill()
      }

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove)
    animate()

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight * 0.6
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full absolute inset-0"
      style={{ display: 'block' }}
    />
  )
}