"use client"

import { Button } from "@/components/ui/button"
import { SmartHome3D } from "@/components/smart-home-3d"

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl font-bold font-[family-name:var(--font-orbitron)] leading-tight text-balance">
              Tecnologia e conforto, <span className="text-primary">sob medida</span> para o seu estilo de vida
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              Transforme sua casa ou edifício em um ambiente inteligente, conectado e eficiente com as soluções de
              automação da Maestria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 animate-glow-pulse"
              >
                Solicitar Orçamento
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  const element = document.getElementById("services")
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                  }
                }}
                className="text-lg px-8 border-primary/50 hover:bg-primary/10"
              >
                Conheça as Soluções
              </Button>
            </div>
          </div>

          <div className="relative">
            <SmartHome3D />
          </div>
        </div>
      </div>
    </section>
  )
}
