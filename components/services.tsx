"use client"

import { Card } from "@/components/ui/card"
import { Home, Building2, Film, Radio, Shield, Wifi, FileText, Cog, Zap, Headphones } from "lucide-react"

const services = [
  {
    icon: Home,
    title: "Automação Residencial",
    description: "Controle centralizado de iluminação, climatização, cortinas, áudio e segurança.",
  },
  {
    icon: Building2,
    title: "Automação Predial",
    description: "Gestão inteligente de edifícios e condomínios, com eficiência e sustentabilidade.",
  },
  {
    icon: Film,
    title: "Home Theater / Cinema em Casa",
    description: "Experiências imersivas com áudio e vídeo profissional.",
  },
  {
    icon: Radio,
    title: "Áudio e Vídeo Multizona",
    description: "Distribuição independente de música e vídeo por ambientes.",
  },
  {
    icon: Shield,
    title: "Controle de Acesso e Segurança",
    description: "Câmeras, alarmes e fechaduras inteligentes integrados.",
  },
  {
    icon: Wifi,
    title: "Infraestrutura de Rede",
    description: "Conectividade estável e de alta performance.",
  },
  {
    icon: FileText,
    title: "Projetos Técnicos Integrados",
    description: "Planejamento tecnológico alinhado à arquitetura.",
  },
  {
    icon: Cog,
    title: "Automação Industrial Adaptada",
    description: "Robustez e confiabilidade de soluções industriais em casas.",
  },
  {
    icon: Zap,
    title: "Soluções Sem Fio (Wireless)",
    description: "Automação sem quebra de paredes, rápida e acessível.",
  },
  {
    icon: Headphones,
    title: "Consultoria e Gestão de Projetos",
    description: "Acompanhamento completo do conceito à entrega final.",
  },
]

export function Services() {
  return (
    <section id="services" className="relative py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-orbitron)] mb-4 text-balance">
            Soluções <span className="text-primary">Maestria</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Tecnologia de ponta para transformar seu espaço em um ambiente inteligente e conectado
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="glass-effect p-6 hover:scale-105 transition-all duration-300 group cursor-pointer border-primary/20 relative overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="mb-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-balance">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed text-pretty">{service.description}</p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
