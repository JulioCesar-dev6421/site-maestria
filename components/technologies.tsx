"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Home, Mic, Apple, Radio, Waves, Wifi } from "lucide-react"

const technologies = [
  {
    name: "Google Home",
    description: "Integração completa com assistente Google",
    icon: Home,
  },
  {
    name: "Amazon Alexa",
    description: "Controle por voz com Alexa",
    icon: Mic,
  },
  {
    name: "Apple HomeKit",
    description: "Compatível com ecossistema Apple",
    icon: Apple,
  },
  {
    name: "Zigbee",
    description: "Protocolo de comunicação sem fio",
    icon: Radio,
  },
  {
    name: "Z-Wave",
    description: "Tecnologia de automação residencial",
    icon: Waves,
  },
  {
    name: "WiFi 6",
    description: "Conectividade de alta velocidade",
    icon: Wifi,
  },
]

export function Technologies() {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-orbitron)] mb-4 text-balance">
            Tecnologias <span className="text-primary">Compatíveis</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Trabalhamos com as principais marcas e protocolos do mercado para garantir a melhor experiência
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => {
            const Icon = tech.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="glass-effect border-0 hover:scale-110 transition-transform duration-300">
                  <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                    <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-primary/20 to-[#0099cc]/20 rounded-xl">
                      <Icon className="w-12 h-12 text-primary" strokeWidth={1.5} />
                    </div>
                    {/* </CHANGE> */}
                    <div>
                      <h3 className="font-bold text-sm mb-1">{tech.name}</h3>
                      <p className="text-xs text-muted-foreground">{tech.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
