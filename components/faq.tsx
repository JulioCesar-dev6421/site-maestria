"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Quanto tempo leva para instalar um sistema de automação?",
    answer:
      "O tempo varia conforme o tamanho e complexidade do projeto. Uma residência de médio porte leva de 2 a 4 semanas. Projetos maiores podem levar de 1 a 3 meses. Fazemos um cronograma detalhado na fase de planejamento.",
  },
  {
    question: "É possível automatizar uma casa já construída?",
    answer:
      "Sim! Oferecemos soluções wireless que não exigem obras. Para projetos mais complexos, fazemos instalações com mínima intervenção nas paredes. Cada caso é avaliado individualmente para a melhor solução.",
  },
  {
    question: "Qual o investimento necessário para automação residencial?",
    answer:
      "O investimento varia muito conforme o escopo do projeto. Temos soluções a partir de R$ 15.000 para automação básica, até projetos completos acima de R$ 200.000. Fazemos orçamentos personalizados sem compromisso.",
  },
  {
    question: "Os sistemas são compatíveis com Alexa e Google Home?",
    answer:
      "Sim! Todos os nossos sistemas são compatíveis com os principais assistentes de voz do mercado: Alexa, Google Assistant e Siri. Você pode controlar tudo por comando de voz.",
  },
  {
    question: "Vocês oferecem garantia e suporte técnico?",
    answer:
      "Sim! Oferecemos garantia de 2 anos para equipamentos e instalação, além de suporte técnico 24/7. Também disponibilizamos contratos de manutenção preventiva para garantir o funcionamento perfeito dos sistemas.",
  },
  {
    question: "É possível expandir o sistema no futuro?",
    answer:
      "Absolutamente! Todos os nossos projetos são desenvolvidos pensando em escalabilidade. Você pode começar com automação básica e ir expandindo conforme sua necessidade e orçamento.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="relative py-20 md:py-28 bg-background/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-orbitron)] mb-4 text-balance">
            Perguntas <span className="text-primary">Frequentes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Tire suas dúvidas sobre automação residencial e predial
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="glass-effect overflow-hidden border-primary/20">
              <button
                className="w-full p-6 text-left flex items-start justify-between gap-4 hover:bg-primary/5 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-lg text-balance flex-1">{faq.question}</span>
                <ChevronDown
                  className={`w-6 h-6 text-primary transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-muted-foreground leading-relaxed text-pretty animate-in fade-in slide-in-from-top-2 duration-300">
                  {faq.answer}
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
