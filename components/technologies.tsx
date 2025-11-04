"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const technologies = [
  {
    name: "Google Home",
    description: "Integração completa com assistente Google",
    image: "/google-home-logo.jpg",
  },
  {
    name: "Amazon Alexa",
    description: "Controle por voz com Alexa",
    image: "/amazon-alexa-logo.png",
  },
  {
    name: "Apple HomeKit",
    description: "Compatível com ecossistema Apple",
    image: "/apple-homekit-logo.png",
  },
  {
    name: "Zigbee",
    description: "Protocolo de comunicação sem fio",
    image: "/zigbee-logo.jpg",
  },
  {
    name: "Z-Wave",
    description: "Tecnologia de automação residencial",
    image: "/zwave-logo.jpg",
  },
  {
    name: "WiFi 6",
    description: "Conectividade de alta velocidade",
    image: "/wifi-6-logo.jpg",
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
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="glass-effect border-0 hover:scale-110 transition-transform duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                  <div className="w-20 h-20 relative">
                    <Image src={tech.image || "/placeholder.svg"} alt={tech.name} fill className="object-contain" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm mb-1">{tech.name}</h3>
                    <p className="text-xs text-muted-foreground">{tech.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
