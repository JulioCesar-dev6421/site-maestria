import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Portfolio } from "@/components/portfolio"
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
      <About />
      <Portfolio />
      <Contact />
    </main>
  )
}
