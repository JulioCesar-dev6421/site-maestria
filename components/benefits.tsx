"use client"

import { motion } from "framer-motion"
import { Shield, Zap, Leaf, TrendingDown, Smartphone, HeadphonesIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const benefits = [
  {
    icon: Shield,
    title: "Segurança Máxima",
    description:
      "Monitoramento 24/7 com câmeras inteligentes, sensores de movimento e alertas em tempo real no seu smartphone.",
  },
  {
    icon: Zap,
    title: "Eficiência Energética",
    description:
      "Reduza até 40% no consumo de energia com automação inteligente de iluminação, climatização e equipamentos.",
  },
  {
    icon: Leaf,
    title: "Sustentabilidade",
    description:
      "Contribua para um planeta mais verde com gestão inteligente de recursos e integração com energia solar.",
  },
  {
    icon: TrendingDown,
    title: "Economia Garantida",
    description: "Investimento que se paga: economize em contas de luz, água e manutenção com automação eficiente.",
  },
  {
    icon: Smartphone,
    title: "Controle Total",
    description:
      "Gerencie tudo pelo celular, tablet ou comandos de voz. Sua casa responde aos seus comandos, onde você estiver.",
  },
  {
    icon: HeadphonesIcon,
    title: "Suporte Dedicado",
    description: "Equipe técnica especializada disponível para instalação, configuração e suporte contínuo.",
  },
]

export function Benefits() {
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
            Por Que Escolher a <span className="text-primary">Maestria</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Transforme seu espaço com tecnologia de ponta e benefícios que fazem a diferença no seu dia a dia
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="glass-effect border-0 h-full hover:scale-105 transition-transform duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 font-[family-name:var(--font-orbitron)]">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
