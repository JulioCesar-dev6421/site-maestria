"use client"

import { useEffect, useRef } from "react"
import { useMobile } from "@/hooks/use-mobile"

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const isMobile = useMobile()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
      baseX: number
      baseY: number
    }> = []

    const particleCount = isMobile ? 30 : 100
    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      particles.push({
        x,
        y,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
        baseX: x,
        baseY: y,
      })
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!isMobile) {
        mouseRef.current = { x: e.clientX, y: e.clientY }
      }
    }

    const handleClick = (e: MouseEvent) => {
      if (isMobile) return

      const clickX = e.clientX
      const clickY = e.clientY

      particles.forEach((particle) => {
        const dx = particle.x - clickX
        const dy = particle.y - clickY
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 150) {
          const force = (150 - distance) / 150
          particle.speedX += (dx / distance) * force * 5
          particle.speedY += (dy / distance) * force * 5
        }
      })

      for (let i = 0; i < 10; i++) {
        const angle = (Math.PI * 2 * i) / 10
        particles.push({
          x: clickX,
          y: clickY,
          size: Math.random() * 2 + 1,
          speedX: Math.cos(angle) * 3,
          speedY: Math.sin(angle) * 3,
          opacity: 0.8,
          baseX: clickX,
          baseY: clickY,
        })
      }
    }

    function animate() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const mouse = mouseRef.current

      particles.forEach((particle, index) => {
        if (!isMobile) {
          const dx = mouse.x - particle.x
          const dy = mouse.y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const maxDistance = 200

          if (distance < maxDistance) {
            const force = (maxDistance - distance) / maxDistance
            particle.speedX += (dx / distance) * force * 0.1
            particle.speedY += (dy / distance) * force * 0.1
          }
        }

        const baseDistanceX = particle.baseX - particle.x
        const baseDistanceY = particle.baseY - particle.y
        particle.speedX += baseDistanceX * 0.001
        particle.speedY += baseDistanceY * 0.001

        particle.speedX *= 0.98
        particle.speedY *= 0.98

        particle.x += particle.speedX
        particle.y += particle.speedY

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1

        if (!isMobile) {
          particles.forEach((otherParticle, otherIndex) => {
            if (index === otherIndex) return
            const dx = particle.x - otherParticle.x
            const dy = particle.y - otherParticle.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 100) {
              ctx.beginPath()
              ctx.moveTo(particle.x, particle.y)
              ctx.lineTo(otherParticle.x, otherParticle.y)
              const opacity = (1 - distance / 100) * 0.15
              ctx.strokeStyle = `rgba(100, 150, 255, ${opacity})`
              ctx.lineWidth = 0.5
              ctx.stroke()
            }
          })
        }

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)

        if (!isMobile) {
          const mouse = mouseRef.current
          const dx = mouse.x - particle.x
          const dy = mouse.y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const maxDistance = 200

          if (distance < maxDistance) {
            const glowIntensity = (maxDistance - distance) / maxDistance
            ctx.shadowBlur = 10 * glowIntensity
            ctx.shadowColor = "rgba(100, 150, 255, 0.8)"
          } else {
            ctx.shadowBlur = 0
          }
        } else {
          ctx.shadowBlur = 0
        }

        ctx.fillStyle = `rgba(100, 150, 255, ${particle.opacity})`
        ctx.fill()

        if (particle.opacity < 0.1 && index > particleCount) {
          particles.splice(index, 1)
        } else if (index > particleCount) {
          particle.opacity *= 0.98
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove)
      canvas.addEventListener("click", handleClick)
    }

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("click", handleClick)
    }
  }, [isMobile])

  return <canvas ref={canvasRef} className="fixed inset-0 z-0" />
}
