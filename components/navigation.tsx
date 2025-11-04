"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-effect py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_7vnbwi7vnbwi7vnb-removebg-preview-iZr5nOAJ7eqCVFNlDwNf3Qt2qJU93Q.png"
            alt="Maestria Automação"
            width={180}
            height={60}
            className="h-12 w-auto"
            priority
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("home")}
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            Início
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            Soluções
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            Sobre
          </button>
          <button
            onClick={() => scrollToSection("portfolio")}
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            Portfólio
          </button>
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Contato
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-effect mt-4 py-4">
          <div className="container mx-auto px-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground/80 hover:text-primary transition-colors text-left"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground/80 hover:text-primary transition-colors text-left"
            >
              Soluções
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground/80 hover:text-primary transition-colors text-left"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-foreground/80 hover:text-primary transition-colors text-left"
            >
              Portfólio
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground w-full"
            >
              Contato
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
