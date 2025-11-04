"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Home,
  Building2,
  Film,
  Radio,
  Shield,
  Wifi,
  FileText,
  Cog,
  Zap,
  Headphones,
  ChevronDown,
  Check,
} from "lucide-react"
import Image from "next/image"

const servicesDetailed = [
  {
    icon: Home,
    title: "Automação Residencial",
    shortDesc: "Controle centralizado de iluminação, climatização, cortinas, áudio e segurança.",
    fullDesc:
      "Transforme sua casa em um lar inteligente com controle total através de um único aplicativo. Gerencie iluminação, temperatura, cortinas, áudio e segurança de qualquer lugar do mundo.",
    benefits: [
      "Economia de energia de até 30%",
      "Controle por voz com Alexa e Google",
      "Cenas personalizadas para cada momento",
      "Integração total entre todos os sistemas",
    ],
    image: "/smart-home-automation-control-panel.jpg",
  },
  {
    icon: Building2,
    title: "Automação Predial",
    shortDesc: "Gestão inteligente de edifícios e condomínios, com eficiência e sustentabilidade.",
    fullDesc:
      "Soluções corporativas para edifícios comerciais e residenciais. Gestão centralizada de iluminação, climatização, segurança e controle de acesso para máxima eficiência operacional.",
    benefits: [
      "Redução de custos operacionais",
      "Gestão centralizada de múltiplos sistemas",
      "Relatórios de consumo em tempo real",
      "Manutenção preditiva inteligente",
    ],
    image: "/modern-building-automation-system.jpg",
  },
  {
    icon: Film,
    title: "Home Theater / Cinema em Casa",
    shortDesc: "Experiências imersivas com áudio e vídeo profissional.",
    fullDesc:
      "Crie uma experiência cinematográfica profissional em sua casa. Projetores 4K, sistemas de som surround, acústica tratada e poltronas reclináveis para o máximo conforto.",
    benefits: [
      "Qualidade de cinema profissional",
      "Acústica otimizada para seu espaço",
      "Controle simplificado com um toque",
      "Integração com streaming e Blu-ray",
    ],
    image: "/images/home-theater.jpg",
  },
  {
    icon: Radio,
    title: "Áudio e Vídeo Multizona",
    shortDesc: "Distribuição independente de música e vídeo por ambientes.",
    fullDesc:
      "Distribua áudio e vídeo independentemente para cada ambiente da casa. Ouça músicas diferentes em cada cômodo ou sincronize tudo para festas e eventos.",
    benefits: [
      "Controle individual por ambiente",
      "Streaming de alta qualidade",
      "Sincronização perfeita entre zonas",
      "Compatível com Spotify, Apple Music e mais",
    ],
    image: "/multiroom-audio-system-speakers.jpg",
  },
  {
    icon: Shield,
    title: "Controle de Acesso e Segurança",
    shortDesc: "Câmeras, alarmes e fechaduras inteligentes integrados.",
    fullDesc:
      "Proteja sua família e patrimônio com sistemas de segurança de última geração. Câmeras com reconhecimento facial, alarmes inteligentes e fechaduras biométricas.",
    benefits: [
      "Monitoramento 24/7 via smartphone",
      "Reconhecimento facial e de placas",
      "Alertas instantâneos de movimento",
      "Integração com polícia e bombeiros",
    ],
    image: "/smart-home-security-camera-system.jpg",
  },
  {
    icon: Wifi,
    title: "Infraestrutura de Rede",
    shortDesc: "Conectividade estável e de alta performance.",
    fullDesc:
      "Rede Wi-Fi profissional com cobertura total e velocidade garantida. Infraestrutura cabeada e sem fio para suportar todos os dispositivos inteligentes da sua casa.",
    benefits: [
      "Cobertura Wi-Fi em 100% da área",
      "Velocidade de até 10 Gbps",
      "Rede segura com VPN integrada",
      "Suporte para 100+ dispositivos simultâneos",
    ],
    image: "/network-infrastructure-wifi-mesh-system.jpg",
  },
  {
    icon: FileText,
    title: "Projetos Técnicos Integrados",
    shortDesc: "Planejamento tecnológico alinhado à arquitetura.",
    fullDesc:
      "Desenvolvemos projetos técnicos completos integrados ao projeto arquitetônico. Planejamento de infraestrutura, cabeamento, pontos de rede e posicionamento de equipamentos.",
    benefits: [
      "Projeto 3D detalhado",
      "Integração com arquitetura e design",
      "Documentação técnica completa",
      "Acompanhamento de obra",
    ],
    image: "/technical-architecture-blueprint-smart-home.jpg",
  },
  {
    icon: Cog,
    title: "Automação Industrial Adaptada",
    shortDesc: "Robustez e confiabilidade de soluções industriais em casas.",
    fullDesc:
      "Aplicamos tecnologia de automação industrial em ambientes residenciais para máxima confiabilidade. Sistemas robustos que funcionam 24/7 sem falhas.",
    benefits: [
      "Confiabilidade industrial",
      "Manutenção mínima necessária",
      "Compatível com protocolos profissionais",
      "Escalável para grandes projetos",
    ],
    image: "/industrial-automation-control-system.jpg",
  },
  {
    icon: Zap,
    title: "Soluções Sem Fio (Wireless)",
    shortDesc: "Automação sem quebra de paredes, rápida e acessível.",
    fullDesc:
      "Automatize sua casa sem obras. Soluções wireless que se instalam em minutos, perfeitas para retrofit ou quem não quer quebrar paredes.",
    benefits: [
      "Instalação rápida sem obras",
      "Ideal para retrofit",
      "Custo-benefício excelente",
      "Expansível a qualquer momento",
    ],
    image: "/wireless-smart-home-devices.jpg",
  },
  {
    icon: Headphones,
    title: "Consultoria e Gestão de Projetos",
    shortDesc: "Acompanhamento completo do conceito à entrega final.",
    fullDesc:
      "Consultoria especializada para seu projeto de automação. Desde o conceito inicial até a entrega final, acompanhamos cada etapa garantindo qualidade e satisfação.",
    benefits: [
      "Consultoria personalizada",
      "Gestão completa do projeto",
      "Treinamento para uso dos sistemas",
      "Suporte pós-instalação",
    ],
    image: "/project-management-consultation-meeting.jpg",
  },
]

export function ServicesDetailed() {
  const [expandedService, setExpandedService] = useState<number | null>(null)

  return (
    <section id="services-detailed" className="relative py-20 md:py-28 bg-background/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-orbitron)] mb-4 text-balance">
            Nossas <span className="text-primary">Soluções</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Conheça em detalhes cada uma das nossas soluções de automação
          </p>
        </div>

        <div className="space-y-6 max-w-5xl mx-auto">
          {servicesDetailed.map((service, index) => {
            const Icon = service.icon
            const isExpanded = expandedService === index

            return (
              <Card
                key={index}
                className="glass-effect overflow-hidden transition-all duration-300 hover:shadow-2xl border-primary/20"
              >
                <div className="p-6 cursor-pointer" onClick={() => setExpandedService(isExpanded ? null : index)}>
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-xl mb-2 text-balance">{service.title}</h3>
                      <p className="text-muted-foreground text-pretty">{service.shortDesc}</p>
                    </div>
                    <ChevronDown
                      className={`w-6 h-6 text-primary transition-transform duration-300 flex-shrink-0 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>

                {isExpanded && (
                  <div className="px-6 pb-6 space-y-6 animate-in fade-in slide-in-from-top-4 duration-300">
                    <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <p className="text-lg leading-relaxed text-pretty">{service.fullDesc}</p>

                    <div>
                      <h4 className="font-bold text-lg mb-4">Benefícios:</h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button
                      onClick={() => {
                        const contactSection = document.getElementById("contact")
                        contactSection?.scrollIntoView({ behavior: "smooth" })
                      }}
                      className="w-full sm:w-auto bg-primary hover:bg-primary/90"
                    >
                      Solicitar Orçamento
                    </Button>
                  </div>
                )}
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
