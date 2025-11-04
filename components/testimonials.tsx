"use client"

import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Carlos Silva",
    role: "Proprietário de Residência",
    content:
      "A Maestria transformou completamente minha casa. Agora controlo tudo pelo celular e economizo muito na conta de energia. Equipe profissional e atenciosa!",
    rating: 5,
  },
  {
    name: "Marina Oliveira",
    role: "Síndica de Condomínio",
    content:
      "Implementamos a automação predial em nosso condomínio e os resultados foram impressionantes. Redução de 40% nos custos de energia e muito mais segurança.",
    rating: 5,
  },
  {
    name: "Roberto Mendes",
    role: "Arquiteto",
    content:
      "Trabalho com a Maestria em vários projetos. A integração entre tecnologia e arquitetura é perfeita. Recomendo para todos os meus clientes!",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-orbitron)] mb-4 text-balance">
            O Que Dizem Nossos <span className="text-primary">Clientes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Depoimentos reais de quem confia na Maestria
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glass-effect p-8 hover:scale-105 transition-all duration-300">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed text-pretty">{testimonial.content}</p>
              <div>
                <div className="font-bold">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
