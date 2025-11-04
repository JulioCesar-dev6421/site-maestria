"use client"

import { useEffect, useState } from "react"

const stats = [
  { value: 500, suffix: "+", label: "Projetos Realizados" },
  { value: 15, suffix: "+", label: "Anos de Experiência" },
  { value: 98, suffix: "%", label: "Clientes Satisfeitos" },
  { value: 50, suffix: "+", label: "Profissionais Certificados" },
]

export function Stats() {
  const [counts, setCounts] = useState(stats.map(() => 0))

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = stats.map((stat) => stat.value / steps)

    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      setCounts(stats.map((stat, index) => Math.min(Math.floor(increment[index] * currentStep), stat.value)))

      if (currentStep >= steps) {
        clearInterval(timer)
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative py-20 md:py-28 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-orbitron)] text-primary mb-2">
                {counts[index]}
                {stat.suffix}
              </div>
              <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
