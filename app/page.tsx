import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { ServicesDetailed } from "@/components/services-detailed"
import { Stats } from "@/components/stats"
import { Benefits } from "@/components/benefits"
import { Technologies } from "@/components/technologies"
import { Process } from "@/components/process"
import { About } from "@/components/about"
import { Portfolio } from "@/components/portfolio"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { ParticleBackground } from "@/components/particle-background"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <ParticleBackground />
      <Navigation />
      <Hero />
      <Services />
      <Stats />
      <Benefits />
      <ServicesDetailed />
      <Technologies />
      <Process />
      <About />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  )
}
