"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "Cinema em Casa Premium",
    type: "Home Theater",
    image: "/images/home-theater.jpg",
    technologies: ["Áudio Profissional", "Iluminação Ambiente", "Automação"],
  },
  {
    title: "Residência Moderna",
    type: "Automação Residencial",
    image: "/images/modern-living.jpg",
    technologies: ["Iluminação Inteligente", "Climatização", "Integração Total"],
  },
  {
    title: "Casa Automatizada",
    type: "Automação Residencial",
    image: "/images/automated-home.jpg",
    technologies: ["Segurança", "Controle de Acesso", "Smart Home"],
  },
  {
    title: "Edifício Inteligente",
    type: "Automação Predial",
    image: "/images/building-automation.jpg",
    technologies: ["Gestão Predial", "Eficiência Energética", "Controle Centralizado"],
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-orbitron)] mb-4 text-balance">
            Projetos <span className="text-primary">Realizados</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Conheça alguns dos projetos que transformamos em realidade
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="glass-effect overflow-hidden group cursor-pointer hover:scale-105 transition-all duration-300 border-primary/20"
            >
              <div className="relative h-64 overflow-hidden p-4">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 rounded-xl"
                />
                <div className="absolute inset-4 bg-gradient-to-t from-background via-background/50 to-transparent rounded-xl pointer-events-none group-hover:opacity-0 transition-opacity duration-300" />
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <Badge className="mb-2 bg-primary/20 text-primary border-primary/30">{project.type}</Badge>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="outline" className="border-muted-foreground/30">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
