"use client"

import { Sparkles, Layers, Headphones } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "Inovação",
    description: "Tecnologia de ponta aplicada ao seu dia a dia",
  },
  {
    icon: Layers,
    title: "Integração",
    description: "Todos os sistemas trabalhando em harmonia",
  },
  {
    icon: Headphones,
    title: "Suporte",
    description: "Acompanhamento completo em todas as etapas",
  },
]

export function About() {
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-orbitron)] text-balance">
              Sobre a <span className="text-primary">Maestria</span>
            </h2>
            <p className="text-2xl text-foreground/90 leading-relaxed text-balance">
              Unimos tecnologia, design e conforto para transformar espaços em experiências.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto text-pretty">
              A Maestria é especializada em automação residencial e predial, oferecendo soluções completas que integram
              iluminação, segurança, áudio, vídeo, climatização e muito mais. Nossa missão é proporcionar conforto,
              eficiência e inovação através da tecnologia.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="glass-effect rounded-2xl p-8 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-pretty">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
