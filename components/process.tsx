"use client"

import { Card } from "@/components/ui/card"
import { ClipboardList, Lightbulb, Wrench, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: ClipboardList,
    title: "1. Consulta Inicial",
    description:
      "Reunião para entender suas necessidades, estilo de vida e objetivos. Visitamos o local e fazemos um levantamento completo.",
  },
  {
    icon: Lightbulb,
    title: "2. Projeto Personalizado",
    description:
      "Desenvolvemos um projeto técnico detalhado com plantas, especificações de equipamentos e cronograma de execução.",
  },
  {
    icon: Wrench,
    title: "3. Instalação Profissional",
    description:
      "Nossa equipe certificada realiza a instalação com mínima interferência na sua rotina. Testes rigorosos em cada etapa.",
  },
  {
    icon: CheckCircle,
    title: "4. Treinamento e Suporte",
    description:
      "Treinamos você e sua família para usar todos os recursos. Suporte técnico 24/7 e manutenção preventiva disponível.",
  },
]

export function Process() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-orbitron)] mb-4 text-balance">
            Como <span className="text-primary">Trabalhamos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Um processo simples e transparente do início ao fim
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <Card
                key={index}
                className="glass-effect p-8 hover:scale-105 transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-balance">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-pretty">{step.description}</p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
