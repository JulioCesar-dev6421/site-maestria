"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useCallback, useEffect, useState } from "react"
import { useMobile } from "@/hooks/use-mobile"

const projects = [
  {
    title: "Cinema em Casa Premium",
    type: "Home Theater",
    image: "/images/home-theater.jpg",
    technologies: ["Áudio Profissional", "Iluminação Ambiente", "Automação"],
  },
  {
    title: "Residência Moderna",
    type: "Automação Residencial",
    image: "/images/modern-living.jpg",
    technologies: ["Iluminação Inteligente", "Climatização", "Integração Total"],
  },
  {
    title: "Casa Automatizada",
    type: "Automação Residencial",
    image: "/images/automated-home.jpg",
    technologies: ["Segurança", "Controle de Acesso", "Smart Home"],
  },
  {
    title: "Edifício Inteligente",
    type: "Automação Predial",
    image: "/images/building-automation.jpg",
    technologies: ["Gestão Predial", "Eficiência Energética", "Controle Centralizado"],
  },
]

export function Portfolio() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const isMobile = useMobile()

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index)
    },
    [emblaApi],
  )

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }

    emblaApi.on("select", onSelect)
    onSelect()

    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    const autoplay = setInterval(
      () => {
        emblaApi.scrollNext()
      },
      isMobile ? 7000 : 5000,
    )

    return () => clearInterval(autoplay)
  }, [emblaApi, isMobile])

  return (
    <section id="portfolio" className="relative py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-orbitron)] mb-4 text-balance">
            Projetos <span className="text-primary">Realizados</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Conheça alguns dos projetos que transformamos em realidade
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-3xl" ref={emblaRef}>
            <div className="flex">
              {projects.map((project, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0">
                  <Card
                    className={`relative ${isMobile ? "h-[400px]" : "h-[600px]"} overflow-hidden border-0 rounded-3xl`}
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-all duration-700"
                      style={{
                        backgroundImage: `url(${project.image})`,
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
                    <div className="relative h-full flex flex-col justify-end p-8 md:p-12 text-white">
                      <Badge className="mb-4 w-fit bg-primary/90 text-white border-0 backdrop-blur-sm">
                        {project.type}
                      </Badge>
                      <h3
                        className={`${isMobile ? "text-2xl" : "text-4xl md:text-5xl"} font-bold mb-4 font-[family-name:var(--font-orbitron)]`}
                      >
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <Badge
                            key={i}
                            variant="outline"
                            className="border-white/30 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 hover:text-white hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-primary/50"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 hover:text-white hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-primary/50"
            onClick={scrollNext}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all duration-300 hover:scale-125 ${
                  index === selectedIndex
                    ? "w-8 bg-primary shadow-lg shadow-primary/50"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                onClick={() => scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
